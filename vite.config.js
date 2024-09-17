import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css'

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

export default defineConfig({
  plugins: [react(), libInjectCss(),],
  build: {
    copyPublicDir: false,
    rollupOptions: {
        external: ['react', 'react/jsx-runtime'],
        input: Object.fromEntries(
          glob.sync('lib/**/*.{js,jsx}').map(file => [
            relative(
              'lib',
              file.slice(0, file.length - extname(file).length)
            ),
            fileURLToPath(new URL(file, import.meta.url))
          ])
        ),
        output: {
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: '[name].js',
        }
    },
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      formats: ['es']
    }
  }
})