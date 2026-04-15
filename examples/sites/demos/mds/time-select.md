## time-select

### Props

| 属性名                | 类型                                      | 默认值             | 说明                                                                                       |
| --------------------- | ----------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------ |
| clear-icon            | string                                    | IconOperationfaild | 自定义清空图标                                                                             |
| clearable             | boolean                                   | true               | 清除按钮是否显示                                                                           |
| default-value         | Date                                      |                    | 可选，当选中的日期值为空时，选择器面板打开时默认显示的时间，需设置为可被new Date()解析的值 |
| disabled              | boolean                                   | false              | 时间选择器是否禁用                                                                         |
| editable              | boolean                                   | true               | 文本框是否可手动输入                                                                       |
| modelValue / v-model  | date(DatePicker) / array(DateRangePicker) |                    | 日期选择器选中的日期值，可设置选择器的初始值                                               |
| name                  | string                                    |                    | 原生属性                                                                                   |
| picker-options        | object                                    | {}                 | 当前时间日期选择器特有的选项参考下表                                                       |
| placeholder           | string                                    |                    | 输入框的提示占位内容                                                                       |
| popper-append-to-body | boolean                                   | true               | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false             |
| popper-class          | string                                    |                    | TimePicker 下拉框的 class 类名                                                             |
| popper-options        | IPopperOption                             | { }                | 弹出层参数                                                                                 |
| size                  | string                                    |                    | 输入框尺寸;该属性的可选值为 medium、small、mini                                            |
| suffix-icon           | string                                    | IconCalendar       | 自定义头部图标                                                                             |

### Events

| 事件名 | 回调参数                | 说明                            |
| ------ | ----------------------- | ------------------------------- |
| blur   | ( ) => void             | 当 input 失去焦点时触发         |
| change | (value: string) => void | 当 input 绑定的值发生改变时触发 |
| focus  | ( ) => void             | 当 input 获得焦点时触发         |

### Methods

| 方法名 | 返回值      | 说明              |
| ------ | ----------- | ----------------- |
| focus  | ( ) => void | 使 input 获取焦点 |

## Types

### IPopperOption

```typescript
interface IPopperOption {
  bubbling: boolean // 是否监听元素所有上级有滚动元素的scroll事件，监听到则更新popper的位置。用于解决某些弹出层位置在页面滚动时，位置不正确的场景，默认false
  followReferenceHide: boolean // 当触发源隐藏时，自动隐藏弹出层，默认true
  removeOnDestroy: boolean // 弹出层消失后，是否移除弹出层的DOM元素，布尔false
  updateHiddenPopperOnScroll: boolean // 滚动过程中是否更新隐藏的弹出层位置
  boundariesElement: 'viewport' | 'body' | HTMLElement // 滚动过程中,弹出层的碰撞边界。 默认值为： 'viewport'
  ignoreBoundaries: boolean // 忽略边界判断，弹出的位置始终是设置的 placement 值
  scrollParent: HTMLElement // 指定滚动的父节点，优化级最高。 默认为null
}
```
