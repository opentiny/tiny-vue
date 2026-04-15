## link

### Props

| 属性名    | 类型                                                      | 默认值 | 说明           |
| --------- | --------------------------------------------------------- | ------ | -------------- |
| disabled  | boolean                                                   | false  | 是否禁用状态   |
| href      | string                                                    |        | 原生 href 属性 |
| icon      | Component                                                 |        | 图标组件       |
| type      | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' |        | 文本链接类型   |
| underline | boolean                                                   | true   | 是否下划线     |
| value     | string                                                    |        | 显示内容       |
| target    | '\_self' \| '\_blank' \| '\_parent' \| '\_top'            | \_self | 链接打开方式   |

### Events

| 事件名 | 回调参数                 | 说明     |
| ------ | ------------------------ | -------- |
| click  | (ev: MouseEvent) => void | 点击事件 |

### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |
| icon    | 图标     |
