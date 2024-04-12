## 适配 AUI

### 依赖映射表

目前 TinyVue 已经兼容 AUI，只需替换一下包名和配置一下样式主题，即可获得于 AUI 一致的体验，以下是 TinyVue 包和 AUI 包的映射关系

| TinyVue 包               | AUI 包                |
| ------------------------ | --------------------- |
| @opentiny/vue            | @aurora/vue           |
| @opentiny/vue-renderless | @aurora/renderless    |
| @opentiny/vue-theme      | @aurora/theme         |
| @opentiny/vue-theme-saas | @aurora/theme-sass    |
| @opentiny/vue-icon       | @aurora/vue-icon      |
| @opentiny/vue-icon-saas  | @aurora/vue-icon-saas |

### 使用 Saas 主题

#### 背景

- 随着应用生态特别是手机应用生态的繁荣，以及多样化设备生态的发展，`多端`、`多主题`被提上日程；
- 原有 AUI 推出的主题方案过于臃肿（用户定制主题需要设置一堆的  `cssvar`  变量，因为颜色没有统一，配置多主题的门槛也比较高），后期会基于  [tailwindcss](https://github.com/tailwindlabs/tailwindcss)  对主题变量进行收拢（简化开发者配置）以及工程化改造，使得定制多主题更加简单。目前业内比较成熟的主题方案  [daisyui](https://github.com/saadeghi/daisyui)。

鉴于以上原因， 推出  `SaaS`  主题，如果想体验  `SaaS`  主题可以按照下述文档，进行打包配置更改：

#### 方法一

方案一需要额外安装以下依赖：

- `@opentiny/vue-theme-saas`  主题会对现有组件样式进行细微调整，不会影响原有 DOM 结构以及 API 。
- `@opentiny/vue-icon-saas`  是  `SaaS`  主题风格配套的 icon 图标组件。
- `@opentiny/vue-design-saas`  是  `SaaS`  主题风格配套的设计规范配置。

一、安装 SaaS 主题包：

```shell
yarn add @opentiny/vue-theme-saas @opentiny/vue-icon-saas @opentiny/vue-design-saas
# 或者 npm install @opentiny/vue-theme-saas @opentiny/vue-icon-saas @opentiny/vue-design-saas
```

二、切换到 SaaS 主题包：

```js
// (webpack) vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@opentiny/vue-theme', '@opentiny/vue-theme-saas')
    config.resolve.alias.set('@opentiny/vue-icon', '@opentiny/vue-icon-saas')
  }
}

// (vite) vite.config.js
export default defineConfig({
  resolve: {
    alias: {
      '@opentiny/vue-theme': '@opentiny/vue-theme-saas',
      '@opentiny/vue-icon': '@opentiny/vue-icon-saas'
    }
  }
})
```

三、切换到 Saas 设计规范配置：

```html
<script setup>
  import { ConfigProvider } from '@opentiny/vue'
  import designSaasConfig from '@opentiny/vue-design-saas'
</script>

<template>
  <!-- 注入saas设计规范配置 -->
  <config-provider :design="designSaasConfig">
    <my-app></my-app>
  </config-provider>
</template>
```

### 方法二

方法二需要额外安装以下依赖：

- `@opentiny/vue-theme-saas`  主题会对现有组件样式进行细微调整，不会影响原有 DOM 结构以及 API 。
- `@opentiny/vue-icon-saas`  是  `SaaS`  主题风格配套的 icon 图标组件。
- `@opentiny/vue-common-saas`  是  `SaaS`  主题风格配套的适配层，内联了方法一的`@opentiny/vue-design-saas`。

一、安装 SaaS 主题包：

```shell
yarn add @opentiny/vue-theme-saas @opentiny/vue-icon-saas @opentiny/vue-common-saas
# 或者 npm install @opentiny/vue-theme-saas @opentiny/vue-icon-saas @opentiny/vue-common-saas
```

二、切换到 SaaS 主题包：

```js
// (webpack) vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@opentiny/vue-theme', '@opentiny/vue-theme-saas')
    config.resolve.alias.set('@opentiny/vue-icon', '@opentiny/vue-icon-saas')
    config.resolve.alias.set('@opentiny/vue-common', '@opentiny/vue-common-saas')
  }
}

// (vite) vite.config.js
export default defineConfig({
  resolve: {
    alias: {
      '@opentiny/vue-theme': '@opentiny/vue-theme-saas',
      '@opentiny/vue-icon': '@opentiny/vue-icon-saas',
      '@opentiny/vue-common': '@opentiny/vue-common-saas'
    }
  }
})
```

## 多模式介绍

TinyVue 提供了 PC 和 Mobile 组件库，两套组件库对外是同一份依赖`@opentiny/vue`，同名组件通过`tiny_mode`切换组件模式。  
针对 SaaS 业务场景，TinyVue 提供了基于`tailwind`实现的多端组件，  
在 TinyVue 基础上新增`多端模式`，支持业务切换同名组件，同名组件默认情况下是`桌面模式`即`PC 组件`。

### 模式分类

AUI 组件库提供了三种组件模式：`桌面模式`、`移动模式`、`多端模式`

| 模式     | 模式介绍  | 模式配置     |
| -------- | --------- | ------------ |
| 桌面模式 | 纯 PC     | pc           |
| 移动模式 | 纯 mobile | mobile       |
| 多端模式 | 多端一致  | mobile-first |

### 模式切换

AUI 组件模式设置优先级

`单组件切换` > `模式透传` > `全局切换` > `组件默认模式`

#### 单组件切换

可在组件标签上配置`tiny_mode`属性，指定组件模式，就会选择对应模板渲染：

- 桌面模式：`pc`
- 移动模式：`mobile`
- 多端模式：`mobile-first`

参考示例如下：

```html
<tiny-button tiny_mode="mobile-first">默认按钮</tiny-button>
```

#### 全局切换

通过在 Vue 的原型上全局设置`tiny_mode`，可以指定所有同名组件的默认模式。  
在项目入口  `src/main.js`  文件中导入 Vue 依赖后，增加如下配置：

```js
// Vue 2.0
Vue.prototype.tiny_mode = { value: 'mobile-first' }

// Vue 3.0
app.config.globalProperties.tiny_mode = { value: 'mobile-first' }
```

#### 模式透传

如果想在页面部分区域切换模式，如卡片级控制，  
可以在外层 AUI 组件上添加`tiny_mode_root`属性，透传当前 AUI 组件的`tiny_mode`配置到所有子级 AUI 组件上，  
参考 demo 示例如下：

```html
<template>
  <div>
    <tiny-layout>
      <tiny-row tiny_mode="pc" tiny_mode_root>
        <tiny-button>PC按钮</tiny-button>
        <tiny-button type="primary" native-type="submit">主要按钮</tiny-button>
        <tiny-button type="success">成功按钮</tiny-button>
        <tiny-button type="info">信息按钮</tiny-button>
        <tiny-button type="warning">警告按钮</tiny-button>
        <tiny-button type="danger">危险按钮</tiny-button>
      </tiny-row>
      <tiny-row tiny_mode="mobile-first" tiny_mode_root>
        <tiny-button>多端按钮</tiny-button>
        <tiny-button type="primary" native-type="submit">主要按钮</tiny-button>
        <tiny-button type="success">成功按钮</tiny-button>
        <tiny-button type="info">信息按钮</tiny-button>
        <tiny-button type="warning">警告按钮</tiny-button>
        <tiny-button type="danger">危险按钮</tiny-button>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script>
  import { Button, Layout, Row } from '@opentiny/vue'

  export default {
    components: {
      TinyButton: Button,
      TinyLayout: Layout,
      TinyRow: Row
    }
  }
</script>
```
