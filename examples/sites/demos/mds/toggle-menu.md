## toggle-menu

### Props

| 属性名               | 类型     | 默认值                                                                      | 说明                                                                                                             |
| -------------------- | -------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| automatic-filtering  | boolean  |                                                                             | 输入框输入内容时是否自动过滤内容，默认是 true                                                                    |
| data                 | Array    |                                                                             | 设置收缩菜单的数据                                                                                               |
| default-expand-all   | boolean  |                                                                             | 设置菜单默认是否展开所有节点，默认为 false                                                                       |
| draggable            | boolean  |                                                                             | 设置是否开启拖拽节点的功能，默认值为false                                                                        |
| ellipsis             | boolean  |                                                                             | 菜单内容超长时省略显示，默认为 false                                                                             |
| expand-on-click-node | boolean  |                                                                             | 设置是否可以通过点击节点展开/收起菜单，默认为 false                                                              |
| get-menu-data-async  | Function |                                                                             | 自定义菜单数据服务,返回异步数据,需返回Promise对象                                                                |
| get-menu-data-sync   | Function |                                                                             | 自定义菜单数据服务,直接返回数据（deprecated v3.4.0废弃, v3.16.0移除；移除原因：如果是同步数据则和:data功能重复） |
| icon                 | object   |                                                                             | 自定义菜单左侧图标                                                                                               |
| placeholder          | string   |                                                                             | 输入框占位符                                                                                                     |
| props                | object   | 该属性的默认值为 {children: 'children',label: 'label',disabled: 'disabled'} | 配置数据选项的映射字段名称                                                                                       |
| show-filter          | boolean  |                                                                             | 设置是否展示过滤搜索框，默认为 `true`                                                                            |
| wrap                 | boolean  |                                                                             | 菜单内容超长时换行显示，默认为 false                                                                             |

### Events

| 事件名          | 回调参数                      | 说明                                                                                                                                                                                                                                                                           |
| --------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| node-click      | Function(arg1,arg2)           | 点击节点后的事件。;点击节点后触发的回调函数;//参数arg1:<br>{children: 点击节点的子节点, id: 点击节点的id ,label: 点击节点的title} <br>//参数arg2:<br> object 当前点击节点的数据信息对象                                                                                        |
| node-collapse   | Function(arg1,arg2)           | 收缩节点后的事件。;节点被关闭时触发的事件;//参数arg1:object <br>{children: 点击节点的子节点,id: 点击节点的id,label: 点击节点的title}<br>//参数arg2:object 当前点击节点的数据信息对象                                                                                           |
| node-drag-end   | Function(arg1,arg2,arg3,arg4) | 拖拽结束时（r可能未成功）触发的事件;拖拽成功完成时触发的事件;//参数<br>arg1: object当前拖拽节点的数据信息对象<br>arg2: object当前点击节点拖拽后位置的节点数据信息对象<br>arg3: 拖拽的类型，如：'inner'<br>arg4:event                                                           |
| node-drag-enter | Function(arg1,arg2)           | 拖拽进入其他节点时触发的事件;拖拽进入其他节点时触发的事件;//参数<br>arg1:object 当前拖拽节点的数据信息对象<br>arg2: object 当前点击节点拖拽后位置的节点数据信息对象                                                                                                            |
| node-drag-leave | Function(arg1,arg2)           | 拖拽离开某个节点时触发的事件;拖拽离开某个节点时触发的事件;//参数<br>arg1:object 当前拖拽节点的数据信息对象<br>arg2: object 当前拖出后节点的数据信息对象                                                                                                                        |
| node-drag-over  | Function(arg1,arg2,arg3)      | 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）;在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）;//参数<br>arg1:object 当前拖拽节点的数据信息对象<br>arg2:object 当前拖拽节点拖拽时节点的数据信息对象<br> arg3:event                                                |
| node-drag-start | Function(arg1,arg2)           | 节点开始拖拽时触发的事件。;节点开始拖拽时触发的事件。;//参数: <br>arg1:object 当前拖拽节点的数据信息对象<br>arg2:event                                                                                                                                                         |
| node-drop       | Function(arg1,arg2)           | 拖放节点后的事件。开启 draggable 属性为 true 有效。;拖放节点后的事件。开启 draggable 属性为 true 有效。;//参数<br>arg1:object 当前拖拽节点的数据信息对象<br> arg2:object 当前点击节点拖拽后的位置节点的数据信息对象<br>arg3: 拖拽的类型<br>arg4:event                          |
| node-expand     | Function(arg1,arg2,arg3)      | 展开节点后的事件。;节点被展开时触发的事件;//参数arg1:<br>{children: 点击节点的子节点, id: 点击节点的id, label: 点击节点的title}<br>//参数arg2:<br>Component 点击节点的componet对象信息<br>//参数arg3:<br>{ children: 点击节点的子节点id: 点击节点的id, label: 点击节点的title} |

### Slots

| 插槽名 | 说明       |
| ------ | ---------- |
| node   | 自定义插槽 |
