import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lplamonte/', // PASTIKAN BARIS INI ADA DAN BENAR
})
