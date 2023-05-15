// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
export default defineConfig({
  plugins: [dts()],
  build: {
    outDir: 'build',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'nottie',
      formats: ['cjs', 'es', 'umd'],
    },
    rollupOptions: {
      external: ['node_modules'],
    },
  },
})
