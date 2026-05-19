import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Custom plugin to handle Decap CMS local dev redirect
const decapCmsRedirectPlugin = () => ({
  name: 'decap-cms-redirect',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // Normalize URL (strip query parameters if any)
      const urlPath = req.url.split('?')[0]
      if (urlPath === '/admin') {
        // Redirect to /admin/ with trailing slash so Decap CMS resolves base URL correctly
        res.writeHead(301, { Location: '/admin/' })
        res.end()
        return
      }
      if (urlPath === '/admin/') {
        req.url = '/admin/index.html'
      }
      next()
    })
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), decapCmsRedirectPlugin()],
})
