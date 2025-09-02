import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['jopus.me', 'localhost', '127.0.0.1'],
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
})