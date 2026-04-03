import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // https://unhospitalized-rohan-prototypic.ngrok-free.dev                                  
  base: "/ecommerce-project/",
  plugins: [react()],
  server :{
    proxy:{ 
      /* '/api':{
        target:'https://unhospitalized-rohan-prototypic.ngrok-free.dev',
        changeOrigin:true
      }, */
      /* '/images':{
        target:'https://unhospitalized-rohan-prototypic.ngrok-free.dev',
        changeOrigin:true
      } */
    }
  }
})
