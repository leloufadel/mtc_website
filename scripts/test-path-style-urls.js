/**
 * Test the new path-style URLs
 */

const https = require('https');

const testUrl = 'https://sfo3.cdn.digitaloceanspaces.com/website.focus/blog-media/1761043468604-nuic2p4ipy-dg-mtc-aghdhefna-eyih.jpeg';

console.log('🧪 Testing Path-Style URL...\n');
console.log(`URL: ${testUrl}\n`);

https.get(testUrl, (res) => {
  console.log(`Status: ${res.statusCode} ${res.statusMessage}`);
  console.log(`Content-Type: ${res.headers['content-type']}`);
  console.log(`Content-Length: ${res.headers['content-length']} bytes`);
  
  if (res.statusCode === 200) {
    console.log('\n✅ SUCCESS! Image is accessible!');
    console.log('🎉 Your images should now work in the browser!');
  } else if (res.statusCode === 403) {
    console.log('\n❌ Access Denied');
    console.log('You need to make your Space files public.');
    console.log('\nSteps:');
    console.log('1. Go to Digital Ocean Spaces dashboard');
    console.log('2. Select your "website.focus" space');
    console.log('3. Click Settings');
    console.log('4. Under "File Listing", set to "Public"');
    console.log('5. Make sure ACL is set to "public-read" on files');
  } else if (res.statusCode === 404) {
    console.log('\n❌ Not Found - The file does not exist');
  } else {
    console.log(`\n⚠️  Unexpected status: ${res.statusCode}`);
  }
}).on('error', (err) => {
  console.log(`\n❌ Error: ${err.message}`);
});

