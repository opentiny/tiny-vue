## 主题配置

`TinyVue` 多主题采用的是 `css` 变量，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

主题涉及到的变量，查看方式：

源码：[basic-var.less](https://github.com/opentiny/tiny-vue/blob/dev/packages/theme/src/base/basic-var.less)

基础样式变量 `npm` 仓库路径：`@opentiny/vue-theme/theme`

### 主题切换（推荐使用第一种）

主题切换的方式有两种：

1、使用预定义主题
2、动态切换主题

目前官方提供 4 套主题：

- 默认主题
- 无限主题 `tinyInfinityTheme`
- 欧若拉主题 `tinyAuroraTheme`
- XDesign 主题 `tinySmbTheme`

#### 1、使用预定义主题 (推荐)

通过 alias 使用预定义主题【目前仅支持：欧若拉主题 和 XDesign 主题】

vue.config.js 定义

```js
chainWebpack: (config) => {
  // XDesign 主题
  config.resolve.alias.set('@opentiny/vue-theme', '@opentiny/vue-theme/smb-theme')
  // aurora 主题 则是将以上smb主题中的'smb'字符全替换成 'aurora'即可
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

#### 2、动态切换主题（不推荐）

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
  id: 'tiny-test-theme', // 主题的唯一id，每个主题必须唯一
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

### 自定义cssvar变量前缀（用于解决cssvar变量冲突的问题）

#### vuecli工程

自定义loader文件（custom-loader.js）内容：

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

#### vite工程

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

### 配置 Design Config （解决交互规范的不同）

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

### 主题定制高阶使用方法

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
