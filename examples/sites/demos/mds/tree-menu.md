## tree-menu

### Props

| 属性名                          | 类型                                                                                          | 默认值                                                                                                               | 说明                                                                                                           |
| ------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| accordion                       | boolean                                                                                       | false                                                                                                                | 是否设置为手风琴效果（只能展开一个同级别的节点）                                                               |
| allow-drag                      | (vm:ITreeNodeVm) => boolean                                                                   |                                                                                                                      | 拖拽开始前的回调事件，定义节点是否允许拖拽的规则，返回 true 则允许拖拽，配合 draggable 属性使用                |
| allow-drop                      | (draggingNode: ITreeNodeVm, targetNode: ITreeNodeVm,type: "prev"\|"next"\|"inner") => boolean |                                                                                                                      | 拖拽结束前的回调事件，定义节点是否允许放置到模板节点的规则，返回 true 则允许放置，配合 draggable 属性使用      |
| check-strictly                  | boolean                                                                                       | false                                                                                                                | 是否遵循父级和子级严格不相关联的做法，配合 show-checkbox 属性使用                                              |
| collapsible                     | boolean                                                                                       | false                                                                                                                | 是否允许展开后的菜单收起，未和 show-number 配套使用时，仍可以点击图标收起                                      |
| customIcon                      | Component                                                                                     |                                                                                                                      | 设置带图标树形菜单                                                                                             |
| placeholder                     | string                                                                                        |                                                                                                                      | 当数据为空时的占位符                                                                                           |
| data                            | ITreeNodeData[]                                                                               | []                                                                                                                   | 静态数据源                                                                                                     |
| default-checked-keys            | Array<number\|string>                                                                         | []                                                                                                                   | 默认勾选节点的 key 的数组                                                                                      |
| default-expand-all              | boolean                                                                                       | false                                                                                                                | 是否默认展开所有子节点                                                                                         |
| default-expanded-keys           | Array<number\|string>                                                                         | []                                                                                                                   | 默认展开节点的 key 的数组                                                                                      |
| default-expanded-keys-highlight | number\|string                                                                                |                                                                                                                      | 设置默认展开节点中的某个节点高亮，配合 default-expanded-keys 属性使用                                          |
| draggable                       | boolean                                                                                       | false                                                                                                                | 是否可拖动菜单节点                                                                                             |
| ellipsis                        | boolean                                                                                       | false                                                                                                                | 是否文字超长省略显示。优先级高于 wrap                                                                          |
| empty-text                      | string                                                                                        |                                                                                                                      | 内容为空时展示的文本                                                                                           |
| expand-on-click-node            | boolean                                                                                       | true                                                                                                                 | 是否能点击节点即展开/收起。配置为 fasle 则只能点击下拉图标展开/收起                                            |
| filter-node-method              | (query:string, data:ITreeNodeData, node:ITreeNodeVm) => boolean                               |                                                                                                                      | 自定义树节点过滤的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏                      |
| get-menu-data-sync              | () => ITreeNodeData[]                                                                         |                                                                                                                      | 自定义获取服务端数据源的方法，返回一个 Promise 对象                                                            |
| indent                          | number                                                                                        |                                                                                                                      | 子级相对于父级节点的水平缩进距离，单位 px                                                                      |
| lazy                            | boolean                                                                                       | false                                                                                                                | 是否懒加载子节点，配合 load 属性使用                                                                           |
| load                            | (node:ITreeNodeVm, resolve:IResolveType) => IResolveType                                      |                                                                                                                      | 加载子树数据的方法，仅当 lazy 属性为 true 时生效                                                               |
| menu-collapsible                | boolean                                                                                       | false                                                                                                                | 是否显示侧边折叠与展开按钮                                                                                     |
| node-height                     | number                                                                                        |                                                                                                                      | 节点高度                                                                                                       |
| node-key                        | string                                                                                        |                                                                                                                      | 设置每个树节点唯一标识（key）的属性，在整棵树中都是唯一的                                                      |
| only-check-children             | boolean                                                                                       | false                                                                                                                | 父级是否不可选，只能展开不能跳转                                                                               |
| props                           | IProps                                                                                        | <pre><br>{<br> children: 'children'<br> label: 'label'<br> disabled: 'disabled'<br> isLeaf: 'isLeaf'<br>} <br></pre> | 映射字段                                                                                                       |
| search-icon                     | Component                                                                                     |                                                                                                                      | 自定义搜索图标                                                                                                 |
| show-checkbox                   | boolean                                                                                       | false                                                                                                                | 节点是否可被选择                                                                                               |
| show-expand                     | boolean                                                                                       | false                                                                                                                | 是否启用一键展开/收起功能。点击左下角图标可展开/收起菜单注意：配合 customIcon 属性使用，纯文本菜单不支持此功能 |
| show-filter                     | boolean                                                                                       | true                                                                                                                 | 是否显示搜索框，可搜索过滤节点                                                                                 |
| show-number                     | boolean                                                                                       | false                                                                                                                | 右侧下拉图标区域是否显示为 number 属性定义的数字内容，建议不超过 4 个字符                                      |
| show-title                      | boolean                                                                                       | true                                                                                                                 | 是否显示节点的 title 提示，鼠标悬浮节点之上触发                                                                |
| suffix-icon                     | Component                                                                                     |                                                                                                                      | 全局设置带图标树形菜单                                                                                         |
| wrap                            | boolean                                                                                       | false                                                                                                                | 是否换行显示                                                                                                   |
| clearable                       | boolean                                                                                       | false                                                                                                                | 搜索框是否可清空                                                                                               |
| highlight-query                 | boolean                                                                                       | false                                                                                                                | 通过 <code> highlightQuery </code> 属性，是否在匹配的节点中，高亮搜索文字。<br>                                |
| width-adapt                     | boolean                                                                                       | false                                                                                                                | 通过 <code> widthAdapt </code> 属性，是否让组件宽度自适应父容器。                                              |

### Events

| 事件名          | 回调参数                                                                                        | 说明                                     |
| --------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------- |
| check-change    | (node:ITreeNodeVm, checked:boolean, indeterminate:boolean) => void                              | 监听可勾选节点的勾选状态发生变化时的事件 |
| current-change  | (nodeData:ITreeNodeData, node:ITreeNodeVm) => void                                              | 监听当前选中节点发生变化时的事件         |
| node-click      | (nodeData:ITreeNodeData, node:ITreeNodeVm) => void                                              | 监听节点被点击时的事件                   |
| node-collapse   | (nodeData:ITreeNodeData, node:ITreeNodeVm) => void                                              | 监听节点被点击收起时的事件;              |
| node-drag-end   | (draggingNode:ITreeNodeVm, targetNode:ITreeNodeVm, dropType:IDropType, event:DragEvent) => void | 监听节点拖拽结束（可能未成功）的事件     |
| node-drag-start | (node:ITreeNodeVm, event:DragEvent) => void                                                     | 监听节点开始拖拽的事件                   |
| node-expand     | (nodeData:ITreeNodeData, node:ITreeNodeVm) => void                                              | 监听节点被点击展开时的事件;              |
| input-change    | (data:string) => void                                                                           | 输入框输入值时触发的事件                 |

### Methods

| 方法名         | 返回值                           | 说明                                                                                          |
| -------------- | -------------------------------- | --------------------------------------------------------------------------------------------- |
| getCurrentKey  | () => string \| number \| null   | 获取当前选中节点的 key ，注意：配合 node-key 属性设置每个节点 key 值的字段,仅适用单选         |
| getCurrentNode | () => ITreeNodeData\|null        | 获得当前选中节点的数据,注意：配合 node-key 属性设置每个节点 key 值的字段,仅适用单选           |
| setCurrentKey  | (key:string\|number) => void     | 通过 key 设置某个节点为当前选中的节点，注意：配合 node-key 属性设置每个节点 key 值的字段      |
| setCurrentNode | (nodeData:ITreeNodeData) => void | 通过 nodeData 设置某个节点为当前选中的节点，注意：配合 node-key 属性设置每个节点 key 值的字段 |

### Slots

| 插槽名  | 说明                                      |
| ------- | ----------------------------------------- |
| default | 自定义树节点的内容，参数为 { node, data } |

## Types

### ITreeNodeVm

```typescript
interface ITreeNodeVm {
  // 是否已勾选
  'checked': boolean
  // 子节点
  'childNodes': ITreeNodeVm[]
  // 节点数据
  'data': ITreeNodeData
  // 是否展开
  'expanded': boolean
  // 唯一标识
  'id': string | number
  // 是否半选
  'indeterminate': boolean
  // 是否当前节点
  'isCurrent': boolean
  // 是否叶子节点
  'isLeaf': boolean
  // 层级
  'level': number
  // 是否已加载
  'loaded': boolean
  // 是否加载中
  'loading': boolean
  // 是否可见
  'visible': boolean
  // 是否禁用
  'disabled': boolean
  // 节点显示文本
  'label': string
}
```

### ITreeNodeData

```typescript
interface ITreeNodeData {
  // node-key='id' 设置节点的唯一标识
  'id': number | string
  // 节点显示文本
  'label': string
  // 子节点
  'children'?: ITreeNodeData[]
  // 链接
  'url'?: string
  // show-number 时展示的字段
  'number'?: number | string
  // 自定义每个节点的图标
  'customIcon': Component
  // 节点是否可以点击
  'disabled'?: string
}
```

### IProps

```typescript
interface IProps {
  'label': string
  'children': string
  'disabled'?: string
  'isLeaf'?: string
}
```

### IResolveType

```typescript
// Promise 的 resolve 回调函数
type IResolveType = (data: ITreeNodeData) => void
```

### IDropType

```typescript
// 拖拽节点相对目标节点的位置
type IDropType = before | after | inner | none
```
