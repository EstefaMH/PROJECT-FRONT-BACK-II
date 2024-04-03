import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@pages',
        replacement: path.resolve(path.join(__dirname , '/src/pages')),
      },
      {
        find: '@components',
        replacement: path.resolve(path.join(__dirname , '/src/components')),
      },
      {
        find: '@assets',
        replacement: path.resolve(path.join(__dirname , '/src/assets')),
      },


    ]
  }
})
