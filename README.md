# markdown-to-resume

Markdown 转 Resume。

## 使用

1. Fork 本仓库 `https://github.com/yuexiaoliang/markdown-to-resume/fork`
1. 克隆你的仓库
1. 安装依赖 `pnpm install`
1. 运行 `pnpm dev` => 修改 `src/resume.md`
1. 仓库中增加名为 *ACTION_TOKEN* 的 *Actions secrets*，参考：[Actions生成 secrets](https://www.jianshu.com/p/5afbd53e1700)
1. 修改 `.github/workflows/gh-pages.yml` 第 *48* 行为 *Github Pages* 要绑定的自定义域名，或删除 *46 - 48* 行
1. 提交代码
1. 启用并运行名为 *gh-pages* 的 *Actions*。
1. 开启仓库的 *Github Pages*

如果一切，恭喜你已经可以了~

## 特性

- 采用 Vite 进行快速开发
- 自动部署 Github Pages
- 自动生成 PDF

## 用到的 markdown-it 插件

- [markdown-it-container](https://github.com/markdown-it/markdown-it-container)
- [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs)
- [markdown-it-imsize](https://github.com/tatsy/markdown-it-imsize)



## 示例

[岳晓亮个人简历](https://resume.yuexiaoliang.com)
