## country

### Props

| 属性名                | 类型            | 默认值                 | 说明                                                                                                |
| --------------------- | --------------- | ---------------------- | --------------------------------------------------------------------------------------------------- |
| clearable             | boolean         | 该属性的默认值为 true  | 是否显示清除按钮;是否可清空                                                                         |
| disabled              | boolean         | 该属性的默认值为 false | 禁用                                                                                                |
| fetchCountry          | Function        |                        | 自定义国家查询接口，返回一个Promise对象，未使用框架服务时必填                                       |
| fields                | object          |                        | 自定义数据映射，未使用框架服务时必填                                                                |
| modelValue / v-model  | string , number |                        | 设置下拉框的值。                                                                                    |
| placeholder           | string          |                        | 设置输入框内的提示占位文本。                                                                        |
| popper-append-to-body | boolean         | 该属性的默认值为 true  | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件) |
| popper-class          | string          |                        | 为 popper 添加类名(可参考 popover 组件)                                                             |
