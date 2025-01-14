import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
// https://vite.dev/config/
export default defineConfig({
  base: "/PersonalFinanceApp/",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "./service-worker.js", // correct path to this file.
          dest: "./", // root of your output directory
        },
      ],
    }),
  ],
});
