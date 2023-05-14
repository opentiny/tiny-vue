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

# Vue.js 3
pnpm dev

# Vue.js 2
pnpm dev:vue2
```

Open your browser and visit: [http://127.0.0.1:7130/](http://127.0.0.1:7130/)

## 🤝 Contributing

Welcome to join our OpenTiny community!🎉

If you don't know how to start, please read our [contributing guide](CONTRIBUTING.md).

- Add the official assistant WeChat `opentiny-official` and join the technical exchange group.
- Add to the mailing list `opentiny@googlegroups.com`

## ✨ Contributors

Contributors are community members who have 1 or more PR merged in OpenTiny.

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kagol"><img src="https://avatars.githubusercontent.com/u/9566362?v=4?s=100" width="100px;" alt="Kagol"/><br /><sub><b>Kagol</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=kagol" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/zzcr"><img src="https://avatars.githubusercontent.com/u/18521562?v=4?s=100" width="100px;" alt="ajaxzheng"/><br /><sub><b>ajaxzheng</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=zzcr" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/TC-twwang"><img src="https://avatars.githubusercontent.com/u/42400776?v=4?s=100" width="100px;" alt="TC-twwang"/><br /><sub><b>TC-twwang</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=TC-twwang" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MNZhu"><img src="https://avatars.githubusercontent.com/u/17588953?v=4?s=100" width="100px;" alt="jacknan"/><br /><sub><b>jacknan</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=MNZhu" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/awspi"><img src="https://avatars.githubusercontent.com/u/66438036?v=4?s=100" width="100px;" alt="Pithy"/><br /><sub><b>Pithy</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=awspi" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/wwttff"><img src="https://avatars.githubusercontent.com/u/32888622?v=4?s=100" width="100px;" alt="MangoWu"/><br /><sub><b>MangoWu</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=wwttff" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/heygsc"><img src="https://avatars.githubusercontent.com/u/103993866?v=4?s=100" width="100px;" alt="heygsc"/><br /><sub><b>heygsc</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=heygsc" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/wwttff"><img src="https://avatars.githubusercontent.com/u/32888622?v=4?s=100" width="100px;" alt="MangoWu"/><br /><sub><b>MangoWu</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=wwttff" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[MIT](LICENSE)
