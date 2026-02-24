// Converte os frames do mapa animado de JPG → WebP
import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join, extname, basename } from 'path';

const DIR = './public/mapa-animado';

async function main() {
    const files = readdirSync(DIR).filter(f => extname(f).toLowerCase() === '.jpg');
    console.log(`🚀 Convertendo ${files.length} frames JPG → WebP...\n`);

    for (const file of files) {
        const inputPath = join(DIR, file);
        const outputName = basename(file, extname(file)) + '.webp';
        const outputPath = join(DIR, outputName);
        await sharp(inputPath)
            .webp({ quality: 75 }) // 75% qualidade — suficiente para frames de animação
            .toFile(outputPath);
    }

    console.log(`✅ ${files.length} frames convertidos!`);
    console.log('📝 Próximo passo: remover JPGs e actualizar referências no código.');
}

main();
