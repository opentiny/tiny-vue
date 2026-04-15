## skeleton

### Props

| 属性名     | 类型                 | 默认值 | 说明                                                                                                   |
| ---------- | -------------------- | ------ | ------------------------------------------------------------------------------------------------------ |
| animated   | boolean              | true   | 是否开启动画                                                                                           |
| avatar     | boolean              | false  | 是否显示头像                                                                                           |
| loading    | boolean              | true   | 是否显示骨架屏，传 false 时会展示加载完成后的内容                                                      |
| rows       | number               | 3      | 默认样式，可配置段落显示行数                                                                           |
| rows-width | number[] \| string[] | []     | 自定义段落每一行的宽度，数组中的每一项可以为 number 或 string ，当为 number 时，组件会自动增加 px 单位 |

### Slots

| 插槽名      | 说明                 |
| ----------- | -------------------- |
| default     | 加载完成后显示的内容 |
| placeholder | 自定义骨架屏结构     |

## skeleton-item

### Props

| 属性名  | 类型     | 默认值   | 说明                                    |
| ------- | -------- | -------- | --------------------------------------- |
| size    | ISize    | 'medium' | 针对 image 和 circle 形态，内置三种大小 |
| variant | IVariant | 'square' | 骨架屏形态                              |

### Slots

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 自定义图像 |

## Types

### IVariant

```typescript
type IVariant = 'image' | 'circle' | 'square'
```

### ISize

```typescript
type ISize = 'large' | 'medium' | 'small'
```
