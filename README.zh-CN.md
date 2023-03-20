<p align="center">
  <a href="https://opentiny.design/tiny-vue" target="_blank" rel="noopener noreferrer">
    <img alt="OpenTiny Logo" src="logo.svg" height="100" style="max-width:100%;">
  </a>
</p>

<p align="center">一套跨端、跨框架的企业级 UI 组件库，支持 Vue 2 和 Vue 3，支持 PC 端和移动端。</p>

[English](README.md) | 简体中文

🌈 特性：

- 📦 包含 69 个简洁、易用、功能强大的组件
- 🖖 一套代码同时支持 Vue 2 和 Vue 3
- 🖥️ 一套代码同时支持 PC 端和移动端
- 🌍 支持国际化
- 🎨 支持主题定制
- 📊 组件内部支持配置式开发，可支持低代码平台可视化组件配置
- 💡 采用模板、样式、逻辑分离的跨端、跨框架架构，保障灵活性和可移植性

## 🛠️ 如何使用

### 1. 安装

执行以下命令，安装 Vue 3 版本的 TinyVue 组件库：

```shell
npm i @opentiny/vue@3
```

执行以下命令，安装 Vue 2 版本的 TinyVue 组件库：

```shell
npm i @opentiny/vue@2
```

### 2. 引入和使用

在`App.vue`文件中使用 TinyVue 组件。

```vue
<script lang="ts" setup>
import { Button as TinyButton } from '@opentiny/vue'
</script>

<template>
  <tiny-button>TinyVue</tiny-button>
</template>
```

## 🖥️ 本地开发

```shell
git clone git@github.com:opentiny/tiny-vue.git
cd tiny-vue
npm i --legacy-peer-deps

# 启动 Vue3 项目
npm run dev:vue3

# 启动 Vue2 项目
npm run dev:vue2
```

打开浏览器访问：[http://127.0.0.1:5173/](http://127.0.0.1:5173/)

## 🤝 参与贡献

如果你对我们的开源项目感兴趣，欢迎加入我们！🎉

参与贡献之前请先阅读[贡献指南](CONTRIBUTING.zh-CN.md)。

- 添加官方小助手微信 opentiny-official，加入技术交流群
- 加入邮件列表 opentiny@googlegroups.com

## 开源协议

[MIT](LICENSE)
