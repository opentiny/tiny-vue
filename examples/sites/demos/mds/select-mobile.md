## select-mobile

### Props

| 属性名        | 类型                    | 默认值 | 说明                                                                          |
| ------------- | ----------------------- | ------ | ----------------------------------------------------------------------------- |
| ellipsis      | Boolean                 |        | 是否超出一行隐藏并显示省略号，默认值为 false                                  |
| lock-scroll   | Object                  |        | 弹出面板是否锁定浏览器滚动条，默认值为 true                                   |
| menus         | Array                   |        | 列表数据                                                                      |
| mode          | Object                  |        | 组件模式，值为 form 时开启表单模式显示选中文本                                |
| multiple      | Boolean                 |        | 是否开启多选，默认值为 false                                                  |
| search-config | Object                  |        | 搜索配置，默认值为 { options: [], searchMethod: null, openSearchSlot: false } |
| show-footer   | Boolean                 |        | 是否显示底部，默认值为 false                                                  |
| show-header   | Boolean                 |        | 是否显示头部，默认值为 true                                                   |
| text-field    | String                  |        | text 文本字段，默认值为 label                                                 |
| text-field2   | String                  |        | 第二个 text 文本字段，一般用于附属文本                                        |
| text-field3   | String                  |        | 第三个 text 文本字段，一般用于描述文本                                        |
| text-split    | String                  |        | 文本信息分隔符，默认值为 ”; “                                                 |
| title         | String                  |        | 面板标题                                                                      |
| v-model       | Number / String / Array |        | 绑定值                                                                        |
| value-field   | String                  |        | value 唯一键字段，默认值为 id                                                 |
| visible       | Boolean                 |        | 是否弹出面板                                                                  |

### Events

| 事件名         | 回调参数 | 说明                 |
| -------------- | -------- | -------------------- |
| click          |          | 选中项时触发         |
| close          |          | 关闭面板时触发       |
| confirm        |          | 确认时触发           |
| search-click   |          | 搜索列表选中项时触发 |
| update:text    |          | 绑定值改变时触发     |
| update:visible |          | 面板显隐时触发       |

### Methods

| 方法名               | 返回值 | 说明                        |
| -------------------- | ------ | --------------------------- |
| confirm              |        | 确认修改并关闭面板          |
| hide                 |        | 关闭面板                    |
| selectOption(option) |        | 选中列表项，option 为选择项 |

### Slots

| 插槽名      | 说明                                                                     |
| ----------- | ------------------------------------------------------------------------ |
| default     | 选项插槽                                                                 |
| search-item | 搜索选项插槽，设置 :search-config="{ openSearchSlot: true, ... }" 时有效 |
