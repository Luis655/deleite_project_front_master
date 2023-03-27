import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default {
  server: {
    mimeTypes: {
      'text/typescript': ['ts'],
      'text/x-typescript': ['ts'],
      'ts': 'application/typescript',
      'tsx': 'application/typescript'
    }
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  
}
