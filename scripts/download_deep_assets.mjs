import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.resolve(__dirname, '../src/assets/competitors');

const urlsToScrape = [
  'https://plumpaestheticsmd.com/',
  'https://plumpaestheticsmd.com/services/',
  'https://plumpaestheticsmd.com/about/',
  'https://plumpaestheticsmd.com/contact-us/',
  'https://www.rejuvamedispa.com/',
  'https://www.rejuvamedispa.com/services',
  'https://www.rejuvamedispa.com/injectables',
  'https://www.rejuvamedispa.com/laser-services',
  'https://www.rejuvamedispa.com/skin-rejuvenation',
  'https://www.rejuvamedispa.com/about-us',
  'https://lumeproject.karryonmedia.com/',
  'https://lumeproject.karryonmedia.com/about-us/',
  'https://lumeproject.karryonmedia.com/service/',
  'https://lumeproject.karryonmedia.com/gallery/',
  'https://lumeproject.karryonmedia.com/blog/'
];

async function fetchPage(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!res.ok) return '';
    return await res.text();
  } catch (e) {
    return '';
  }
}

async function download(url, filename) {
  try {
    const p = path.join(targetDir, filename);
    if (fs.existsSync(p) && fs.statSync(p).size > 2000) return true;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!res.ok) return false;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 2000) return false;
    fs.writeFileSync(p, buf);
    console.log(`Downloaded ${filename} (${buf.length} bytes) from ${url.slice(0, 70)}`);
    return true;
  } catch (e) {
    return false;
  }
}

async function run() {
  const allImages = new Set();
  for (const pageUrl of urlsToScrape) {
    console.log(`Checking ${pageUrl}...`);
    const html = await fetchPage(pageUrl);
    // match images
    const matches = html.match(/https?:\/\/[^\"'\\s<>()]+?\.(?:png|jpg|jpeg|webp)/gi) || [];
    // Also match Squarespace format urls like https://images.squarespace-cdn.com/content/v1/.../?format=...
    const sqspMatches = html.match(/https?:\/\/images\.squarespace-cdn\.com\/content\/v1\/[a-zA-Z0-9_\-\/]+/gi) || [];
    for (const m of matches) {
      if (!m.includes('gravatar') && !m.includes('emoji') && !m.includes('w.org') && !m.includes('icon') && !m.includes('pixel')) {
        allImages.add(m);
      }
    }
    for (const sm of sqspMatches) {
      allImages.add(`${sm}?format=1500w`);
    }
  }

  console.log(`Total discovered image URLs: ${allImages.size}`);
  let count = 0;
  for (const imgUrl of allImages) {
    let cleanExt = '.jpg';
    if (imgUrl.includes('.png')) cleanExt = '.png';
    else if (imgUrl.includes('.webp')) cleanExt = '.webp';
    const name = `competitor-asset-${count + 1}${cleanExt}`;
    const success = await download(imgUrl, name);
    if (success) {
      count++;
      if (count >= 40) break;
    }
  }
  console.log(`Successfully saved ${count} competitor assets!`);
}

run();
