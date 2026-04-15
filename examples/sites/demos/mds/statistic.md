## statistic

### Props

| 属性名      | 类型                 | 默认值 | 说明             |
| ----------- | -------------------- | ------ | ---------------- |
| value       | number \| string     | 0      | 数字显示内容     |
| precision   | number               |        | 精度值           |
| title       | string \| ITitleType |        | 设置数字内容标题 |
| prefix      | string               |        | 设置数字内容前缀 |
| suffix      | string               |        | 设置数字内容后缀 |
| value-style | object \| array      |        | 设置数字样式     |

### Slots

| 插槽名 | 说明             |
| ------ | ---------------- |
| prefix | 数字内容前置插槽 |
| suffix | 数字内容后置插槽 |
| title  | 数字内容标题插槽 |

## Types

### ITitleType

```typescript
interface ITitleType {
  value?: string // 标题文本
  position?: string // 标题位置，取值：top | bottom
}
```
