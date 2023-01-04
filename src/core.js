import fs from 'fs-extra';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import puppeteer from 'puppeteer';

import MarkdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItContainer from 'markdown-it-container';
import markdownItImsize from 'markdown-it-imsize';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const buildPDF = async () => {
  const html = fs.readFileSync(resolve(__dirname, '../dist/index.html')).toString();

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: resolve(__dirname, '../dist/assets/岳晓亮个人简历.pdf'),
    format: 'A4',
    displayHeaderFooter: false,
    printBackground: true,
    margin: {
      top: '0.4in',
      bottom: '0.4in',
      left: '0.4in',
      right: '0.4in'
    }
  });

  await browser.close();
};

export const createMD = () => {
  const markdown = new MarkdownIt();
  markdown.use(markdownItContainer, 'container', {
    validate: function (params) {
      // const reg = /^\{.*\}(.*)$/;
      const reg = /^.*$/;
      return reg.test(params.trim());
    },

    render: function (tokens, idx) {
      const token = tokens?.[idx];
      const attrs = token?.attrs;

      if (!attrs?.length) {
        if (token.nesting === 1) {
          return '<div class="container">\n';
        } else {
          return '</div>\n';
        }
      }

      let attrsStr = '';
      attrs.forEach(([key, val]) => {
        attrsStr += ` ${key}="${val}"`;
      });

      if (token.nesting === 1) {
        return `<div${attrsStr}>\n`;
      } else {
        return `</div>\n`;
      }
    }
  });
  markdown.use(markdownItAttrs);
  markdown.use(markdownItImsize);

  return markdown;
};

export const buildHTML = async () => {
  const markdown = createMD();

  const readme = fs.readFileSync(resolve(__dirname, './README.md')).toString();

  const template = fs.readFileSync(resolve(__dirname, '../index.html')).toString();

  const html = template.replace('#[content]', markdown.render(readme));

  fs.writeFileSync(resolve(__dirname, '../dist/index.html'), html, 'utf-8');
};

export const createDir = () => {
  const outputPath = resolve(__dirname, '../dist');
  if (fs.pathExistsSync(outputPath)) fs.removeSync(outputPath);
  fs.mkdir(outputPath);
  fs.copySync(resolve(__dirname, 'assets'), resolve(outputPath, 'assets'));
};

export const buildAll = async () => {
  createDir();
  await buildHTML();
  await buildPDF();
};
