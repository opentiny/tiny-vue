## filter-panel

### Props

| 属性名                | 类型             | 默认值         | 说明                                                             |
| --------------------- | ---------------- | -------------- | ---------------------------------------------------------------- |
| blank                 | boolean          | false          | 将过滤器背景设置为透明                                           |
| clearable             | boolean          | true           | 是否显示清空按钮                                                 |
| disabled              | boolean          | false          | 是否禁用                                                         |
| label                 | string           |                | 标题                                                             |
| placement             | IPopperPlacement | 'bottom-start' | 下拉面板位置，可选值请参考popover组件的同属性                    |
| popper-append-to-body | boolean          | true           | 下拉面板是否添加到body元素中                                     |
| popper-class          | string           |                | 下拉面板的class                                                  |
| size                  | 'medium'         |                | 过滤器面板的尺寸，可选值：medium（中等尺寸），不设置则为默认尺寸 |
| tip                   | string           |                | 标题右侧的提示信息                                               |
| value                 | string           |                | 显示的值                                                         |

### Events

| 事件名         | 回调参数                   | 说明                 |
| -------------- | -------------------------- | -------------------- |
| handle-clear   | () => void                 | 清除按钮点击事件     |
| visible-change | (visible: boolean) => void | 下拉面板显示隐藏事件 |

### Methods

| 方法名 | 返回值     | 说明               |
| ------ | ---------- | ------------------ |
| hide   | () => void | 隐藏下拉面板的方法 |

### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |
