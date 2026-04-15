## mind-map

### Props

| 属性名     | 类型            | 默认值                                              | 说明         |
| ---------- | --------------- | --------------------------------------------------- | ------------ |
| modelValue | Object          | {}                                                  | 默认节点数据 |
| options    | IMindMaoOptions | {contextMenu: false,toolBar: false,nodeMenu: false} | 配置项       |

### Events

| 事件名        | 回调参数                                                    | 说明                                                             |
| ------------- | ----------------------------------------------------------- | ---------------------------------------------------------------- |
| afterImport   | ({render, data}: {render:MindElixirInstance, data: })=>void | v-model更新后会触发                                              |
| beforeImport  | ({render, data}: {render:MindElixirInstance, data: })=>void | v-model更新前会触发                                              |
| create        | (render:MindElixirInstance)=>void                           | mindmap创建时会触发该事件                                        |
| expandNode    | IMindExpandNode                                             | 展开节点时会触发该事件                                           |
| operation     | IMindMapOperation                                           | 节点重新计算时, 例如将节点A拖拽到节点B, 使得节点A是节点B的子节点 |
| selectNewNode | IMindMapSelectNewNode                                       | 创建新节点时                                                     |
| selectNode    | IMindMapSelectNode                                          | 选择任意一个节点时, 会触发该事件                                 |
| selectNodes   | IMindMapSelectNodes                                         | 选择多个节点的时候会触发该事件                                   |
| unselectNode  | IMindMapUnselectNode                                        | 取消选择的时候会触发该事件                                       |
| unselectNodes | IMindMapUnselectNodes                                       | 取消选择多个节点时会触发该事件                                   |

## Types

### IMindMaoOptions

```typescript
interface options {
  direction?: number
  locale?: string
  draggable?: boolean
  editable?: boolean
  contextMenu?: boolean
  contextMenuOption?: any
  toolBar?: boolean
  keypress?: boolean
  mouseSelectionButton?: 0 | 2
  before?: Before
  newTopicName?: string
  allowUndo?: boolean
  overflowHidden?: boolean
  mainLinkStyle?: number
  subLinkStyle?: number
  mobileMenu?: boolean
  theme?: Theme
  nodeMenu?: boolean
}
```

### IMindMapOperation

```typescript
type onOperation = ({ render, info }: { render: MindElixirInstance; info: Operation }) => void
```

### IMindMapSelectNode

```typescript
type onSelectNode = ({ render, nodeObj }: { render: MindElixirInstance; nodeObj: NodeObj }, e?: MouseEvent) => void
```

### IMindMapSelectNewNode

```typescript
type selectNewNode: ({render,nodeObj}: {render:MindElixirInstance,nodeObj:NodeObj}) => void
```

### IMindMapSelectNodes

```typescript
type selectNodes: ({render,nodeObj}: {render:MindElixirInstance,nodeObj:NodeObj[]}) => void
```

### IMindMapUnselectNode

```typescript
type unselectNodes: ({render}: {render: MindElixirInstance}) => void
```

### IMindMapUnselectNodes

```typescript
type unselectNodes: ({render}: {render: MindElixirInstance}) => void
```

### IMindExpandNode

```typescript
type expandNode: ({render,nodeObj}: {render:MindElixirInstance,nodeObj:NodeObj}) => void
```

### NodeObj

```typescript
export interface NodeObj {
  topic: string
  id: Uid
  style?: {
    fontSize?: string
    color?: string
    background?: string
    fontWeight?: string
  }
  children?: NodeObj[]
  tags?: string[]
  icons?: string[]
  hyperLink?: string
  expanded?: boolean
  direction?: number
  root?: boolean
  image?: {
    url: string
    width: number
    height: number
  }
  branchColor?: string
  parent?: NodeObj
}
```
