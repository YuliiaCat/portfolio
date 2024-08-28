import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      scr: '/src',
      components: '/src/components',
      modules: '/src/modules',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/scss/common.scss";`
      }
    }
  }
})
