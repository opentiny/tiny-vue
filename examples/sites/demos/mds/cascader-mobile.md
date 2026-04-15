## cascader-mobile

### Props

| 属性名         | 类型                    | 默认值 | 说明                                                                                                                                   |
| -------------- | ----------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| children-field | String                  |        | 子集字段，默认值为 children                                                                                                            |
| data           | Array                   |        | 列表数据                                                                                                                               |
| ellipsis       | Boolean                 |        | 是否超出一行隐藏并显示省略号，默认值为 false                                                                                           |
| mask           | Boolean                 |        | 是否显示遮罩层，默认值为 true                                                                                                          |
| node-config    | Boolean                 |        | 节点配置，默认值为 { lazy: false, load: null, isLeaf: 'leaf', afterLoad: null, checkStrictly: false }                                  |
| placeholder    | String / Array          |        | 导航占位文本信息，设置为字符串类型表示每个导航节点的占位文本信息，设置为数组类型时，每个数组下标索引对应导航节点的顺序设置占位文本信息 |
| search-config  | Object                  |        | 搜索配置，默认值为 { options: [], searchMethod: null, openSearchSlot: false }                                                          |
| show-header    | Boolean                 |        | 是否显示头部，默认值为 true                                                                                                            |
| text-field     | String                  |        | text 文本字段，默认值为 label                                                                                                          |
| text-field2    | String                  |        | 第二个 text 文本字段，一般用于附属文本                                                                                                 |
| text-field3    | String                  |        | 第三个 text 文本字段，一般用于描述文本                                                                                                 |
| text-split     | String                  |        | 文本信息分隔符，默认值为 ”; “                                                                                                          |
| title          | String                  |        | 面板标题                                                                                                                               |
| v-model        | Number / String / Array |        | 绑定值                                                                                                                                 |
| value-field    | String                  |        | value 唯一键字段，默认值为 id                                                                                                          |
| visible        | Boolean                 |        | 是否弹出面板                                                                                                                           |

### Events

| 事件名         | 回调参数 | 说明                 |
| -------------- | -------- | -------------------- |
| click          |          | 点击选项时触发       |
| close          |          | 关闭面板时触发       |
| confirm        |          | 确认时触发           |
| node-expand    |          | 展开子节点时触发     |
| search-click   |          | 搜索列表选中项时触发 |
| update:text    |          | 绑定值改变时触发     |
| update:visible |          | 面板显隐时触发       |

### Methods

| 方法名 | 返回值 | 说明     |
| ------ | ------ | -------- |
| close  |        | 关闭面板 |

### Slots

| 插槽名      | 说明                                                                     |
| ----------- | ------------------------------------------------------------------------ |
| default     | 选项插槽                                                                 |
| search-item | 搜索选项插槽，设置 :search-config="{ openSearchSlot: true, ... }" 时有效 |
