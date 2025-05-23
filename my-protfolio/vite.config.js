import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    host: '0.0.0.0', // Allows access from other devices on your network
    port: 5173, // You can change this to another port if needed
  }
})
