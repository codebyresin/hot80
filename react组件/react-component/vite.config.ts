import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // 路径别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // 开发服务器
  server: {
    port: 5173,
    host: true,
    open: true,
  },

  // 依赖预构建
  optimizeDeps: {
    include: ["react", "react-dom"],
  },

  // 构建
  build: {
    outDir: "dist",
    rollupOptions: {
      // 入口文件，Vite 默认以 index.html 为入口（其内 script 指向 src/main.tsx）
      input: path.resolve(__dirname, "index.html"),
      output: {
        // 分包策略：将 React 等框架代码单独打包
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
        },
        //  chunks 命名规则，便于调试和缓存
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
      },
    },
    // 分包大小告警阈值，便于发现异常大包
    chunkSizeWarningLimit: 500,
    // 构建目标
    target: "es2020",
    // 生成 sourcemap，便于生产环境调试
    sourcemap: false,
    // 压缩
    minify: "esbuild",
  },

  // CSS
  css: {
    devSourcemap: true,
  },

  // 日志级别
  logLevel: "info",
});
