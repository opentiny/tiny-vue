## steps

### Props

| 属性名            | 类型             | 默认值      | 说明                                                                                                                                                     |
| ----------------- | ---------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| active            | number           | -1          | 当前步骤索引，从0开始计数                                                                                                                                |
| advanced          | boolean          | false       | 是否开启高级向导模式                                                                                                                                     |
| content-center    | boolean          | false       | 使步骤条内容默认居中显示                                                                                                                                 |
| count-field       | string           | 'count'     | 条形步骤条里徽标计数对应的字段名                                                                                                                         |
| data              | IStepsItem[]     | []          | 步骤条的数据                                                                                                                                             |
| description-field | String           | description | 描述字段                                                                                                                                                 |
| dot               | Boolean          | false       | 点状形步骤条，当值只支持垂直样式                                                                                                                         |
| duration          | number           | 300         | 节点滚动的持续时间（单位 ms），仅高级向导模式有效                                                                                                        |
| flex              | boolean          | false       | 节点是否自适应宽度                                                                                                                                       |
| itemStyle         | Object           | {}          | 步骤条块的内联样式，数据类型为{ [statusName: string]: styleObject },，不同状态可根据key值差异化配置， key值为status字段的值，value值为对应节点的样式对象 |
| line              | boolean          | false       | 通过 line 设置横向单链型步骤条                                                                                                                           |
| name-field        | string           | 'name'      | 节点名称对应的字段名                                                                                                                                     |
| no-arrow          | Boolean          |             | 添加属性 no-arrow 隐藏左右箭头，在 PC 端按住 shift+鼠标滚轮 进行节点左右滚动，移动端触屏左右滑动即可，仅开启 advanced 高级向导模式有效                   |
| size              | String           |             | line 单链型模式支持 mini、small、medium、large 4 种尺寸，默认值为 medium。advanced 高级向导模式支持 medium、large 2 种尺寸，默认值为 medium              |
| space             | string \| number |             | 节点宽度, 可取值数字、带长度单位数值与百分比，传数字则默认以 px 为长度单位                                                                               |
| status-field      | string           | 'status'    | 数据状态对应的字段名，用于条形步骤条                                                                                                                     |
| vertical          | Boolean          | false       | 是否开启垂直单链型                                                                                                                                       |
| visible-num       | Number           | 5           | 控制信息可见的节点数，默认可见5个                                                                                                                        |

### Events

| 事件名 | 回调参数                                                            | 说明                                                                            |
| ------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| click  | (index: number, node: <a href="#IStepsItem">IStepsItem</a>) => void | 节点点击事件，参数：<li>index: 点击节点的索引</li><li>node：点击节点的数据</li> |

### Slots

| 插槽名       | 说明                                             |
| ------------ | ------------------------------------------------ |
| block-bottom | 滚动块底部插槽，仅开启 advanced 高级向导模式有效 |
| icon         | 单链型圆形节点插槽                               |
| item         | 步骤条数据项插槽，用于条形步骤条                 |
| itemFooter   | 步骤条数据项底部插槽，用于条形步骤条             |
| prefix       | 前置插槽，仅开启 advanced 高级向导模式有效       |

## Types

### IStepsItem

```typescript
interface IStepsItem {
  // 节点数据
  name: string // 节点名称
  status?: IStepsStatus // 节点状态，取值见下面IStepsStatus类型说明
  description?: string // 描述，仅用于单链型步骤条
  count?: number // 节点右上角徽标计数，仅用于默认条形步骤条
}
```

### IStepsStatus

```typescript
type IStepsStatus = 'doing' | 'done' | 'disabled' | 'error' | ''
```
