import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.resolve(__dirname, '../src/assets/competitors');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function fetchHtml(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      }
    });
    return await res.text();
  } catch (err) {
    console.error(`Failed to fetch ${url}:`, err.message);
    return '';
  }
}

async function downloadImage(url, filename) {
  try {
    const fullPath = path.join(targetDir, filename);
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).size > 1000) {
      console.log(`Already exists: ${filename}`);
      return fullPath;
    }
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!res.ok) {
      console.log(`Failed to download ${url}: ${res.status}`);
      return null;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length < 500) {
      console.log(`File too small or invalid: ${filename}`);
      return null;
    }
    fs.writeFileSync(fullPath, buffer);
    console.log(`Saved: ${filename} (${buffer.length} bytes)`);
    return fullPath;
  } catch (err) {
    console.error(`Error downloading ${url}:`, err.message);
    return null;
  }
}

async function main() {
  console.log('--- Fetching Plump Aesthetics ---');
  const plumpHtml = await fetchHtml('https://plumpaestheticsmd.com/');
  const plumpMatches = plumpHtml.match(/https?:\/\/[^\"'\s<>]+?\.(?:png|jpg|jpeg|webp)/gi) || [];
  const uniquePlump = [...new Set(plumpMatches)].filter(u => !u.includes('emoji') && !u.includes('gravatar'));

  console.log(`Found ${uniquePlump.length} images on Plump Aesthetics`);
  let pIndex = 1;
  for (const imgUrl of uniquePlump.slice(0, 15)) {
    const ext = path.extname(imgUrl.split('?')[0]) || '.jpg';
    await downloadImage(imgUrl, `plump-${pIndex}${ext}`);
    pIndex++;
  }

  console.log('--- Fetching Rejuva Medi Spa ---');
  const rejuvaHtml = await fetchHtml('https://rejuvamedispa.com/');
  const rejuvaMatches = rejuvaHtml.match(/https?:\/\/[^\"'\s<>]+?\.(?:png|jpg|jpeg|webp)/gi) || [];
  const uniqueRejuva = [...new Set(rejuvaMatches)].filter(u => !u.includes('font') && !u.includes('favicon'));

  console.log(`Found ${uniqueRejuva.length} images on Rejuva Medi Spa`);
  let rIndex = 1;
  for (const imgUrl of uniqueRejuva.slice(0, 15)) {
    const ext = path.extname(imgUrl.split('?')[0]) || '.jpg';
    await downloadImage(imgUrl, `rejuva-${rIndex}${ext}`);
    rIndex++;
  }

  console.log('Done downloading competitor assets!');
}

main();
