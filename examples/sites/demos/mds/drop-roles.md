## drop-roles

### Props

| 属性名                | 类型            | 默认值                | 说明                                                                                                |
| --------------------- | --------------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| fetchCurrentRole      | object          |                       | 自定义获取当前用户角色接口，未使用框架服务时必填                                                    |
| fetchRole             | object          |                       | 自定义获取角色列表接口，未使用框架服务时必填                                                        |
| fields                | object          |                       | 自定义数据映射，未使用框架服务时必填                                                                |
| modelValue / v-model  | string , number |                       | 设置文本显示的值。;绑定值                                                                           |
| placeholder           | string          |                       | 设置输入框内的提示占位文本。                                                                        |
| popper-append-to-body | boolean         | 该属性的默认值为 true | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件) |
| popper-class          | string          |                       | 为 popper 添加类名(可参考 popover 组件)                                                             |
| size                  | string          |                       | 设置组件大小                                                                                        |

### Events

| 事件名 | 回调参数 | 说明               |
| ------ | -------- | ------------------ |
| change |          | 当前角色切换后触发 |
