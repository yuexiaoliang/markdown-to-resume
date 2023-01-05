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
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const url = 'file://' + resolve(__dirname, '../dist/index.html');
  await page.goto(url);

  await page.pdf({
    path: resolve(__dirname, '../dist/岳晓亮个人简历.pdf'),
    format: 'A4',
    displayHeaderFooter: false,
    printBackground: true,
    margin: {
      top: '0',
      bottom: '0',
      left: '0',
      right: '0'
    }
  });

  await browser.close();
};

export const createMD = () => {
  const markdown = new MarkdownIt();
  markdown.use(markdownItContainer, 'container', {
    validate: function (params) {
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

export const md2html = () => {
  const markdown = createMD();

  const readme = fs.readFileSync(resolve(__dirname, './resume.md')).toString();

  return markdown.render(readme);
};
