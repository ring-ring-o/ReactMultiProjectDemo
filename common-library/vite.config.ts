import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "common-library",
      fileName: "common-lib"
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        }
      }
    }
  }
})
