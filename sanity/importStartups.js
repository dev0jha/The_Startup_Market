// Usage: node sanity/importStartups.js



import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import fs from 'fs';
import path from 'path';
import { createClient } from '@sanity/client';



// Fix for Windows: use process.cwd() to get project root
const samplePath = path.resolve(process.cwd(), 'sanity', 'sampleStartups.json');
const startups = JSON.parse(fs.readFileSync(samplePath, 'utf8'));

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-10-28',
});

async function importStartups() {
  for (const startup of startups) {
    try {
      const res = await client.create(startup);
      console.log('Imported:', res.title);
    } catch (err) {
      console.error('Error importing:', startup.title, err.message);
    }
  }
}

importStartups();
