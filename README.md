<p align="center">
  <a href="https://tinyuidesign.cloudbu.huawei.com/" target="_blank" rel="noopener noreferrer">
    <img alt="TinyVue Logo" src="logo.svg" height="100" style="max-width:100%;">
  </a>
</p>

<p align="center">Tiny Vue 是一个基于 Vue 的 UI 组件库，可以同时支持 Vue 2.0 和 Vue 3.0。</p>

特性：

- 包含 69 个简洁、易用、功能强大的组件
- 同时支持 Vue2 和 Vue3
- 支持国际化
- 支持主题定制
- 组件内部支持配置式开发，特别适合低代码平台可视化组件配置
- 采用模板、样式、逻辑分离的跨端跨框架架构，保障灵活性和可移植性

## 如何使用

### 1. 安装

执行以下命令，安装 Vue 3.0 版本的 Tiny Vue 组件库：

```shell
npm i @opentiny/vue
```

执行以下命令，安装 Vue 2.0 版本的 Tiny Vue 组件库 ：

```shell
npm i @opentiny/vue@2
```

### 2. 引入和使用

在`App.vue`文件中使用 Tiny Vue 组件。

```vue
<script lang="ts" setup>
import { Button as TinyButton } from '@opentiny/vue'
</script>

<template>
  <tiny-button>Tiny Vue</tiny-button>
</template>
```

## 本地开发

```shell
git clone git@github.com:opentiny/tiny-vue.git
cd tiny-vue
npm i --force

# 启动 Vue3 项目
npm run dev:vue3

# 启动 Vue2 项目
npm run dev:vue2
```

打开浏览器访问：[http://127.0.0.1:5173/](http://127.0.0.1:5173/)

## 参与贡献

如果你对我们的开源项目感兴趣，欢迎加入我们！

参与贡献之前请先阅读[贡献指南](CONTRIBUTING.md)。

- 添加官方小助手微信 opentiny，加入技术交流群
- 加入邮件列表 opentiny@googlegroups.com

## 开源协议

[MIT](LICENSE)
