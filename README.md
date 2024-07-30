# markdown-to-resume

Markdown 转个人简历。

## 特性

- 基于 **Vite** 的开发、简历预览、打包的丝滑体验。
- 生成 **HTML**、**PDF**。
- 基于 **Github Actions** 实现的 **Github Pages** 自动部署以及 **PDF** 自动生成。

## 使用方式

### 创建简历

``` bash
pnpm create markdown-to-resume
```

### 编辑简历

1. 启动服务 `pnpm dev`

1. 编辑 `src/resume.md`


### 配置自动部署

仓库创建以后需要手动进行一次 **Github Pages** 配置，如下简单几步即可：

  1. 提交代码到 `master` 分支，等待 **Github Action** 完成构建后会生成 `gh-pages` 分支。
  1. 配置 **Github Pages**，选择 `gh-pages` 分支。

如果一切顺利，恭喜你之后只需要：修改 => 提交 => 等待自动部署完成

### 配置自定义域名

> 请确认你的域名已经进行了正确解析。

##### 修改 `.github/workflows/gh-pages.yml`

``` yml {6:line-numbers}
- name: Deploy to GitHub Pages
  uses: crazy-max/ghaction-github-pages@v4.0.0
  with:
    target_branch: gh-pages
    build_dir: dist
    fqdn: resume.yuexiaoliang.com
```
将 `fqdn` 修改为你的域名，例如：`resume.yuexiaoliang.com`，如果不需要请注释或者删除。

##### 配置 Github Pages

将 **Github Pages** 的 `Custom domain` 填写为和 `fqdn` 相同的域名，这里是 `resume.yuexiaoliang.com`。

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

### PDF 分页问题

在进行 PDF 预览的时候，有些成块的内容会被自动分页给隔开，导致预览效果不佳，可以使用如下方式手动进行分页：

1. 在需要分页的内容后边增加 `{style="page-break-after: always"}` 可实现 PDF 分页。
1. 如果需要调整 PDF 当前页的边距，可以使用 `{data-print style="--print-padding: 50px 0 0 0"}`。

## 示例

[岳晓亮个人简历](https://resume.yuexiaoliang.com)
