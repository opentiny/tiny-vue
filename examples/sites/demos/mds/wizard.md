## wizard

### Props

| 属性名         | 类型        | 默认值 | 说明           |
| -------------- | ----------- | ------ | -------------- |
| data           | IDataItem[] |        | 设置节点数据   |
| page-guide     | boolean     | false  | 设置页向导模式 |
| time-line-flow | boolean     | false  | 设置时间线     |
| vertical       | boolean     | false  | 设置为垂直模式 |

### Events

| 事件名     | 回调参数                                               | 说明                                                                                        |
| ---------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| btn-next   | (datas: IDataItem[]) => void                           | 页向导模式下，点击“下一步”按钮触发的回调事件                                                |
| btn-prev   | (datas: IDataItem[]) => void                           | 页向导模式下，点击“上一步”按钮触发的回调事件                                                |
| btn-save   | (datas: IDataItem[]) => void                           | 页向导模式下，点击“保存”按钮触发的回调事件                                                  |
| btn-submit | (datas: IDataItem[]) => void                           | 页向导模式下，点击“下一步”导致最后一个节点的状态为 "doing" 时，点击“提交”按钮触发的回调事件 |
| node-click | (node: IDataItem, index: number, event: Event) => void | 节点点击事件                                                                                |

### Slots

| 插槽名     | 说明               |
| ---------- | ------------------ |
| base       | 基本插槽           |
| stepbutton | 页向导模式按钮插槽 |

## Types

### IDataItem

```typescript
interface IDataItem {
  name: string
  status: string
  showNode?: boolean
  content?: string
  imgUrl?: string
  users?: string
  userName?: string
  roleNumber?: string
  date?: string
  values?: IDataItemValuesItem[]
}

interface IDataItemValuesItem {
  text: string
  value: string
}
```
