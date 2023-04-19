import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import paths from "vite-tsconfig-paths"
import fs from "vite-plugin-fs"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), paths(), fs()]
})
