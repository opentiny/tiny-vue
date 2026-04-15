## cascader-panel

### Props

| 属性名               | 类型                        | 默认值 | 说明                                                           |
| -------------------- | --------------------------- | ------ | -------------------------------------------------------------- |
| modelValue / v-model | ICascaderPanelNodePropValue |        | 选中项绑定值, 其类型由 props.multiple、props.emitPath 共同决定 |
| options              | ICascaderPanelData[]        |        | 可选项数据源，键名可通过 Props 属性配置                        |
| props                | ICascaderPanelConfig        |        | 配置选项，具体见 ICascaderPanelConfig 表                       |

### Events

| 事件名        | 回调参数                                     | 说明                                                                     |
| ------------- | -------------------------------------------- | ------------------------------------------------------------------------ |
| change        | (value: ICascaderPanelNodePropValue) => void | 当选中节点变化时触发; 回调参数为 选中节点的值                            |
| expand-change | (value: ICascaderPanelNodeValue[]) => void   | 当展开节点发生变化时触发; 回调参数为 各父级选项值组成的数组 (Array 类型) |

### Methods

| 方法名            | 返回值                                              | 说明                                                                |
| ----------------- | --------------------------------------------------- | ------------------------------------------------------------------- |
| clearCheckedNodes | () => void                                          | 清空选中的节点                                                      |
| getCheckedNodes   | (leafOnly: boolean = false) => ICascaderPanelNode[] | 获取选中的节点;参数为 (leafOnly) 是否只是获取子节点，默认值为 false |

### Slots

| 插槽名  | 说明                                                                                                                    |
| ------- | ----------------------------------------------------------------------------------------------------------------------- |
| default | 自定义备选项的节点内容，参数为 { node: ICascaderPanelNode, data: ICascaderPanelData }，分别为当前节点的 Node 对象和数据 |

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
