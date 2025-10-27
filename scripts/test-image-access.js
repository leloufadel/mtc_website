/**
 * Test if images are actually accessible from Digital Ocean Spaces
 */

const https = require('https');

const urls = [
  'https://website.focus.sfo3.digitaloceanspaces.com/blog-media/1761043468604-nuic2p4ipy-dg-mtc-aghdhefna-eyih.jpeg',
  'https://website.focus.sfo3.cdn.digitaloceanspaces.com/blog-media/1761043468604-nuic2p4ipy-dg-mtc-aghdhefna-eyih.jpeg'
];

function testUrl(url) {
  return new Promise((resolve) => {
    console.log(`\n🔍 Testing: ${url}`);
    
    https.get(url, (res) => {
      console.log(`   Status: ${res.statusCode} ${res.statusMessage}`);
      console.log(`   Content-Type: ${res.headers['content-type']}`);
      console.log(`   Content-Length: ${res.headers['content-length']} bytes`);
      console.log(`   Access-Control-Allow-Origin: ${res.headers['access-control-allow-origin'] || 'Not set'}`);
      
      if (res.statusCode === 200) {
        console.log('   ✅ Image is accessible!');
      } else if (res.statusCode === 403) {
        console.log('   ❌ Access Denied - Check bucket permissions!');
      } else if (res.statusCode === 404) {
        console.log('   ❌ Not Found - Image does not exist!');
      } else {
        console.log(`   ⚠️  Unexpected status code`);
      }
      
      resolve();
    }).on('error', (err) => {
      console.log(`   ❌ Error: ${err.message}`);
      resolve();
    });
  });
}

async function testAllUrls() {
  console.log('🧪 Testing Image Access...\n');
  console.log('This will check if your images are publicly accessible from Digital Ocean Spaces.');
  
  for (const url of urls) {
    await testUrl(url);
  }
  
  console.log('\n📋 Summary:');
  console.log('If you see 403 errors, your Space files are not public.');
  console.log('If you see 404 errors, the files do not exist at those URLs.');
  console.log('If you see 200, the images are accessible!');
}

testAllUrls();

