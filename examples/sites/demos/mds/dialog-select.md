## dialog-select

### Props

| 属性名            | 类型               | 默认值                                                                                                                                                         | 说明                                                                                            |
| ----------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
|                   |                    |                                                                                                                                                                |                                                                                                 |
| before-close      | () => boolean      |                                                                                                                                                                | 弹窗关闭前的回调，返回 false 会阻止弹窗关闭                                                     |
| dialog-op         | IDialogOption      | {}                                                                                                                                                             | 用于配置 DialogBox 对话框组件的属性，对话框事件和插槽已透传                                     |
| lock-scroll       | boolean            | true                                                                                                                                                           | 设置弹出面板的锁定滚动                                                                          |
| grid-op           | IGridOption        | {}                                                                                                                                                             | 表格场景时，配置 Grid 组件的属性                                                                |
| lookup-method     | () => Promise      |                                                                                                                                                                | 初始化选中数据的加载方法                                                                        |
| main-height       | number             | 290                                                                                                                                                            | 配置表格或树区域的高度                                                                          |
| multi             | boolean            | false                                                                                                                                                          | 是否多选                                                                                        |
| pager-op          | IPagerOption       | <pre>{<br> currentPage: 1,<br> pageSize: 10,<br> pageSizes: [10, 20, 30, 40, 50, 100],<br> total: 0,<br> layout: 'total, prev, pager, next, jumper'<br>}</pre> | 使用表格展示数据时，属性 pagerOp 用于配置 Pager 分页组件的属性，分页事件已透传                  |
| popseletor        | string             | 'grid'                                                                                                                                                         | 弹窗内展示数据的组件类型，目前支持：'grid' / 'tree'                                             |
| remote-search     | () => Promise      |                                                                                                                                                                | 使用表格展示数据时，配置表格分页查询操作函数；使用树展示数据时，配置通过pid查询所有子数据的方法 |
| selected-box-op   | ISelectedBoxOption | {}                                                                                                                                                             | 使用表格展示数据时，属性 selectedBoxOp 用于配置 SelectedBox 已选栏组件的属性，已选栏插槽已透传  |
| show-pager        | boolean            | true                                                                                                                                                           | 使用表格展示数据时，是否显示分页组件                                                            |
| show-selected-box | boolean            | true                                                                                                                                                           | 使用表格展示数据时，是否显示已选栏组件                                                          |
| text-field        | string             | 'label'                                                                                                                                                        | 数据项的显示值字段                                                                              |
| text-split        | string             | '/'                                                                                                                                                            | 多选时用于拼接数据项的 label 字段                                                               |
| tree-op           | ITreeOption        | {}                                                                                                                                                             | 使用树展示数据时，树组件的配置对象                                                              |
| value-field       | string             | 'id'                                                                                                                                                           | 数据项的选中值字段                                                                              |
| value-split       | string             | ';'                                                                                                                                                            | 多选时用于拼接数据项的选中值                                                                    |
| visible           | boolean            | false                                                                                                                                                          | 控制弹出框显示与关闭                                                                            |

### Events

| 事件名             | 回调参数                                       | 说明                                        |
| ------------------ | ---------------------------------------------- | ------------------------------------------- |
| before-page-change | (beforeChangeParam:IBeforeChangeParam) => void | 透传子组件 Pager 的 before-page-change 事件 |
| change             | (changeParam:IChangeParam) => void             | 监听弹窗选择的值发生变化的事件              |
| close              | () => void                                     | 透传子组件 DialogBox 的 close 事件          |
| closed             | () => void                                     | 透传子组件 DialogBox 的 closed 事件         |
| current-change     | (currentPage: number) => void                  | 透传子组件 Pager 的 current-change 事件     |
| drag-end           | () => void                                     | 透传子组件 DialogBox 的 drag-end 事件       |
| drag-move          | () => void                                     | 透传子组件 DialogBox 的 drag-move 事件      |
| drag-start         | () => void                                     | 透传子组件 DialogBox 的 drag-start 事件     |
| next-click         | (currentPage: number) => void                  | 透传子组件 Pager 的 next-click 事件         |
| open               | () => void                                     | 透传子组件 DialogBox 的 open 事件           |
| opened             | () => void                                     | 透传子组件 DialogBox 的 opened 事件         |
| prev-click         | (currentPage: number) => void                  | 透传子组件 Pager 的 prev-click 事件         |
| size-change        | (pageSize: number) => void                     | 透传子组件 Pager 的 size-change 事件        |
| resize             | (ev: IResizeEvent) => void                     | 弹窗大小变化时的事件，比如切换全屏状态时    |
| delete             | (row: IData) => void                           | 已选栏的选项的删除事件                      |
| clear              | () => void                                     | 已选栏的清空事件                            |

### Methods

| 方法名        | 返回值                                             | 说明                                                         |
| ------------- | -------------------------------------------------- | ------------------------------------------------------------ |
| getSelection  | () => IData[]                                      | 获取多选选中数据                                             |
| queryGridData | () => void                                         | 使用表格展示数据时，加载表格数据的方法                       |
| setSelection  | (data: IData \| IData[], checked: boolean) => void | 设置数据的多选选中状态，需要在弹窗初始化后调用，否则调用无效 |

### Slots

| 插槽名         | 说明                                             |
| -------------- | ------------------------------------------------ |
| button         | 使用表格展示数据时，自定义已选栏的自定义按钮区域 |
| clear          | 使用表格展示数据时，自定义已选栏的清空按钮区域   |
| close          | 使用表格展示数据时，自定义已选栏的选项的删除按钮 |
| footer         | 自定义弹窗底部                                   |
| footer-buttons | 自定义弹窗底部按钮                               |
| option         | 使用表格展示数据时，自定义已选栏的选项           |
| search         | 使用表格展示数据时，自定义搜索区域               |
| select         | 使用表格展示数据时，自定义已选栏的已选提示区域   |
| title          | 自定义弹窗标题                                   |

## Types

### IDialogOption

```typescript
interface IDialogOption {
  // 设置弹出框距离窗口顶部的高度，默认为 15vh
  top: string
  // 弹出框的宽度,默认 500px
  width: string
  // 弹出框标题
  title: string
  beforeClose: () => boolean
  // 自定义配置弹窗类名
  dialogClass: string
}
```

### IGridOption

```typescript
interface IGridOption {
  // 表格列配置
  columns: IColumnConfig[]
  // 表格列数据
  data: []
  // 表格多选配置
  selectConfig: {
    // 翻页操作是否保留历史选择数据
    reserve: boolean
    // 嵌套表格多选时，设置默认表格选中的数据
    checkRowKeys: Array<string | number>
  }
  // 表格单选配置
  radioConfig: {
    //嵌套表格单选时，设置默认表格选中的数据
    checkRowKey: string | number
  }
}
```

### IColumnConfig

```typescript
interface IColumnConfig {
  type: 'index' | 'radio' | 'checkbox'
  id: string
  title: string
  label: string
  width: string | number
}
```

### IPagerOption

```typescript
interface IPagerOption {
  // 当前页，默认 1
  currentPage: number
  // 每页显示条目个数，默认 10
  pageSize: number
  // 每页显示个数选择器的选项设置，默认 [10, 20, 30, 40, 50, 100]
  pageSizes: Array<number>
  // 总条目数
  total: number
  // 分页布局，默认 'total, prev, pager, next, jumper'
  layout: string
}
```

### ISelectedBoxOption

```typescript
interface ISelectedBoxOption {
  config: {
    pkField: string
    pkFieldType: string
    showField: Array<string>
    // 传 sortablejs 插件
    plugin: () => void
  }
}
```

### ITreeOption

```typescript
interface ITreeOption {
  // 树节点的唯一标识
  nodeKey: string
  pathSplit: string
  props: {
    // 默认为 children
    children: string
    // 默认为 label
    label: string
    // 默认为 isLeaf'
    isLeaf: string
  }
  // 是否为父子严格模式
  checkStrictly: boolean
  // 相邻级节点间的水平缩进，单位为像素
  baseIndent: number
  // 加载子树数据的方法
  load: (node, resolve) => void
  // 使用树展示数据时，用于配置搜索过滤接口
  queryPidsBySearch: () => ITreeNodeData
  // 使用树展示数据时，用于配置初始化过滤接口
  queryPidsByIds: () => ITreeNodeData
  // 默认勾选的节点的keys
  defaultCheckedKeys: Array<string | number>
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
}
```

### IChangeParam

```typescript
// 树组件的节点数据信息
interface ItreeData = {
  id: number|string
  label: string
  pid: number|string
}

// 用户自定义的表格行数据
interface IGridData = {
  id: number|string
 [otherKeys] :any
}

interface IChangeParam = {
 values: Array<number|string>|number|string
 texts: string|Array<string>
 selectedDatas: ItreeData[]|IGridData[]
}
```

### IBeforeChangeParam

```typescript
interface IBeforeChangeParam {
  callback: () => void // 回调函数，调用则继续本次变更
  rollback: () => void // 回滚函数，调用则阻止本次变更
  newPage: number // 变更后所在页
  newPageSize: number // 变更后分页大小
  currentPage: number // 当前所在页
  currentPageSize: number // 当前分页大小
}
```

### IResizeEvent

```typescript
interface IResizeEvent {
  // 当前的全屏状态
  fullscreen: boolean
  // 弹窗的元素
  dialog: HTMLElement
}
```

### IData

```typescript
interface IData {
  // 表格或者tree行数据
  [prop: string]: any
}
```
