import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // atau plugin lain jika bukan react

export default defineConfig({
  plugins: [react()],
  base: '/lplamonte/', // Nama repo Anda harus ada di sini
})
