## tag-group

### Props

| 属性名 | 类型                         | 默认值   | 说明   |
| ------ | ---------------------------- | -------- | ------ |
| data   | ITagGroupDataItem[]          |          | 数据源 |
| effect | 'dark' \| 'light' \| 'plain' | 'light'  | 主题   |
| size   | 'medium' \| 'small'          | 'medium' | 尺寸   |

### Events

| 事件名     | 回调参数           | 说明               |
| ---------- | ------------------ | ------------------ |
| item-click | ITagGroupItemClick | 单个标签的点击事件 |

## Types

### ITagGroupDataItem

```typescript
type ITagGroupDataItem = { name: string; type?: 'success' | 'info' | 'warning' | 'danger' }
```

### ITagGroupItemClick

```typescript
type ITagGroupItemClick = (item: ITagGroupDataItem, index: number, event: Event) => void
```
