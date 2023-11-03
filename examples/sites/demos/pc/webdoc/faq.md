## 常见问题

### 1、弹出元素在无界微前端中发生错位、翻转

_原因：_ 弹出类的元素，存在一个边界检测逻辑，在子应用中，`window` 的宽高可能会比视口小得多，
因此会错误判断边界，导致翻转和错位等问题。

_解决方案:_ 引入 popup 全局配置，将主应用的 `window` 赋值给全局配置的 `viewportWindow` 用于边界判断

```js
import globalConfig from '@opentiny/vue-renderless/common/global'

// 需要判断是否在子应用当中
if (window.__POWERED_BY_WUJIE__) {
  // 子应用中可以通过window.parent获取主应用的window
  globalConfig.viewportWindow = window.parent
}
```
