/**
 * Script to fix existing media URLs in the database
 * This updates URLs that are missing ".focus" in the bucket name
 * 
 * Run with: node scripts/fix-media-urls.js
 */

require('dotenv').config({ path: '.env.local' });
const mysql = require('mysql2/promise');

async function fixMediaUrls() {
  console.log('🔧 Fixing media URLs in database...\n');

  try {
    // Create database connection
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'mtc2',
      port: process.env.DB_PORT || 3306,
    });

    console.log('✅ Connected to database');

    // Find all media with incorrect URLs
    const [rows] = await connection.execute(
      'SELECT id, url FROM blog_media WHERE url LIKE ?',
      ['%website.sfo3.cdn.digitaloceanspaces.com%']
    );

    if (rows.length === 0) {
      console.log('✅ No URLs need fixing! All URLs are correct.');
      await connection.end();
      return;
    }

    console.log(`\n📋 Found ${rows.length} media record(s) to update:\n`);

    // Update each URL
    for (const row of rows) {
      const oldUrl = row.url;
      const newUrl = oldUrl.replace(
        'website.sfo3.cdn.digitaloceanspaces.com',
        'website.focus.sfo3.cdn.digitaloceanspaces.com'
      );

      console.log(`  ID ${row.id}:`);
      console.log(`    Old: ${oldUrl}`);
      console.log(`    New: ${newUrl}`);

      await connection.execute(
        'UPDATE blog_media SET url = ? WHERE id = ?',
        [newUrl, row.id]
      );

      console.log('    ✅ Updated!\n');
    }

    console.log(`✅ Successfully updated ${rows.length} media URL(s)!`);
    console.log('\n🎉 All done! Your images should now work correctly.');

    await connection.end();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

fixMediaUrls();

