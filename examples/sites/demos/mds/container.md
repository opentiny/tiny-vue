## container

### Props

| 属性名        | 类型              | 默认值    | 说明     |
| ------------- | ----------------- | --------- | -------- |
| aside-width   | number \| string  | 200       | 左侧宽度 |
| footer-height | number \| string  | 60        | 底部高度 |
| header-height | number \| string  | 60        | 头部高度 |
| pattern       | IContainerPattern | "default" | 版型类型 |

### Slots

| 插槽名  | 说明         |
| ------- | ------------ |
| aside   | 侧边内容插槽 |
| default | 主要内容插槽 |
| footer  | 底部内容插槽 |
| header  | 头部内容插槽 |

## Types

### IContainerPattern

```typescript
type IContainerPattern = 'default' | 'simple' | 'legend' | 'classic' | 'fashion'
```
