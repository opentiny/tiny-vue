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

```ts
pnpm i @opentiny/vue @opentiny/nuxt -D
```

Configure the "@opentiny/nuxt" module in nuxt.config.ts file.

```ts
export default defineNuxtConfig({
  modules: ['@opentiny/nuxt']
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
