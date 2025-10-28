# 常见问题

## 1、弹出元素在无界微前端中发生错位、翻转

**原因：** 弹出类的元素，存在一个边界检测逻辑，在子应用中，`window` 的宽高可能会比视口小得多，
因此会错误判断边界，导致翻转和错位等问题。

**解决方案：** 引入 `popup` 全局配置，将主应用的 `window` 赋值给全局配置的 `viewportWindow` 用于边界判断

```js
import { globalConfig } from '@opentiny/utils'

// 需要判断是否在子应用当中
if (window.__POWERED_BY_WUJIE__) {
  // 子应用中可以通过 window.parent 获取主应用的 window
  globalConfig.viewportWindow = window.parent
}
```

## 2、在 `Vitepress` 项目中，引用 `Opentiny` 组件包，使用 `Vitepress` 打包命令：`pnpm docs:build`，导致报错：`ERR_UNSUPPORTED_DIR_IMPORT`

**原因：** 找不到组件包内引用相关文件的 `js/css/...` 等后缀路径，报错语句：`Error [ERR_UNSUPPORTED_DIR_IMPORT]: Directory import 'xxx' is not supported resolving ES modules imported from xxx/lib/index.js`

**解决方案：** 在`.vitepress/config.js`文件中，加入以下代码：

```js
export default defineConfig({
  vite: {
    // ...
    ssr: {
      noExternal: [/@opentiny\//]
    }
  }
})
```

## 3、配置 `change-compat` 为 `true` 触发事件

默认情况下，代码逻辑更改响应式变量的值，组件不会触发对应事件，例如当修改 `Pager` 组件的 `current-page` 时，不会触发 `current-change` 事件。仅当交互行为发生后，才会触发对应事件。
可以将 `change-compat` 设置为 `true` 在上述情况下触发事件。

```html
<template>
  <div>
    <tiny-button @click="currentPage = 1">改变current-page</tiny-button>
    <tiny-pager
      :total="100"
      :current-page="currentPage"
      mode="number"
      change-compat
      @current-change="dataChangeTrigger"
    ></tiny-pager>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { TinyPager, TinyModal, TinyButton } from '@opentiny/vue'

  const currentPage = ref(10)

  const dataChangeTrigger = () => {
    TinyModal.message({
      message: 'current-change 事件触发',
      status: 'info'
    })
  }
</script>

<style scoped>
  .tiny-button {
    margin-bottom: 12px;
  }
</style>
```

## 4、`webpack` 无法解析富文本组件相关依赖包

`webpack`、`vue-cli` 默认不会解析转换 `node_modules` 中的依赖包，导致在工程中无法识别 `quill` 和 `@opentiny/fluent-editor` 包中的 `javascript` 高级语法。

可以通过在 `vue.config.js` 文件中增加如下配置解决：

```js
module.exports = {
  transpileDependencies: ['@opentiny/fluent-editor', 'quill']
}
```

## 5、通过 `@opentiny/utils` 配置 `xss` 白名单（v3.21.0 开始支持）

目前进行严格的过滤，建议使用 `JS-XSS` 进行处理。对不符合要求的代码片段做删除处理，若开发者在开发期间有其他 `HTML` 标签确认安全（富文本场景）的需求场景，由开发者手动配置 `xss` 白名单。

使用 `@opentiny/utils` 中的 `setXssOption` 方法传入自定义的 `xss` 白名单，示例：

```js
import { xss } from '@opentiny/utils'

const options = {
  enableAttrs: true,
  enableHtml: true,
  enableUrl: true,

  html: {
    whiteList: {
      a: ['class', 'style', 'contenteditable', 'data-id', 'data-title', 'data-size', 'href', 'data-last-modified'],
      img: ['class', 'style', 'src']
    }
  }
}

xss.setXssOption(options)
```

## 6、多组件库混用场景中的命名冲突问题

**问题描述：** 在同时使用多个组件库(如 TinyVue 和 ElementUI)时,由于各组件库都会在 Vue 实例上挂载全局方法(如 `$modal`、`$message` 等),容易造成命名冲突。

**解决方案：** TinyVue 提供了自定义前缀的配置方式,可以通过设置 `$TinyModalApiPrefix` 来修改默认的方法名前缀,避免冲突。

```js
// vue3下解决方案
app.config.globalProperties.$TinyModalApiPrefix = 'tiny_'

// vue2下解决方案
Vue.prototype.$TinyModalApiPrefix = 'tiny_'
```
