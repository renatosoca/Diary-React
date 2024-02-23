import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const createAssetsFiles = (assetInfo: { name: string }): string => {
  const allowedExtension = /woff|woff2|png|jpe?g|svg|gif|ico/i;
  let extension = assetInfo.name.split('.').pop();
  if (allowedExtension.test(extension)) {
    extension = 'media';
  }
  return `static/${extension}/[name]-[hash][extname]`;
};

// https://vitejs.dev/config/
export default defineConfig(() => {
  const localPort = 4000;

  return {
    server: {
      host: true,
      port: localPort,
      strictPort: false,
    },
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },

    build: {
      outDir: 'build',
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react'],
            'react-dom': ['react-dom'],
            'react-router-dom': ['react-router-dom'],
          },

          assetFileNames: createAssetsFiles,
          chunkFileNames: 'static/js/[name]-[hash].chunk.js',
          entryFileNames: 'static/js/[name]-[hash].js',
        },
      },
    },
  };
});
