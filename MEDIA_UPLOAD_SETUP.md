# Media Upload Setup Guide - Digital Ocean Spaces

This guide explains how to set up and use the media upload functionality for blog posts using Digital Ocean Spaces (S3-compatible storage).

## 📋 Features Implemented

- ✅ Upload images and videos directly to Digital Ocean Spaces
- ✅ Store media URLs in MySQL database (`blog_media` table)
- ✅ Admin dashboard with drag-and-drop media management
- ✅ Support for multiple file types (JPEG, PNG, GIF, WEBP, MP4, WEBM)
- ✅ File validation (type and size - max 100MB)
- ✅ Media preview in admin dashboard
- ✅ Delete media functionality
- ✅ Automatic media association with blog posts

## 🗄️ Database Setup

### 1. Create the blog_media table

Run the updated schema file to create the `blog_media` table:

```bash
mysql -u your_username -p your_database < database/schema.sql
```

Or execute this SQL directly:

```sql
CREATE TABLE IF NOT EXISTS blog_media (
  id INT AUTO_INCREMENT PRIMARY KEY,
  blog_id INT NOT NULL,
  url VARCHAR(500) NOT NULL,
  media_type ENUM('image', 'video') NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  file_size INT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (blog_id) REFERENCES blogs(id) ON DELETE CASCADE,
  INDEX idx_blog_id (blog_id),
  INDEX idx_media_type (media_type),
  INDEX idx_display_order (display_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## 🔐 Digital Ocean Spaces Configuration

### 1. Create a Space on Digital Ocean

1. Log in to your Digital Ocean account
2. Navigate to **Spaces** in the sidebar
3. Click **Create a Space**
4. Choose a region (e.g., `nyc3`, `sgp1`, `fra1`)
5. Choose a name for your Space (e.g., `mtc-blog-media`)
6. Enable CDN (recommended for faster delivery)

### 2. Generate API Keys

1. Go to **API** in the Digital Ocean dashboard
2. Navigate to **Spaces access keys**
3. Click **Generate New Key**
4. Save your **Access Key** and **Secret Key** (you won't be able to see the secret again)

### 3. Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Database Configuration
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=mtc_db

# Digital Ocean Spaces Configuration
DO_SPACES_ENDPOINT=https://nyc3.digitaloceanspaces.com
DO_SPACES_REGION=nyc3
DO_SPACES_BUCKET=mtc-blog-media
DO_SPACES_ACCESS_KEY_ID=your_access_key_here
DO_SPACES_SECRET_ACCESS_KEY=your_secret_key_here
DO_SPACES_CDN_URL=https://mtc-blog-media.nyc3.cdn.digitaloceanspaces.com

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Important Notes:**
- Replace `nyc3` with your chosen region
- Replace `mtc-blog-media` with your Space name
- The CDN URL format is: `https://[SPACE_NAME].[REGION].cdn.digitaloceanspaces.com`
- If you didn't enable CDN, use: `https://[SPACE_NAME].[REGION].digitaloceanspaces.com`

### 4. Set Space Permissions

1. Go to your Space in the Digital Ocean dashboard
2. Click on **Settings**
3. Under **File Listing**, set to **Public** or **Private** (recommend Private)
4. Individual files will be made public via ACL during upload

## 📦 Installed Packages

The following packages have been installed:

```json
{
  "@aws-sdk/client-s3": "For S3-compatible operations",
  "@aws-sdk/lib-storage": "For efficient file uploads"
}
```

## 🏗️ File Structure

```
src/
├── lib/
│   └── s3.ts                          # S3/Spaces utility functions
├── app/
│   └── api/
│       ├── upload/
│       │   ├── route.ts               # Upload & fetch media
│       │   └── [id]/
│       │       └── route.ts           # Delete & update media
│       └── blogs/
│           ├── route.ts               # Updated to include media
│           └── [id]/
│               └── route.ts           # Updated to include media
├── types/
│   └── blog.ts                        # Updated with media types
└── app/
    └── admin/
        └── dashboard/
            └── page.tsx               # Updated with upload UI
```

## 🚀 Usage

### Admin Dashboard

1. **Create a New Blog Post:**
   - Click "Nouvel article"
   - Fill in title and content
   - Click "Créer l'article"
   - The modal will stay open, allowing you to upload media

2. **Upload Media:**
   - Click "Télécharger des fichiers"
   - Select images or videos (can select multiple)
   - Files will be uploaded to Digital Ocean Spaces
   - URLs will be saved to the database

3. **Manage Media:**
   - View all uploaded media in a grid
   - Hover over media to see delete button
   - Click delete to remove media from both Spaces and database

4. **Edit Existing Blog:**
   - Click edit icon on any blog post
   - Manage existing media or upload new ones

### Frontend Display

To display media on your blog pages, use the media array:

```tsx
// In your blog detail page
const blog = // ... fetch blog with media

{blog.media && blog.media.map((media) => (
  <div key={media.id}>
    {media.media_type === 'image' ? (
      <img src={media.url} alt={media.file_name} />
    ) : (
      <video src={media.url} controls />
    )}
  </div>
))}
```

## 🔧 API Endpoints

### Upload Media
```
POST /api/upload
Content-Type: multipart/form-data

Body:
- file: File
- blog_id: number
- display_order: number (optional)
```

### Get Media for Blog
```
GET /api/upload?blog_id=123
```

### Delete Media
```
DELETE /api/upload/[media_id]
```

### Update Media Order
```
PUT /api/upload/[media_id]
Body: { display_order: number }
```

### Get Blogs with Media
```
GET /api/blogs?includeMedia=true
GET /api/blogs/[id]?includeMedia=true
```

## 🎨 Supported File Types

### Images
- JPEG/JPG
- PNG
- GIF
- WEBP

### Videos
- MP4
- WEBM
- QuickTime (MOV)
- AVI

**File Size Limit:** 100MB per file

## 🛡️ Security Considerations

1. **File Validation:** All uploads are validated for type and size
2. **Unique Filenames:** Files are renamed with timestamps to prevent conflicts
3. **Public Access:** Files are uploaded with `public-read` ACL
4. **Database Integrity:** Foreign keys ensure media is deleted when blog is deleted

## 🐛 Troubleshooting

### Upload Fails
- Check your Digital Ocean Spaces credentials in `.env.local`
- Verify the Space exists and region is correct
- Check file size (must be under 100MB)
- Verify file type is supported

### Media Not Displaying
- Check the CDN URL in `.env.local`
- Verify files are publicly accessible in your Space
- Check browser console for CORS errors

### Database Errors
- Ensure `blog_media` table is created
- Verify foreign key constraints are in place
- Check that the blog exists before uploading media

## 📝 Next Steps

1. Update your frontend blog pages to display media
2. Consider adding:
   - Image optimization/resizing
   - Video thumbnail generation
   - Drag-and-drop reordering in admin
   - Bulk delete functionality
   - Image cropping/editing
   - Alt text for images

## 💡 Tips

- Enable CDN on your Space for better performance
- Use different folders for different types of content (already implemented as `blog-media/`)
- Monitor your Space usage in Digital Ocean dashboard
- Consider implementing lazy loading for images
- Add image optimization before upload for better performance

## 📞 Support

For issues specific to:
- **Digital Ocean Spaces:** Check [DO Spaces Documentation](https://docs.digitalocean.com/products/spaces/)
- **AWS SDK:** Check [AWS SDK v3 Documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/)
- **Next.js:** Check [Next.js Documentation](https://nextjs.org/docs)

