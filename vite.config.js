import { defineConfig } from 'vite';

export default defineConfig({
  base: '/mfonim3d',
  build: {
    outDir: 'dist',
      assetsDir: 'assets',
    rollupOptions: {
      input: '/main.js',    
    },
  },
});
