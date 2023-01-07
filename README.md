# markdown-to-resume

Markdown 转个人简历。

## 特性

- 采用 Vite 进行快速开发
- 自动部署 Github Pages
- 自动生成 HTML
- 自动生成 PDF

## 使用

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

## Markdown 编写

本项目使用 `markdown-it` 进行解析，以及必要的插件进行 Markdown 语法增强。

### markdown-it-container

增强布局

使用前：
``` html
<!-- render after -->
# 张麻子
求职意向：高级前端 / 25K / 北京

<!-- render before -->
<h1>张麻子</h1>
<p>求职意向：高级前端 / 25K / 北京</p>
```

使用后：
``` html
<!-- render after -->
:::
# 张麻子
求职意向：高级前端 / 25K / 北京
:::

<!-- render before -->
<div class="container">
  <h1>张麻子</h1>
  <p>求职意向：高级前端 / 25K / 北京</p>
</div>
```

### markdown-it-imsize

添加 `html` 属性，如：`class` 、 `id`。

使用前：
``` html
<!-- render after -->
:::
# 张麻子
求职意向：高级前端 / 25K / 北京
:::

<!-- render before -->
<div class="container">
  <h1>张麻子</h1>
  <p>求职意向：高级前端 / 25K / 北京</p>
</div>
```

使用后：
``` html
<!-- render after -->
::: {.header}
# 张麻子 {.name}
求职意向：高级前端 / 25K / 北京
:::

<!-- render before -->
<div class="header">
  <h1 class="name">张麻子</h1>
  <p>求职意向：高级前端 / 25K / 北京</p>
</div>
```

## 示例

[岳晓亮个人简历](https://resume.yuexiaoliang.com)
