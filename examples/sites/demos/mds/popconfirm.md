## popconfirm

### Props

| 属性名        | 类型               | 默认值  | 说明                             |
| ------------- | ------------------ | ------- | -------------------------------- |
| cancel-button | boolean            | true    | 是否展示取消按钮                 |
| custom-class  | string             |         | 为气泡提示框自定义类名           |
| message       | string             |         | 气泡提示框的内容                 |
| placement     | IPopperPlacement   | 'top'   | 气泡提示框显示位置               |
| reference     | String             |         | 触发弹出层显示的 HTML 元素       |
| title         | string             |         | 设置气泡提示框的标题             |
| trigger       | 'click' \| 'hover' | 'hover' | 气泡提示框显示触发方式           |
| type          | IPopconfirmtype    |         | 提示图标类型，可以传入自定义图标 |
| width         | string \| number   | 350     | 气泡提示框宽度                   |

### Events

| 事件名  | 回调参数                          | 说明                 |
| ------- | --------------------------------- | -------------------- |
| confirm | (state: IPopconfirmState) => void | 点击确认按钮时触发   |
| hide    | (state: IPopconfirmState) => void | 气泡确认框关闭时触发 |
| show    | (state: IPopconfirmState) => void | 气泡确认框显示时触发 |

### Slots

| 插槽名    | 说明                           |
| --------- | ------------------------------ |
| footer    | 底部插槽                       |
| message   | 信息插槽                       |
| reference | 触发气泡提示框显示的 HTML 元素 |

## Types

### IPplacement

```typescript
type IPplacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'
```

### IPopconfirmtype

```typescript
type IPopconfirmtype = 'info' | 'success' | 'warning' | 'error' | Component
```

### IPopconfirmState

```typescript
interface IPopconfirmState {
  showPopover: boolean
}
```
