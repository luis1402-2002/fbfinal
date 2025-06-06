import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputDir = join(__dirname, '../client/public/images/logos');
const outputDir = join(__dirname, '../client/public/images/logos/optimized');

async function optimizeImages() {
  try {
    // Create output directory
    await mkdir(outputDir, { recursive: true });
    
    // Read all files from input directory
    const files = await readdir(inputDir);
    
    for (const file of files) {
      const ext = extname(file).toLowerCase();
      
      // Skip if not an image or already optimized
      if (!['.png', '.jpg', '.jpeg'].includes(ext) || file.includes('optimized')) {
        continue;
      }
      
      const inputPath = join(inputDir, file);
      const outputPath = join(outputDir, file.replace(ext, '.webp'));
      const outputPngPath = join(outputDir, file);
      
      console.log(`Optimizing ${file}...`);
      
      // Create WebP version for modern browsers
      await sharp(inputPath)
        .resize(300, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: 90 })
        .toFile(outputPath);
      
      // Create optimized PNG version for fallback
      await sharp(inputPath)
        .resize(300, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .png({ compressionLevel: 9 })
        .toFile(outputPngPath);
      
      console.log(`✓ ${file} optimized`);
    }
    
    console.log('\nAll images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();