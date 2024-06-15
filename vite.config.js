import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/process': {
        target: 'http://18.209.105.236',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/process/, ''),
      },
    },
  },
});
