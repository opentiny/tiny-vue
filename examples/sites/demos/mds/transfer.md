## transfer

### Props

| 属性名                | 类型                                        | 默认值                                                                                                       | 说明                                                                                                                                                                                       |
| --------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| button-texts          | string[]                                    | []                                                                                                           | 通过传入一个2值的字符串数组，自定义左右穿梭按钮的文案                                                                                                                                      |
| columns               | IColumnConfig                               |                                                                                                              | 在渲染类型为 table 时，设置穿梭框表格的列配置                                                                                                                                              |
| data                  | ITransferData[]                             | []                                                                                                           | 左右列表的全量数据源                                                                                                                                                                       |
| drop-config           | IDropConfig                                 |                                                                                                              | 设置穿梭框列表项可拖拽的参数，参见sortablejs插件                                                                                                                                           |
| filter-method         | (query:string, item:object) => boolean      |                                                                                                              | <br> 设置穿梭框的搜索过滤函数，仅在默认列表和嵌套表时有效<br><br> 嵌套树时，请使用treeConfig进行搜索配置<br><br>                                                                           |
| filter-placeholder    | string                                      |                                                                                                              | 启用搜索时，搜索框占位文本                                                                                                                                                                 |
| filterable            | boolean                                     | false                                                                                                        | 是否启用搜索的功能                                                                                                                                                                         |
| format                | object                                      | { <br>&nbsp;&nbsp; noChecked:'${checked}/${total}', <br>&nbsp;&nbsp; hasChecked: '${checked}/${total}' <br>} | 列表顶部勾选状态文案                                                                                                                                                                       |
| left-columns          | IColumnConfig                               |                                                                                                              | 在渲染类型为 table 时，左边表格的列配置,优先级高于 columns                                                                                                                                 |
| left-default-checked  | string[]                                    | []                                                                                                           | 默认左侧列表的已勾选项的 key 数组                                                                                                                                                          |
| pager-op              | IPagerOp                                    | { mode: 'fixed',pageVO: {currentPage: 1,pageSize: 10}                                                        | 在渲染类型为 table 时，设置表格的分页配置                                                                                                                                                  |
| props                 | {key:string, label:string, disabled:string} |                                                                                                              | 数据源的字段别名映射配置                                                                                                                                                                   |
| render                | Table \| Tree                               |                                                                                                              | 设置左右区域的渲染类型,Table 和 Tree 对象需要从组件包中引入相应的组件变量。<br>该属性值的plugin设置为Table时设置渲染为表格;该属性值的 plugin 设置为Tree渲染为树                            |
| render-content        | (h: Vue.h, item: any) => vnode              |                                                                                                              | 数据项的自定义渲染函数                                                                                                                                                                     |
| right-columns         | IColumnConfig                               |                                                                                                              | 在渲染类型为 table 时，右边表格的列配置,优先级高于 columns                                                                                                                                 |
| right-default-checked | string[]                                    | []                                                                                                           | 默认右侧列表的已勾选项的 key 数组                                                                                                                                                          |
| show-all-btn          | boolean                                     | false                                                                                                        | 是否显示全部移动按钮                                                                                                                                                                       |
| show-pager            | boolean                                     | false                                                                                                        | 在渲染类型为 table 时，设置表格是否显示分页                                                                                                                                                |
| target-order          | "original" / "push" / "unshift"             | "original"                                                                                                   | 右侧列表元素的插入排序策略<br><br> &nbsp; 若为 original，则保持与数据源相同的顺序 <br><br> &nbsp; 若为 push，则新加入的元素排在最后 <br><br> &nbsp; 若为 unshift，则新加入的元素排在最前。 |
| titles                | string[]                                    | []                                                                                                           | 自定义列表的标题；不设置titles时，左右列表的标题默认显示为： <code> 列表 1</code>，<code> 列表 2</code>                                                                                    |
| to-left-disable       | boolean                                     | true                                                                                                         | 组件初始化状态下未选中时，默认按钮显示禁用状态                                                                                                                                             |
| to-right-disable      | boolean                                     | true                                                                                                         | 组件初始化状态下未选中时，默认按钮显示禁用状态                                                                                                                                             |
| tree-op               | Tree props                                  |                                                                                                              | 在渲染类型为 tree 时，设置树的相关配置属性                                                                                                                                                 |
| v-model / modelValue  | string[]                                    | []                                                                                                           | 移动到右列表的数据项的key的数组值                                                                                                                                                          |
| panel-style           | Object                                      |                                                                                                              | 指定左右面板容器的样式,当面板的宽度大于外部容器的50%宽度时，面板会自适应容器的宽度。                                                                                                       |
| panel-body-style      | Object                                      |                                                                                                              | 指定面板内容区域的样式                                                                                                                                                                     |
| panel-table-height    | String                                      |                                                                                                              | 嵌套表格时，设置表格的高度值。嵌套表格的默认高度为400px, 当自定义面板内容区域的高度之后，可能会与表格高度不匹配。 可以通过该属性设置一个匹配的表格高度。                                   |

### Events

| 事件名             | 回调参数                                               | 说明                                                                                                                                               |
| ------------------ | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| change             | (value:string[], move:string, keyArray:string[])=>void | 右侧列表元素变化时触发的事件;<br><br> value: 穿梭框右侧数据值列表<br><br> move: 数据移动方向，是left或者right<br><br> keyArray: 被移动的数据值列表 |
| left-check-change  | (checked:string[], statusChanged:string[]) => void     | 左侧列表元素选择时触发的事件;<br><br> checked: 穿梭框左侧被选中的数据值列表<br><br> statusChanged: 穿梭框左侧选中状态发生变化的数据值列表          |
| right-check-change | (checked:string[], statusChanged:string[]) => void     | 右侧列表元素选择时触发的事件;<br><br> checked: 穿梭框右侧被选中的数据值列表<br><br> statusChanged: 穿梭框右侧选中状态发生变化的数据值列表          |

### Methods

| 方法名     | 返回值                 | 说明                                     |
| ---------- | ---------------------- | ---------------------------------------- |
| clearQuery | (name: string) => void | 开启过滤功能时，清空左右面板的搜索关键词 |

### Slots

| 插槽名       | 说明                                            |
| ------------ | ----------------------------------------------- |
| button-panel | 穿梭按钮插槽                                    |
| default      | 数据项的内容插槽，插槽数据上下文为： { option } |
| left-footer  | 左侧列表底部的内容插槽                          |
| left-panel   | 左侧自定义内容插槽                              |
| right-footer | 右侧列表底部的内容插槽                          |
| right-panel  | 右侧自定义内容插槽                              |

## Types

### ITransferData

```typescript
interface ITransferData {
  key: string
  label: string
  disabled: string
  [other: string]: any
}
```

### IDropConfig

```typescript
interface IDropConfig {
  plugin: object // 指定拖放排序的插件Sortable, 该变量通过 import Sortable from 'sortablejs' 导入
}
```

### IPagerOp

```typescript
interface IPagerOp {
  mode: string // 通过 mode 设置分页组件组件渲染模式，不同模式是组件内置的 layout 设置， mode 优先级高于 layout
  pagerCount: number // 总页数
  pageVo: {
    currentPage: number
    pageSize: number
    pageSizes: number[]
    layout: string // 分页组件布局默认值：'total, prev, pager, next, jumper'
  }
}
```
