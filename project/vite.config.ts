import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/IITB-Reunion/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
});
