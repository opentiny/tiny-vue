## pull-refresh

## pull-refresh

### Props

| 属性名          | 类型             | 默认值                         | 说明                                                                                                                                        |
| --------------- | ---------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
|                 |                  |                                |                                                                                                                                             |
| disabled        | boolean          | 默认值是false                  | 是否禁用下拉刷新                                                                                                                            |
| headHeight      | [Number, String] | 默认值是50                     | 组件头部提示区域的高度                                                                                                                      |
| loadingOptions  | Object           | 默认值是空对象{}               | 不使用loading插槽时，内置加载组件Loading的参数：Loading.service(options)                                                                    |
| loadingText     | string           |                                | 数据刷新过程的提示文本                                                                                                                      |
| loosingText     | string           |                                | 向下拖动超过阈值后可松开进行刷新的提示文本                                                                                                  |
| modelValue      | boolean          | 默认值是false                  | 是否正在进行下拉刷新                                                                                                                        |
| pullDistance    | [Number, String] | 默认值是属性 `headHeight` 的值 | 拖拽产生刷新的距离                                                                                                                          |
| pullingText     | string           |                                | 向下拖动过程的提示文本                                                                                                                      |
| selfSimulate    | boolean          | 默认值是false                  | 是否开启自模拟Touch事件。如果开启，那么组件只处理自身产生的模拟Touch事件，忽略冒泡上来的非自身模拟事件。正常非模拟Touch事件始终不会跳过处理 |
| successDuration | [Number, String] | 默认值是500                    | 刷新成功提示文本延时消失时间                                                                                                                |
| successText     | string           |                                | 刷新成功的提示文本                                                                                                                          |

### Events

| 事件名            | 回调参数                       | 说明                                  |
| ----------------- | ------------------------------ | ------------------------------------- |
| change            | Function({ status, distance }) | 在组件状态改变时抛出                  |
| refresh           | Function()                     | 在组件状态进入 loading 刷新数据时抛出 |
| update:modelValue | Function(isLoading)            | 在组件状态进入 loading 刷新数据时抛出 |

### Slots

| 插槽名  | 说明                                         |
| ------- | -------------------------------------------- |
| default | 组件默认插槽                                 |
| loading | 组件 loading 插槽，自定义 loading 状态的提示 |
| loosing | 组件 loosing 插槽，自定义 loosing 状态的提示 |
| normal  | 组件 normal 插槽，自定义 normal 状态的提示   |
| pulling | 组件 pulling 插槽，自定义 pulling 状态的提示 |
| success | 组件 success 插槽，自定义 success 状态的提示 |
