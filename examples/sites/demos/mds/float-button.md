## float-button

### Props

| 属性名      | 类型               | 默认值        | 说明                                                                                 |
| ----------- | ------------------ | ------------- | ------------------------------------------------------------------------------------ |
| type        | IFloatButtonType   | --            | 展示按钮不同的状态，设置为text则展示为文本按钮                                       |
| description | string             | --            | 按钮显示的文本                                                                       |
| icon        | Component          | --            | 按钮展示的图标，接收为Icon组件                                                       |
| reset-time  | number             | 1000          | 设置按钮禁用时间，防止重复提交，单位毫秒                                             |
| trigger     | string             | click         | 设置菜单触发模式。                                                                   |
| open        | boolean            | false         | 设置菜单是否打开。                                                                   |
| shape       | 'circle'\|'square' | circle        | 设置按钮形状。                                                                       |
| backTop     | boolean            | false         | 设置是否是回到顶部按钮。                                                             |
| element     | HTMLElement        | document.body | 当backTop设置为true时，此属性设置滚动元素。                                          |
| top         | string             |               | 按钮与顶部的距离。                                                                   |
| bottom      | string             | 20px          | 按钮与底部的距离。                                                                   |
| left        | string             |               | 按钮与左边的距离。                                                                   |
| right       | string             | 20px          | 按钮与右边的距离。                                                                   |
| href        | string             |               | 按钮点击后跳转的页面。                                                               |
| target      | string             |               | 相当于<code>a</code> 标签的 <code>target</code> 属性，<code>href</code> 存在时生效。 |

### Events

| 事件名 | 回调参数                    | 说明                         |
| ------ | --------------------------- | ---------------------------- |
| click  | (event: PointEvent) => void | 当按钮被点击时触发的回调函数 |

### Slots

| 插槽名  | 说明                             |
| ------- | -------------------------------- |
| default | 默认插槽，自定义按钮展开时的内容 |

## Types

### IFloatButtonType

```typescript
type IFloatButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
```
