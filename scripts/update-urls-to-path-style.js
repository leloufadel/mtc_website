/**
 * Update existing URLs to use path-style format
 * From: https://website.focus.sfo3.cdn.digitaloceanspaces.com/file.jpg
 * To: https://sfo3.cdn.digitaloceanspaces.com/website.focus/file.jpg
 */

require('dotenv').config({ path: '.env.local' });
const mysql = require('mysql2/promise');

async function updateToPathStyle() {
  console.log('🔧 Converting to path-style URLs...\n');

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'mtc2',
      port: process.env.DB_PORT || 3306,
    });

    console.log('✅ Connected to database\n');

    const bucket = process.env.DO_SPACES_BUCKET;
    const region = process.env.DO_SPACES_REGION || 'sfo3';

    // Find all media
    const [rows] = await connection.execute('SELECT id, url FROM blog_media');

    if (rows.length === 0) {
      console.log('⚠️  No media records found');
      await connection.end();
      return;
    }

    console.log(`📋 Found ${rows.length} record(s) to update:\n`);

    for (const row of rows) {
      const oldUrl = row.url;
      
      // Extract the file path after the bucket name
      const regex = new RegExp(`https://[^/]+/(.*)`);
      const match = oldUrl.match(regex);
      
      if (!match) {
        console.log(`  ID ${row.id}: ⚠️  Could not parse URL: ${oldUrl}`);
        continue;
      }

      const filePath = match[1];
      const newUrl = `https://${region}.cdn.digitaloceanspaces.com/${bucket}/${filePath}`;

      console.log(`  ID ${row.id}:`);
      console.log(`    Old: ${oldUrl}`);
      console.log(`    New: ${newUrl}`);

      await connection.execute(
        'UPDATE blog_media SET url = ? WHERE id = ?',
        [newUrl, row.id]
      );

      console.log('    ✅ Updated!\n');
    }

    console.log(`✅ Successfully updated ${rows.length} URL(s)!`);
    console.log('\n🎉 All URLs now use path-style format.');

    await connection.end();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

updateToPathStyle();

