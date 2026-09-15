import fs from 'fs';
import path from 'path';
import https from 'https';

const baseUrl = 'https://lumeproject.karryonmedia.com/';

const assetList = [
  // Hero & About
  { remote: 'assets/img/hero/hero-2-1.png', local: 'src/assets/lumeproject/hero-2-1.png' },
  { remote: 'assets/img/about/about-lume-2.png', local: 'src/assets/lumeproject/about-lume-2.png' },
  { remote: 'assets/img/about/price-1-1.jpg', local: 'src/assets/lumeproject/price-1-1.jpg' },
  { remote: 'assets/img/hero/hero-flower.png', local: 'src/assets/lumeproject/hero-flower.png' },
  { remote: 'assets/img/hero/hero-leaf-4.png', local: 'src/assets/lumeproject/hero-leaf-4.png' },
  { remote: 'assets/img/hero/hero-leaf-3.png', local: 'src/assets/lumeproject/hero-leaf-3.png' },
  { remote: 'assets/img/hero/hero-leaf-5.png', local: 'src/assets/lumeproject/hero-leaf-5.png' },

  // Gallery
  { remote: 'assets/img/gallery/gal-3-1.jpg', local: 'src/assets/lumeproject/gal-3-1.jpg' },
  { remote: 'assets/img/gallery/gal-3-2.jpg', local: 'src/assets/lumeproject/gal-3-2.jpg' },
  { remote: 'assets/img/gallery/gal-3-3.jpg', local: 'src/assets/lumeproject/gal-3-3.jpg' },
  { remote: 'assets/img/gallery/gal-3-4.jpg', local: 'src/assets/lumeproject/gal-3-4.jpg' },

  // Team
  { remote: 'assets/img/team/team-1-1.png', local: 'src/assets/lumeproject/team-1-1.png' },
  { remote: 'assets/img/team/team-1-2.png', local: 'src/assets/lumeproject/team-1-2.png' },
  { remote: 'assets/img/team/team-1-3.png', local: 'src/assets/lumeproject/team-1-3.png' },
  { remote: 'assets/img/team/team-1-4.png', local: 'src/assets/lumeproject/team-1-4.png' },
  { remote: 'assets/img/team/team-1-5.png', local: 'src/assets/lumeproject/team-1-5.png' },

  // Blog
  { remote: 'assets/img/blog/blog-1-1.jpg', local: 'src/assets/lumeproject/blog-1-1.jpg' },
  { remote: 'assets/img/blog/blog-1-2.jpg', local: 'src/assets/lumeproject/blog-1-2.jpg' },
  { remote: 'assets/img/blog/blog-1-3.jpg', local: 'src/assets/lumeproject/blog-1-3.jpg' },
  { remote: 'assets/img/blog/blog-1-4.jpg', local: 'src/assets/lumeproject/blog-1-4.jpg' },

  // Shapes & Logos
  { remote: 'assets/img/main-logo.png', local: 'src/assets/lumeproject/main-logo.png' },
  { remote: 'assets/img/main-white-logo.png', local: 'src/assets/lumeproject/main-white-logo.png' },
  { remote: 'assets/img/shape/sec-shape-1.png', local: 'src/assets/lumeproject/sec-shape-1.png' },
  { remote: 'assets/img/shape/price-shape-2.png', local: 'src/assets/lumeproject/price-shape-2.png' },
  { remote: 'assets/img/shape/price-shape-3.png', local: 'src/assets/lumeproject/price-shape-3.png' },
  { remote: 'assets/img/shape/leaf-1-3.png', local: 'src/assets/lumeproject/leaf-1-3.png' },
  { remote: 'assets/img/shape/leaf-1-4.png', local: 'src/assets/lumeproject/leaf-1-4.png' },
  { remote: 'assets/img/shape/leaf-1-1.png', local: 'src/assets/lumeproject/leaf-1-1.png' },

  // Brand
  { remote: 'assets/img/brand/b-2-1.png', local: 'src/assets/lumeproject/b-2-1.png' },
  { remote: 'assets/img/brand/b-2-2.png', local: 'src/assets/lumeproject/b-2-2.png' },
  { remote: 'assets/img/brand/b-2-3.png', local: 'src/assets/lumeproject/b-2-3.png' },
  { remote: 'assets/img/brand/b-2-4.png', local: 'src/assets/lumeproject/b-2-4.png' },
  { remote: 'assets/img/brand/b-2-5.png', local: 'src/assets/lumeproject/b-2-5.png' },
  { remote: 'assets/img/brand/b-2-6.png', local: 'src/assets/lumeproject/b-2-6.png' }
];

async function download(item) {
  const fullLocal = path.join(process.cwd(), item.local);
  const dir = path.dirname(fullLocal);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const url = baseUrl + item.remote;
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(fullLocal);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Success: ${item.local}`);
          resolve(true);
        });
      } else {
        console.warn(`Status ${res.statusCode} for ${url}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${url}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  console.log('Downloading assets from lumeproject.karryonmedia.com...');
  for (const item of assetList) {
    await download(item);
  }
  console.log('Done downloading assets!');
}

run();
