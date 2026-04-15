## switch

### Props

| 属性名               | 类型                        | 默认值 | 说明                                                      |
| -------------------- | --------------------------- | ------ | --------------------------------------------------------- |
| before-change        | (done: () => void) => void  |        | 开关值变化前置处理                                        |
| disabled             | boolean                     | false  | 是否禁用                                                  |
| loading              | boolean                     | false  | 是否加载中状态                                            |
| false-value          | boolean \| string \| number | false  | switch 关闭时的值                                         |
| mini                 | boolean                     | false  | 设置是否显示为 mini 模式，mini 模式下不会显示 slot 的内容 |
| modelValue / v-model | boolean \| string \| number |        | 开关绑定值                                                |
| show-text            | boolean                     | false  | switch 是否显示内容里面的文字                             |
| size                 | string                      |        | 定义开关尺寸                                              |
| true-value           | boolean \| string \| number | true   | switch 打开时的值                                         |
| width                | number \| string            |        | 定义开关的宽度                                            |
| types                | string                      |        | 展示开关不同的状态                                        |
| v-model              | string                      |        | <p>绑定值</p>                                             |

### Events

| 事件名 | 回调参数                                     | 说明                            |
| ------ | -------------------------------------------- | ------------------------------- |
| change | (value: boolean \| string \| number) => void | switch 状态发生变化时的回调函数 |
| enent  |                                              | switch发生变化的回调函数        |

### Slots

| 插槽名        | 说明                                  |
| ------------- | ------------------------------------- |
| close         | 关闭内容，当 show-text 为 true 时有效 |
| open          | 开启内容，当 show-text 为 true 时有效 |
| active-icon   | 开启时开关的图标                      |
| inactive-icon | 关闭时开关的图标                      |
