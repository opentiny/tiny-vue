## date-picker

### Props

| 属性名                | 类型                                                     | 默认值                                 | 说明                                                                                                                                                                                                                |
| --------------------- | -------------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| align                 | 'left' \| 'center' \| 'right'                            | 'left'                                 | 日期选择面板和输入框的对齐方式                                                                                                                                                                                      |
| clear-icon            | Component                                                | IconOperationfaild                     | 自定义清空图标                                                                                                                                                                                                      |
| clearable             | boolean                                                  | true                                   | 是否显示清除按钮                                                                                                                                                                                                    |
| default-time          | string \| string[]                                       | '00:00:00' \| ['00:00:00', '00:00:00'] | type="datetime" 时，default-time 是一个字符串，用于设置选择一个日期后，时间输入框中的默认值；<br>type="datetimerange" 时，default-time 是一个字符串数组，用于设置选择一个日期范围后，开始和结束时间输入框中的默认值 |
| default-value         | string \| Date                                           | new Date()                             | 当选中的日期值为空时，选择器面板打开时默认显示的时间，可以是日期格式或者能被 new Date() 解析的字符串                                                                                                                |
| disabled              | boolean                                                  | false                                  | 禁用                                                                                                                                                                                                                |
| editable              | boolean                                                  | true                                   | 文本框可输入                                                                                                                                                                                                        |
| end-placeholder       | string                                                   | ''                                     | 范围选择时结束日期的占位内容                                                                                                                                                                                        |
| format                | string                                                   | 'yyyy-MM-dd'                           | 显示在输入框中的格式                                                                                                                                                                                                |
| format-weeks          | (customWeeks: number, weekFirstDays: string[]) => string |                                        | 格式化周次序号，该回调函数有两个参数，customWeeks 用来获取自定义周次的序号，weekFirstDays 用来获取每周次中的首个日期                                                                                                |
| isutc8                | boolean                                                  | false                                  | 默认值为 false，设置为 true 时切换系统默认时区，时间依然显示为东八区时间，适用场景为海外地区显示东八区时间                                                                                                          |
| label                 | string                                                   | ''                                     | 设置 shape="filter" 属性之后，代表过滤器模式下显示的标题，单独设置 label 属性可以使 label 放置在组件的开始位置                                                                                                      |
| modelValue / v-model  | Date \| string \| number \| Array                        |                                        | 绑定值                                                                                                                                                                                                              |
| name                  | string                                                   | ''                                     | 原生属性                                                                                                                                                                                                            |
| picker-options        | IPickerOptions                                           |                                        | 配置部分禁用、快捷选项等，包含 firstDayOfWeek / disabledDate / onPick / shortcuts 属性，详细用法可参考 IPickerOptions 类型声明                                                                                      |
| placeholder           | string                                                   | ''                                     | 非范围选择时的占位内容                                                                                                                                                                                              |
| popper-append-to-body | boolean                                                  | true                                   | 是否将弹出框插入至 body 元素，在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)                                                                                                                 |
| popper-class          | string                                                   |                                        | 为 DatePicker 下拉弹框添加的 class 类名                                                                                                                                                                             |
| popper-options        | IPopperOption                                            | { }                                    | 弹出层参数                                                                                                                                                                                                          |
| range-separator       | string                                                   | '-'                                    | 选择范围时的分隔符                                                                                                                                                                                                  |
| readonly              | boolean                                                  | false                                  | 设置日历组件是否只读                                                                                                                                                                                                |
| shape                 | string                                                   |                                        | 通过 shape="filter" 属性切换至过滤器模式                                                                                                                                                                            |
| show-timezone         | boolean                                                  | false                                  | 是否开启设置日期选择面板时区选择                                                                                                                                                                                    |
| show-week-number      | boolean                                                  | false                                  | 是否展示周次序号                                                                                                                                                                                                    |
| size                  | 'medium' \| 'small' \| 'mini'                            |                                        | 输入框尺寸                                                                                                                                                                                                          |
| start-placeholder     | string                                                   | ''                                     | 范围选择时开始日期的占位内容                                                                                                                                                                                        |
| step                  | IStep                                                    |                                        | 设置 type="datetime" 或者 type="datetimerange" 属性之后，可以通过 step 配置时间的步长，step 是一个对象，包含三个属性：hour、minute、second，分别用来配置时、分、秒的步长                                            |
| suffix-icon           | Component                                                | IconCalendar                           | 自定义选择器的后置图标                                                                                                                                                                                              |
| time-arrow-control    | boolean                                                  | false                                  | 通过箭头按钮控制时间选择，当 type 为 datetime、datetimerange 时使用，默认为 通过鼠标滚轮滚动选择时间                                                                                                                |
| time-format           | string                                                   | 'HH:mm:ss'                             | 当自定义的 format 格式无法自动区分时间与日期时，可配置该选项用来辅助确定格式                                                                                                                                        |
| tip                   | string                                                   |                                        | 过滤器模式下显示的提示信息                                                                                                                                                                                          |
| type                  | IType                                                    | 'date'                                 | 显示类型，该属性的可选值可参考 IType 类型声明                                                                                                                                                                       |
| unlink-panels         | boolean                                                  | false                                  | 在范围选择器里取消两个日期面板之间的联动                                                                                                                                                                            |
| validate-event        | boolean                                                  | true                                   | 设置日期选择器在输入时是否会触发表单校验                                                                                                                                                                            |
| value-format          | string                                                   |                                        | 指定绑定值的格式，不指定则绑定值为 Date 对象                                                                                                                                                                        |

### Events

| 事件名 | 回调参数              | 说明                    |
| ------ | --------------------- | ----------------------- |
| blur   | () => void            | 当 input 失去焦点时触发 |
| change | (value: Date) => void | 用户确认选定的值时触发  |
| focus  | () => void            | 当 input 获得焦点时触发 |

### Methods

| 方法名 | 返回值     | 说明              |
| ------ | ---------- | ----------------- |
| focus  | () => void | 使 input 获取焦点 |

### Slots

| 插槽名  | 说明                 |
| ------- | -------------------- |
| now     | 组件“此刻”位置插槽   |
| footer  | 底部区域作用域插槽。 |
| confirm | 仅覆盖“确认”按钮区域 |

## Types

### IPickerOptions

```typescript
interface IPickerOptions {
  // 每周的第一天是星期几，默认值是7，也就是星期天
  firstDayOfWeek: number
  // 实现部分禁用，此时只能选择一部分日期
  disabledDate: (time: Date) => boolean
  // 选中日期后执行的回调，需要与 daterange 或 datetimerange 类型配合使用才生效
  onPick: (range: { minDate: Date; maxDate: Date }) => void
  // 快捷选项
  shortcuts: {
    text: string
    onClick: (picker: { $emit: (type: string, date: Date) => void }) => void
    type: 'startFrom' | 'EndAt'
    startDate: Date
    endDate: Date
  }[]
}
```

### IType

```typescript
type IType =
  | 'date'
  | 'dates'
  | 'daterange'
  | 'datetime'
  | 'datetimerange'
  | 'week'
  | 'month'
  | 'monthrange'
  | 'quarter'
  | 'year'
  | 'years'
  | 'yearrange'
```

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
