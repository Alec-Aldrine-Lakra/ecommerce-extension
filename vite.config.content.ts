// vite.config.content.ts
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@content": path.resolve(__dirname, "src/content-scripts"),
      "@background": path.resolve(__dirname, "src/background-scripts"),
    },
  },
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
