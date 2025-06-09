#!/bin/bash

# Script para otimizar imagens usando ferramentas do sistema
# Requer: imagemagick, optipng, jpegoptim

ASSETS_DIR="../client/src/assets/products"

echo "🚀 Starting image optimization..."

# Função para otimizar PNG
optimize_png() {
    local file="$1"
    echo "Optimizing PNG: $file"
    
    # Redimensionar se muito grande
    convert "$file" -resize '1200x1200>' "$file.tmp"
    mv "$file.tmp" "$file"
    
    # Otimizar PNG
    optipng -o5 "$file" 2>/dev/null || echo "optipng not found, skipping..."
}

# Função para converter PNG para JPG quando apropriado
convert_to_jpg() {
    local file="$1"
    local jpg_file="${file%.png}.jpg"
    
    # Verificar se é uma foto (não desenho técnico)
    if [[ "$file" == *"photo"* ]]; then
        echo "Converting to JPG: $file"
        convert "$file" -quality 85 -background white -flatten "$jpg_file"
        rm "$file"
    fi
}

# Processar todos os PNGs
find "$ASSETS_DIR" -name "*.png" -type f | while read -r file; do
    optimize_png "$file"
done

# Processar todos os JPGs
find "$ASSETS_DIR" -name "*.jpg" -type f | while read -r file; do
    echo "Optimizing JPG: $file"
    jpegoptim --max=85 "$file" 2>/dev/null || echo "jpegoptim not found, skipping..."
done

echo "✅ Image optimization complete!"

# Listar tamanhos finais
echo -e "\n📊 Final image sizes:"
find "$ASSETS_DIR" -name "*.png" -o -name "*.jpg" | xargs ls -lh | awk '{print $9 ": " $5}'