## user-contact

### Props

| 属性名                | 类型    | 默认值                | 说明                                                                                                |
| --------------------- | ------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| data                  | object  |                       | 设置的数据                                                                                          |
| espace                | Array   |                       | espace 信息配置                                                                                     |
| popper-append-to-body | boolean | 该属性的默认值为 true | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件) |
| popper-class          | string  |                       | 为 popper 添加类名(可参考 popover 组件)                                                             |
| show-img              | boolean | 该属性的默认值为 true | 是否显示头像，默认 true                                                                             |
| show-name             | boolean | 该属性的默认值为 true | 是否显示姓名 userName,默认 true                                                                     |
| show-number           | boolean | 该属性的默认值为 true | 是否显示工号 roleNumber,默认 true                                                                   |

### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |
