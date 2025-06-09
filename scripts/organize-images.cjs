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
    console.log(`✓ Copied: ${path.basename(source)} → ${path.basename(dest)}`);
  } catch (error) {
    console.error(`✗ Error copying ${source}:`, error.message);
  }
}

// Processar FBE pequenas
function processFBESmall() {
  console.log('\n=== Processing FBE Small Pumps ===');
  const sourcePath = path.join(SOURCE_PATH, 'FBE PEQUENAS');
  
  // Mapeamento específico
  const mappings = [
    { file: '1 8.png', dest: 'fbe/18/photo.png' },
    { file: '1 8 desenho branco (2).png', dest: 'fbe/18/drawing.png' },
    { file: '1 4.png', dest: 'fbe/14/photo.png' },
    { file: '1 4 desenho branco.png', dest: 'fbe/14/drawing.png' },
    { file: '3 8.png', dest: 'fbe/38/photo.png' },
    { file: '3 8 desenho branco.png', dest: 'fbe/38/drawing.png' },
    { file: 'FBE 1 2 (2).png', dest: 'fbe/12/photo.png' },
    { file: '1 2 desenho branco.png', dest: 'fbe/12/drawing.png' },
    { file: '3 4.png', dest: 'fbe/34/photo.png' },
    { file: '3 4 desenho branco (1).png', dest: 'fbe/34/drawing.png' }
  ];
  
  mappings.forEach(({ file, dest }) => {
    const sourceFile = path.join(sourcePath, file);
    const destFile = path.join(DEST_BASE, dest);
    if (fs.existsSync(sourceFile)) {
      copyFile(sourceFile, destFile);
    }
  });
}

// Processar FBE grandes
function processFBELarge() {
  console.log('\n=== Processing FBE Large Pumps ===');
  
  const mappings = {
    'FBE 1': 'fbe/1',
    'FBE 1.1': 'fbe/112',
    'FBE 2': 'fbe/2',
    'FBE 3': 'fbe/3',
    'FBE 4': 'fbe/4'
  };
  
  Object.entries(mappings).forEach(([sourceDir, destDir]) => {
    const sourcePath = path.join(SOURCE_PATH, sourceDir);
    if (!fs.existsSync(sourcePath)) return;
    
    const files = fs.readdirSync(sourcePath);
    console.log(`\nFiles in ${sourceDir}:`, files);
    
    // Procurar foto
    const photoFile = files.find(f => 
      (f.toLowerCase().includes('foto') || f.toLowerCase().includes('photo')) &&
      !f.toLowerCase().includes('desenho') &&
      !f.toLowerCase().includes('drawing')
    );
    
    // Procurar desenho
    const drawingFile = files.find(f => 
      f.toLowerCase().includes('desenho') || f.toLowerCase().includes('drawing')
    );
    
    if (photoFile) {
      copyFile(
        path.join(sourcePath, photoFile),
        path.join(DEST_BASE, destDir, 'photo.png')
      );
    }
    
    if (drawingFile) {
      copyFile(
        path.join(sourcePath, drawingFile),
        path.join(DEST_BASE, destDir, 'drawing.png')
      );
    }
  });
}

// Processar FBOT
function processFBOT() {
  console.log('\n=== Processing FBOT Images ===');
  const sourcePath = path.join(SOURCE_PATH, 'FBOT');
  if (!fs.existsSync(sourcePath)) return;
  
  const files = fs.readdirSync(sourcePath);
  console.log('FBOT files:', files);
  
  // Copiar arquivos existentes já processados
  const existingImages = [
    '/home/nando/fbfinal/client/src/assets/products/fbot.png',
    '/home/nando/fbfinal/client/src/assets/products/fbot-section.png',
    '/home/nando/fbfinal/client/src/assets/products/fbot-design.png'
  ];
  
  existingImages.forEach((img, index) => {
    if (fs.existsSync(img)) {
      copyFile(img, path.join(DEST_BASE, 'fbot', `fbot-${index + 1}.png`));
    }
  });
}

// Processar FBCN
function processFBCN() {
  console.log('\n=== Processing FBCN Images ===');
  const sourcePath = path.join(SOURCE_PATH, 'FBCN');
  if (!fs.existsSync(sourcePath)) return;
  
  const files = fs.readdirSync(sourcePath);
  console.log('FBCN files:', files);
  
  // Copiar arquivos existentes já processados
  const existingImages = [
    '/home/nando/fbfinal/client/src/assets/products/fbcn.png',
    '/home/nando/fbfinal/client/src/assets/products/fbcn-design.png',
    '/home/nando/fbfinal/client/src/assets/pumps/fbcn-pump.png'
  ];
  
  existingImages.forEach((img, index) => {
    if (fs.existsSync(img)) {
      copyFile(img, path.join(DEST_BASE, 'fbcn', `fbcn-${index + 1}.png`));
    }
  });
}

// Copiar JSON
function copyJSON() {
  console.log('\n=== Copying JSON Data ===');
  const sourceFile = path.join(SOURCE_PATH, 'bombas-fbe-dados-tabela.json');
  const destFile = path.join(__dirname, '../client/src/data/fbe-pump-performance-data.json');
  
  if (fs.existsSync(sourceFile)) {
    copyFile(sourceFile, destFile);
  }
}

// Main
function main() {
  console.log('🚀 Starting complete image organization...\n');
  
  try {
    processFBESmall();
    processFBELarge();
    processFBOT();
    processFBCN();
    copyJSON();
    
    console.log('\n✅ All images organized successfully!');
  } catch (error) {
    console.error('\n❌ Error:', error);
  }
}

main();