#!/usr/bin/env node

/**
 * Setup Script untuk Sanity Studio Demo
 * Run: node setup-sanity.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Sanity Studio untuk Demo Unidsoe...\n');

// Check if sanity-studio already exists
const studioPath = path.join(process.cwd(), 'sanity-studio');
if (fs.existsSync(studioPath)) {
  console.log('⚠️  sanity-studio folder already exists!');
  console.log('   Delete it first or use different output path.\n');
  process.exit(1);
}

console.log('📋 Setup Steps:');
console.log('1. Install Sanity CLI (if needed)');
console.log('2. Login to Sanity (will open browser)');
console.log('3. Create Sanity project');
console.log('4. Install dependencies');
console.log('5. Start Studio\n');

console.log('⚠️  IMPORTANT: You need to login first!');
console.log('   Run: npx sanity login\n');

console.log('Then run this command to create project:');
console.log('   npx sanity init --template blog --project-id unidsoe-demo --dataset production --output-path sanity-studio\n');

console.log('Or run the interactive setup:');
console.log('   npx sanity init\n');

console.log('After project created, run:');
console.log('   cd sanity-studio');
console.log('   npm install');
console.log('   npm run dev\n');

