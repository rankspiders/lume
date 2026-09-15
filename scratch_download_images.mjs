import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  { name: 'aqua-luxe.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80' },
  { name: 'prima-glow.jpg', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80' },
  { name: 'radiance-c.jpg', url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80' },
  { name: 'collagen-lifting.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80' },
  { name: 'acne-purify.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' },
  { name: 'hydra-glow.jpg', url: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80' },
  { name: 'sculpt-renew.jpg', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80' },
  { name: 'mocha-contour.jpg', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' },
  { name: 'aura-infusion.jpg', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80' },
  { name: 'dermaplaning.jpg', url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80' },
  { name: 'glam-chapter.jpg', url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80' },
  { name: 'polished-nails.jpg', url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80' },
  { name: 'lash-couture.jpg', url: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80' },
  { name: 'body-waxing.jpg', url: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80' },
  { name: 'precision-threading.jpg', url: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80' },
  { name: 'henna-artistry.jpg', url: 'https://images.unsplash.com/photo-1561053720-76cd73ff22c3?auto=format&fit=crop&w=800&q=80' },
  { name: 'botox.jpg', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80' },
  { name: 'dermal-fillers.jpg', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80' },
  { name: 'prp-microneedling.jpg', url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80' },
  { name: 'exosome-microneedling.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80' },
  { name: 'teeth-whitening.jpg', url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80' },
  { name: 'iv-infusion.jpg', url: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=800&q=80' },
  { name: 'you-deserve-it.jpg', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' },
  { name: 'queen-for-a-day.jpg', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80' }
];

const targetDir = path.join(process.cwd(), 'src', 'assets', 'treatments');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('Starting image downloads...');

async function download(item) {
  const filePath = path.join(targetDir, item.name);
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https.get(item.url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${item.name}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      console.error(`Error downloading ${item.name}:`, err.message);
      reject(err);
    });
  });
}

async function run() {
  for (const img of images) {
    try {
      await download(img);
    } catch (e) {
      console.error(e);
    }
  }
  console.log('All downloads finished successfully!');
}

run();
