// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://olifro.st',
    base: '/snakeoil',
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Verve',
            cssVariable: '--font-verve',
            options: {
                variants: [{
                    src: ['./src/assets/fonts/Verve.woff2', './src/assets/fonts/Verve.woff'],
                    weight: 'normal',
                    style: 'normal',
                }]
            }
        },
        {
            provider: fontProviders.google(),
            name: 'Libre Baskerville',
            cssVariable: '--font-libre-baskerville',
            weights: [400, 700],
            styles: ['normal', 'italic'],
        },
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
