import path from 'node:path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const __dirname = import.meta.dirname
const SRC = path.join(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': SRC,
    }
  },
})
