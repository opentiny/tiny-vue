## select-view

### Props

| 属性名                 | 类型                    | 默认值 | 说明                                                                                            |
| ---------------------- | ----------------------- | ------ | ----------------------------------------------------------------------------------------------- |
| custom-class           | String / Object / Array |        | 自定义 class 样式                                                                               |
| infinite-scroll        | Object                  |        | 无限滚动配置，默认值为 { load: null, delay: 200, disabled: true, distance: 0, immediate: true } |
| lock-scroll            | Object                  |        | 弹出面板是否锁定浏览器滚动条，默认值为 true                                                     |
| mask                   | Boolean                 |        | 是否显示遮罩层，默认值为 true                                                                   |
| menus                  | Array                   |        | 列表数据                                                                                        |
| multiple               | Boolean                 |        | 是否开启多选，默认值为 false                                                                    |
| placeholder            | String                  |        | 设置输入框提示语                                                                                |
| required-selected-list | Array                   |        | 必选项列表                                                                                      |
| search-config          | Object                  |        | 搜索配置，默认值为 { options: [], searchMethod: null, openSearchSlot: false }                   |
| show-header            | Boolean                 |        | 是否显示头部，默认值为 true                                                                     |
| text-field             | String                  |        | text 文本字段，默认值为 label                                                                   |
| text-field2            | String                  |        | 第二个 text 文本字段，一般用于附属文本                                                          |
| text-field3            | String                  |        | 第三个 text 文本字段，一般用于描述文本                                                          |
| text-split             | String                  |        | 文本信息分隔符，默认值为 ”; “                                                                   |
| title                  | String                  |        | 面板标题                                                                                        |
| top-config             | Object                  |        | 选项置顶配置，默认值为 { label: '', options: [] }                                               |
| v-model                | Number / String / Array |        | 绑定值                                                                                          |
| value-field            | String                  |        | value 唯一键字段，默认值为 id                                                                   |
| visible                | Boolean                 |        | 是否弹出面板                                                                                    |

### Events

| 事件名         | 回调参数 | 说明                 |
| -------------- | -------- | -------------------- |
| close          |          | 关闭面板时触发       |
| confirm        |          | 确认时触发           |
| search-click   |          | 搜索列表选中项时触发 |
| update:text    |          | 绑定值改变时触发     |
| update:visible |          | 面板显隐时触发       |

### Methods

| 方法名 | 返回值 | 说明                                                    |
| ------ | ------ | ------------------------------------------------------- |
| clean  |        | 清空除所有选中项，requiredSelectedList 必选项不会被清空 |
| close  |        | 关闭面板                                                |

### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 选项插槽 |
