# @opentiny/vue-renderless

为 `TinyVue` 组件提供无渲染逻辑层。

## 可以定制一些组件的全局配置

### 修改弹窗起始层级（z-index）

在入口文件 `main.js` 中添加如下代码：

```js
import PopupManager from '@opentiny/vue-renderless/common/deps/popup-manager'

// 起始层级设置为3000
PopupManager.zIndex = 3000
```
