import path from 'node:path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

const SRC = path.join(__dirname, 'src')

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    outDir: "../pb_public",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': SRC,
    }
  },
})
