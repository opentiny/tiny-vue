## date-panel

### Props

| 属性名               | 类型                                                     | 默认值       | 说明                                                                                                                 |
| -------------------- | -------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------- |
| disabled-date        | () => void                                               |              | 配置部分禁用                                                                                                         |
| format               | string                                                   | 'yyyy-MM-dd' | 面板选中日期格式                                                                                                     |
| v-model / modelValue | date \| string \| number                                 |              | 绑定值                                                                                                               |
| popper-class         | string                                                   |              | 为 DatePanel 面板添加的 class 类名                                                                                   |
| readonly             | boolean                                                  | false        | 设置日期是否只读                                                                                                     |
| shortcuts            | Array<T>                                                 | []           | 设置快捷选项                                                                                                         |
| show-week-number     | boolean                                                  | false        | 是否展示周次序号                                                                                                     |
| format-weeks         | (customWeeks: number, weekFirstDays: string[]) => string |              | 格式化周次序号，该回调函数有两个参数，customWeeks 用来获取自定义周次的序号，weekFirstDays 用来获取每周次中的首个日期 |
| first-day-of-week    | number                                                   | 7            | 设置每周的第一天是星期几，默认值是7，也就是星期天                                                                    |

### Events

| 事件名        | 回调参数                | 说明                   |
| ------------- | ----------------------- | ---------------------- |
| select-change | (value: string) => void | 用户确认选定的值时触发 |

## date-range

### Props

| 属性名               | 类型                         | 默认值       | 说明                                     |
| -------------------- | ---------------------------- | ------------ | ---------------------------------------- |
| modelValue / v-model | Array<T>                     | []           | 绑定值                                   |
| type                 | 'daterange \| datetimerange' | daterange    | 时间区间类型                             |
| disabled-date        | () => void                   |              | 配置部分禁用                             |
| format               | string                       | 'yyyy-MM-dd' | 显示在输入框中的格式                     |
| popper-class         | string                       |              | 为 DateRange 下拉弹框添加的 class 类名   |
| readonly             | boolean                      | false        | 设置日期是否只读                         |
| shortcuts            | Array<T>                     | []           | 设置快捷选项                             |
| show-week-number     | boolean                      | false        | 是否展示周次序号                         |
| unlink-panels        | boolean                      | false        | 在范围选择器里取消两个日期面板之间的联动 |

### Events

| 事件名        | 回调参数              | 说明                   |
| ------------- | --------------------- | ---------------------- |
| select-change | (value: Date) => void | 用户确认选定的值时触发 |

## month-range

### Props

| 属性名               | 类型       | 默认值    | 说明                                     |
| -------------------- | ---------- | --------- | ---------------------------------------- |
| modelValue / v-model | Array<T>   | []        | 绑定值                                   |
| disabled-date        | () => void |           | 配置部分禁用                             |
| format               | string     | 'yyyy-MM' | 显示在输入框中的格式                     |
| popper-class         | string     |           | 为 MonthRange 下拉弹框添加的 class 类名  |
| readonly             | boolean    | false     | 设置日期是否只读                         |
| shortcuts            | Array<T>   | []        | 设置快捷选项                             |
| unlink-panels        | boolean    | false     | 在范围选择器里取消两个日期面板之间的联动 |

### Events

| 事件名        | 回调参数              | 说明                   |
| ------------- | --------------------- | ---------------------- |
| select-change | (value: Date) => void | 用户确认选定的值时触发 |

## year-range

### Props

| 属性名               | 类型       | 默认值 | 说明                                     |
| -------------------- | ---------- | ------ | ---------------------------------------- |
| modelValue / v-model | Array<T>   | []     | 绑定值                                   |
| disabled-date        | () => void |        | 配置部分禁用                             |
| popper-class         | string     |        | 为 YearRange 下拉弹框添加的 class 类名   |
| readonly             | boolean    | false  | 设置日期是否只读                         |
| shortcuts            | Array<T>   | []     | 设置快捷选项                             |
| unlink-panels        | boolean    | false  | 在范围选择器里取消两个日期面板之间的联动 |

### Events

| 事件名        | 回调参数              | 说明                   |
| ------------- | --------------------- | ---------------------- |
| select-change | (value: Date) => void | 用户确认选定的值时触发 |
