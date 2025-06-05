import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/manual-tecnico/' // 👈 obligatorio para GitHub Pages
})
