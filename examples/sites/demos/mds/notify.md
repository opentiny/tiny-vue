## notify

### Props

| 属性名         | 类型                                                         | 默认值         | 说明                                                                                                                       |
| -------------- | ------------------------------------------------------------ | -------------- | -------------------------------------------------------------------------------------------------------------------------- |
| closeIcon      | Component                                                    | IconClose      | 关闭图标组件对象                                                                                                           |
| customClass    | string                                                       |                | 自定义样式类                                                                                                               |
| debounceDelay  | number                                                       | 0              | 启用防抖                                                                                                                   |
| duration       | number                                                       |                | 通知自动关闭时间，单位毫秒数。 默认情况， <code>success info </code> 延时5秒 <code> warning error </code> 延时10秒自动关闭 |
| message        | INotifyMessage                                               |                | 通知消息文本，可用 jsx 定制                                                                                                |
| position       | 'top-right' \| 'bottom-right' \| 'top-left' \| 'bottom-left' | 'bottom-right' | 通知显示位置                                                                                                               |
| showClose      | boolean                                                      | true           | 是否显示关闭按钮                                                                                                           |
| showIcon       | boolean                                                      | true           | 是否显示类型图标                                                                                                           |
| statusIcon     | Component                                                    | IconInfoSolid  | 类型图标组件对象                                                                                                           |
| title          | INotifyTitle                                                 |                | 通知消息标题，可用 jsx 定制                                                                                                |
| type           | 'info' \| 'success' \| 'warning' \| 'error'                  | 'info'         | 通知消息类型                                                                                                               |
| verticalOffset | number \| string                                             | 16             | 设置垂直方向偏离距离,单位 px                                                                                               |

### Events

| 事件名      | 回调参数   | 说明                                  |
| ----------- | ---------- | ------------------------------------- |
| beforeClose | () => void | 关闭前回调方法，返回 false 可阻止关闭 |
| onClose     | () => void | 关闭 notify 时触发的事件              |

## Types

### INotifyTitle

```typescript
type INotifyTitle = string | (h: Vue.h, params: { titleClass: string, vm }) => JSX.Element
```

### INotifyMessage

```typescript
type INotifyMessage = string | (h: Vue.h, params: { messageClass: string, vm }) => JSX.Element
```
