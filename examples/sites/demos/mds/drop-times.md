## drop-times

### Props

| 属性名                | 类型    | 默认值 | 说明                                                                                                |
| --------------------- | ------- | ------ | --------------------------------------------------------------------------------------------------- |
| disabled              | boolean | false  | 禁用状态                                                                                            |
| end                   | number  | 1440   | 结束时间，以分钟计算                                                                                |
| modelValue / v-model  | string  |        | 绑定值                                                                                              |
| placeholder           | string  |        | 设置输入框内的提示占位文本                                                                          |
| popper-append-to-body | boolean | true   | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件) |
| popper-class          | string  |        | 为 DropTimes 下拉弹框添加的 class 类名                                                              |
| size                  | string  |        | 输入框尺寸                                                                                          |
| start                 | number  | 0      | 开始时间，以分钟计算                                                                                |
| step                  | number  | 15     | 间隔时间，以分钟计算                                                                                |

### Events

| 事件名 | 回调参数                | 说明                         |
| ------ | ----------------------- | ---------------------------- |
| change | (value: string) => void | 下拉切换当前时间后触发该事件 |
