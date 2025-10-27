/**
 * Update URLs to use direct endpoint (non-CDN)
 * CDN doesn't work well with path-style + dots in bucket name
 */

require('dotenv').config({ path: '.env.local' });
const mysql = require('mysql2/promise');

async function updateToDirectUrls() {
  console.log('🔧 Converting to direct endpoint URLs...\n');

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'mtc2',
      port: process.env.DB_PORT || 3306,
    });

    console.log('✅ Connected to database\n');

    const [rows] = await connection.execute('SELECT id, url FROM blog_media');

    if (rows.length === 0) {
      console.log('⚠️  No media records found');
      await connection.end();
      return;
    }

    console.log(`📋 Found ${rows.length} record(s) to update:\n`);

    for (const row of rows) {
      const oldUrl = row.url;
      const newUrl = oldUrl.replace(
        'sfo3.cdn.digitaloceanspaces.com',
        'sfo3.digitaloceanspaces.com'
      );

      if (oldUrl === newUrl) {
        console.log(`  ID ${row.id}: Already using direct URL`);
        continue;
      }

      console.log(`  ID ${row.id}:`);
      console.log(`    Old: ${oldUrl}`);
      console.log(`    New: ${newUrl}`);

      await connection.execute(
        'UPDATE blog_media SET url = ? WHERE id = ?',
        [newUrl, row.id]
      );

      console.log('    ✅ Updated!\n');
    }

    console.log('✅ Done!');
    await connection.end();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

updateToDirectUrls();

