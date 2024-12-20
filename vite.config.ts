import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/styles/variables.scss';` // Nếu bạn đang sử dụng SCSS
      },
    },
  },
  server: {
    port: 4200, // Đổi cổng tại đây (ví dụ: 3000)
  },
})
