import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
 plugins: [react()],
 clearScreen: false,
 server: {
  host: '127.0.0.1',
  port: 5173,
  strictPort: true,
  fs: {
   deny: ['.env', '.env.*', '*.{crt,pem}', '**/.git/**', '**/.private/**', '**/*.cv.json', '**/*.zip'],
  },
  watch: { ignored: ['**/src-tauri/**'] },
 },
});
