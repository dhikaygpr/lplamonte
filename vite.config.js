import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Pastikan base diawali dan diakhiri dengan slash
  base: '/lplamonte/', 
})
