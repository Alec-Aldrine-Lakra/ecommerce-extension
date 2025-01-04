// vite.config.content.ts
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "src/content-scripts/content.tsx"),
      output: {
        format: "iife",
        entryFileNames: "contentScript.js",
      },
    },
    outDir: "dist",
    emptyOutDir: false, // so we don't wipe dist each time
  },
});
