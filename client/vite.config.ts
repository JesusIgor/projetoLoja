import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Defina a porta que preferir
  },
  build: {
    outDir: 'build', // Diretório de saída para produção
  },
  resolve: {
    alias: {
      '@': '/src', // Isso facilita os imports relativos a partir de 'src'
    },
  },
});