import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: 'index-vite.html',  
  },
  build: {
    rollupOptions: {
      input: 'index-vite.html'
    }
  },
  css: {
    postcss: {}
  }
})