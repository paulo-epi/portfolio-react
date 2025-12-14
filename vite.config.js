import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000, // Keep port 3000 like CRA default
    open: true, // Opens the browser automatically
  },
  build: {
    outDir: 'build', // CRA outputs to 'build', Vite defaults to 'dist' (optional)
  },
});