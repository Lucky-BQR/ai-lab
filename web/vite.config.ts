import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // 开发时把 /api 转发给本地 Spring Boot，前端代码里只写相对路径，避免跨域
    proxy: {
      '/api': 'http://localhost:8090',
    },
  },
})
