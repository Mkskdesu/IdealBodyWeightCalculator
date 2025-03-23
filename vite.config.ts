import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      "Global/": "/src/global/",
      "Pages/": "/src/pages/",
      "Assets/": "/src/assets/",
      "@/": "/src/",
      "Shared": "/shared/"
    }
  }
})
