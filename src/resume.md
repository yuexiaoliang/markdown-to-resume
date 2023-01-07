:::: {.basic-info}

::: {.left}
# 岳晓亮 {.name}

**求职意向：高级前端 / 25K / 北京** {.target}

- **前端：** 7 年
- **生日：** 1993.02.24
- **籍贯：** 河北张家口
- **手机：** 13932364394
- **邮箱：** 2220124666@qq.com

{.list}
:::

::: {.right}
![岳晓亮](./me.jpg =127x170){.portrait}
:::

::::

:::: {.main-content}

## 工作经历

### 瀚中睿方数据科技（北京）有限公司

**职位：** 高级前端开发工程师

**薪资：** 17K

**时间：** 2021.06 - 2023.01

**地址：** 北京

**工作内容：**

- 担任公司前端负责人（共 3 人）。
- 评估项目需求，制定前端组开发计划，包含估时、排期。
- 作为主力开发，并解决一切前端组问题，包括但不限于前端。
- 根据需要进行新技术预研、引入。

**工作业绩：**

- 封装 10+ 常用组件、10+ 常用图表。
- 作为公司所有前端项目负责人（超过 5 个），从没出过线上事故。
- 重写积分系统，项目复杂度从 O(n) 优化到 O(1)。

### 青云科技有限公司

**职位：** 讲师/前端开发工程师

**薪资：** 10K

**时间：** 2019.03 - 2021.06

**地址：** 张家口

**工作内容：**

- 负责录制《零基础入门 Python 写一个爬虫玩》、《从零开始学习 JavaScript，10 天的前端工程师蜕变之路》、《【响应式网站开发】小成本实现多端兼容》等网络课程，实现累计 50000+ 学习人次。
- 独自从零到一实现“宣化万柳中医门诊部”小程序，项目规模 20+ 页面，开发周期 1 个多月，项目收益 38 万。{style="page-break-after: always"}
- 作为公司超过 5 个前端项目的主要开发人员，包含 WEB、H5、小程序。{data-print style="--print-padding: 50px 0 0 0"}
- 统一前后端接口规范，推动 API 文档平台的使用落地(ShowDoc)。


### 每淘电子商务有限公司

**职位：** 前端工程师

**薪资：** 5K

**时间：** 2018.03 - 2019.02

**地址：** 张家口

**工作内容：**

基于 ecshop 搭建电商系统，并且负责市级长尾关键词 SEO ，实现日均 2500+ IP 访问量。

### 阿拉怪网络科技有限公司

**职位：** 前端工程师

**薪资：** 3K

**时间：** 2015.01 - 2016.04

**地址：** 张家口

**工作内容：**

全权负责公司 60+ 外包网站从零到一上线，并且负责市级长尾关键词 SEO。

## 项目经验

### 积分系统-重写（政府项目）

**时间：** 2022.07 - 2022.09

**技术栈：** Vue3、Pinia、Vue Router、ECharts、ElementPlus、Vite、NodeJS、微信小程序。

**项目介绍：** 帮助全国各个高新区构建的一种精准支持企业创新的新型政策工具，通过对企业创新能力进行量化评价，实现对科技型企业的精准扶持。

**项目职责：**

- 项目前端架构
- 主力开发

**项目架构：**

- 项目分为 PC 端 + 移动端。
- 移动端主要以 Web 为主，运行环境主要在小程序、APP 的 WebView 中。
- 采用 `Monorepo` 的方式进行代码管理。{style="page-break-after: always"}
- 仓库分为 `apps` 以及 `packages` 两部分子包。{data-print style="--print-padding: 50px 0 0 0"}
- `apps` 包含系统级的项目，如：`score-pc`、`score-h5`、`score-weapp` 等。
- `packages` 包含 `apps` 中项目所用的公共部分，如：`score-utils`、`score-apis`、`score-validator`、`score-build`、`hz-components`、`hz-charts`。

**特色功能：**

- 可通过命令行工具选择要打包的高新区、运行环境，或者一键打包全部高新区。
- 根据项目启动参数按需 `import` 对应的静态资源、模块等。
- 基于 `Echarts` 的大屏可视化数据展示。

### 火炬电子围栏（政府项目）

**时间：** 2022.11 - 2022.12

**技术栈：** Vue3、Pinia、Taro、高德地图、微信小程序、NutUI、ElementPlus、Typescript

**项目介绍：** 帮助各高新区以及火炬中心进行地理范围圈选、审核，分为 PC 端、小程序端。

**项目职责：**

- 项目前端负责人。
- 对小程序端主要功能（地图多边形渲染、行走路线绘制）进行技术可行性预研，并开发对应 DEMO 供组员参考。
- 对 PC 端主要功能进行开发。

**特色功能：**

- PC 端：基于高德地图的多边形绘制、编辑、拖拽、复制、面积计算等。
- PC 端：地图海量 `marks` 绘制，用于展示区域内企业。
- 小程序端：基于微信小程序 `map` 组件的地图多边形绘制，绘制方式以人力行走的路线绘制，并最终作为多边形储存，并且可在后台运行。

### 宣化万柳中医门诊部

使用原生小程序开发的互联网医院项目，独立完成从设计到上线测试整个流程。

**时间：** 2021.01 - 2021.03

**技术栈：** 原生小程序、Vant、其他

**项目职责：**

- 全权负责与甲方进行需求对接，并将需求引导向对我方有利的方向
- 根据需求进行为原创设计（其实就是在网上找到符合需求的设计图）
- 从零开发项目所有功能

**主要功能：**

- 就诊人管理
- 预约挂号
- 在线问诊
- 医生详情
- 科室选择 {style="page-break-after: always"}
- 疾病选择 {data-print style="--print-padding: 50px 0 0 0"}

### 汽车美容收银办卡程序（个人项目）

独自开发的汽车美容会馆会员办卡软件，是个完全离线的应用。

**时间：** 2020.06 - 2020.08

**技术栈：** NodeJS、Electron、Low DB

**项目职责：**
从产品设计到项目开发的所有工作

**主要功能：**

- 基于非对称加密的软件激活功能
- 会员管理
- 会员搜索
- 充值统计、消费统计
- 账单统计
- 服务项目管理
- 车牌号管理
- 本地储存管理
- 非会员结算、账单统计

**项目地址：** https://github.com/yuexiaoliang/chemeizhangben

**激活软件项目地址：** https://github.com/yuexiaoliang/chemeizhangben-decod

**激活流程：**
用户购买 => 生成密钥对 => 发送软件包给用户 => 用户安装 => 弹出激活码 => 用户发送激活码 => 通过专用的解密软件进行解密 => 解密并发送给用户激活码

## 开源项目

- [**markdown-to-resume**](https://github.com/yuexiaoliang/markdown-to-resume)：Markdown 转个人简历，本简历（https://resume.yuexiaoliang.com）即是由此而来。
- [**TMW**](https://tmw.li)：打字背单词（https://tmw.li）
- [**table-merge**](https://github.com/yuexiaoliang/table-merge)：极佳、极简、通用的表格合并方案，已提供多个 UI 框架开箱即用。
- [**vite-plugin-import-rewriter**](https://github.com/yuexiaoliang/vite-plugin-import-rewriter)：重写 import 的 vite 插件。
- [**v-per**](https://github.com/yuexiaoliang/v-per)：用来控制权限的 Vue 自定义指令。

## 技能树

Vue生态、小程序、高德地图、uni-app、Taro、TypeScript、Electron、ECharts、Vite、Rollup、Nodejs、NPM、Git。{style="page-break-after: always"}

## 个人优势 {data-print style="--print-padding: 50px 0 0 0"}

**经验丰富：** 前端 7 年、社会 16 年

**热爱学习：** 包括但不限于早通勤看技术书籍、晚通勤看教学视频等。

**代码洁癖：** 个人认为，必须有高效的编程功力才能在项目急迫的时候依然书写出优雅的代码。

**抗压力强：** 只要钱到位，996 也不是不行。

## 社区地址

- **GitHub：** https://github.com/yuexiaoliang
- **NPM：** https://npmjs.com/~yuexiaoliang1993
- **知乎：** https://www.zhihu.com/people/dulegege
- **掘金：** https://juejin.cn/user/1574156384083688

## 致谢

感谢您花时间阅读我的简历，期待能有机会和您共事。

::: {.main-footer}
[下载 PDF 版](岳晓亮个人简历.pdf){download="岳晓亮个人简历.pdf"}

[打印简历](#){#print-button}
:::

::::
