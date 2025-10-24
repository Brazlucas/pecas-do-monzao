import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/pecas-do-monzao",
  server: {
    port: 3000
  }
})
