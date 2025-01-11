# 常见问题

## 1、弹出元素在无界微前端中发生错位、翻转

**原因：** 弹出类的元素，存在一个边界检测逻辑，在子应用中，`window` 的宽高可能会比视口小得多，
因此会错误判断边界，导致翻转和错位等问题。

**解决方案：** 引入 `popup` 全局配置，将主应用的 `window` 赋值给全局配置的 `viewportWindow` 用于边界判断

```js
import globalConfig from '@opentiny/vue-renderless/common/global'

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
