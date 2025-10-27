/**
 * Test script to verify Digital Ocean Spaces configuration
 * Run with: node scripts/test-spaces-connection.js
 */

require('dotenv').config({ path: '.env.local' });
const { S3Client, ListBucketsCommand, PutObjectCommand } = require('@aws-sdk/client-s3');

async function testConnection() {
  console.log('🔍 Testing Digital Ocean Spaces Configuration...\n');
  
  // Check environment variables
  console.log('📋 Environment Variables:');
  console.log('  DO_SPACES_ENDPOINT:', process.env.DO_SPACES_ENDPOINT);
  console.log('  DO_SPACES_REGION:', process.env.DO_SPACES_REGION);
  console.log('  DO_SPACES_BUCKET:', process.env.DO_SPACES_BUCKET);
  console.log('  DO_SPACES_CDN_BASE:', process.env.DO_SPACES_CDN_BASE);
  console.log('  DO_SPACES_KEY:', process.env.DO_SPACES_KEY ? '✓ Set' : '✗ Missing');
  console.log('  DO_SPACES_SECRET:', process.env.DO_SPACES_SECRET ? '✓ Set' : '✗ Missing');
  console.log('');

  // Verify required variables
  if (!process.env.DO_SPACES_KEY || !process.env.DO_SPACES_SECRET) {
    console.error('❌ Missing required environment variables!');
    process.exit(1);
  }

  // Initialize S3 client
  const s3Client = new S3Client({
    endpoint: process.env.DO_SPACES_ENDPOINT,
    region: process.env.DO_SPACES_REGION || 'sfo3',
    credentials: {
      accessKeyId: process.env.DO_SPACES_KEY,
      secretAccessKey: process.env.DO_SPACES_SECRET,
    },
  });

  try {
    // Test 1: List buckets (verify credentials)
    console.log('🔐 Test 1: Verifying credentials...');
    const listCommand = new ListBucketsCommand({});
    const { Buckets } = await s3Client.send(listCommand);
    console.log('✅ Credentials are valid!');
    console.log('   Available buckets:', Buckets?.map(b => b.Name).join(', ') || 'None');
    console.log('');

    // Test 2: Check if specified bucket exists
    console.log('🪣 Test 2: Checking bucket...');
    const bucketExists = Buckets?.some(b => b.Name === process.env.DO_SPACES_BUCKET);
    if (bucketExists) {
      console.log(`✅ Bucket "${process.env.DO_SPACES_BUCKET}" exists!`);
    } else {
      console.log(`⚠️  Bucket "${process.env.DO_SPACES_BUCKET}" not found in your spaces.`);
      console.log('   Make sure the bucket name is correct.');
    }
    console.log('');

    // Test 3: Test upload
    console.log('📤 Test 3: Testing upload...');
    const testFileName = `test-${Date.now()}.txt`;
    const testContent = 'This is a test file from MTC blog system';
    
    const uploadCommand = new PutObjectCommand({
      Bucket: process.env.DO_SPACES_BUCKET,
      Key: testFileName,
      Body: Buffer.from(testContent),
      ContentType: 'text/plain',
      ACL: 'public-read',
    });

    await s3Client.send(uploadCommand);
    console.log('✅ Test file uploaded successfully!');
    
    // Generate URLs
    const directUrl = `${process.env.DO_SPACES_ENDPOINT.replace('https://', `https://${process.env.DO_SPACES_BUCKET}.`)}/${testFileName}`;
    const cdnUrl = `${process.env.DO_SPACES_CDN_BASE}/${testFileName}`;
    
    console.log('   Direct URL:', directUrl);
    console.log('   CDN URL:', cdnUrl);
    console.log('');

    // URL validation
    console.log('🔗 URL Configuration Check:');
    const expectedCdnUrl = `https://${process.env.DO_SPACES_BUCKET}.${process.env.DO_SPACES_REGION}.cdn.digitaloceanspaces.com`;
    if (process.env.DO_SPACES_CDN_BASE === expectedCdnUrl) {
      console.log('✅ CDN URL is correctly configured');
    } else {
      console.log('⚠️  CDN URL might be incorrect');
      console.log('   Current:', process.env.DO_SPACES_CDN_BASE);
      console.log('   Expected:', expectedCdnUrl);
    }
    console.log('');

    console.log('✅ All tests passed! Your Digital Ocean Spaces is configured correctly.');
    console.log('\n💡 Note: You can delete the test file from your Space dashboard.');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.Code) {
      console.error('   Code:', error.Code);
    }
    if (error.$metadata) {
      console.error('   HTTP Status:', error.$metadata.httpStatusCode);
    }
    process.exit(1);
  }
}

testConnection();

