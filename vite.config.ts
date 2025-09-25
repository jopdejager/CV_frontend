import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5918,
    allowedHosts: ['jopus.me', 'localhost', '127.0.0.1'],
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
})