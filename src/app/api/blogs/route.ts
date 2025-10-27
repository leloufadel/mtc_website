import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { Blog, BlogCreateInput } from '@/types/blog';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

// GET - Récupérer tous les blogs publiés
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const includeUnpublished = searchParams.get('includeUnpublished') === 'true';
    const includeMedia = searchParams.get('includeMedia') !== 'false'; // Include by default
    
    let query = `
      SELECT blogs.*, users.username as author 
      FROM blogs 
      LEFT JOIN users ON blogs.user_id = users.id
    `;
    
    if (!includeUnpublished) {
      query += ' WHERE blogs.published = true';
    }
    
    query += ' ORDER BY blogs.created_at DESC';

    const [rows] = await pool.query<RowDataPacket[]>(query);
    
    // Fetch media for each blog if requested
    if (includeMedia && rows.length > 0) {
      const blogsWithMedia = await Promise.all(
        rows.map(async (blog) => {
          const [media] = await pool.query<RowDataPacket[]>(
            'SELECT * FROM blog_media WHERE blog_id = ? ORDER BY display_order ASC, created_at ASC',
            [blog.id]
          );
          return { ...blog, media };
        })
      );
      
      return NextResponse.json({ 
        success: true, 
        data: blogsWithMedia as Blog[] 
      });
    }
    
    return NextResponse.json({ 
      success: true, 
      data: rows as Blog[] 
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la récupération des articles' },
      { status: 500 }
    );
  }
}

// POST - Créer un nouveau blog
export async function POST(request: NextRequest) {
  try {
    const body: BlogCreateInput = await request.json();
    
    // Validation
    if (!body.title || !body.content || !body.user_id) {
      return NextResponse.json(
        { success: false, error: 'Titre, contenu et user_id sont requis' },
        { status: 400 }
      );
    }

    const query = `
      INSERT INTO blogs (user_id, title, content, published, created_at, updated_at)
      VALUES (?, ?, ?, ?, NOW(), NOW())
    `;
    
    const [result] = await pool.query<ResultSetHeader>(
      query,
      [body.user_id, body.title, body.content, body.published ? 1 : 0]
    );

    return NextResponse.json({
      success: true,
      data: {
        id: result.insertId,
        ...body
      }
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la création de l\'article' },
      { status: 500 }
    );
  }
}

