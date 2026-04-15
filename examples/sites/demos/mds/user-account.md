## user-account

### Props

| 属性名                | 类型             | 默认值                | 说明                                                                                                |
| --------------------- | ---------------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| beforeLogout          | Function(params) |                       | 注销前的回调函数                                                                                    |
| getUserImageUrl       | Function         |                       | 自定义配置获取用户头像服务                                                                          |
| getUserInfo           | Function         |                       | 自定义配置用户查询服务                                                                              |
| popper-append-to-body | boolean          | 该属性的默认值为 true | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件) |
| popper-class          | string           |                       | 为 popper 添加类名(可参考 popover 组件)                                                             |
| showArrow             | boolean          |                       | 设置为true时，箭头会与Roles组件的箭头方向保持一致                                                   |

### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |
