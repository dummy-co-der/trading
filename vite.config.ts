import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from 'url';
import path from 'path';
import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '#components': path.resolve(__dirname, 'src/components'),
      '#common': path.resolve(__dirname, 'src/common'),
      '#pages': path.resolve(__dirname, 'src/pages'),
      '#constants': path.resolve(__dirname, 'src/constants'),
      '#interfaces': path.resolve(__dirname, 'src/interfaces'),
      '#context': path.resolve(__dirname, 'src/context'),
      '#utils': path.resolve(__dirname, 'src/utils'),
    }
  }
});
