## Filter

### Props

| 属性名       | 类型   | 默认值 | 说明                                                        |
| ------------ | ------ | ------ | ----------------------------------------------------------- |
| column-num   | Number | 3      | 面板每行的列数，默认值为 3。                                |
| custom-class | Array  | []     | 自定义组件 class 样式。                                     |
| data         | Array  | []     | 过滤列表数据。                                              |
| filter-group | Array  |        | 过滤组列表                                                  |
| filter-value | Array  | []     | 过滤组绑定的值。                                            |
| manual       | Array  | []     | 过滤选项自定义对接外部组件，一般和 panel 面板事件一起使用。 |
| panel-class  | Array  | []     | 自定义组件面板 class 样式。                                 |
| v-model      | Array  | []     | 绑定值                                                      |

### Events

| 事件名 | 回调参数   | 说明                   |
| ------ | ---------- | ---------------------- |
| cancel | Function() | 关闭面板时触发的事件。 |
| panel  | Function() | 打开面板时触发的事件。 |

### Slots

| 插槽名  | 说明                                                     |
| ------- | -------------------------------------------------------- |
| default | 过滤项插槽。                                             |
| footer  | 面板底部按钮组插槽，提供了 cancel、reset、confirm 方法。 |
| icon    | 过滤图标插槽，提供了参数 active，index。                 |
