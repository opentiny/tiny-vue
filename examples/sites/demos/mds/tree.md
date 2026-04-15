## tree

### Props

| 属性名                  | 类型                                     | 默认值                                                                      | 说明                                                                                                                                     |
| ----------------------- | ---------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| accordion               | boolean                                  | false                                                                       | 是否为手风琴模式，每次只打开一个同级树节点展开                                                                                           |
| add-disabled-keys       | boolean                                  | false                                                                       | 禁止添加的节点 key 值列表，也可通过 setAddDisabledKeys 方法设置                                                                          |
| after-load              | (nodes: object[])=> void                 |                                                                             | 下级树节点数据加载完毕后的回调函数                                                                                                       |
| allow-drag              | (node)=>boolean                          |                                                                             | 判断节点能否被拖拽                                                                                                                       |
| allow-drop              | (srcNode, targetNode, type)=>void        |                                                                             | 拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后 |
| check-on-click-node     | boolean                                  | false                                                                       | 是否点击节点时，自动勾选节点                                                                                                             |
| check-strictly          | boolean                                  | false                                                                       | 是否为父子严格模式                                                                                                                       |
| current-node-key        | string                                   |                                                                             | 当前选中节点                                                                                                                             |
| data                    | Array                                    |                                                                             | 设置数据源, 默认通过数据项的 label , children 属性展示数据                                                                               |
| default-checked-keys    | string[]                                 |                                                                             | 默认勾选的节点的keys                                                                                                                     |
| default-expand-all      | boolean                                  | false                                                                       | 是否默认展开所有节点                                                                                                                     |
| default-expanded-keys   | string[]                                 | []                                                                          | 默认展开节点的keys。当属性变化时，会自动收起全部并重新展开指定的数据项。                                                                 |
| delete-disabled-keys    | boolean                                  | false                                                                       | 禁止删除的节点 key 值列表，也可通过 setDeleteDisabledKeys 方法设置                                                                       |
| delete-node-method      | boolean                                  | false                                                                       | 删除节点的装置钩子函数，若返回 false 或者返回 Promise 且被 reject，则停止删除。                                                          |
| draggable               | boolean                                  | false                                                                       | 是否开启节点拖拽                                                                                                                         |
| edit-disabled-keys      | boolean                                  | false                                                                       | 禁止编辑的节点 key 值列表，也可通过 setEditDisabledKeys 方法设置                                                                         |
| empty-text              | string                                   |                                                                             | 内容为空的时候展示的文本                                                                                                                 |
| expand-icon             | Component                                |                                                                             | 指示展开的图标                                                                                                                           |
| expand-icon-color       | string                                   |                                                                             | 指示展开的图标色                                                                                                                         |
| expand-on-click-node    | boolean                                  | true                                                                        | 节点在点击内容时,是否展开 / 收起                                                                                                         |
| filter-node-method      | (value, data, node)=>boolean             |                                                                             | 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏                                          |
| highlight-current       | boolean                                  | true                                                                        | 是否高亮当前选中节点                                                                                                                     |
| icon                    | Component                                |                                                                             | 自定义节点图标                                                                                                                           |
| icon-trigger-click-node | boolean                                  | true                                                                        | 点击图标展开节点时是否触发 node-click 事件                                                                                               |
| indent                  | number                                   | 18                                                                          | 相邻级节点间的水平缩进，单位为像素                                                                                                       |
| lazy                    | boolean                                  | false                                                                       | 是否为异步加载模式，展开节点时再请求数据                                                                                                 |
| load                    | (node, resolve)=> void                   |                                                                             | 加载子树数据的方法。点击节点后，组件开始调用load方法，只有在load函数内调用resolve(data)，才表示返回下级的数据成功。                      |
| node-key                | string                                   |                                                                             | 节点唯一标识属性名称                                                                                                                     |
| only-check-children     | Boolean                                  | false                                                                       | 是否只能选中叶子节点                                                                                                                     |
| props                   | object                                   | {children: 'children',label: 'label',disabled: 'disabled',isLeaf: 'isLeaf'} | 用户传入非标准格式的数据时，指定映射属性的关系                                                                                           |
| render-after-expand     | boolean                                  | true                                                                        | 是否在第一次展开某个树节点后才渲染其子节点                                                                                               |
| render-content          | (h: Vue.h, { node, data, store }=> VNode |                                                                             | 树节点的内容区的渲染函数                                                                                                                 |
| show-auxi               | boolean                                  | true                                                                        | 平铺视图模式时，是否显示节点的上级路径的辅助信息                                                                                         |
| show-check-easily       | boolean                                  | false                                                                       | 在严格模式时，是否显示勾选父节点时，自动勾选子节点的功能区域                                                                             |
| show-checkbox           | boolean                                  | false                                                                       | 是否为多选模式                                                                                                                           |
| show-contextmenu        | boolean                                  | false                                                                       | 是否启用右键菜单功能                                                                                                                     |
| show-line               | boolean                                  | false                                                                       | 是否显示连接线                                                                                                                           |
| show-radio              | boolean                                  | false                                                                       | 是否为单选模式                                                                                                                           |
| shrink-icon             | Component                                |                                                                             | 指示收缩的图标                                                                                                                           |
| shrink-icon-color       | string                                   |                                                                             | 指示收缩的图标色                                                                                                                         |
| size                    | 'medium'\|'small'                        | false                                                                       | 组件的大小                                                                                                                               |
| view-type               | 'tree' \| 'plain'                        | tree                                                                        | 视图模式,其中tree是普通视图，plain是平铺视图                                                                                             |
| edit-config             | ITreeEditConfig                          | {}                                                                          | 用于编辑模式下参数配置,指示新增节点的 id ,是否显示 id 重复的警告等                                                                       |
| highlight-query         | boolean                                  | false                                                                       | 通过 <code> highlightQuery </code> 属性，是否在匹配的节点中，高亮搜索文字。                                                              |
| show-checked-mark       | boolean                                  | false                                                                       | 通过设置 <code> showCheckedMark </code> 属性为true,且非多选模式时，可以在选中行的最右边显示 <code> √ </code> 号。                        |

### Events

| 事件名           | 回调参数                                     | 说明                                                                                                                                                           |
| ---------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| add-node         | (node)=>void                                 | 添加节点的事件                                                                                                                                                 |
| check            | (data, currentChecked)=>void                 | 勾选节点后的事件<br>参数说明：{data: 当前选中节点信息, currentChecked: 树组件目前的选中状态信息}                                                               |
| check-change     | (data, checked, indeterminate)=>void         | 节点选中状态发生变化时的回调;<br>参数说明：{data: 节点状态信息,checked:当前点击节点的勾选状态,indeterminate:当前节点的半选状态}                                |
| check-plain      | (plainNode, value)=>void                     | 平铺模式下，勾选或取消勾选节点的事件，需要设置show-checkbox为true才生效。<br>参数说明：{ plainNode: 被点击的节点数据, value: 复选框是否选中，取值true或false } |
| close-edit       | () =>void                                    | 关闭编辑的事件                                                                                                                                                 |
| current-change   | (data, currentNode)=>void                    | 当前选中节点变化时触发的事件;<br>参数说明：{data: 节点数据,currentNode: 节点状态信息（包括数据）}                                                              |
| delete-node      | (node)=>void                                 | 删除节点的事件                                                                                                                                                 |
| edit-node        | (node)=>void                                 | 修改节点的事件                                                                                                                                                 |
| leave-plain-view | (plainNode, event)=>void                     | 平铺模式下，点击节点定位图标触发的事件。<br>参数说明：{ plainNode: 被点击的节点数据, event: 原生点击事件 }                                                     |
| load-data        | (data)=>void                                 | 懒加载时，加载数据成功的事件;<br>参数说明：{data: 加载的数据}                                                                                                  |
| node-click       | (data, node, vm)=>void                       | 点击节点后的事件。 <br>参数说明：{data: 节点数据,node: 节点状态信息（包括数据）,vm: 组件实例}                                                                  |
| node-collapse    | (data, node, vm)=>void                       | 收缩节点后的事件<br>参数说明：{data: 节点数据,node: 节点状态信息（包括数据）,vm: 当前组件实例}                                                                 |
| node-contextmenu | (event, data, node, vm)=>void                | 当某一节点被鼠标右键点击时会触发该事件;<br>参数说明：{event:原生事件,data: 节点数据,node: 节点状态信息（包括数据）,vm: 组件实例}                               |
| node-drag-end    | (srcNode, targetNode, dropType, event)=>void | 拖拽结束时（可能未成功）触发的事件;<br>参数说明：{srcNode: 拖拽节点,targetNode: 目标节点,dropType: 拖拽类型, (before/after/inner/none),event: 原生事件}        |
| node-drag-enter  | (srcNode, targetNode, event)=>void           | 拖拽进入其他节点时触发的事件;<br>参数说明：{srcNode: 拖拽节点,targetNode: 目标节点,event: 原生事件}                                                            |
| node-drag-leave  | (srcNode, targetNode, event)=>void           | 拖拽离开某个节点时触发的事件;<br>参数说明：{srcNode: 拖拽节点,targetNode: 目标节点,event: 原生事件}                                                            |
| node-drag-over   | (srcNode, targetNode, event)=>void           | 在拖拽节点时触发的事件;<br>参数说明：{srcNode: 拖拽节点,targetNode: 目标节点,event: 原生事件}                                                                  |
| node-drag-start  | (node, event)=>void                          | 节点开始拖拽时触发的事件;<br>参数说明：{node: 拖拽节点，event: 原生事件}                                                                                       |
| node-drop        | (srcNode, targetNode, dropType, event)=>void | 拖拽成功完成时触发的事件;<br>参数说明：{srcNode: 拖拽节点,targetNode: 目标节点,dropType: 拖拽类型, (before/after/inner/none),event: 原生事件}                  |
| node-expand      | (data, node, vm)=>void                       | 展开节点后的事件。<br>参数说明：{data: 节点数据,node: 节点状态信息（包括数据,vm: 当前组件实例}                                                                 |
| open-edit        | () =>void                                    | 进入编辑的事件                                                                                                                                                 |
| save-edit        | (changedData, finalData)=>void               | 保存编辑的事件                                                                                                                                                 |

### Methods

| 方法名                | 返回值                                                                       | 说明                                                                                              |
| --------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| addNode               | (node:object) => void                                                        | 在指定的节点对象中，添加一个子节点                                                                |
| append                | (newData:object, targetNodeOrTargetKey: object \| string) => void            | 为一个节点追加一个子节点，且位于其它子节点的最上方。<br>参数中的目标节点可以是节点数据或节点的key |
| closeEdit             | () => void                                                                   | 组件退出编辑状态                                                                                  |
| closeMenu             | () => void                                                                   | 关闭节点的自定义菜单                                                                              |
| editNode              | (node:object) => void                                                        | 让指定的节点对象进入编辑状态                                                                      |
| expandAllNodes        | (isExpand:boolean) => void                                                   | 展开或收起全部节点                                                                                |
| filter                | (value:string) => void                                                       | 触发树节点进行筛选操作                                                                            |
| getCheckedKeys        | (leafOnly:boolean) => string[]                                               | 返回目前被选中的节点的 key 所组成的数组。当参数：leafOnly 为true时，只返回被选中的叶子节点。      |
| getCheckedNodes       | (leafOnly:boolean, includeHalfChecked:boolean) => object[]                   | 返回目前被选中的节点所组成的数组。                                                                |
| getCurrentKey         | () => string                                                                 | 获取当前被选中节点的 key                                                                          |
| getCurrentNode        | () => data                                                                   | 获得当前的选中的节点数据，若没有节点被选中则返回 null                                             |
| getHalfCheckedKeys    | () => result                                                                 | 返回目前半选中的节点的 key 所组成的数组                                                           |
| getHalfCheckedNodes   | () => object[]                                                               | 返回目前半选中的节点所组成的数组                                                                  |
| getNode               | (data: string \| object) => node                                             | 通过 "节点数据" 或者 "节点的key", 获得 Tree 组件中的 node 节点对象                                |
| getNodeKey            | (node:object) => number                                                      | 查询节点对象的内部唯一id                                                                          |
| getNodePath           | (key:string) => object[]                                                     | 通过节点的id, 返回整个路径上节点数据的数组                                                        |
| insertAfter           | (newData:object, targetNodeOrTargetKey: object \| string) => void            | 在一个节点的后面增加一个节点                                                                      |
| insertBefore          | (newData:object, targetNodeOrTargetKey: object \| string) => void            | 在一个节点的前面增加一个节点                                                                      |
| openEdit              | () => void                                                                   | 组件进入编辑状态                                                                                  |
| remove                | (targetNodeOrTargetKey: object \| string, isSaveChildNode :boolean ) => void | 删除节点。当参数：isSaveChildNode为true时，当前节点的子元素上移至删除节点的父节点中去。           |
| saveEdit              | () => object[]                                                               | 返回组件编辑状态的值                                                                              |
| saveNode              | () => void                                                                   | 正在进行编辑的节点保存并退出编辑状态                                                              |
| setAddDisabledKeys    | (keys: string[]) => void                                                     | 设置禁止添加的节点 key 值列表                                                                     |
| setChecked            | ( nodeOrKey: object\|string,checked:boolean,deep:boolean) => void            | 通过节点或节点的key,设置它的勾选状态                                                              |
| setCheckedByNodeKey   | (key:string, checked:boolean) => void                                        | 通过节点的key, 设置它为勾选或不勾选                                                               |
| setCheckedKeys        | (keys:string[], leafOnly:boolean) => void                                    | 通过节点的key,设置一组节点为勾选状态                                                              |
| setCheckedNodes       | ( nodeArr: object[], leafOnly:boolean) => void                               | 通过节点数据，设置一组节点为勾选状态                                                              |
| setCurrentKey         | (key:string) => void                                                         | 通过 key 设置某个节点的当前选中状态                                                               |
| setCurrentNode        | (data:object) => void                                                        | 通过节点数据， 设置某个节点的当前选中状态                                                         |
| setCurrentRadio       | () => void                                                                   | 在单选模式下，设置组件实例的default-checked-keys 的第一项为勾选值                                 |
| setDeleteDisabledKeys | (keys: string[]) => void                                                     | 设置禁止删除的节点 key 值列表                                                                     |
| setEditDisabledKeys   | (keys: string[]) => void                                                     | 设置禁止编辑的节点 key 值列表                                                                     |
| updateKeyChildren     | (key, children: object[]) => void                                            | 更新指定节点的所有子元素                                                                          |

### Slots

| 插槽名      | 说明                                                       |
| ----------- | ---------------------------------------------------------- |
| contextmenu | 自定义树节点的右键菜单内容，插槽上下文数据为 { node }      |
| default     | 自定义树节点的内容，插槽上下文数据为 { node, data }        |
| empty       | 自定义空数据的元素                                         |
| operation   | 节点内容靠右对齐的元素，插槽上下文数据为 { node }          |
| prefix      | 节点内容前置元素，插槽上下文数据为 { node }                |
| suffix      | 节点内容后置元素，插槽上下文数据为 { node }                |
| switch-text | 在严格模式显示自动勾选子节点的功能时，自定义开关右侧的内容 |

## Types

### ITreeEditConfig

```typescript
interface ITreeEditConfig {
  // 生成新节点的id
  initNodeIdMethod: (node) => string
  // 新节点id与其它id重复时，是否在控制台显示告警。
  noWarning: boolean
}
```
