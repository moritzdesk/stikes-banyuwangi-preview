import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Dengarkan 127.0.0.1 eksplisit (bukan cuma localhost) agar satu host
  // dengan CMS (127.0.0.1:3000) — syarat cookie auth admin bar (same-site).
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
})
