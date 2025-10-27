/**
 * Convert direct Spaces URLs to CDN URLs
 * Changes: website.focus.sfo3.digitaloceanspaces.com 
 * To: website.focus.sfo3.cdn.digitaloceanspaces.com
 */

require('dotenv').config({ path: '.env.local' });
const mysql = require('mysql2/promise');

async function convertToCdnUrls() {
  console.log('🔧 Converting Spaces URLs to CDN URLs...\n');

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'mtc2',
      port: process.env.DB_PORT || 3306,
    });

    console.log('✅ Connected to database\n');

    // Find all media with direct Spaces URLs (not CDN)
    const [rows] = await connection.execute(
      'SELECT id, url FROM blog_media WHERE url LIKE ? AND url NOT LIKE ?',
      [
        '%digitaloceanspaces.com%',
        '%.cdn.digitaloceanspaces.com%'
      ]
    );

    if (rows.length === 0) {
      console.log('✅ All URLs are already using CDN!');
      await connection.end();
      return;
    }

    console.log(`📋 Found ${rows.length} URL(s) to convert:\n`);

    // Update each URL
    for (const row of rows) {
      const oldUrl = row.url;
      // Add .cdn. before .digitaloceanspaces.com
      const newUrl = oldUrl.replace(
        '.digitaloceanspaces.com',
        '.cdn.digitaloceanspaces.com'
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

    console.log(`✅ Successfully converted ${rows.length} URL(s) to CDN!`);
    console.log('\n🎉 All done! Your images should now load from CDN.');

    await connection.end();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

convertToCdnUrls();

