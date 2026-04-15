## numeric

### Props

| 属性名            | 类型                              | 默认值    | 说明                                                                               |
| ----------------- | --------------------------------- | --------- | ---------------------------------------------------------------------------------- |
| allow-empty       | boolean                           | false     | 内容可清空                                                                         |
| empty-value       | any                               | undefined | 设置计数器在可清空下，清空后组件的绑定值                                           |
| blank             | boolean                           | true      | 过滤器背景设置为透明，默认值为true                                                 |
| circulate         | boolean                           | false     | 向上到达最大值后，是否从最小值开始，或反过来                                       |
| controls          | boolean                           | true      | 是否使用加减按钮                                                                   |
| controls-position | '' \| 'right'                     |           | 加减按钮位置，可选值为 right，表示加减按钮均位于最右侧                             |
| disabled          | boolean                           | false     | 禁用                                                                               |
| display-only      | boolean                           |           | 设置只读态                                                                         |
| format            | INumericFormat                    |           | 数字格式化置项                                                                     |
| hide-unit         | boolean                           |           | 隐藏单位                                                                           |
| hold-zero         | boolean                           |           | 精度细化，默认值为 true                                                            |
| label             | string                            |           | 组件 arial-label 属性取值                                                          |
| max               | number                            | Infinity  | 规定组件可输入的最大数值，指定合法值的范围，支持整数和小数                         |
| min               | number                            | -Infinity | 规定组件可输入的最小数值，指定合法值的范围，支持整数和小数                         |
| model-truncation  | boolean                           |           | 在配置了精度情况下，是否对v-model绑字值进行精度截取，配为false时，精度仅用来作展示 |
| mouse-wheel       | boolean                           | true      | 鼠标滚动滑轮是否改变数值                                                           |
| name              | string                            |           | 原生属性                                                                           |
| placeholder       | string                            | ''        | 输入框内的提示占位文本                                                             |
| plugin            | Function                          |           | 高精度的数据在IE下需要Bignumberjs兼容                                              |
| precision         | number                            |           | 数值精度                                                                           |
| shape             | string                            |           | 设置输入的shape='filter,切换至过滤器模式'                                          |
| show-left         | boolean                           | true      | 设置左对齐                                                                         |
| size              | string                            |           | 计数器尺寸，该属性的可选值为 medium \| small \| mini                               |
| step              | number \| string \| IStepStrategy | 1         | 步长                                                                               |
| step-strictly     | boolean                           | false     | 是否只能输入 step 的倍数                                                           |
| strict-input      | boolean                           |           | 严格控制输入，包含合法性输入与小数点长度验证，不允许输入超过精度设置               |
| string-mode       | boolean                           |           | 使用字符串模式，精度超过JS限制时使用                                               |
| tabindex          | boolean                           |           | Numeric组件的 tabindex                                                             |
| unit              | string                            |           | 数值的单位。在设置单位时，加减按钮将不可用                                         |
| unit-center       | boolean                           |           | 配置unit属性后，设置输入框内的数字是否居中显示，默认值为 false                     |
| v-model           | number                            | 0         | 设置输入组件的默认值，默认为 0                                                     |
| change-compat     | boolean                           | false     | 设置除加减按钮及直接输入数值之外，值改变后是否触发change事件                       |
| validate-event    | boolean                           |           | 验证事件，默认值为true                                                             |
| string-mode       | boolean                           |           | 使用字符串模式，精度超过JS限制时使用                                               |

### Events

| 事件名        | 回调参数                                                           | 说明                         |
| ------------- | ------------------------------------------------------------------ | ---------------------------- |
| blur          | (event: FocusEvent) => void                                        | 组件失去焦点时触发的回调函数 |
| change        | (newVal: number \| undefined, oldVal: number \| undefined) => void | 组件的值变化时触发的回调函数 |
| filter-change | (label) => void                                                    | 选择过滤器面板值的回调函数   |
| focus         | (event: FocusEvent) => void                                        | 组件获得焦点时触发的回调函数 |
| input         | (event: InputEvent) => void                                        | 输入值时触发事件             |

## Types

### INumericFormat

```typescript
interface INumericFormat {
  fraction: 4 // 保留小数位数
  rounding: 0 // 舍入点，0-9之间的数字，如配置为7时则为6舍7入，默认为5（四舍五入）;配置为0或>9将会进行截取
  prefix: '$' // 前置标识
  groupSize: 3 // 整数部分分组间隔，即第一个分组位数
  secondaryGroupSize: 2 // 整数部分第二级分组间隔，不设置或为0时 自动取groupSize
  groupSeparator: ',' // 整数部分分组分隔符
  decimalSeparator: '.' // 小数点符号
  fractionGroupSize: 0 // 小数部分分组间隔
  fractionGroupSeparator: '' // 小数分组分隔符
  suffix: '@' // 后置标识
}
```

### IStepStrategy

```typescript
interface IStepStrategy {
  value: number | string // 5 或者 '5'
  mode: 'strictly' | 'restore'
}
```
