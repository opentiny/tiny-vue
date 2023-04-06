<p align="center">
  <a href="https://opentiny.design/tiny-vue" target="_blank" rel="noopener noreferrer">
    <img alt="OpenTiny Logo" src="logo.svg" height="100" style="max-width:100%;">
  </a>
</p>

<p align="center">An enterprise-class UI component library, support both Vue.js 2 and Vue.js 3, as well as PC and mobile.</p>

English | [简体中文](README.zh-CN.md)

🌈 Features:

- 📦 69 clean, easy-to-use and powerful components.
- 🖖 One code, Support both Vue.js 2 and Vue.js 3.
- 🖥️ One code, Support both PC and Mobile.
- 🌍 Support internationalization.
- 🎨 Support theme customization.
- 📊 Components support configuration development, can support low-code platform.
- 💡 Use a cross-end and cross-framework architecture, flexible and portable.

## 🛠️ Usage

### 1. Installation

Execute the following command to install the TinyVue component library for Vue.js 3.

```shell
npm i @opentiny/vue@3
```

Execute the following command to install the TinyVue component library for Vue.js 2.

```shell
npm i @opentiny/vue@2
```

### 2. Import component

Then you can use the TinyVue component(such as `<tiny-button>`) in the `App.vue` file.

```vue
<script lang="ts" setup>
import { Button as TinyButton } from '@opentiny/vue'
</script>

<template>
  <tiny-button>Tiny Vue</tiny-button>
</template>
```

## 🖥️ Development

```shell
git clone git@github.com:opentiny/tiny-vue.git
cd tiny-vue
pnpm i

# Generate an entry file
pnpm build:entry

# Vue.js 3
pnpm dev

# Vue.js 2
pnpm dev:vue2
```

Open your browser and visit: [http://127.0.0.1:6175/](http://127.0.0.1:6175/)

## 🤝 Contributing

Welcome to join our OpenTiny community!🎉

If you don't know how to start, please read our [contributing guide](CONTRIBUTING.md).

- Add the official assistant WeChat `opentiny-official` and join the technical exchange group.
- Add to the mailing list `opentiny@googlegroups.com`

## License

[MIT](LICENSE)
