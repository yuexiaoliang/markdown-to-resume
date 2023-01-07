import { defineConfig } from 'vite';
import markdownItImsize from 'markdown-it-imsize';

import markdownToResume from './core/vite-plugin';

export default defineConfig({
  base: './',
  plugins: [
    markdownToResume({
      markdown(md) {
        md.use(markdownItImsize);
      },
      pdfName: '岳晓亮个人简历',
      pdfMargin: 0,
      webTitle: '岳晓亮个人简历 - markdown-to-resume'
    })
  ],
  build: {
    assetsDir: './'
  }
});
