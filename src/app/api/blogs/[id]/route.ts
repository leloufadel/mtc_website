import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { BlogUpdateInput } from '@/types/blog';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

// GET - Récupérer un blog spécifique
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const searchParams = request.nextUrl.searchParams;
    const includeMedia = searchParams.get('includeMedia') !== 'false'; // Include by default
    
    const query = `
      SELECT blogs.*, users.username as author 
      FROM blogs 
      LEFT JOIN users ON blogs.user_id = users.id
      WHERE blogs.id = ?
    `;
    
    const [rows] = await pool.query<RowDataPacket[]>(query, [id]);
    
    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    const blog = rows[0];

    // Fetch media if requested
    if (includeMedia) {
      const [media] = await pool.query<RowDataPacket[]>(
        'SELECT * FROM blog_media WHERE blog_id = ? ORDER BY display_order ASC, created_at ASC',
        [id]
      );
      blog.media = media;
    }

    return NextResponse.json({ 
      success: true, 
      data: blog 
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la récupération de l\'article' },
      { status: 500 }
    );
  }
}

// PUT - Mettre à jour un blog
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body: BlogUpdateInput = await request.json();
    
    const updates: string[] = [];
    const values: any[] = [];

    if (body.title !== undefined) {
      updates.push('title = ?');
      values.push(body.title);
    }
    if (body.content !== undefined) {
      updates.push('content = ?');
      values.push(body.content);
    }
    if (body.published !== undefined) {
      updates.push('published = ?');
      values.push(body.published ? 1 : 0);
    }

    if (updates.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Aucune donnée à mettre à jour' },
        { status: 400 }
      );
    }

    updates.push('updated_at = NOW()');
    values.push(id);

    const query = `UPDATE blogs SET ${updates.join(', ')} WHERE id = ?`;
    
    const [result] = await pool.query<ResultSetHeader>(query, values);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { success: false, error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Article mis à jour avec succès'
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la mise à jour de l\'article' },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer un blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const [result] = await pool.query<ResultSetHeader>(
      'DELETE FROM blogs WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { success: false, error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Article supprimé avec succès'
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la suppression de l\'article' },
      { status: 500 }
    );
  }
}

