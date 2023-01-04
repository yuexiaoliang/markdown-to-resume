// vite.config.js
import { defineConfig } from 'vite';
import resumeBuild from './src/vite-plugin-resume-build';

export default defineConfig({
  base: './',
  plugins: [resumeBuild()]
});
