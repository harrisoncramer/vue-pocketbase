import path from 'node:path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

const __dirname = import.meta.dirname
const SRC = path.join(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    outDir: "pb_public",
  },
  resolve: {
    alias: {
      '@': SRC,
    }
  },
})
