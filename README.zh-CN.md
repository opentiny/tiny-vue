<p align="center">
  <a href="https://opentiny.design/tiny-vue" target="_blank" rel="noopener noreferrer">
    <img alt="OpenTiny Logo" src="logo.svg" height="100" style="max-width:100%;">
  </a>
</p>

<p align="center">一套跨端、跨框架的企业级 UI 组件库，支持 Vue 2 和 Vue 3，支持 PC 端和移动端。</p>

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/opentiny/tiny-vue)

[English](README.md) | 简体中文

🌈 特性：

- 📦 包含 104 个简洁、易用、功能强大的组件
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

```html
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
pnpm dev2
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
      <td align="center" valign="top" width="12.5%"><a href="https://acyza.github.io"><img src="https://avatars.githubusercontent.com/u/101238421?v=4?s=100" width="100px;" alt="acyza"/><br /><sub><b>acyza</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=acyza" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/ygj6"><img src="https://avatars.githubusercontent.com/u/7699524?v=4?s=100" width="100px;" alt="ygj6"/><br /><sub><b>ygj6</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=ygj6" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/MrWang2016"><img src="https://avatars.githubusercontent.com/u/24307164?v=4?s=100" width="100px;" alt="MrWang2016"/><br /><sub><b>MrWang2016</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=MrWang2016" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/qinwencheng"><img src="https://avatars.githubusercontent.com/u/24841685?v=4?s=100" width="100px;" alt="qinwencheng"/><br /><sub><b>qinwencheng</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=qinwencheng" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/Huangyilin19"><img src="https://avatars.githubusercontent.com/u/48042709?v=4?s=100" width="100px;" alt="黄怡林"/><br /><sub><b>黄怡林</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=Huangyilin19" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/zuixinwang"><img src="https://avatars.githubusercontent.com/u/59717852?v=4?s=100" width="100px;" alt="zuixinwang"/><br /><sub><b>zuixinwang</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=zuixinwang" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/LadyChatterleyLover"><img src="https://avatars.githubusercontent.com/u/35223515?v=4?s=100" width="100px;" alt="luopei"/><br /><sub><b>luopei</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=LadyChatterleyLover" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://juejin.cn/user/1996368846785128"><img src="https://avatars.githubusercontent.com/u/31237954?v=4?s=100" width="100px;" alt="前端爆冲"/><br /><sub><b>前端爆冲</b></sub></a><br /><a href="#infra-brenner8023" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/xiejay97"><img src="https://avatars.githubusercontent.com/u/64340763?v=4?s=100" width="100px;" alt="Xie Jay"/><br /><sub><b>Xie Jay</b></sub></a><br /><a href="#infra-xiejay97" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/linxiang07"><img src="https://avatars.githubusercontent.com/u/40119767?v=4?s=100" width="100px;" alt="linxiang"/><br /><sub><b>linxiang</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=linxiang07" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://bollome.netlify.app/"><img src="https://avatars.githubusercontent.com/u/103836393?v=4?s=100" width="100px;" alt="程序员包子"/><br /><sub><b>程序员包子</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=coderbaozi" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/pe-3"><img src="https://avatars.githubusercontent.com/u/103579791?v=4?s=100" width="100px;" alt="peter G"/><br /><sub><b>peter G</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=pe-3" title="Code">💻</a> <a href="https://github.com/opentiny/tiny-vue/commits?author=pe-3" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/gimmyhehe"><img src="https://avatars.githubusercontent.com/u/26026184?v=4?s=100" width="100px;" alt="gimmyhehe"/><br /><sub><b>gimmyhehe</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=gimmyhehe" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/KevinAndrewDong"><img src="https://avatars.githubusercontent.com/u/20911103?v=4?s=100" width="100px;" alt="dong"/><br /><sub><b>dong</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=KevinAndrewDong" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="http://www.linglan01.cn"><img src="https://avatars.githubusercontent.com/u/58327088?v=4?s=100" width="100px;" alt="凌览"/><br /><sub><b>凌览</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=CatsAndMice" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/Caesar-ch"><img src="https://avatars.githubusercontent.com/u/74941512?v=4?s=100" width="100px;" alt="Caesar-ch"/><br /><sub><b>Caesar-ch</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=Caesar-ch" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/chenqifeng66"><img src="https://avatars.githubusercontent.com/u/97503755?v=4?s=100" width="100px;" alt="chenqifeng66"/><br /><sub><b>chenqifeng66</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=chenqifeng66" title="Tests">⚠️</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="12.5%"><a href="https://zz-zzzz.github.io/"><img src="https://avatars.githubusercontent.com/u/48228016?v=4?s=100" width="100px;" alt="Zz-ZzzZ"/><br /><sub><b>Zz-ZzzZ</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=Zz-ZzzZ" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/lyx-jay"><img src="https://avatars.githubusercontent.com/u/39766860?v=4?s=100" width="100px;" alt="Lyx"/><br /><sub><b>Lyx</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=lyx-jay" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/chenguang1994"><img src="https://avatars.githubusercontent.com/u/31501915?v=4?s=100" width="100px;" alt="Spark Bill"/><br /><sub><b>Spark Bill</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=chenguang1994" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/Zuowendong"><img src="https://avatars.githubusercontent.com/u/45628596?v=4?s=100" width="100px;" alt="wendZzoo"/><br /><sub><b>wendZzoo</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=Zuowendong" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/gweesin"><img src="https://avatars.githubusercontent.com/u/42909374?v=4?s=100" width="100px;" alt="Gweesin Chan"/><br /><sub><b>Gweesin Chan</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=gweesin" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/Binks123"><img src="https://avatars.githubusercontent.com/u/103343025?v=4?s=100" width="100px;" alt="Binks_"/><br /><sub><b>Binks_</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=Binks123" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/yoyo201626"><img src="https://avatars.githubusercontent.com/u/104079404?v=4?s=100" width="100px;" alt="yoyo"/><br /><sub><b>yoyo</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=yoyo201626" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://hexo.kifroom.icu/"><img src="https://avatars.githubusercontent.com/u/62132584?v=4?s=100" width="100px;" alt="Kif"/><br /><sub><b>Kif</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=wkif" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/jack-zishan"><img src="https://avatars.githubusercontent.com/u/67041206?v=4?s=100" width="100px;" alt="jack-zishan"/><br /><sub><b>jack-zishan</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=jack-zishan" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="http://gradii.com"><img src="https://avatars.githubusercontent.com/u/5467712?v=4?s=100" width="100px;" alt="LinboLen"/><br /><sub><b>LinboLen</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=LinboLen" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/vaebe"><img src="https://avatars.githubusercontent.com/u/52314078?v=4?s=100" width="100px;" alt="vaebe"/><br /><sub><b>vaebe</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=vaebe" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://allenli178.top"><img src="https://avatars.githubusercontent.com/u/53218750?v=4?s=100" width="100px;" alt="YuYan Li"/><br /><sub><b>YuYan Li</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=allenli178" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/shonen7"><img src="https://avatars.githubusercontent.com/u/145949377?v=4?s=100" width="100px;" alt="shonen7"/><br /><sub><b>shonen7</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=shonen7" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/xlearns"><img src="https://avatars.githubusercontent.com/u/62782792?v=4?s=100" width="100px;" alt="xlearns"/><br /><sub><b>xlearns</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=xlearns" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/ianxinnew"><img src="https://avatars.githubusercontent.com/u/146069396?v=4?s=100" width="100px;" alt="tianxin"/><br /><sub><b>tianxin</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=ianxinnew" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/Xppp0217"><img src="https://avatars.githubusercontent.com/u/82315158?v=4?s=100" width="100px;" alt="Xppp0217"/><br /><sub><b>Xppp0217</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=Xppp0217" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/AcWrong02"><img src="https://avatars.githubusercontent.com/u/147061401?v=4?s=100" width="100px;" alt="AcWrong02"/><br /><sub><b>AcWrong02</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/issues?q=author%3AAcWrong02" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/betavs"><img src="https://avatars.githubusercontent.com/u/34408516?v=4?s=100" width="100px;" alt="betavs"/><br /><sub><b>betavs</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=betavs" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/fanbingbing16"><img src="https://avatars.githubusercontent.com/u/84823288?v=4?s=100" width="100px;" alt="fanbingbing16"/><br /><sub><b>fanbingbing16</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=fanbingbing16" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/dyh333"><img src="https://avatars.githubusercontent.com/u/1221313?v=4?s=100" width="100px;" alt="dyh333"/><br /><sub><b>dyh333</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=dyh333" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/betterdancing"><img src="https://avatars.githubusercontent.com/u/25901461?v=4?s=100" width="100px;" alt="betterdancing"/><br /><sub><b>betterdancing</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=betterdancing" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/David-TechNomad"><img src="https://avatars.githubusercontent.com/u/23149356?v=4?s=100" width="100px;" alt="David"/><br /><sub><b>David</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=David-TechNomad" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/falcon-jin"><img src="https://avatars.githubusercontent.com/u/48880836?v=4?s=100" width="100px;" alt="falcon-jin"/><br /><sub><b>falcon-jin</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=falcon-jin" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/wuyiping0628"><img src="https://avatars.githubusercontent.com/u/42107997?v=4?s=100" width="100px;" alt="wuyiping0628"/><br /><sub><b>wuyiping0628</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=wuyiping0628" title="Tests">⚠️</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/James-9696"><img src="https://avatars.githubusercontent.com/u/72028410?v=4?s=100" width="100px;" alt="James"/><br /><sub><b>James</b></sub></a><br /><a href="https://github.com/opentiny/tiny-vue/commits?author=James-9696" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## ❤️ Credits

感谢：

- [element](https://github.com/ElemeFE/element) 项目，它是一个老牌的基于 Vue.js 的组件库，TinyVue 在设计之初借鉴了 Element，并针对 Element 的组件 API 进行兼容。
- [floating-ui](https://github.com/floating-ui/floating-ui) 项目，它是一个轻量级、无依赖、高性能的定位库，TinyVue 的多个组件都是基于 Floating UI 提供的能力。
- [vxe-table](https://github.com/x-extends/vxe-table) 项目，它是一个基于 Vue 的表格组件，支持丰富的功能，TinyVue 的 Grid 组件基于 vxe-table。
- [sortablejs](https://github.com/SortableJS/Sortable) 项目，它是一个功能强大的拖拽库，TinyVue 的 Grid / Transfer / Tabs 等多个组件的拖拽排序功能都基于 Sortable。
- [@adamwathan](https://github.com/adamwathan) 写的文章[《Renderless Components in Vue.js》](https://adamwathan.me/renderless-components-in-vuejs/)，这篇文章启发了 TinyVue 的无渲染组件设计架构，并最终在 TinyVue 项目中实现了跨端、跨框架能力。

## 开源协议

[MIT](LICENSE)
