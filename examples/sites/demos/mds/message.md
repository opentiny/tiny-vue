## message

### Props

| 属性名           | 类型    | 默认值 | 说明                                               |
| ---------------- | ------- | ------ | -------------------------------------------------- |
| duration         | string  | 3000   | 设置提示信息停留时间                               |
| id               | string  |        | 设置唯一的 id 防止重复提示，只对 type=message 有效 |
| message          | string  |        | 设置提示信息                                       |
| show-close       | string  |        | 控制弹窗是否显示关闭图标                           |
| message-closable | boolean | false  | 是否显示关闭按钮，默认值为 false                   |
| status           | IStatus | 'info' | 设置消息状态                                       |

## Types

### IStatus

```typescript
type IStatus = 'info' | 'success' | 'warning' | 'error' | 'loading'
```
