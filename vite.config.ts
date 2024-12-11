import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import the Vite React plugin

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    target: 'esnext',  // Ensures modern JavaScript features are used
    minify: 'esbuild', // Fast minification with esbuild
    cssCodeSplit: true, // Split CSS for better caching
    sourcemap: false,   // Avoid sourcemaps in production for faster loads
    chunkSizeWarningLimit: 500,  // Increase chunk size limit if necessary
  },
  server: {
    port: 5173,
  },
});
