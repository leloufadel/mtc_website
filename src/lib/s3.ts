import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';

// Configure S3 client for Digital Ocean Spaces
const s3Client = new S3Client({
  endpoint: process.env.DO_SPACES_ENDPOINT,
  region: process.env.DO_SPACES_REGION || 'sfo3',
  credentials: {
    accessKeyId: process.env.DO_SPACES_KEY || process.env.DO_SPACES_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.DO_SPACES_SECRET || process.env.DO_SPACES_SECRET_ACCESS_KEY || '',
  },
  forcePathStyle: true, // Use path-style URLs to avoid subdomain SSL issues
});

const BUCKET_NAME = process.env.DO_SPACES_BUCKET || '';
const CDN_URL = process.env.DO_SPACES_CDN_BASE || process.env.DO_SPACES_CDN_URL || '';

/**
 * Upload a file to Digital Ocean Spaces
 * @param file - The file buffer to upload
 * @param fileName - The name/path for the file in the bucket
 * @param contentType - MIME type of the file
 * @returns The CDN URL of the uploaded file
 */
export async function uploadFileToSpaces(
  file: Buffer,
  fileName: string,
  contentType: string
): Promise<string> {
  try {
    // Log configuration for debugging (without sensitive data)
    console.log('Upload configuration:', {
      bucket: BUCKET_NAME,
      region: process.env.DO_SPACES_REGION,
      endpoint: process.env.DO_SPACES_ENDPOINT,
      hasAccessKey: !!process.env.DO_SPACES_KEY,
      hasSecretKey: !!process.env.DO_SPACES_SECRET,
      fileName,
      contentType,
      fileSize: file.length
    });

    if (!BUCKET_NAME) {
      throw new Error('DO_SPACES_BUCKET is not configured');
    }

    if (!process.env.DO_SPACES_KEY) {
      throw new Error('DO_SPACES_KEY is not configured');
    }

    if (!process.env.DO_SPACES_SECRET) {
      throw new Error('DO_SPACES_SECRET is not configured');
    }

    const upload = new Upload({
      client: s3Client,
      params: {
        Bucket: BUCKET_NAME,
        Key: fileName,
        Body: file,
        ContentType: contentType,
        ACL: 'public-read', // Make file publicly accessible
      },
    });

    await upload.done();

    // Return the URL - use path-style for buckets with dots in name
    // Note: CDN doesn't work well with path-style, so we use direct endpoint
    const region = process.env.DO_SPACES_REGION || 'sfo3';
    const finalUrl = `https://${region}.digitaloceanspaces.com/${BUCKET_NAME}/${fileName}`;
    console.log('Upload successful, URL:', finalUrl);
    return finalUrl;
  } catch (error) {
    console.error('Error uploading to Spaces:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to upload to Digital Ocean Spaces: ${error.message}`);
    }
    throw new Error('Failed to upload file to Digital Ocean Spaces');
  }
}

/**
 * Delete a file from Digital Ocean Spaces
 * @param fileUrl - The CDN URL of the file to delete
 * @returns true if successful
 */
export async function deleteFileFromSpaces(fileUrl: string): Promise<boolean> {
  try {
    // Extract the file key from the URL
    const fileName = fileUrl.replace(`${CDN_URL}/`, '');

    const command = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileName,
    });

    await s3Client.send(command);
    return true;
  } catch (error) {
    console.error('Error deleting from Spaces:', error);
    throw new Error('Failed to delete file from Digital Ocean Spaces');
  }
}

/**
 * Generate a unique file name to prevent conflicts
 * @param originalName - The original file name
 * @returns A unique file name with timestamp
 */
export function generateUniqueFileName(originalName: string): string {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 15);
  const extension = originalName.split('.').pop();
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
  
  // Sanitize the name
  const sanitized = nameWithoutExt
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 50);

  return `blog-media/${timestamp}-${randomString}-${sanitized}.${extension}`;
}

/**
 * Validate file type for uploads
 * @param contentType - MIME type to validate
 * @returns true if valid
 */
export function isValidMediaType(contentType: string): boolean {
  const validTypes = [
    // Images
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
    // Videos
    'video/mp4',
    'video/webm',
    'video/quicktime',
    'video/x-msvideo',
  ];

  return validTypes.includes(contentType);
}

/**
 * Get media type (image/video) from content type
 * @param contentType - MIME type
 * @returns 'image' or 'video'
 */
export function getMediaType(contentType: string): 'image' | 'video' {
  return contentType.startsWith('image/') ? 'image' : 'video';
}

