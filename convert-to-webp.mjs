// Script de conversão PNG → WebP
// Usa o pacote 'sharp' para comprimir e converter imagens
// Execute com: node convert-to-webp.mjs

import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync } from 'fs';
import { join, extname, basename } from 'path';

const INPUT_DIR = './public/images';
const INPUT_ROOT = './public';

// Imagens na raiz do public
const rootImages = ['hero-bg.png'];

async function convertImage(inputPath, outputPath, label) {
    try {
        await sharp(inputPath)
            .webp({ quality: 80 }) // 80% qualidade — ótimo equilíbrio tamanho/qualidade
            .toFile(outputPath);
        console.log(`✅ ${label}`);
    } catch (err) {
        console.error(`❌ Erro em ${label}:`, err.message);
    }
}

async function main() {
    console.log('🚀 Iniciando conversão PNG → WebP...\n');

    // Converter imagens da pasta /public/images
    const files = readdirSync(INPUT_DIR);
    const pngFiles = files.filter(f => extname(f).toLowerCase() === '.png');

    for (const file of pngFiles) {
        const inputPath = join(INPUT_DIR, file);
        const outputName = basename(file, extname(file)) + '.webp';
        const outputPath = join(INPUT_DIR, outputName);
        await convertImage(inputPath, outputPath, `images/${file} → images/${outputName}`);
    }

    // Converter hero-bg.png na raiz do public
    for (const file of rootImages) {
        const inputPath = join(INPUT_ROOT, file);
        if (existsSync(inputPath)) {
            const outputName = basename(file, extname(file)) + '.webp';
            const outputPath = join(INPUT_ROOT, outputName);
            await convertImage(inputPath, outputPath, `${file} → ${outputName}`);
        }
    }

    console.log('\n✨ Conversão concluída!');
    console.log('📝 Próximo passo: actualizar referências .png → .webp no código');
}

main();
