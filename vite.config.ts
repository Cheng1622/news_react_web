import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/dev-api": {
        target: "http://localhost:8888",
        changeOrigin: true, //必须要开启跨域
         //pathRewrite重写请求的路径,实际请求的路径没有代理标识douyu,需要把斗鱼重置为空字符串
        rewrite: (path) => path.replace(/^\/dev-api/, "")
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
})
