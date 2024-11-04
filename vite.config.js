import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig, loadEnv } from 'vite';

const env = loadEnv('', process.cwd());
const host = env.VITE_HOST;

export default defineConfig({
    plugins: [
        basicSsl(),
        laravel({
            input: ['resources/assets/css/app.css', 'resources/ts/app.tsx'],
            refresh: true,
        }),
        react(),
    ],
    server: {
        host,
        hmr: {
            host: 'vite.staging.seismicgaming.gg',
            clientPort: '',
        },
    },
});
