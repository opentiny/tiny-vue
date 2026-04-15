## cascader

### Props

| 属性名                | 类型                                                   | 默认值   | 说明                                                                                                |
| --------------------- | ------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------- |
|                       |                                                        |          |                                                                                                     |
| before-filter         | (value: string) => boolean \| Promise                  |          | 筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选               |
| blank                 | boolean                                                | false    | shape='filter' 时生效，设置过滤器模式背景为透明                                                     |
| clearable             | boolean                                                | false    | 是否支持清空选项                                                                                    |
| collapse-tags         | boolean                                                | false    | 多选模式下是否折叠 Tag                                                                              |
| debounce              | number                                                 | 300      | 搜索关键词输入的去抖延迟，单位毫秒                                                                  |
| disabled              | boolean                                                | false    | 是否禁用                                                                                            |
| filter-method         | (node: ICascaderPanelNode, keyword: string) => boolean |          | 自定义搜索逻辑，第一个参数是节点 node，第二个参数是搜索关键词 keyword，通过返回布尔值表示是否命中   |
| filterable            | boolean                                                |          | 是否可搜索选项                                                                                      |
| label                 | string                                                 |          | shape='filter' 时生效，可传入 label 显示标题                                                        |
| level-title           | string[]                                               | []       | 小屏时，为组件每一级数据指定级联标题                                                                |
| modelValue / v-model  | ICascaderPanelNodePropValue                            |          | 选中项绑定值, 其类型由 props.multiple、props.emitPath 共同决定                                      |
| options               | ICascaderPanelData[]                                   |          | 可选项数据源，键名可通过 Props 属性配置                                                             |
| placeholder           | string                                                 | '请选择' | 输入框占位文本                                                                                      |
| popper-append-to-body | boolean                                                | true     | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件) |
| popper-class          | string                                                 |          | 为 popper 添加类名(可参考 popover 组件)                                                             |
| props                 | ICascaderPanelConfig                                   |          | 配置选项，具体见 ICascaderPanelConfig 表                                                            |
| separator             | string                                                 | '/'      | 选项分隔符                                                                                          |
| shape                 | 'filter'                                               |          | 通过 shape='filter' 属性切换至过滤器模式                                                            |
| show-all-levels       | boolean                                                | true     | 输入框中是否显示选中值的完整路径                                                                    |
| show-header           | boolean                                                | true     | 小屏时，是否显示标题                                                                                |
| size                  | 'medium' \| 'small' \| 'mini'                          |          | 尺寸                                                                                                |
| tip                   | string                                                 |          | shape='filter' 时生效，可传入 tip 显示提示信息                                                      |
| title                 | string                                                 | ''       | 小屏时，弹窗顶部的标题名字                                                                          |

### Events

| 事件名         | 回调参数                                         | 说明                        |
| -------------- | ------------------------------------------------ | --------------------------- |
| blur           | (event: FocusEvent) => void                      | 当失去焦点时触发            |
| change         | (value: ICascaderPanelNodePropValue) => void     | 当选中节点变化时触发        |
| expand-change  | (value: ICascaderPanelNodeValue[]) => void       | 当展开节点发生变化时触发    |
| focus          | (event: FocusEvent) => void                      | 当获得焦点时触发            |
| remove-tag     | (removeValue: ICascaderPanelNodeValue[]) => void | 在多选模式下，移除Tag时触发 |
| visible-change | (visible: boolean) => void                       | 下拉框出现/隐藏时触发       |

### Methods

| 方法名          | 返回值                                              | 说明           |
| --------------- | --------------------------------------------------- | -------------- |
| getCheckedNodes | (leafOnly: boolean = false) => ICascaderPanelNode[] | 获取选中的节点 |

### Slots

| 插槽名  | 说明                                                                                                                    |
| ------- | ----------------------------------------------------------------------------------------------------------------------- |
| default | 自定义备选项的节点内容，参数为 { node: ICascaderPanelNode, data: ICascaderPanelData }，分别为当前节点的 Node 对象和数据 |
| empty   | 无匹配选项时的内容                                                                                                      |
| no-data | 通过 <code>no-data</code> 插槽设置没有数据时显示的内容                                                                  |

## ICascaderPanelConfig

### Props

| 属性名        | 类型                   | 默认值     | 说明                                                                                                                  |
| ------------- | ---------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------- |
| checkStrictly | boolean                | false      | 是否严格的遵守父子节点不互相关联                                                                                      |
| children      | string                 | 'children' | 指定选项的子选项为选项对象的某个属性值                                                                                |
| disabled      | string                 | 'disabled' | 指定选项的禁用为选项对象的某个属性值                                                                                  |
| emitPath      | boolean                | true       | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值                    |
| expandTrigger | 'click' \| 'hover'     | 'click'    | 次级菜单的展开方式                                                                                                    |
| label         | string                 | 'label'    | 指定选项标签为选项对象的某个属性值                                                                                    |
| lazy          | boolean                | false      | 是否动态加载子节点，需与 lazyLoad 方法结合使用                                                                        |
| lazyLoad      | ICascaderPanelLazyLoad |            | 加载动态数据的方法，仅在 lazy 为 true 时有效;参数说明： node 为当前点击的节点，resolve 为数据加载完成的回调(必须调用) |
| leaf          | string                 | 'leaf'     | 指定选项的叶子节点的标志位为选项对象的某个属性值                                                                      |
| multiple      | boolean                | false      | 是否多选                                                                                                              |
| value         | string                 | 'value'    | 指定选项的值为选项对象的某个属性值                                                                                    |

## Types

### ICascaderPanelNodeValue

```typescript
type ICascaderPanelNodeValue = string | number
```

### ICascaderPanelNodePropValue

```typescript
type ICascaderPanelNodePropValue = ICascaderPanelNodeValue | ICascaderPanelNodeValue[] | ICascaderPanelNodeValue[][]
```

### ICascaderPanelData

```typescript
type ICascaderPanelData = {
  value?: ICascaderPanelNodeValue
  label?: string
  children?: ICascaderPanelData[]
  disabled?: boolean
  leaf?: boolean
  [key: string]: ICascaderPanelNodeValue | ICascaderPanelData[] | string | boolean | undefined
}
```

### ICascaderPanelConfig

```typescript
interface ICascaderPanelConfig {
  emitPath: boolean
  expandTrigger: 'click' | 'hover'
  hoverThreshold: number
  checkStrictly?: boolean
  multiple?: boolean
  lazy: boolean
  lazyLoad: (node: ICascaderPanelNode, resolve: (dataList: ICascaderPanelData[]) => void) => void
  value: string
  label: string
  children: string
  disabled: string
  leaf: string
}
```

### ICascaderPanelNode

```typescript
type ICascaderPanelNode = {
  parent: ICascaderPanelNode | null
  level: number
  data: ICascaderPanelData
  config: ICascaderPanelConfig
  uid: number
  value: ICascaderPanelNodeValue
  label: string
  pathNodes: Node[]
  path: ICascaderPanelNodeValue[]
  pathLabels: string[]
  loaded: boolean
  loading: boolean
  hasChildren: boolean
  children: Node[]
  checked?: boolean
  indeterminate?: boolean
  root?: boolean
}
```

### ICascaderPanelLazyLoad

```typescript
type ICascaderPanelLazyLoad = (node: ICascaderPanelNode, resolve: (dataList: ICascaderPanelData[]) => void) => void
```
