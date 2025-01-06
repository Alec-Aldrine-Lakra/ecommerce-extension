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
      input: { userForm: path.resolve(__dirname, "upload.html") },
      output: {
        entryFileNames: "[name].js",
      },
    },
    outDir: "dist",
    emptyOutDir: false, // so we don't wipe dist each time
  },
});
