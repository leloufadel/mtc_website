import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { 
  uploadFileToSpaces, 
  generateUniqueFileName, 
  isValidMediaType,
  getMediaType 
} from '@/lib/s3';
import { ResultSetHeader } from 'mysql2';

// Maximum file size: 100MB
const MAX_FILE_SIZE = 100 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const blogId = formData.get('blog_id') as string;
    const displayOrder = formData.get('display_order') as string;

    // Validation
    if (!file) {
      return NextResponse.json(
        { success: false, error: 'Aucun fichier fourni' },
        { status: 400 }
      );
    }

    if (!blogId) {
      return NextResponse.json(
        { success: false, error: 'ID du blog requis' },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, error: 'Le fichier est trop volumineux (max 100MB)' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!isValidMediaType(file.type)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Type de fichier non supporté. Utilisez: JPEG, PNG, GIF, WEBP, MP4, WEBM' 
        },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Generate unique filename
    const uniqueFileName = generateUniqueFileName(file.name);

    // Upload to Digital Ocean Spaces
    const fileUrl = await uploadFileToSpaces(buffer, uniqueFileName, file.type);

    // Determine media type
    const mediaType = getMediaType(file.type);

    // Save to database
    const query = `
      INSERT INTO blog_media (blog_id, url, media_type, file_name, file_size, display_order, created_at)
      VALUES (?, ?, ?, ?, ?, ?, NOW())
    `;

    const [result] = await pool.query<ResultSetHeader>(
      query,
      [
        parseInt(blogId),
        fileUrl,
        mediaType,
        file.name,
        file.size,
        displayOrder ? parseInt(displayOrder) : 0
      ]
    );

    return NextResponse.json({
      success: true,
      data: {
        id: result.insertId,
        url: fileUrl,
        media_type: mediaType,
        file_name: file.name,
        file_size: file.size,
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Error uploading media:', error);
    
    // More detailed error message
    let errorMessage = 'Erreur lors du téléchargement du fichier';
    if (error instanceof Error) {
      errorMessage = error.message;
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}

// GET - Retrieve media for a specific blog
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const blogId = searchParams.get('blog_id');

    if (!blogId) {
      return NextResponse.json(
        { success: false, error: 'ID du blog requis' },
        { status: 400 }
      );
    }

    const query = `
      SELECT * FROM blog_media 
      WHERE blog_id = ? 
      ORDER BY display_order ASC, created_at ASC
    `;

    const [rows] = await pool.query(query, [parseInt(blogId)]);

    return NextResponse.json({
      success: true,
      data: rows
    });

  } catch (error) {
    console.error('Error fetching media:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la récupération des médias' },
      { status: 500 }
    );
  }
}

