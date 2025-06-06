import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react({
      // Improve Fast Refresh compatibility
      fastRefresh: true,
      // Babel options to handle edge cases
      babel: {
        parserOpts: {
          plugins: ['decorators-legacy', 'classProperties']
        }
      }
    }),
    runtimeErrorOverlay(),
    themePlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    // Add better error handling for HMR
    hmr: {
      overlay: true,
      // Timeout for HMR connections
      timeout: 60000,
    },
    // Watch options to prevent excessive file watching
    watch: {
      // Ignore node_modules and other large directories
      ignored: ['**/node_modules/**', '**/dist/**', '**/.git/**'],
      // Use polling in WSL environments if needed
      usePolling: process.env.WSL_DISTRO_NAME ? true : false,
      interval: 1000,
    },
  },
  // Optimize deps to prevent unnecessary re-bundling
  optimizeDeps: {
    entries: ['./client/src/main.tsx'],
    exclude: ['@replit/vite-plugin-cartographer'],
  },
});
