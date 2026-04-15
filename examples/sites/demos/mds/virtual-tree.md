## virtual-tree

### Props

| 属性名         | 类型             | 默认值 | 说明                                                                                          |
| -------------- | ---------------- | ------ | --------------------------------------------------------------------------------------------- |
| width          | string \| number |        | 虚拟树的宽度                                                                                  |
| height         | string \| number |        | 虚拟树的高度                                                                                  |
| row-height     | string \| number | 36     | 树的每一项的高度                                                                              |
| scrollbar-size | string \| number | 6      | 滚动条尺寸                                                                                    |
| tree-op        | ITreeOp          |        | 内部Tree组件的属性配置，内部Tree组件的事件通过treeOp.events配置，具体可以参考Tree组件的配置项 |

### Methods

| 方法名           | 返回值          | 说明                                             |
| ---------------- | --------------- | ------------------------------------------------ |
| getTreeInstance  | () => Component | 获取内部的Tree组件实例                           |
| refresh          | () => void      | 刷新虚拟化树形控件组件                           |
| keepExpandStatus | () => void      | 在刷新虚滚树之前调用，在刷新时保持之前的展开状态 |
| keepScrollTop    | () => void      | 在刷新虚滚树之前调用，在刷新时保持之前的滚动位置 |

### Slots

| 插槽名    | 说明                        |
| --------- | --------------------------- |
| default   | 透传内部Tree的默认插槽      |
| empty     | 透传内部Tree的empty插槽     |
| prefix    | 透传内部Tree的prefix插槽    |
| suffix    | 透传内部Tree的suffix插槽    |
| operation | 透传内部Tree的operation插槽 |

## Types
