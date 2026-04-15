## time-line

### Props

| 属性名           | 类型             | 默认值   | 说明                                                                                      |
| ---------------- | ---------------- | -------- | ----------------------------------------------------------------------------------------- |
| active           | number           | -1       | 当前节点索引，从0开始计数                                                                 |
| auto-color-field | String           |          | 显示组件二级标题内容，默认值为 autoColor                                                  |
| data             | ITimelineItem    | []       | 节点数据                                                                                  |
| fold-disabled    | boolean          | false    | 禁用折叠                                                                                  |
| horizontal       | boolean          | true     | 是否水平方向                                                                              |
| limited-nodes    | number \| string | 3        | 折叠后展示的节点个数                                                                      |
| line-width       | string \| number |          | 连接线长度，仅当 text-position 取值为 'right' 时生效，设置后 space 属性失效               |
| name-field       | string           | 'name'   | 节点名称对应的字段名                                                                      |
| node-max         | number \| string | 7        | 最大显示节点数                                                                            |
| only-number      | boolean          | false    | 节点序号是否只显示数字，适用于横向时间线                                                  |
| reverse          | boolean          | false    | 是否逆序排列节点，仅用于竖式时间线                                                        |
| shape            | string           | 'circle' | 圆点外形: 空心圆形或实心圆点，取值分别对应 'circle' \| 'dot'                              |
| show-divider     | boolean          | false    | 是否显示底部指标三角，适用于横向时间线                                                    |
| show-number      | boolean          | true     | 未完成状态的节点是否显示序号                                                              |
| space            | string \| number |          | 节点宽度， 取值为数字、带长度单位的数值字符串和百分比字符串，数字会默认以px为长度单位     |
| start            | number           | 1        | 节点序号起始值                                                                            |
| sub-field        | Boolean          |          | 设置时间线两侧展示                                                                        |
| text-position    | string           |          | 节点文案位置。默认名称和时间分别展示在图标上下方；可选值：'right'，只有名称展示名称在右方 |
| time-field       | string           | 'time'   | 节点时间信息对应的字段名                                                                  |
| tips-field       | String           |          | 显示组件二级标题内容,默认值为 tips                                                        |
| vertical         | boolean          | false    | 是否竖直方向                                                                              |
| description      | string           |          | 时间线描述                                                                                |

### Events

| 事件名 | 回调参数                                                                  | 说明                                                                         |
| ------ | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| click  | (index: number, node: <a href="#ITimelineItem">ITimelineItem</a>) => void | 节点的点击事件，参数：<br />index：点击节点的下标<br /> node： 点击节点数据} |

### Slots

| 插槽名      | 说明                               |
| ----------- | ---------------------------------- |
| default     | 组件默认插槽。组件显示为插槽内容   |
| bottom      | 自定义节点底部内容                 |
| description | 节点描述信息插槽，适用于横向时间线 |
| left        | 自定义节点左侧内容                 |
| right       | 自定义节点右侧内容                 |
| top         | 自定义节点顶部内容                 |

## timeline-item

### Props

| 属性名     | 类型             | 默认值 | 说明                                                                                       |
| ---------- | ---------------- | ------ | ------------------------------------------------------------------------------------------ |
| line-width | string \| number |        | 连接线长度，仅当 timeline 组件 text-position 属性取值为 true 时生效，设置后 space 属性失效 |
| node       | ITimelineItem    |        | 节点数据                                                                                   |
| space      | string \| number |        | 节点宽度， 取值为数字、带长度单位的数值字符串和百分比字符串，数字会默认以px为长度单位      |

## Types

### ITimelineItem

```typescript
interface ITimelineItem {
  name: string // 节点名称
  activeColor: 'success' | 'warning' | 'error' | Component
  time?: string // 节点时间
  error?: boolean // 是否异常状态
  disabled?: boolean // 是否禁用
  type?: ITimelineItemType // 节点类型
}
```

### ITimelineItemType

```typescript
type ITimelineItemType = 'primary' | 'success' | 'warning' | 'error' | 'info'
```
