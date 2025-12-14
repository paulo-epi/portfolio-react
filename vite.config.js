import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000, // Garde le port 3000 comme CRA par défaut
    open: true, // Ouvre le navigateur automatiquement
  },
  build: {
    outDir: 'build', // CRA sort dans 'build', Vite par défaut dans 'dist' (optionnel)
  },
});