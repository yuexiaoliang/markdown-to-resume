# markdown-to-resume

Markdown 转个人简历。

## 特性

- 基于 Vite 的开发、简历预览、打包的丝滑体验
- 生成 HTML、PDF
- 基于 Github Actions 实现的 Github Pages 自动部署以及 PDF 自动生成

## 使用方式

1. Fork 本仓库 `https://github.com/yuexiaoliang/markdown-to-resume/fork` 并 Clone。
1. 安装依赖 `pnpm install`。
1. 运行 `pnpm dev`。
1. 修改 `src/resume.md`。
1. 仓库中增加名为 *ACTION_TOKEN* 的 *Actions secrets*，参考：[Actions生成 secrets](https://www.jianshu.com/p/5afbd53e1700)。
1. 修改 `.github/workflows/gh-pages.yml` 第 *48* 行为 *Github Pages* 要绑定的自定义域名，或删除 *46 - 48* 行。
1. 提交代码。
1. 启用并运行名为 *gh-pages* 的 *Actions*。
1. 开启仓库的 *Github Pages*。

如果一切顺利，恭喜你已经可以了~

## 配置

**配置文件：** `vite.config.js`

所有配置都需要在 Vite 的插件配置中进行，目前支持的配置如下：

```js
import { defineConfig } from 'vite';
import resumeBuild from './src/plugin';
import markdownItImsize from 'markdown-it-imsize';

export default defineConfig({
  base: './',
  plugins: [
    resumeBuild({
      // 对 markdown-it 的实例进行配置
      markdown(md) {
        // 增加一个 markdown-it 插件
        md.use(markdownItImsize);
      },

      // 生成的 PDf 名称
      pdfName: '岳晓亮个人简历',

      // PDF 的边距，会被 `@page { margin: 0px; }` 样式覆盖
      pdfMargin: 0,

      // 生成的 HTML 的 Title
      webTitle: '岳晓亮个人简历 - markdown-to-resume'
    })
  ]
});
```

## Markdown 编写

本项目使用 `markdown-it` 进行解析，并且默认安装了某些 `markdown-it` 插件对 Markdown 进行语法增强。

### markdown-it-container

增强布局

使用前：
``` html
<!-- render after -->
# 岳晓亮
求职意向：高级前端 / 25K / 北京

<!-- render before -->
<h1>岳晓亮</h1>
<p>求职意向：高级前端 / 25K / 北京</p>
```

使用后：
``` html
<!-- render after -->
:::
# 岳晓亮
求职意向：高级前端 / 25K / 北京
:::

<!-- render before -->
<div class="container">
  <h1>岳晓亮</h1>
  <p>求职意向：高级前端 / 25K / 北京</p>
</div>
```

### markdown-it-attrs

添加 `html` 属性，如：`class` 、 `id`。

使用前：
``` html
<!-- render after -->
:::
# 岳晓亮
求职意向：高级前端 / 25K / 北京
:::

<!-- render before -->
<div class="container">
  <h1>岳晓亮</h1>
  <p>求职意向：高级前端 / 25K / 北京</p>
</div>
```

使用后：
``` html
<!-- render after -->
::: {.header}
# 岳晓亮 {.name}
求职意向：高级前端 / 25K / 北京
:::

<!-- render before -->
<div class="header">
  <h1 class="name">岳晓亮</h1>
  <p>求职意向：高级前端 / 25K / 北京</p>
</div>
```

## 示例

[岳晓亮个人简历](https://resume.yuexiaoliang.com)
