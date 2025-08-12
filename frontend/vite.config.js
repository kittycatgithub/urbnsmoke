import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  preview: {
    allowedHosts: ['saudihotels.shop', 'www.saudihotels.shop']
  },
  server: {
    host: '0.0.0.0', // allows access from other devices
    // port: 5173 //for localhost
     port: 6173 //for server
  }
})


