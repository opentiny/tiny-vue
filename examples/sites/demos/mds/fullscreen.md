## fullscreen

### Props

| 属性名                | 类型    | 默认值 | 说明                                                                      |
| --------------------- | ------- | ------ | ------------------------------------------------------------------------- |
| exit-on-click-wrapper | boolean |        | 组件式使用时，点击组件 wrapper 是否关闭全屏显示。默认为 true              |
| fullscreen            | boolean |        | 组件式使用时，控制组件是否全屏显示。默认为 false                          |
| fullscreen-class      | string  |        | 自定义组件 wrapper 的样式类名                                             |
| page-only             | boolean |        | 显示模式。true 为网页全屏，false 为浏览器全屏。默认值为 false             |
| teleport              | boolean |        | 是否将目标元素移动到 body 下。true 为移动，false 为不移动。默认值为 false |
| z-index               | number  |        | 在全屏显示时，目标元素的 zIndex                                           |

### Events

| 事件名            | 回调参数                   | 说明                               |
| ----------------- | -------------------------- | ---------------------------------- |
| before-change     | (done: () => void) => void | 拦截事件                           |
| update:fullscreen |                            | 组件式使用时，更新 fullscreen 属性 |

### Methods

| 方法名 | 返回值 | 说明                       |
| ------ | ------ | -------------------------- |
| toggle |        | 函数式使用时，切换全屏模式 |

### Slots

| 插槽名  | 说明                                  |
| ------- | ------------------------------------- |
| default | 自定义内容，需要在 layout 中列出 slot |
