/**
 * Demo Script: Agent Actions Prompt
 * 
 * Prompt adalah Agent Action yang return text/JSON tanpa create/edit documents
 * Perfect untuk: ide generation, suggestions, analysis, dll
 * 
 * Usage:
 *   npx tsx scripts/prompt-demo.ts
 * 
 * Docs: https://www.sanity.io/docs/agent-actions/prompt-quickstart
 */

import 'dotenv/config';
import { createClient } from "@sanity/client";

// Initialize Sanity client
const client = createClient({
  projectId: 'iwtyom29',
  dataset: 'production',
  apiVersion: 'vX', // Required for Agent Actions
  token: process.env.SANITY_API_TOKEN || '',
  useCdn: false, // Required for Agent Actions
});

/**
 * Example 1: Simple Prompt - Get Ideas
 */
async function promptForIdeas() {
  try {
    console.log('💡 Example 1: Prompt for Ideas');
    console.log('─'.repeat(50));

    const response = await client.agent.action.prompt({
      instruction: `Give me some ideas for a blog post 
        about health sciences education for Unidsoe 
        (Universitas Dr. Soekardjo) in Indonesia. 
        Provide 5 creative and engaging topic ideas.`
    });

    console.log('✅ Response:');
    console.log(response);
    console.log('─'.repeat(50));
    
    return response;
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

/**
 * Example 2: Prompt with Document Context
 */
async function promptWithContext(documentId?: string) {
  try {
    console.log('\n📄 Example 2: Prompt with Document Context');
    console.log('─'.repeat(50));

    // If no documentId provided, use a placeholder
    const docId = documentId || '<target-document-id>';

    const response = await client.agent.action.prompt({
      instruction: `Based on the following document content, 
        suggest 3 SEO-friendly meta descriptions for this article.
        Make them compelling and under 160 characters.
        
        Context: $background`,
      instructionParams: {
        background: {
          type: 'document',
          documentId: docId
        }
      }
    });

    console.log('✅ Response:');
    console.log(response);
    console.log('─'.repeat(50));
    
    return response;
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    if (error.message?.includes('documentId')) {
      console.error('💡 Tip: Provide a valid document ID');
      console.error('   Get document ID from Studio or use client.fetch()');
    }
    throw error;
  }
}

/**
 * Example 3: Prompt with JSON Output
 */
async function promptWithJSON() {
  try {
    console.log('\n📊 Example 3: Prompt with JSON Output');
    console.log('─'.repeat(50));

    const response = await client.agent.action.prompt({
      instruction: `Give me 5 blog post ideas for Unidsoe university website.
        Respond in JSON format with the following structure:
        {
          "ideas": [
            {
              "title": "idea title",
              "summary": "brief summary",
              "keywords": ["keyword1", "keyword2"]
            }
          ]
        }`,
      format: 'json'
    });

    console.log('✅ Response (JSON):');
    console.log(JSON.stringify(response, null, 2));
    console.log('─'.repeat(50));
    
    return response;
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

/**
 * Example 4: Prompt with Temperature (Variety)
 */
async function promptWithTemperature() {
  try {
    console.log('\n🎲 Example 4: Prompt with Temperature (More Variety)');
    console.log('─'.repeat(50));

    const response = await client.agent.action.prompt({
      instruction: `Generate creative and engaging social media post ideas
        for Unidsoe university. Make them diverse and interesting.`,
      temperature: 0.8 // Higher = more variety (0-1)
    });

    console.log('✅ Response:');
    console.log(response);
    console.log('─'.repeat(50));
    
    return response;
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

/**
 * Example 5: Custom Prompt (User Input)
 */
async function customPrompt(promptText: string) {
  try {
    console.log('\n✨ Example 5: Custom Prompt');
    console.log('─'.repeat(50));
    console.log(`📝 Prompt: ${promptText}`);

    const response = await client.agent.action.prompt({
      instruction: promptText
    });

    console.log('\n✅ Response:');
    console.log(response);
    console.log('─'.repeat(50));
    
    return response;
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

// Main execution
async function main() {
  // Check for API token
  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ Error: SANITY_API_TOKEN not set');
    console.error('\n📝 How to set token:');
    console.error('   File: .env.local');
    console.error('   Add: SANITY_API_TOKEN=your-token');
    process.exit(1);
  }

  console.log('🤖 Agent Actions Prompt Demo');
  console.log('='.repeat(50));
  console.log('');

  // Run examples
  try {
    // Example 1: Simple prompt
    await promptForIdeas();

    // Example 2: With document context (skip if no documentId)
    // await promptWithContext('your-document-id');

    // Example 3: JSON output
    await promptWithJSON();

    // Example 4: With temperature
    await promptWithTemperature();

    // Example 5: Custom prompt from command line
    const customPromptText = process.argv[2];
    if (customPromptText) {
      await customPrompt(customPromptText);
    } else {
      console.log('\n💡 Tip: You can provide custom prompt as argument:');
      console.log('   npx tsx scripts/prompt-demo.ts "Your custom prompt here"');
    }

    console.log('\n✅ All examples completed!');
  } catch (error) {
    console.error('\n❌ Demo failed:', error);
    process.exit(1);
  }
}

// Run if executed directly
main().catch(console.error);

export { promptForIdeas, promptWithContext, promptWithJSON, promptWithTemperature, customPrompt };

