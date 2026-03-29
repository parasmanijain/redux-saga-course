import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // CRA's default build output
    target: "es2022", // Align with TypeScript 6.0 target
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "vendor";
            }
            if (id.includes("redux") || id.includes("@reduxjs")) {
              return "redux";
            }
            if (id.includes("redux-saga")) {
              return "saga";
            }
            return "vendor";
          }
          return undefined;
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@/components": fileURLToPath(
        new URL("./src/components", import.meta.url),
      ),
      "@/actions": fileURLToPath(new URL("./src/actions", import.meta.url)),
      "@/reducers": fileURLToPath(new URL("./src/reducers", import.meta.url)),
      "@/sagas": fileURLToPath(new URL("./src/sagas", import.meta.url)),
      "@/models": fileURLToPath(new URL("./src/models", import.meta.url)),
      "@/api": fileURLToPath(new URL("./src/api", import.meta.url)),
    },
  },
  esbuild: {
    // Enhanced for TypeScript 6.0 - minimal config
  },
  optimizeDeps: {
    include: ["react", "react-dom", "redux", "react-redux", "redux-saga"],
  },
});
