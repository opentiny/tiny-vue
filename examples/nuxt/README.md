<p align="center">
  <a href="https://opentiny.design/tiny-vue" target="_blank" rel="noopener noreferrer">
    <img alt="OpenTiny Logo" src="../../logo.svg" height="100" style="max-width:100%;">
  </a>
</p>

<p align="center">An enterprise-class UI component library, support both Vue.js 2 and Vue.js 3, as well as PC and mobile.</p>

# TinyVue Nuxt

> [TinyVue](https://opentiny.design/tiny-vue/zh-CN/smb-theme/overview) module for [Nuxt](https://nuxt.com)

## Features

- Automatically import components and styles on demand.
- Automatically import directives and styles on demand.
- Automatically import icons from [@opentiny/vue-icon](https://github.com/opentiny/tiny-vue/tree/dev/packages/vue-icon).

## Installation

Install @opentiny/vue and @opentiny/nuxt dependencies.

```bash
pnpm i @opentiny/vue @opentiny/nuxt -D
```

Configure the "@opentiny/nuxt" module in nuxt.config.ts file.

```ts
export default defineNuxtConfig({
  build: {
    transpile: [/@opentiny/]
  }
})
```

Now you can use Tinyvue components in your nuxt-app.

## Usage

```vue
<template>
  <tiny-layout>
    <p>基本按钮</p>
    <tiny-row>
      <tiny-button type="primary" native-type="submit"> 主要按钮 </tiny-button>
      <tiny-button> 次要按钮 </tiny-button>
      <tiny-button type="success"> 成功按钮 </tiny-button>
      <tiny-button type="info"> 信息按钮 </tiny-button>
      <tiny-button type="warning"> 警告按钮 </tiny-button>
      <tiny-button type="danger"> 危险按钮 </tiny-button>
    </tiny-row>
  </tiny-layout>
</template>
```

Refer to the [Nuxt documentation](https://nuxt.com/docs/guide/directory-structure/components) use.

## Development

- Run `pnpm i` to install the dependencies.
- Run `pnpm dev:prepare` to generate type stubs.
- Run `pnpm dev` to start playground in development mode.
- Run `pnpm dev:build` to build playground.
- Run `pnpm build` to build this project.

# 贡献指南

十分感谢您愿意贡献本项目，阅读本指南有助于您更好的参与贡献。

## 前置准备

### Clone仓库

- 点击TinyVue代码仓库 (https://github.com/opentiny/tiny-vue) 右上角的Fork按钮，将上游仓库Fork到个人仓库
- Clone个人仓库到本地

### 依赖安装

- TINY-VUE根目录运行如下代码，安装依赖

```bash
pnpm i
```

- 从根目录进入plyaground文件夹

```bash
cd examples/nuxt/playground
```

- 运行如下代码，启动本地代码编译开发

```bash
pnpm run dev
```

### 关键代码说明

- module.ts文件

在您的应用程序中自动注册本地模块，这是在构建应用程序时放置您开发的任何本地模块的好地方，而无需将这些本地模块单独添加到 nuxt.config.ts 中。

在本项目代码中，这个文件的主要作用是定义一个 Nuxt 模块，允许用户在使用 Vite 或 Webpack 作为构建工具时，自动导入以 Tiny 开头的 Vue 组件。

- nuxt.config.ts文件

nuxt.config.ts 文件是一个 Nuxt.js 项目的配置文件，主要用于设置 Vite 构建工具的相关选项和插件。在本项目中，该文件主要有以下功能：

1、Vite 插件配置: 使用多个 Vite 插件来增强开发体验。

2、模块解析:

- 配置模块解析的扩展名，包括 .js, .ts, .tsx, 和 .vue。
- 定义了别名，使得项目中引用路径更简洁，尤其是针对常用库和本地模块。

3、优化依赖: 使用 getOptimizeDeps 函数优化依赖项的处理，提高构建性能。

### 发布Alpha版本验证

若要验证nuxt插件功能，可发布 @opentiny/vue 和 @opentiny/nuxt 测试包（详情见Nuxt构建发包指南），并在 Nuxt3 项目中安装和使用 TinyVue。

- 初始化nuxt3项目

```dash
npx nuxi@latest init nuxt-demo-tiny-vue
```

- 安装和使用TinyVue步骤详见Installation

# Nuxt构建发包指南

## 发布@opentiny/nuxt

步骤如下：

1、构建产物

在项目根目录运行如下命令

```bash
pnpm build:nuxt
```

也可进入examples/nuxt文件夹，运行如下命令

```bash
pnpm build
```

这个命令会将产物生成在nuxt/dist文件夹中

2、发布测试包

有时我们会发布一些测试包来测试构建产物是否能正常使用，您可以根据以下指引来进行测试。

- 自增package.json中的version版本号

```json
"version": "1.0.1"//例如将1.0.0->1.0.1
```

- 将package.json文件中的name字段由@opentiny替换成@xxx（@xxx为您的名称）

```json
"name": "@xxx/nuxt" //将@opentiny/nuxt替换成@xxx/nuxt
```

- 检查npm是否为官方原始镜像源

查看当前的镜像源

```bash
npm config get registry
```

切换为npm官方原始镜像

```bash
npm config set registry https://registry.npmjs.org/
```

- 先去npm官网注册账号：https://www.npmjs.com/ 或者通过终端命令注册（详细步骤可搜教程）

```bash
npm adduser
```

- 在终端登录npm账号

```bash
npm login
```

- 运行发包命令（有可能会因为网络问题发布失败，建议更换网络多试几次）

```bash
npm publish --access=public
```

3、发布正式包

与发布测试包相同，只是不需要替换@opentiny前缀
