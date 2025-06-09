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

// Copiar desenhos brancos (para tema escuro)
function copyWhiteDrawings() {
  console.log('\n=== Copying White Drawings (for dark theme) ===');
  
  // FBE Pequenas
  const smallMappings = [
    { source: 'FBE PEQUENAS/1 8 desenho branco (2).png', dest: 'fbe/18/drawing-white.png' },
    { source: 'FBE PEQUENAS/1 4 desenho branco.png', dest: 'fbe/14/drawing-white.png' },
    { source: 'FBE PEQUENAS/3 8 desenho branco.png', dest: 'fbe/38/drawing-white.png' },
    { source: 'FBE PEQUENAS/1 2 desenho branco.png', dest: 'fbe/12/drawing-white.png' },
    { source: 'FBE PEQUENAS/3 4 desenho branco (1).png', dest: 'fbe/34/drawing-white.png' }
  ];
  
  // FBE Grandes
  const largeMappings = [
    { source: 'FBE 1/1 desenho branco.png', dest: 'fbe/1/drawing-white.png' },
    { source: 'FBE 1.1/1.1 2 e 3 2 A desenho branco.png', dest: 'fbe/112/drawing-white.png' },
    { source: 'FBE 2/2 desenho branco.png', dest: 'fbe/2/drawing-white.png' },
    { source: 'FBE 3/3 e 3 M9 desenho branco.png', dest: 'fbe/3/drawing-white.png' },
    { source: 'FBE 4/FBE 4 GERAL desenho preto (2).png', dest: 'fbe/4/drawing-white.png' } // Usar o disponível
  ];
  
  [...smallMappings, ...largeMappings].forEach(({ source, dest }) => {
    const sourceFile = path.join(SOURCE_PATH, source);
    const destFile = path.join(DEST_BASE, dest);
    if (fs.existsSync(sourceFile)) {
      copyFile(sourceFile, destFile);
    }
  });
}

// Copiar desenhos pretos (para tema claro) - já existentes como drawing.png
function verifyBlackDrawings() {
  console.log('\n=== Verifying Black Drawings (for light theme) ===');
  
  const sizes = ['18', '14', '38', '12', '34', '1', '112', '2', '3', '4'];
  
  sizes.forEach(size => {
    const drawingPath = path.join(DEST_BASE, 'fbe', size, 'drawing.png');
    if (fs.existsSync(drawingPath)) {
      console.log(`✓ Black drawing exists for FBE ${size}`);
    } else {
      console.log(`✗ Missing black drawing for FBE ${size}`);
    }
  });
}

// Main
function main() {
  console.log('🚀 Copying theme-specific drawings...\n');
  
  try {
    copyWhiteDrawings();
    verifyBlackDrawings();
    
    console.log('\n✅ All theme drawings processed successfully!');
  } catch (error) {
    console.error('\n❌ Error:', error);
  }
}

main();