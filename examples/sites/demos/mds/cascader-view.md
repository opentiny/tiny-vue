## CalendarView

### Props

| 属性名            | 类型                    | 默认值 | 说明                                                                                                  |
| ----------------- | ----------------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| children-field    | String                  |        | 子集字段，默认值为 children                                                                           |
| custom-class      | String / Object / Array |        | 自定义 class 样式                                                                                     |
| data              | Array                   |        | 列表数据                                                                                              |
| day-times         | Array                   |        | 配置时间线模式下所展示的时间范围，默认为 [8,18]，可配范围 [0,23]。                                    |
|                   |                         |        |                                                                                                       |
| ellipsis          | Boolean                 |        | 是否超出一行隐藏并显示省略号，默认值为 false                                                          |
| emit-path         | Boolean                 |        | 通过设置 `emit-path` 属性值为 `false` 不显示值路径，默认值为 `true` 显示值路径                        |
| events            | Array                   |        | 日程事件                                                                                              |
| height            | String                  |        | 日历高度                                                                                              |
| lock-scroll       | Object                  |        | 弹出面板是否锁定浏览器滚动条，默认值为 true                                                           |
| mark-color        | String                  |        | 点标记的颜色                                                                                          |
| mask              | Boolean                 |        | 是否显示遮罩层，默认值为 true                                                                         |
| mode              | String                  |        | 显示模式，可选值有 timeline-时间线模式、schedule-日程模式、month-月模式，默认为月模式。               |
| modes             | Array                   |        | 模式组，显示模式任意组合                                                                              |
| month             | String                  |        | 日历当前显示月份                                                                                      |
| multi-select      | Boolean                 |        | 日期多选                                                                                              |
| node-config       | Boolean                 |        | 节点配置，默认值为 { lazy: false, load: null, isLeaf: 'leaf', afterLoad: null, checkStrictly: false } |
| search-config     | Object                  |        | 搜索配置，默认值为 { options: [], searchMethod: null, openSearchSlot: false }                         |
| set-day-bg-color  | Function                |        | 设置日期背景色，使用函数返回颜色值时，返回十六进制、rgb、rgba 是自定义颜色，使用颜色名则是预设颜色    |
| show-header       | Boolean                 |        | 是否显示头部，默认值为 true                                                                           |
| show-mark         | Function                |        | 显示点标记                                                                                            |
| show-new-schedule | Function                |        | 显示新增日程按钮                                                                                      |
| text-field        | String                  |        | text 文本字段，默认值为 label                                                                         |
| text-field2       | String                  |        | 第二个 text 文本字段，一般用于附属文本                                                                |
| text-field3       | String                  |        | 第三个 text 文本字段，一般用于描述文本                                                                |
| text-split        | String                  |        | 文本信息分隔符，默认值为”; “                                                                          |
| title             | String                  |        | 面板标题                                                                                              |
| v-model           | Number / String / Array |        | 绑定值                                                                                                |
| value-field       | String                  |        | value 唯一键字段，默认值为 id                                                                         |
| visible           | Boolean                 |        | 是否弹出面板                                                                                          |
| year              | Number                  |        | 日历当前显示年份                                                                                      |

### Events

| 事件名               | 回调参数   | 说明                 |
| -------------------- | ---------- | -------------------- |
| click                |            | 点击选项时触发       |
| close                |            | 关闭面板时触发       |
| confirm              |            | 确认时触发           |
| month-change         | Function() | 月改变事件           |
| new-schedule         | Function() | 新增日程按钮点击事件 |
| next-week-click      | Function() | 下一周按钮点击事件   |
| node-expand          |            | 展开子节点时触发     |
| prev-week-click      | Function() | 上一周按钮点击事件   |
| search-click         |            | 搜索列表选中项时触发 |
| selected-date-change | Function() | 选中日期改变事件     |
| update:text          |            | 绑定值改变时触发     |
| update:visible       |            | 面板显隐时触发       |
| week-change          | Function() | 周改变事件           |
| year-change          | Function() | 年改变事件           |

### Methods

| 方法名 | 返回值 | 说明                                                    |
| ------ | ------ | ------------------------------------------------------- |
| clean  |        | 清空除所有选中项，requiredSelectedList 必选项不会被清空 |
| close  |        | 关闭面板                                                |

### Slots

| 插槽名      | 说明                                                                     |
| ----------- | ------------------------------------------------------------------------ |
| default     | 选项插槽                                                                 |
| header      | 头部插槽                                                                 |
| search-item | 搜索选项插槽，设置 :search-config="{ openSearchSlot: true, ... }" 时有效 |
| timeline    | 时间线插槽，有 timeline1-timeline7 7 个插槽                              |
| tool        | 工具栏插槽                                                               |
| weekday     | 日程插槽，有 weekday1-weekday7 7 个插槽                                  |
