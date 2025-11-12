import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Asegúrate de que el nombre coincida con el repositorio
export default defineConfig({
  plugins: [react()],
  base: '/ramo-de-flores/',
})
