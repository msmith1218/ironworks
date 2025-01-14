import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
    sourcemap: true,
    minify: "esbuild",
  },
  base: "/msmith1218.github.io/",
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "^/v\\d+/.*": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      common: `${path.resolve(__dirname, "./src/common/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
    },
  },
});
