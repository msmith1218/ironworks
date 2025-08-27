import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    base: env.VITE_BASE_PATH || "/",
    resolve: {
      alias: {
        common: `${path.resolve(__dirname, "./src/common/")}`,
        components: `${path.resolve(__dirname, "./src/components/")}`,
      },
    },
    plugins: [
      react(),
    ],
  };
});
