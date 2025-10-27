/**
 * Check what URLs are actually stored in the database
 */

require('dotenv').config({ path: '.env.local' });
const mysql = require('mysql2/promise');

async function checkUrls() {
  console.log('🔍 Checking media URLs in database...\n');

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'mtc2',
      port: process.env.DB_PORT || 3306,
    });

    console.log('✅ Connected to database\n');

    // Get all media
    const [rows] = await connection.execute(
      'SELECT id, blog_id, url, media_type, file_name FROM blog_media ORDER BY created_at DESC'
    );

    if (rows.length === 0) {
      console.log('⚠️  No media records found in database');
      await connection.end();
      return;
    }

    console.log(`📋 Found ${rows.length} media record(s):\n`);

    rows.forEach((row, index) => {
      console.log(`${index + 1}. ID: ${row.id} | Blog: ${row.blog_id} | Type: ${row.media_type}`);
      console.log(`   File: ${row.file_name}`);
      console.log(`   URL: ${row.url}`);
      
      // Check if URL looks correct
      const hasCorrectBucket = row.url.includes('website.focus');
      const hasWrongBucket = row.url.includes('website.sfo3');
      
      if (hasWrongBucket && !hasCorrectBucket) {
        console.log(`   ⚠️  INCORRECT: Missing ".focus" in bucket name!`);
      } else if (hasCorrectBucket) {
        console.log(`   ✅ Looks correct`);
      }
      console.log('');
    });

    console.log('\n📊 Environment Configuration:');
    console.log(`   BUCKET: ${process.env.DO_SPACES_BUCKET}`);
    console.log(`   CDN_BASE: ${process.env.DO_SPACES_CDN_BASE}`);
    console.log(`   ENDPOINT: ${process.env.DO_SPACES_ENDPOINT}`);

    await connection.end();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

checkUrls();

