## search-box

### Props

| 属性名            | 类型    | 默认值 | 说明                                                                                  |
| ----------------- | ------- | ------ | ------------------------------------------------------------------------------------- |
| maxlength         | number  |        | input 框的原生属性，限制最大输入字符数                                                |
| v-model           | array   | []     | 绑定标签数组，用于控制已选中的筛选标签                                                |
| items             | array   | []     | 搜索数据项配置，定义可用的筛选条件                                                    |
| editable          | boolean | false  | 是否开启标签可编辑功能，开启后标签支持编辑操作（注：map 类型不支持编辑）              |
| append-to-body    | boolean | true   | 是否将下拉面板挂载到 body 元素上                                                      |
| panel-max-height  | string  |        | 下拉面板的最大高度，支持 CSS 单位（如：100px、50vh）                                  |
| split-input-value | string  | ,      | 切分输入值的分隔符，将输入值按指定字符分成多个关键字，一次性输入生成多个标签          |
| default-field     | string  |        | 自定义默认搜索项，指定默认使用的筛选字段                                              |
| empty-placeholder | string  |        | 没有筛选项时的占位文本                                                                |
| id-map-key        | string  | id     | 指定筛选项的ID键取值来源，默认取自 items 的 id 键，用于接口返回的数据字段不匹配的情况 |
| potential-options | object  |        | 潜在匹配项配置，通过 getMatchList 方法异步获取匹配的筛选项                            |
| max-time-length   | number  |        | 时间长度限制（毫秒数），限制可选择的时间跨度，常用于防止请求时间跨度过大的情形        |
| show-help         | boolean | true   | 是否显示帮助图标                                                                      |
| show-prefix-icon  | boolean | true   | 是否显示前缀搜索图标                                                                  |
| show-no-data-tip  | boolean | true   | 是否显示无数据提示                                                                    |

### Events

| 事件名             | 回调参数                                       | 说明                                                                                     |
| ------------------ | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| change             | (newFilters: array, oldFilters: array) => void | 搜索值变化时触发的回调函数；newFilters 为新的筛选标签数组，oldFilters 为旧的筛选标签数组 |
| clear              | () => void                                     | 清空值触发的回调函数                                                                     |
| search             | (filters: array) => void                       | 搜索事件，点击搜索按钮或按 Enter 键时触发；filters 为当前筛选标签数组                    |
| first-level-select | (field: string) => void                        | 第一层级选择事件，当选择一级筛选条件时触发；field 为选中的字段名                         |
| second-level-enter | (item: object, options: array) => void         | 第二层级进入事件，当进入二级面板时触发；item 为当前选中的项，options 为选项列表          |
| tag-click          | (tag: object) => void                          | 标签点击事件，当点击已选中的标签时触发；tag 为被点击的标签对象                           |
| help               | () => void                                     | 帮助图标点击事件，当点击帮助图标时触发                                                   |
| exceed             | (maxlength: number) => void                    | 输入超出限定长度事件，当输入超过 maxlength 限制时触发；maxlength 为最大长度限制          |

### Slots

| 插槽名          | 说明                                                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| suffix-icon     | 后缀图标插槽，用于自定义搜索框右侧的图标                                                                                               |
| [slotName]      | 自定义二级面板插槽，通过 item.type = "custom" 和 item.slotName 配置插槽名称，用于自定义二级下拉面板的内容。scope 包含 onConfirm 等方法 |
| [slotName]-edit | 编辑态自定义面板插槽，格式为 `${item.slotName}-edit`，用于在编辑状态下自定义面板内容。scope 包含 onConfirm 等方法                      |

## Types
