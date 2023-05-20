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
pnpm i

# 启动 Vue3 项目
pnpm dev

# 启动 Vue2 项目
pnpm dev:vue2
```

打开浏览器访问：[http://127.0.0.1:7130/](http://127.0.0.1:7130/)

## 🤝 参与贡献

如果你对我们的开源项目感兴趣，欢迎加入我们！🎉

参与贡献之前请先阅读[贡献指南](CONTRIBUTING.zh-CN.md)。

- 添加官方小助手微信 opentiny-official，加入技术交流群
- 加入邮件列表 opentiny@googlegroups.com

## ✨ 贡献者

贡献者是在 OpenTiny 社区中合并了 1 个或多个 PR 的社区成员。

感谢以下 OpenTiny 的贡献者们 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/kagol"><img src="https://avatars.githubusercontent.com/u/9566362?v=4?s=100" width="100px;" alt="Kagol"/><br /><sub><b>Kagol</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=kagol" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/zzcr"><img src="https://avatars.githubusercontent.com/u/18521562?v=4?s=100" width="100px;" alt="ajaxzheng"/><br /><sub><b>ajaxzheng</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=zzcr" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/TC-twwang"><img src="https://avatars.githubusercontent.com/u/42400776?v=4?s=100" width="100px;" alt="TC-twwang"/><br /><sub><b>TC-twwang</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=TC-twwang" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/MNZhu"><img src="https://avatars.githubusercontent.com/u/17588953?v=4?s=100" width="100px;" alt="jacknan"/><br /><sub><b>jacknan</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=MNZhu" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/awspi"><img src="https://avatars.githubusercontent.com/u/66438036?v=4?s=100" width="100px;" alt="Pithy"/><br /><sub><b>Pithy</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=awspi" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/heygsc"><img src="https://avatars.githubusercontent.com/u/103993866?v=4?s=100" width="100px;" alt="heygsc"/><br /><sub><b>heygsc</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=heygsc" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/wwttff"><img src="https://avatars.githubusercontent.com/u/32888622?v=4?s=100" width="100px;" alt="MangoWu"/><br /><sub><b>MangoWu</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=wwttff" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/ErKeLost"><img src="https://avatars.githubusercontent.com/u/66500121?v=4?s=100" width="100px;" alt="ADNY"/><br /><sub><b>ADNY</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=ErKeLost" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/chenxi-20"><img src="https://avatars.githubusercontent.com/u/76168465?v=4?s=100" width="100px;" alt="chenxi-20"/><br /><sub><b>chenxi-20</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=chenxi-20" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/rayhaoqin"><img src="https://avatars.githubusercontent.com/u/46983981?v=4?s=100" width="100px;" alt="Alaray"/><br /><sub><b>Alaray</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=rayhaoqin" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/yuanningning"><img src="https://avatars.githubusercontent.com/u/104059491?v=4?s=100" width="100px;" alt="ing"/><br /><sub><b>ing</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=yuanningning" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/shenjunjian"><img src="https://avatars.githubusercontent.com/u/6848520?v=4?s=100" width="100px;" alt="申君健"/><br /><sub><b>申君健</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=shenjunjian" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/MomoPoppy"><img src="https://avatars.githubusercontent.com/u/125256456?v=4?s=100" width="100px;" alt="MomoPoppy"/><br /><sub><b>MomoPoppy</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=MomoPoppy" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/WXC-Spring"><img src="https://avatars.githubusercontent.com/u/131581326?v=4?s=100" width="100px;" alt="WXC-Spring"/><br /><sub><b>WXC-Spring</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=WXC-Spring" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/GaoNeng-wWw"><img src="https://avatars.githubusercontent.com/u/31283122?v=4?s=100" width="100px;" alt="GaoNeng"/><br /><sub><b>GaoNeng</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=GaoNeng-wWw" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## 开源协议

[MIT](LICENSE)
