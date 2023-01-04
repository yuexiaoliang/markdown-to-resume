import { md2html } from './core';
import { createFilter } from 'rollup-pluginutils';

export default function vitePluginResumeBuild() {
  const filter = createFilter(['**/*.md']);
  return {
    name: 'build',

    transformIndexHtml(html) {
      return html.replace('#[content]', md2html());
    },

    transform(md, id) {
      if (!filter(id)) {
        return null;
      }
      return {
        code: `export default ${JSON.stringify(md)};`
      };
    }
  };
}
