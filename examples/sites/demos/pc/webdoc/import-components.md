<!--anchor:on-->

# 引入组件

`TinyVue` 支持自动导入、多组件引入、单组件引入以及完整引入四种方式。

## 自动导入（推荐）

首先你需要安装 `@opentiny/unplugin-tiny-vue` 这款插件，还需要安装两个 `unplugin` 官方的插件包。

```bash
# 注意 @opentiny/unplugin-tiny-vue 版本号需要大于等于v1.0.0
npm i @opentiny/unplugin-tiny-vue unplugin-auto-import unplugin-vue-components -D
```

然后把以下代码插入到你项目的 `Vite` 或 `Webpack` 配置文件中。

实现效果类似于单组件引入：`TinyVueSingleResolver('TinyModal') => import TinyModal from '@opentiny/vue-modal'`

Vite

```js
// vite.config.js
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { TinyVueSingleResolver } from '@opentiny/unplugin-tiny-vue'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [TinyVueSingleResolver]
    }),
    AutoImport({
      resolvers: [TinyVueSingleResolver]
    })
  ]
})
```

Webpack

```js
// webpack.config.js
const Components = require('unplugin-vue-components/webpack')
const AutoImport = require('unplugin-auto-import/webpack')
const { TinyVueSingleResolver } = require('@opentiny/unplugin-tiny-vue')

module.exports = {
  plugins: [
    Components({
      resolvers: [TinyVueSingleResolver]
    }),
    AutoImport({
      resolvers: [TinyVueSingleResolver]
    })
  ]
}
```

#### 温馨提示

因为 `pnpm` 工程的特点之一是：项目中显示引入的依赖需要提前在 `package.json` 中声明（防止幽灵依赖），所以在 `pnpm` 工程使用该插件时需要在 `package.json` 中声明项目用到的每一个 `TinyVue` 组件依赖（`TinyVue` 每个组件都是一个 `npm` 包）。依赖声明可以参考以下配置：

```json
{
  "dependencies": {
    "@opentiny/vue-button": "~3.x.x",
    "@opentiny/vue-alert": "~3.x.x",
    "@opentiny/vue-input": "~3.x.x",
    ...
  }
}
```

想了解更多自动按需导入的信息，请参考：
[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)、
[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)、
[unplugin-tiny-vue](https://github.com/opentiny/unplugin-tiny-vue)

## 多组件引入

<div class="tip custom-block">
<p>温馨提示：带有 Tiny 前缀的组件导出自 3.17.0 开始支持。若使用之前版本，需使用别名。</p>
<p>例如：<code>import { Button as TinyButton } from '@opentiny/vue'</code></p>
</div>

多组件引用即从依赖包 `@opentiny/vue` 中引用多个组件，参考示例如下（以 `TinyButton` 和 `TinyAlert` 组件为例）：

```html
<template>
  <div>
    <tiny-button>TinyVue</tiny-button>
    <tiny-alert description="TinyVue"></tiny-alert>
  </div>
</template>

<script>
  import { TinyButton, TinyAlert } from '@opentiny/vue'

  export default {
    components: {
      TinyButton,
      TinyAlert
    }
  }
</script>
```

## `vite` 工程多组件引入按需加载和打包配置方法

通过配置 `@opentiny/vue-vite-import` 插件可以按需只打包 pc 或者移动的组件，减少组件库打包后的体积。

执行以下命令安装 `TinyVue` 按需加载和打包的 `vite` 插件

```bash
yarn add @opentiny/vue-vite-import
# 或者
npm install @opentiny/vue-vite-import
```

修改项目的 `vite.config.js` ，添加以下代码：

```js
import vue from '@vitejs/plugin-vue'
import importPlugin from '@opentiny/vue-vite-import'

export default {
  resolve: {
    extensions: ['.js', '.jsx', '.vue']
  },
  plugins: [
    vue(),
    importPlugin(
      [
        {
          libraryName: '@opentiny/vue'
        },
        {
          libraryName: `@opentiny/vue-icon`,
          customName: (name) => {
            return `@opentiny/vue-icon/lib/${name.replace(/^icon-/, '')}.js`
          }
        }
      ],
      'pc' // 此配置非必选，按需配置 (pc|mobile|mobile-first)
    )
  ]
}
```

## 单组件引入

`TinyVue` 每个组件都可以独立安装、独立使用，即只安装单个组件的依赖并单独引用该组件。

以 `Button` 和 `Alert` 组件为例，执行以下命令安装：

```bash
yarn add @opentiny/vue-button @opentiny/vue-alert
# 或者
npm install @opentiny/vue-button @opentiny/vue-alert
```

在页面中的使用 `Button` 和 `Alert` 组件的示例如下：

```html
<template>
  <div>
    <tiny-button>TinyVue</tiny-button>
    <tiny-alert description="TinyVue"></tiny-alert>
  </div>
</template>

<script>
  import Button from '@opentiny/vue-button'
  import Alert from '@opentiny/vue-alert'

  export default {
    components: {
      TinyButton: Button,
      TinyAlert: Alert
    }
  }
</script>
```

## 完整引入（不推荐）

完整引入组件后，就不需每个页面都 import 组件和局部注册，只需在 `main.js` 中全局注册，但因此会失去 `tree-shaking` 的能力，打包后会有冗余代码。

`Vue 3.0` 版本完整引入的示例如下：

```js
import { createApp } from 'vue'
import TinyVue from '@opentiny/vue'

const app = createApp(App)
app.use(TinyVue)
```

`Vue 2.0` 版本完整引入的示例如下：

```js
import Vue from 'vue'
import TinyVue from '@opentiny/vue'

Vue.use(TinyVue)
```
