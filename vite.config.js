// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    outDir: 'build',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'editor',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['node_modules'],
    },
  },
})
