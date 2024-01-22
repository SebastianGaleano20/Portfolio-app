import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  resolve(),
  commonjs()],
  build: {
    rollupOptions: {
      external: ["emailjs"],
    },
  },
});