## ActionSheet

### Props

| 属性名        | 类型                                           | 默认值 | 说明                                                   |
| ------------- | ---------------------------------------------- | ------ | ------------------------------------------------------ |
| before-close  | (type: 'confirm' \| 'close' \| 'hide') => void |        | 关闭前执行的事件                                       |
| custom-class  | String                                         |        | 自定义 class 样式                                      |
| flex          | Boolean                                        | true   | 弹性布局                                               |
| fullscreen    | Boolean                                        | false  | 是否全屏                                               |
| lock-scroll   | Boolean                                        | false  | 弹出时是否禁用滚动条                                   |
| mask          | Boolean                                        | true   | 是否显示遮罩层                                         |
| mask-closable | Boolean                                        | true   | 单击遮罩层是否关闭弹窗                                 |
| menus         | Array                                          | []     | 操作列表，设置 type 为 action 启用操作列表模式时有效。 |
| show-close    | Boolean                                        | true   | 是否显示关闭按钮                                       |
| show-footer   | Boolean                                        | false  | 是否显示底部                                           |
| show-header   | Boolean                                        | true   | 是否显示头部                                           |
| title         | String                                         |        | 面板标题                                               |
| type          | Array[string]                                  |        | 设置 type 为 action 启用操作列表模式                   |
| v-model       | Number \| String \| Array                      |        | 双向数据绑定                                           |
| visible       | Boolean                                        | false  | 是否弹出面板                                           |

### Events

| 事件名            | 回调参数   | 说明                                                             |
| ----------------- | ---------- | ---------------------------------------------------------------- |
| click             | Function() | 点击列表选项时触发，设置 type 为 action 启用操作列表模式时有效。 |
| close             | Function() | 关闭面板时触发的事件。                                           |
| confirm           | Function() | 点击底部按钮时触发，设置 show-footer 为 true 时有效。            |
| update:modelValue | Function() | 数据更新时触发的事件                                             |
| update:visible    | Function() | 面板显示或隐藏时触发                                             |

### Methods

| 方法名                          | 返回值                | 说明                                                   |
| ------------------------------- | --------------------- | ------------------------------------------------------ |
| actionSelectOption              | (item, index) => void | 选择列表项，设置 type 为 action 启用操作列表模式时有效 |
| actionSelectOption(item, index) |                       | 选择列表项，设置 type 为 action 启用操作列表模式时有效 |
| close                           |                       | 关闭面板                                               |

### Slots

| 插槽名       | 说明                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------- |
| body-bottom  | 内容底部插槽                                                                                |
| body-top     | 内容顶部插槽                                                                                |
| default      | 组件默认插槽，设置 type 为 action 启用操作列表模式会提供参数 data 列表项和 index 列表索引。 |
| footer       | 底部插槽，设置 show-footer 为 true 时有效                                                   |
| header-left  | 头部左侧插槽，设置 show-header 为 true 时有效                                               |
| header-right | 头部右侧插槽，设置 show-header 为 true 时有效                                               |
