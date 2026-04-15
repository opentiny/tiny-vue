## area

### Props

| 属性名                | 类型     | 默认值                | 说明                                                                                                            |
| --------------------- | -------- | --------------------- | --------------------------------------------------------------------------------------------------------------- |
| disabled              | boolean  |                       | 禁用输入框;默认为 false                                                                                         |
| fetch-jcr             | Function |                       | 自定义获取片区 JCR 的服务                                                                                       |
| fetch-office          | Function |                       | 自定义获取办事处 Office 的服务                                                                                  |
| fetch-region          | Function |                       | 自定义获取地区部 Region 的服务                                                                                  |
| fetch-rep             | Function |                       | 自定义获取代表处 Rep 的服务                                                                                     |
| modelValue / v-model  | string   |                       | 设置片区默认值                                                                                                  |
| placeholder           | string   |                       | 当数据为空时的占位符                                                                                            |
| popper-append-to-body | boolean  | 该属性的默认值为 true | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)             |
| popper-class          | string   |                       | 为 popper 添加类名(可参考 popover 组件)                                                                         |
| props                 | object   |                       | 自定义服务时，设置数据的映射字段;默认为 {label: 'name_cn',// 显示文本对应的字段 value: 'org_id'// 值对应的字段} |
| size                  | string   |                       | 设置组件大小，可设置值为：medium，small，mini                                                                   |

### Events

| 事件名        | 回调参数            | 说明                                                                                      |
| ------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| change-office | Function(value, vm) | Office 的值发生变化时会触发该事件;回调参数为 改变的值;value: 改变后的值, vm: Area组件实例 |
| change-region | Function(value, vm) | Region 的值发生变化时会触发该事件;回调参数为 改变的值;value: 改变后的值, vm: Area组件实例 |
| change-rep    | Function(value, vm) | Rep 的值发生变化时会触发该事件;回调参数为 改变的值;value: 改变后的值, vm: Area组件实例    |
