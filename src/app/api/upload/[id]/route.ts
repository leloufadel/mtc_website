import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { deleteFileFromSpaces } from '@/lib/s3';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

// DELETE - Remove a media file
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Get the media info from database first
    const [rows] = await pool.query<RowDataPacket[]>(
      'SELECT * FROM blog_media WHERE id = ?',
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Média non trouvé' },
        { status: 404 }
      );
    }

    const media = rows[0];

    // Delete from Digital Ocean Spaces
    try {
      await deleteFileFromSpaces(media.url);
    } catch (error) {
      console.error('Error deleting from Spaces:', error);
      // Continue with database deletion even if Spaces deletion fails
    }

    // Delete from database
    const [result] = await pool.query<ResultSetHeader>(
      'DELETE FROM blog_media WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { success: false, error: 'Média non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Média supprimé avec succès'
    });

  } catch (error) {
    console.error('Error deleting media:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la suppression du média' },
      { status: 500 }
    );
  }
}

// PUT - Update media display order
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { display_order } = body;

    if (display_order === undefined) {
      return NextResponse.json(
        { success: false, error: 'display_order requis' },
        { status: 400 }
      );
    }

    const [result] = await pool.query<ResultSetHeader>(
      'UPDATE blog_media SET display_order = ? WHERE id = ?',
      [display_order, id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { success: false, error: 'Média non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Ordre d\'affichage mis à jour'
    });

  } catch (error) {
    console.error('Error updating media:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la mise à jour du média' },
      { status: 500 }
    );
  }
}

