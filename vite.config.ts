import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  base: "/PersonalFinanceApp",
  resolve: {
    alias: {
      common: `${path.resolve(__dirname, "./src/common/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
    },
  },
  plugins: [
    react(),
  ],
});
