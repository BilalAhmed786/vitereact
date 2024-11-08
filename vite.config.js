// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 80, // set to 80 if you want it directly accessible on HTTP
    host: true,
  },
});
