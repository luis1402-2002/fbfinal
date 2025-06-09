import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_PATH = '/mnt/c/Users/Windows/Documents/FOTOSFB';
const DEST_BASE = path.join(__dirname, '../client/src/assets/products');

// Mapeamento de pastas FBE
const FBE_MAPPING = {
  'FBE PEQUENAS': {
    sizes: ['18', '14', '38', '12', '34'],
    names: ['1-8', '1-4', '3-8', '1-2', '3-4']
  },
  'FBE 1': { id: '1' },
  'FBE 1.1': { id: '112' },
  'FBE 2': { id: '2' },
  'FBE 3': { id: '3' },
  'FBE 4': { id: '4' }
};

// Otimizar imagem com Sharp
async function optimizeImage(inputPath, outputPath, options = {}) {
  const defaults = {
    quality: 85,
    progressive: true,
    mozjpeg: true
  };
  
  const settings = { ...defaults, ...options };
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Redimensionar se muito grande
    if (metadata.width > 1200) {
      image.resize(1200, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Aplicar otimizações baseadas no formato
    if (metadata.format === 'png') {
      await image
        .png({ quality: settings.quality, compressionLevel: 9 })
        .toFile(outputPath);
    } else {
      await image
        .jpeg({ quality: settings.quality, progressive: settings.progressive, mozjpeg: settings.mozjpeg })
        .toFile(outputPath);
    }
    
    // Criar versão WebP também
    const webpPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    await sharp(inputPath)
      .resize(1200, null, { withoutEnlargement: true, fit: 'inside' })
      .webp({ quality: settings.quality })
      .toFile(webpPath);
    
    console.log(`✓ Optimized: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
  }
}

// Copiar e organizar imagens FBE pequenas
async function copyFBESmallPumps() {
  const sourcePath = path.join(SOURCE_PATH, 'FBE PEQUENAS');
  const files = fs.readdirSync(sourcePath);
  
  for (let i = 0; i < FBE_MAPPING['FBE PEQUENAS'].sizes.length; i++) {
    const size = FBE_MAPPING['FBE PEQUENAS'].sizes[i];
    const name = FBE_MAPPING['FBE PEQUENAS'].names[i];
    const destPath = path.join(DEST_BASE, 'fbe', size);
    
    // Criar diretório se não existir
    fs.mkdirSync(destPath, { recursive: true });
    
    // Procurar arquivos correspondentes
    const photoFile = files.find(f => f.includes(name) && f.includes('foto'));
    const drawingFile = files.find(f => f.includes(name) && f.includes('desenho'));
    
    if (photoFile) {
      await optimizeImage(
        path.join(sourcePath, photoFile),
        path.join(destPath, 'photo.png')
      );
    }
    
    if (drawingFile) {
      await optimizeImage(
        path.join(sourcePath, drawingFile),
        path.join(destPath, 'drawing.png')
      );
    }
  }
}

// Copiar e organizar imagens FBE grandes
async function copyFBELargePumps() {
  const largeSizes = ['FBE 1', 'FBE 1.1', 'FBE 2', 'FBE 3', 'FBE 4'];
  
  for (const size of largeSizes) {
    const sourcePath = path.join(SOURCE_PATH, size);
    if (!fs.existsSync(sourcePath)) continue;
    
    const files = fs.readdirSync(sourcePath);
    const id = FBE_MAPPING[size].id;
    const destPath = path.join(DEST_BASE, 'fbe', id);
    
    fs.mkdirSync(destPath, { recursive: true });
    
    // Procurar foto e desenho
    const photoFile = files.find(f => f.toLowerCase().includes('foto') || f.toLowerCase().includes('photo'));
    const drawingFile = files.find(f => f.toLowerCase().includes('desenho') || f.toLowerCase().includes('drawing'));
    
    if (photoFile) {
      await optimizeImage(
        path.join(sourcePath, photoFile),
        path.join(destPath, 'photo.png')
      );
    }
    
    if (drawingFile) {
      await optimizeImage(
        path.join(sourcePath, drawingFile),
        path.join(destPath, 'drawing.png')
      );
    }
  }
}

// Copiar e organizar imagens FBOT
async function copyFBOTImages() {
  const sourcePath = path.join(SOURCE_PATH, 'FBOT');
  if (!fs.existsSync(sourcePath)) return;
  
  const files = fs.readdirSync(sourcePath);
  const destPath = path.join(DEST_BASE, 'fbot');
  
  fs.mkdirSync(destPath, { recursive: true });
  
  // Copiar até 3 imagens principais
  let imageCount = 0;
  for (const file of files) {
    if (imageCount >= 3) break;
    if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;
    
    await optimizeImage(
      path.join(sourcePath, file),
      path.join(destPath, `fbot-${imageCount + 1}.png`)
    );
    imageCount++;
  }
}

// Copiar e organizar imagens FBCN
async function copyFBCNImages() {
  const sourcePath = path.join(SOURCE_PATH, 'FBCN');
  if (!fs.existsSync(sourcePath)) return;
  
  const files = fs.readdirSync(sourcePath);
  const destPath = path.join(DEST_BASE, 'fbcn');
  
  fs.mkdirSync(destPath, { recursive: true });
  
  // Copiar até 3 imagens principais
  let imageCount = 0;
  for (const file of files) {
    if (imageCount >= 3) break;
    if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;
    
    await optimizeImage(
      path.join(sourcePath, file),
      path.join(destPath, `fbcn-${imageCount + 1}.png`)
    );
    imageCount++;
  }
}

// Copiar JSON de dados
async function copyDataJSON() {
  const sourceFile = path.join(SOURCE_PATH, 'bombas-fbe-dados-tabela.json');
  const destFile = path.join(__dirname, '../client/src/data/fbe-pump-performance-data.json');
  
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, destFile);
    console.log('✓ Copied FBE performance data JSON');
  }
}

// Executar todas as tarefas
async function main() {
  console.log('🚀 Starting image optimization and organization...\n');
  
  try {
    // Instalar sharp se necessário
    console.log('📦 Checking dependencies...');
    
    console.log('\n📸 Processing FBE small pumps...');
    await copyFBESmallPumps();
    
    console.log('\n📸 Processing FBE large pumps...');
    await copyFBELargePumps();
    
    console.log('\n📸 Processing FBOT images...');
    await copyFBOTImages();
    
    console.log('\n📸 Processing FBCN images...');
    await copyFBCNImages();
    
    console.log('\n📄 Copying data files...');
    await copyDataJSON();
    
    console.log('\n✅ All images processed successfully!');
  } catch (error) {
    console.error('\n❌ Error:', error);
  }
}

main();