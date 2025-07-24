# 主题配置

<div class="warning custom-block">
  本节文档仅支持 <code> @opentiny/vue@3.19.0 </code> 及其之后版本的主题定制，更早的历史版本的主题配置，请参阅当前文档底部的 <a href='#历史版本的主题配置'>历史版本的主题配置</a>
</div>

为了给开发者带来更好的用户体验，从 <code> @opentiny/vue@3.19.0 </code> 版本开始，组件库的整体风格切换为 `Opentiny Design` 新风格。

<!-- 如果需要使用旧主题风格，可以选择继续使用历史版本，或者参考当前文档的<a href='#OLD 主题配置'>OLD 主题配置</a>进行配置。 -->

在 `TinyVue` 组件库中定义了一组全局 `CSS 变量`，用于统一主题风格，比如字体，颜色，间距，圆角等值，每个组件内部也定义了组件级的`CSS 变量`。

- 全局 `CSS 变量`位于主题包的`base`目录：[base/vars.less](https://github.com/opentiny/tiny-vue/blob/dev/packages/theme/src/base/vars.less)
- 组件级的`CSS 变量` 在每个组件的主题根目录，比如： [button/vars.less](https://github.com/opentiny/tiny-vue/blob/dev/packages/theme/src/button/vars.less)

通过阅读以上源码，可以快速了解组件库有哪些`CSS 变量`可以定制。

## 自定义主题

在用户的工程中，如果需要定制主题风格，或者覆盖某些组件的样式，则可以使用组件库提供的 `TinyThemeTool` 类进行配置用户工程的主题。后续我们也将提供更多的主题供大家选择。

`ThemeData` 是自定义主题数据格式，用户可以通过`data`属性，传入覆盖的全局 `CSS 变量`，通过`css`属性，传入有效的 CSS 规则块。

```ts
interface ThemeData {
  /** 主题的 ID */
  id?: string
  /** 主题的名称 */
  name?: string
  /** 主题的中文名称 */
  cnName?: string
  /**
   * 需要追加的全局 css 变量的对象
   * 比如： { 'tv-base-color-brand' : '#1476ff' } 会追加到 :root { --tv-base....... }
   * */
  data?: Record<string, string>
  /**
   * 需要追加的样式规则，以覆盖或扩充组件的样式
   * 比如： .tiny-button { border:none;  }
   * */
  css?: string
}
```

自定义主题的方式如下：

```ts
import TinyThemeTool from '@opentiny/vue-theme/theme-tool'

const themeTool = new TinyThemeTool()

themeTool.changeTheme({
  name: 'my-app-custom-styles',
  data: {
    'tv-base-color-brand': '#1476ff',
    'tv-font-size-md': '12px',
    'tv-font-size-lg': '16px',
    'tv-font-size-xxl': '20px'
  },
  css: `
    .tiny-button {
      --tv-Button-border-radius: 6px;

      min-width: 80px;
      border:none;
      padding : 2px 20px;
    }
    .tiny-button.tiny-button--primary{
      background-color: #508de3;
    }
  `
})
```

<div class="tip custom-block">
在一些用户项目中，许多开发者会在编写组件和页面的样式时，通过<code>important</code> 和 <code>:deep()</code> 来覆盖某些组件库的样式，这些样式就会散落在各个组件里。在组件库后续版本升级时，可能会调整组件结构或类名，造成样式覆盖失效，不建议这样做。 <br><br>

我们建议用户使用 <code>TinyThemeTool</code> 的方法来覆盖组件样式，这样 CSS 规则会集中在一起，方便后续维护。除此之外，用户也可以将自定义样式统一写在一个 `CSS文件` 中并引入项目，但要保证其中的样式优先级高于组件库的优先级。

</div>

## 微前端场景

默认情况下，`themeTool.changeTheme` 方法，会将自定义样式挂载到当前`document`下。但是在微前端框架中，通常会有样式隔离的机制，比如无界微前端会封装一个 `Web Component` 组件挂载子应用。如果自定义这种场景下的主题时，就必须将样式挂载到子应用的`ShadowRoot`上，用法如下：

```ts
import TinyThemeTool from '@opentiny/vue-theme/theme-tool'

const wujieDom = document.querySelector('wujie-app[data-wujie-id]') //
const target = wujieDom.shadowRoot

const themeTool = new TinyThemeTool()

themeTool.changeTheme(
  {
    name: 'my-app-custom-styles',
    data: {
      // ....
    },
    css: `....`
  },
  target // ----- 挂载点
)
```

## OLD 主题配置

我们不建议用户继续使用旧主题，对于历史项目，我们提供一组旧主题的`CSS变量`,需要用户在工程中适配。

```ts
import TinyThemeTool, { tinyOldTheme } from '@opentiny/vue-theme/theme-tool'

const themeTool = new TinyThemeTool(tinyOldTheme)

// themeTool.changeTheme(tinyOldTheme)  // 效果同上
```

<div class="warning custom-block">
  <p> 旧主题不能 100% 还原历史版本的所有细节，如果用户升级后有较大的影响，可以跟我们反馈，也可以回退使用<code> @opentiny/vue@3.18.0 </code> 版本。</p>
  <p> 如果需要切换 <code>Aurora</code> 主题，可以从上面导出 <code>tinyAuroraTheme</code> 的主题。 </p>
</div>

## 历史版本的主题配置

<div class="danger custom-block">
  本节文档仅支持 <code> @opentiny/vue@3.18.0 </code> 及其之前版本的主题定制
</div>

`TinyVue` 多主题采用的是 `css` 变量，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

主题涉及到的变量，查看方式：

源码：[basic-var.less](https://github.com/opentiny/tiny-vue/blob/v3.18.0/packages/theme/src/base/basic-var.less)

基础样式变量 `npm` 仓库路径：`@opentiny/vue-theme/theme`

## 主题切换（推荐使用第一种）

主题切换的方式有两种：

1、使用预定义主题
2、动态切换主题

目前官方提供 4 套主题：

- 默认主题
- 无限主题 `tinyInfinityTheme`
- 欧若拉主题 `tinyAuroraTheme`
- XDesign 主题 `tinySmbTheme`

### 1、使用预定义主题 (推荐)

通过 alias 使用预定义主题【目前仅支持：欧若拉主题 和 XDesign 主题】

vue.config.js 定义

```js
chainWebpack: (config) => {
  // XDesign 主题
  config.resolve.alias.set('@opentiny/vue-theme', '@opentiny/vue-theme/smb-theme')
  // aurora 主题 则是将以上 smb 主题中的'smb'字符全替换成 'aurora'即可
}
```

vite.config.js 定义

```js
resolve: {
  alias: [
    // XDesign 主题
    {
      find: /\@opentiny\/vue-theme\/(?!(smb))/,
      replacement: '@opentiny/vue-theme/smb-theme/'
    }
  ]
}
```

### 2、动态切换主题（不推荐）

主题初始化和动态切换主题的具体使用方式如下文所示，在 main.ts 文件中增加以下代码。

```js
import TinyThemeTool from '@opentiny/vue-theme/theme-tool'

import { tinySmbTheme } from '@opentiny/vue-theme/theme'

// 导入主题

new TinyThemeTool(tinySmbTheme, 'tinyStyleSheetId') // 初始化主题
```

如果你需要动态切换主题，可以将主题实例对象 theme 挂载到 Vue 实例中，然后在需要切换主题的地方，调用 theme 对象的 changeTheme 方法。

在 main.ts 文件中增加以下代码：

```ts
const theme = new TinyThemeTool(tinySmbTheme, 'tinyStyleSheetId') // 初始化主题
app.config.globalProperties.theme = theme // 将 theme 对象挂到 vue 实例中
```

在需要切换主题的组件中调用 changeTheme 方法进行主题切换。

```ts
import { getCurrentInstance } from 'vue'
import { tinySmbTheme } from '@opentiny/vue-theme/theme'

const theme = getCurrentInstance().appContext.config.globalProperties.theme

const changeTheme = (value) => {
  theme.changeTheme(tinySmbTheme)
}
```

如果你需要自定义自己的主题，可以通过以下方式定义主题对象。

```ts
// 自定义主题数据格式要求
const tinyTestTheme = {
  id: 'tiny-test-theme', // 主题的唯一 id，每个主题必须唯一
  name: 'testTheme', // 主题的英文名称
  cnName: '测试主题', // 主题的中文名称
  data: { 'ti-base-color': '#f2f2f3' } //  主题数据
}
```

初始化主题或者切换主题时都可以使用该主题对象。

```ts
// 初始化主题
new TinyThemeTool(tinyTestTheme, 'tinyStyleSheetId')

// 切换主题
theme.changeTheme(tinyTestTheme)
```

## 自定义 cssvar 变量前缀（用于解决 cssvar 变量冲突的问题）

### vuecli 工程

自定义 loader 文件（custom-loader.js）内容：

```js
module.exports = function (source) {
  let newCode = source
  if (source.includes('--ti-')) {
    newCode = newCode.replaceAll('--ti-', '--tv-')
  }
  return newCode
}
```

vue.config.js 定义

```js
chainWebpack: (config) => {
  config.module
    .rule('custom-cssvar-prefix')
    .test(/\.css$/)
    .use('custom-cssvar-prefix')
    .loader(path.resolve(__dirname, './custom-loader.js'))
    .end()
}
```

### vite 工程

vite.config.js 定义

```js
plugins: [
  {
    name: 'custom-cssvar-prefix',
    enforce: 'pre',
    transform(code, id) {
      let newCode = code
      if (id.includes('@opentiny/vue-theme')) {
        newCode = newCode.replaceAll('--ti-', '--tv-')
      }
      return {
        code: newCode,
        map: null
      }
    }
  }
]
```

## 配置 Design Config（解决交互规范的不同）

有部分组件在不同主题下的图标或者交互不同，需要配置相应的 Design Config。

在 App.vue 文件中增加以下代码：

```html
<script setup lang="ts">
  import { ConfigProvider } from '@opentiny/vue'
  import designSmbConfig from '@opentiny/vue-design-smb'
</script>

<template>
  <config-provider :design="designSmbConfig">
    <my-app></my-app>
  </config-provider>
</template>
```

## 主题定制高阶使用方法

在全局作用域下添加自定义 `css` 变量。

```css
:root {
  --ti-base-color-white: #fefefe;
}
```

出于性能原因，更推荐你在类名下添加自定义 `css` 变量，而不是在全局的 :root 下。

```css
.tiny-test-class {
  --ti-base-color-white: #fefefe;
}
```

如果你只想自定义一个特定的组件，只需为某些组件单独添加内联样式。

```js
<tiny-button style="--ti-base-color-white: #fefefe">Button</tiny-button>
```

如果您想要通过 `js` 控制 `css` 变量，可以这样做：

```js
const el = document.documentElement

// 获取 css 变量
getComputedStyle(el).getPropertyValue('--ti-base-color-white')
// 设置 css 变量
el.style.setProperty('--ti-base-color-white', '#fefefe')
```
