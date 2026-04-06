/**
 * Demo Script: Generate Post dengan Sanity Agent Actions
 * 
 * Usage:
 *   1. Token sudah di-set di .env.local
 *   2. Run: npx tsx scripts/generate-post.ts
 * 
 * Or with Node.js v23.6+:
 *   node scripts/generate-post.ts
 */

import 'dotenv/config';
import { createClient } from "@sanity/client";

// Initialize Sanity client
const client = createClient({
  projectId: 'iwtyom29',
  dataset: 'production',
  apiVersion: 'vX', // Use latest version
  token: process.env.SANITY_API_TOKEN || '',
  useCdn: false, // Required for Agent Actions
});

// Schema ID dari: npx sanity schema list
const SCHEMA_ID = "_.schemas.unidsoe-cms";

/**
 * Generate a new blog post using Agent Actions
 */
async function generatePost(topic: string) {
  try {
    console.log('🤖 Generating post with Agent Actions...');
    console.log(`📝 Topic: ${topic}`);
    console.log('⏳ Please wait...\n');

    const result = await client.agent.action.generate({
      schemaId: SCHEMA_ID,
      
      // Create new post document
      targetDocument: { 
        operation: "create", 
        _type: "post" 
      },

      // Instruction untuk AI
      instruction: `
        Write a comprehensive blog post for Unidsoe (Universitas Dr. Soekardjo), 
        a health sciences university in Indonesia.
        
        Topic: $topic
        
        Requirements:
        - Write in Indonesian (Bahasa Indonesia)
        - Professional and educational tone
        - Include: introduction, main content (3-4 paragraphs), and conclusion
        - SEO-friendly content
        - Suitable for university website
        
        Generate:
        - Title (compelling and SEO-friendly)
        - Body content (rich text with proper formatting)
        - Excerpt/summary (2-3 sentences)
      `,

      // Parameters
      instructionParams: {
        topic: { 
          type: "constant", 
          value: topic 
        },
      },
    });

    console.log('✅ Post generated successfully!');
    console.log('\n📄 Generated Document:');
    console.log('─'.repeat(50));
    console.log(JSON.stringify(result, null, 2));
    console.log('─'.repeat(50));
    
    return result;
  } catch (error: any) {
    console.error('❌ Error generating post:');
    console.error(error.message);
    
    if (error.message?.includes('token')) {
      console.error('\n💡 Tip: Set SANITY_API_TOKEN environment variable');
      console.error('   Example: $env:SANITY_API_TOKEN="your-token"');
    }
    
    throw error;
  }
}

/**
 * Update existing post title using Agent Actions
 */
async function updatePostTitle(documentId: string) {
  try {
    console.log('🤖 Updating post title with Agent Actions...');
    console.log(`📝 Document ID: ${documentId}`);
    console.log('⏳ Please wait...\n');

    const result = await client.agent.action.generate({
      schemaId: SCHEMA_ID,
      documentId: documentId,
      
      instruction: `
        Update the title based on the content in $content.
        Make it more compelling and SEO-friendly while keeping it relevant.
        Write in Indonesian.
      `,
      
      instructionParams: {
        content: {
          type: "field",
          path: "body", // Read from body field
        },
      },
      
      target: {
        path: "title", // Update title field
      }
    });

    console.log('✅ Title updated successfully!');
    console.log('\n📄 Updated Document:');
    console.log('─'.repeat(50));
    console.log(JSON.stringify(result, null, 2));
    console.log('─'.repeat(50));
    
    return result;
  } catch (error: any) {
    console.error('❌ Error updating post:');
    console.error(error.message);
    throw error;
  }
}

// Main execution
async function main() {
  // Check for API token
  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ Error: SANITY_API_TOKEN not set');
    console.error('\n📝 How to get token:');
    console.error('   1. Go to: https://sanity.io/manage/project/iwtyom29/api');
    console.error('   2. Create new token (Editor permission)');
    console.error('   3. Set environment variable:');
    console.error('      PowerShell: $env:SANITY_API_TOKEN="your-token"');
    console.error('      Bash: export SANITY_API_TOKEN="your-token"');
    process.exit(1);
  }

  // Example 1: Generate new post
  console.log('='.repeat(50));
  console.log('📝 Example 1: Generate New Post');
  console.log('='.repeat(50));
  
  const topic = process.argv[2] || "Prestasi Mahasiswa dalam Bidang Kesehatan";
  await generatePost(topic);

  // Example 2: Update existing post (uncomment to use)
  // console.log('\n' + '='.repeat(50));
  // console.log('📝 Example 2: Update Existing Post');
  // console.log('='.repeat(50));
  // const existingDocId = "your-document-id-here";
  // await updatePostTitle(existingDocId);
}

// Run if executed directly
main().catch(console.error);

export { generatePost, updatePostTitle };

