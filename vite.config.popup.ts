import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import copy from "rollup-plugin-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      ...copy({
        targets: [
          { src: "manifest.json", dest: "dist" },
          // Copy all icons from assets → dist/assets
          { src: "src/assets/*", dest: "dist/assets" },
        ],
        hook: "writeBundle",
      }),
      enforce: "post", // ensures this runs after build
    },
  ],
  build: {
    rollupOptions: {
      input: { popup: path.resolve(__dirname, "index.html") },
      output: {
        entryFileNames: "[name].js",
      },
    },
    outDir: "dist", // or whatever you want to call it
    emptyOutDir: false,
  },
});
