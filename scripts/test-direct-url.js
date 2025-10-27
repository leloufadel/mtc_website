/**
 * Test direct Spaces URL (non-CDN) with path-style
 */

const https = require('https');

const urls = [
  'https://sfo3.digitaloceanspaces.com/website.focus/blog-media/1761043468604-nuic2p4ipy-dg-mtc-aghdhefna-eyih.jpeg',
  'https://website.focus.sfo3.digitaloceanspaces.com/blog-media/1761043468604-nuic2p4ipy-dg-mtc-aghdhefna-eyih.jpeg'
];

async function testUrl(url, ignoreCert = false) {
  return new Promise((resolve) => {
    console.log(`\n🔍 Testing: ${url}`);
    if (ignoreCert) console.log('   (Ignoring SSL certificate errors)');
    
    const options = {
      rejectUnauthorized: !ignoreCert
    };
    
    https.get(url, options, (res) => {
      console.log(`   Status: ${res.statusCode} ${res.statusMessage}`);
      console.log(`   Content-Type: ${res.headers['content-type']}`);
      
      if (res.statusCode === 200) {
        console.log('   ✅ Accessible!');
      } else if (res.statusCode === 403) {
        console.log('   ❌ Access Denied - Files are not public');
      } else if (res.statusCode === 404) {
        console.log('   ❌ Not Found');
      }
      
      resolve();
    }).on('error', (err) => {
      console.log(`   ❌ Error: ${err.message}`);
      resolve();
    });
  });
}

async function runTests() {
  console.log('🧪 Testing Direct Access...\n');
  
  // Test path-style
  await testUrl(urls[0]);
  
  // Test subdomain-style with SSL errors ignored
  await testUrl(urls[1], true);
  
  console.log('\n💡 Recommendation:');
  console.log('Use direct URLs: https://sfo3.digitaloceanspaces.com/website.focus/...');
  console.log('This avoids SSL certificate issues with dots in bucket names.');
}

runTests();

