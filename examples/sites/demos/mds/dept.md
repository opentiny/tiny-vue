## dept

### Props

| 属性名           | 类型     | 默认值                 | 说明                                                                      |
| ---------------- | -------- | ---------------------- | ------------------------------------------------------------------------- |
| autoSelect       | Boolen   | 该属性的默认值为 true  | 设置当部门信息仅一条数据时时自动补全选中                                  |
| beforeConfirm    | Function |                        | 确认之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止弹框关闭 |
| disabled         | Boolen   | 该属性的默认值为 false | 禁用                                                                      |
| fetchDept        | Function |                        | 自定义部门搜索查询接口，返回一个Promise对象，未使用框架服务时必填         |
| fetchDeptByValue | Function |                        | 自定义部门详情查询接口，返回一个Promise对象，未使用框架服务时必填         |
| fetchDeptList    | Function |                        | 自定义部门列表查询接口，返回一个Promise对象，未使用框架服务时必填         |
| size             | string   |                        | 设置组件大小                                                              |
| title            | string   |                        | 设置弹窗标题                                                              |
| value            | string   |                        | 设置部门组件的初始化时的显示值。                                          |

### Events

| 事件名   | 回调参数        | 说明                                                                   |
| -------- | --------------- | ---------------------------------------------------------------------- |
| cancel   | Function        | 点击取消按钮触发的事件。                                               |
| change   | Function(value) | 选择的部门值改变时触发，回调参数为改变后的部门编码。;value: 改变后的值 |
| close    | Function        | 关闭部门弹出框时触发该事件。                                           |
| confirm  | Function        | 点击确认按钮触发的事件。                                               |
| open     | Function        | 点击弹出弹框触发的事件。                                               |
| selected | Function(value) | 点击选中部门触发的事件，回调参数为选中的部门编码。                     |

### Slots

| 插槽名     | 说明   |
| ---------- | ------ |
| hrapprover | 权签人 |
