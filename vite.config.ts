import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Added this if you're using React
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/'
})