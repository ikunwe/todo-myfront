import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const allowedHosts = ['todo-myfront-production-c8fe.up.railway.app'];
const port = Number(process.env.PORT) || 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port,
    host: '0.0.0.0',
    allowedHosts,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts,
  }
})
