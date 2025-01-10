# 常见问题

## 1、弹出元素在无界微前端中发生错位、翻转

_原因：_ 弹出类的元素，存在一个边界检测逻辑，在子应用中，`window` 的宽高可能会比视口小得多，
因此会错误判断边界，导致翻转和错位等问题。

_解决方案:_ 引入 popup 全局配置，将主应用的 `window` 赋值给全局配置的 `viewportWindow` 用于边界判断

```js
import globalConfig from '@opentiny/vue-renderless/common/global'

// 需要判断是否在子应用当中
if (window.__POWERED_BY_WUJIE__) {
  // 子应用中可以通过 window.parent 获取主应用的 window
  globalConfig.viewportWindow = window.parent
}
```

## 2、在vitepress中，引用opentiny组件包，使用vitepress打包命令:pnpm docs:build，报错：ERR_UNSUPPORTED_DIR_IMPORT

_原因：_ 使用vitepress打包，找不到组件包内文件相关引用的js/css等后缀路径。导致报错：ERR_UNSUPPORTED_DIR_IMPORT

_解决方案:_ 通过配置`vitepress/config.js`文件，解决报错问题：

```js
export default defineConfig({
  vite: {
    ssr: {
      noExternal: [/@opentiny\//]
    }
  }
})
```
