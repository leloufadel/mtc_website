# 🚀 Quick Start - Media Upload

## ✅ What's Been Done

✔️ Database schema updated with `blog_media` table  
✔️ AWS SDK installed for Digital Ocean Spaces  
✔️ S3 utility library created (`src/lib/s3.ts`)  
✔️ Upload API endpoints created (`/api/upload`)  
✔️ Blog types updated with media support  
✔️ Blog API updated to fetch media  
✔️ Admin dashboard updated with upload UI  

## 🔧 What You Need to Do

### 1. Update Database (5 minutes)

Run the updated schema to create the `blog_media` table:

```bash
mysql -u your_username -p mtc_db < database/schema.sql
```

Or run this SQL:
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
);
```

### 2. Set Up Digital Ocean Spaces (10 minutes)

**A. Create a Space:**
1. Go to [Digital Ocean Spaces](https://cloud.digitalocean.com/spaces)
2. Click "Create a Space"
3. Choose region (e.g., `nyc3`)
4. Name it (e.g., `mtc-blog-media`)
5. Enable CDN ✓
6. Create

**B. Generate Access Keys:**
1. Go to API → Spaces access keys
2. Click "Generate New Key"
3. Save both keys immediately!

### 3. Create .env.local File (2 minutes)

Create `.env.local` in your project root:

```env
# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=mtc_db

# Digital Ocean Spaces
DO_SPACES_ENDPOINT=https://nyc3.digitaloceanspaces.com
DO_SPACES_REGION=nyc3
DO_SPACES_BUCKET=mtc-blog-media
DO_SPACES_ACCESS_KEY_ID=YOUR_ACCESS_KEY_HERE
DO_SPACES_SECRET_ACCESS_KEY=YOUR_SECRET_KEY_HERE
DO_SPACES_CDN_URL=https://mtc-blog-media.nyc3.cdn.digitaloceanspaces.com
```

**Replace:**
- `nyc3` with your region
- `mtc-blog-media` with your Space name
- Access keys with your actual keys

### 4. Test It! (2 minutes)

```bash
npm run dev
```

1. Go to `/admin` and login
2. Click on any blog post to edit
3. Click "Télécharger des fichiers"
4. Select images/videos
5. Watch them upload! 🎉

## 📸 Usage Example

### In Admin Dashboard
1. Edit existing blog or create new one
2. Upload images/videos via the upload button
3. See thumbnails appear in grid
4. Delete unwanted media

### Display Media on Frontend

Update your blog detail page (`src/app/actualites/[id]/page.tsx`):

```tsx
{blog.media && blog.media.length > 0 && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
    {blog.media.map((media) => (
      <div key={media.id}>
        {media.media_type === 'image' ? (
          <img 
            src={media.url} 
            alt={media.file_name}
            className="w-full rounded-lg"
          />
        ) : (
          <video 
            src={media.url} 
            controls 
            className="w-full rounded-lg"
          />
        )}
      </div>
    ))}
  </div>
)}
```

## 🎯 Supported Files

**Images:** JPEG, PNG, GIF, WEBP  
**Videos:** MP4, WEBM, QuickTime, AVI  
**Max Size:** 100MB per file

## 🆘 Troubleshooting

### "Failed to upload file"
- Check Digital Ocean credentials in `.env.local`
- Verify Space name and region match

### "Media not displaying"
- Check CDN URL format
- Verify files are public in your Space

### Database errors
- Make sure `blog_media` table exists
- Check foreign key constraints

## 📚 Full Documentation

See `MEDIA_UPLOAD_SETUP.md` for complete documentation.

## 🎨 What's Next?

Consider adding:
- [ ] Display media on frontend blog pages
- [ ] Image optimization before upload
- [ ] Drag-and-drop reordering
- [ ] Alt text for images
- [ ] Video thumbnails
- [ ] Bulk operations

---

**Need help?** Check the full setup guide in `MEDIA_UPLOAD_SETUP.md`

