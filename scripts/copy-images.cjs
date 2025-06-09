const fs = require('fs');
const path = require('path');

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

// Copiar arquivo
function copyFile(source, dest) {
  try {
    fs.copyFileSync(source, dest);
    console.log(`✓ Copied: ${path.basename(dest)}`);
  } catch (error) {
    console.error(`✗ Error copying ${source}:`, error.message);
  }
}

// Copiar e organizar imagens FBE pequenas
function copyFBESmallPumps() {
  const sourcePath = path.join(SOURCE_PATH, 'FBE PEQUENAS');
  if (!fs.existsSync(sourcePath)) {
    console.log('FBE PEQUENAS folder not found');
    return;
  }
  
  const files = fs.readdirSync(sourcePath);
  console.log('Files in FBE PEQUENAS:', files);
  
  for (let i = 0; i < FBE_MAPPING['FBE PEQUENAS'].sizes.length; i++) {
    const size = FBE_MAPPING['FBE PEQUENAS'].sizes[i];
    const name = FBE_MAPPING['FBE PEQUENAS'].names[i];
    const destPath = path.join(DEST_BASE, 'fbe', size);
    
    // Criar diretório se não existir
    fs.mkdirSync(destPath, { recursive: true });
    
    // Procurar arquivos correspondentes
    const photoFile = files.find(f => f.includes(name) && (f.toLowerCase().includes('foto') || f.toLowerCase().includes('photo')));
    const drawingFile = files.find(f => f.includes(name) && (f.toLowerCase().includes('desenho') || f.toLowerCase().includes('drawing')));
    
    if (photoFile) {
      copyFile(
        path.join(sourcePath, photoFile),
        path.join(destPath, 'photo.png')
      );
    }
    
    if (drawingFile) {
      copyFile(
        path.join(sourcePath, drawingFile),
        path.join(destPath, 'drawing.png')
      );
    }
  }
}

// Copiar e organizar imagens FBE grandes
function copyFBELargePumps() {
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
      copyFile(
        path.join(sourcePath, photoFile),
        path.join(destPath, 'photo.png')
      );
    }
    
    if (drawingFile) {
      copyFile(
        path.join(sourcePath, drawingFile),
        path.join(destPath, 'drawing.png')
      );
    }
  }
}

// Copiar e organizar imagens FBOT
function copyFBOTImages() {
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
    
    copyFile(
      path.join(sourcePath, file),
      path.join(destPath, `fbot-${imageCount + 1}.png`)
    );
    imageCount++;
  }
}

// Copiar e organizar imagens FBCN
function copyFBCNImages() {
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
    
    copyFile(
      path.join(sourcePath, file),
      path.join(destPath, `fbcn-${imageCount + 1}.png`)
    );
    imageCount++;
  }
}

// Copiar JSON de dados
function copyDataJSON() {
  const sourceFile = path.join(SOURCE_PATH, 'bombas-fbe-dados-tabela.json');
  const destFile = path.join(__dirname, '../client/src/data/fbe-pump-performance-data.json');
  
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, destFile);
    console.log('✓ Copied FBE performance data JSON');
  }
}

// Executar todas as tarefas
function main() {
  console.log('🚀 Starting image copy and organization...\n');
  
  try {
    console.log('\n📸 Processing FBE small pumps...');
    copyFBESmallPumps();
    
    console.log('\n📸 Processing FBE large pumps...');
    copyFBELargePumps();
    
    console.log('\n📸 Processing FBOT images...');
    copyFBOTImages();
    
    console.log('\n📸 Processing FBCN images...');
    copyFBCNImages();
    
    console.log('\n📄 Copying data files...');
    copyDataJSON();
    
    console.log('\n✅ All images copied successfully!');
  } catch (error) {
    console.error('\n❌ Error:', error);
  }
}

main();