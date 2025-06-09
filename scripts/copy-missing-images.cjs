const fs = require('fs');
const path = require('path');

const SOURCE_PATH = '/mnt/c/Users/Windows/Documents/FOTOSFB';
const DEST_BASE = path.join(__dirname, '../client/src/assets/products');

// Função para copiar arquivo
function copyFile(source, dest) {
  try {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(source, dest);
    console.log(`✓ Copied: ${path.basename(source)} → ${dest}`);
  } catch (error) {
    console.error(`✗ Error copying ${source}:`, error.message);
  }
}

// Copiar fotos faltantes das bombas grandes
function copyMissingLargePhotos() {
  console.log('\n=== Copying Missing Large Pump Photos ===');
  
  const mappings = [
    { source: 'FBE 1/FBE 1 (2).png', dest: 'fbe/1/photo.png' },
    { source: 'FBE 1/1 A.png', dest: 'fbe/1/photo-alt1.png' },
    { source: 'FBE 1/1 D.png', dest: 'fbe/1/photo-alt2.png' },
    { source: 'FBE 1/1 DA.png', dest: 'fbe/1/photo-alt3.png' },
    
    { source: 'FBE 1.1/1.1 2.png', dest: 'fbe/112/photo.png' },
    { source: 'FBE 1.1/1.1 2 A.png', dest: 'fbe/112/photo-alt.png' },
    
    { source: 'FBE 2/FBE 2.png', dest: 'fbe/2/photo.png' },
    
    { source: 'FBE 3/3.png', dest: 'fbe/3/photo.png' },
    { source: 'FBE 3/3 M9.png', dest: 'fbe/3/photo-alt.png' },
    
    { source: 'FBE 4/FBE 4 M12 (2).png', dest: 'fbe/4/photo.png' },
    { source: 'FBE 4/FBE 4 M6 (1).png', dest: 'fbe/4/photo-alt1.png' },
    { source: 'FBE 4/FBE 4 M8 (2).png', dest: 'fbe/4/photo-alt2.png' }
  ];
  
  mappings.forEach(({ source, dest }) => {
    const sourceFile = path.join(SOURCE_PATH, source);
    const destFile = path.join(DEST_BASE, dest);
    if (fs.existsSync(sourceFile)) {
      copyFile(sourceFile, destFile);
    }
  });
}

// Copiar imagens FBOT originais
function copyFBOTOriginalImages() {
  console.log('\n=== Copying FBOT Original Images ===');
  
  const mappings = [
    { source: 'FBOT/FBOT FRENTE.png', dest: 'fbot/fbot-1.png' },
    { source: 'FBOT/FBOT LADO.png', dest: 'fbot/fbot-2.png' },
    { source: 'FBOT/FBOT TRÁS.png', dest: 'fbot/fbot-3.png' }
  ];
  
  mappings.forEach(({ source, dest }) => {
    const sourceFile = path.join(SOURCE_PATH, source);
    const destFile = path.join(DEST_BASE, dest);
    if (fs.existsSync(sourceFile)) {
      copyFile(sourceFile, destFile);
    }
  });
}

// Copiar imagens FBCN originais
function copyFBCNOriginalImages() {
  console.log('\n=== Copying FBCN Original Images ===');
  
  const mappings = [
    { source: 'FBCN/FBCN FRENTE.png', dest: 'fbcn/fbcn-1.png' },
    { source: 'FBCN/FBCN LADO.png', dest: 'fbcn/fbcn-2.png' },
    { source: 'FBCN/FBCN TRÁS.png', dest: 'fbcn/fbcn-3.png' }
  ];
  
  mappings.forEach(({ source, dest }) => {
    const sourceFile = path.join(SOURCE_PATH, source);
    const destFile = path.join(DEST_BASE, dest);
    if (fs.existsSync(sourceFile)) {
      copyFile(sourceFile, destFile);
    }
  });
}

// Main
function main() {
  console.log('🚀 Copying missing images...\n');
  
  try {
    copyMissingLargePhotos();
    copyFBOTOriginalImages();
    copyFBCNOriginalImages();
    
    console.log('\n✅ All missing images copied successfully!');
  } catch (error) {
    console.error('\n❌ Error:', error);
  }
}

main();