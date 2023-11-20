## 切换为 mobile 模式

Tiny Vue 移动组件既存在和 PC 组件同名的组件，也存在不同名的组件。针对于同名组件，组件在渲染时默认加载的是 PC 组件，所以在使用移动组件之前，需要先切换为 mobile 模式，切换方式有如下两种：

### 单组件切换

可在组件标签上配置 `tiny_mode` 为 `mobile` 将该组件切换为 mobile 模式，渲染时就会按照移动组件模板渲染，如下所示：

```html
<tiny-alert tiny_mode="mobile" description="type 为默认值 info"></tiny-alert>
```

### 全局切换

如果按照单组件切换的方式，则每用到一个同名组件时都需要切换，比较麻烦，实际上还可以通过在 Vue 的原型上全局设置 `tiny_mode` 来实现。在 `src/main.js` 文件中 `boot` 之前增加如下代码：

```bash
## Vue 2.0
Vue.prototype.tiny_mode = { value: 'mobile' }

## Vue 3.0
app.config.globalProperties.tiny_mode = { value: 'mobile' }
```
