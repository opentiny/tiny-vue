## user

### Props

| 属性名                         | 类型     | 默认值                                         | 说明                                                                                                |
| ------------------------------ | -------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| allow-copy                     | boolean  | 该属性的默认值为 false，表示不能复制           | 搜索单选场景，是否允许复制输入框的内容;属性会透传给内部的 Select 组件，参考 Select 示例             |
| cache                          | boolean  | 该属性的默认值为 true                          | 是否缓存用户数据                                                                                    |
| cache-fields                   | Array    | 该属性的默认值为 []                            | 设置需要缓存的用户数据                                                                              |
| cache-key                      | string   | 该属性的默认值为 tiny-user                     | 设置缓存数据的 key 值                                                                               |
| collapse-show-overflow-tooltip | boolean  | 该属性的默认值为 true                          | 是否省略显示超出一行的数据并有tooltip提示                                                           |
| collapse-tags                  | boolean  | 该属性的默认值为 false                         | 多用户时是否折叠标签                                                                                |
| hover-expand                   | boolean  | 该属性的默认值为 false                         | 默认折叠tag, hover时展示所有tag。多选用户multiple为true时生效                                       |
| delay                          | number   | 该属性的默认值为 600 毫秒                      | 设置延时加载的时间                                                                                  |
| disabled                       | boolean  | 该属性的默认值为 false                         | 是否禁用户组件                                                                                      |
| fetchSuggestUser               | Function |                                                | 自定义输入查询服务                                                                                  |
| fetchW3Accounts                | Function |                                                | 自定义批量查询用户服务                                                                              |
| multiple                       | boolean  | 该属性的默认值为 false                         | 是否开启多用户形式，默认为 false                                                                    |
| placeholder                    | string   |                                                | 设置输入框占位文本                                                                                  |
| popper-append-to-body          | boolean  | 该属性的默认值为 true                          | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件) |
| popper-class                   | string   |                                                | 为 popper 添加类名(可参考 popover 组件)                                                             |
| size                           | string   |                                                | 设置用户组件尺寸                                                                                    |
| sort-by-fetch-data             | boolean  | 该属性的默认值为 false                         | 联想时下拉框的数据顺序和接口返回的数据顺序一致                                                      |
| sortable                       | Function |                                                | 自定义用户拖拽排序，该属性引用 sortablejs 插件进行排序                                              |
| suggest-length                 | number   | 该属性的默认值为 3                             | 设置输入指定长度完成后进行加载                                                                      |
| tag-selectable                 | boolean  | 该属性的默认值为 false                         | 是否开启输入框中已选择的选项可复制                                                                  |
| text-field                     | string   | 该属性的默认值为 userCN                        | 显示字段映射                                                                                        |
| textSplit                      | string   | 文本粘贴复制查询时的分割符，该属性的默认值为 , | 文本分隔符                                                                                          |
| value                          | string   |                                                | 配置默认值                                                                                          |
| value-field                    | string   | 该属性的默认值为 userId                        | 取值字段映射                                                                                        |
| value-split                    | string   | 该属性的默认值为 ,                             | 值分隔符                                                                                            |

### Events

| 事件名 | 回调参数 | 说明                       |
| ------ | -------- | -------------------------- |
| change |          | 值发生变化时触发           |
| error  |          | 输入未匹配到用户信息时触发 |

### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| options | 选项文本 |
