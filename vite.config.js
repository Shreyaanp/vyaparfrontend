import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import history from 'connect-history-api-fallback';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: true,
    setup(app) {
      app.use(
        history({
          rewrites: [
            { from: /\/.*/, to: '/' }, // Serve index.html for all routes
          ],
        })
      );
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Specify the location of index.html
      },
    },
  },
});
