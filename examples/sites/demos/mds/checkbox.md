## checkbox

### Props

| 属性名               | 类型                        | 默认值 | 说明                                                                    |
| -------------------- | --------------------------- | ------ | ----------------------------------------------------------------------- |
| checked              | boolean                     | false  | 是否默认勾选                                                            |
| disabled             | boolean                     | false  | 是否禁用                                                                |
| display-only         | string                      |        | 是否开启组件 display-only 只显示模式，默认值为 false                    |
| false-label          | string \| number            |        | 没有选中时的值                                                          |
| indeterminate        | boolean                     | false  | 设置 indeterminate 状态，只负责样式控制                                 |
| label                | string \| number \| boolean |        | 选中状态的值（只有在 checkbox-group 中或者绑定对象类型为 array 时有效） |
| modelValue / v-model | string \| number \| boolean |        | 绑定值                                                                  |
| name                 | string                      |        | 原生 name 属性                                                          |
| shape                | 'filter'                    |        | 过滤器模式                                                              |
| text                 | string                      |        | 复选框显示的文本                                                        |
| true-label           | string \| number            |        | 选中时的值                                                              |
| v-model              | String / Number / Boolean   |        | 绑定值                                                                  |

### Events

| 事件名 | 回调参数                                     | 说明                     |
| ------ | -------------------------------------------- | ------------------------ |
| change | (value: string \| number \| boolean) => void | 当绑定值变化时触发的事件 |

### Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | checkbox的内容 |

## checkbox-group

### Props

| 属性名               | 类型                          | 默认值     | 说明                                                             |
| -------------------- | ----------------------------- | ---------- | ---------------------------------------------------------------- |
| disabled             | boolean                       | false      | 是否禁用                                                         |
| fill                 | string                        |            | 按钮形式的 checkbox 激活时的填充色和边框色                       |
| max                  | number                        |            | 可被勾选的 checkbox 的最大数量                                   |
| min                  | number                        |            | 可被勾选的 checkbox 的最小数量                                   |
| modelValue / v-model | string[] \| number[]          |            | 绑定值                                                           |
| options              | ICheckboxGroupOptions[]       |            | checkbox-group 子项配置列表                                      |
| shape                | 'filter'                      |            | 过滤器模式                                                       |
| size                 | 'medium' \| 'small' \| 'mini' |            | 多选框组尺寸，仅对按钮形式的 checkbox 或带有边框的 checkbox 有效 |
| text-color           | string                        |            | 按钮形式的 checkbox 激活时的文本颜色                             |
| type                 | 'button' \| 'checkbox'        | 'checkbox' | 复选框组子项组件类型，需配合 options 属性使用                    |
| vertical             | boolean                       | false      | 设置组件排列方式，设置复选框是否垂直排列                         |

### Events

| 事件名 | 回调参数                             | 说明                     |
| ------ | ------------------------------------ | ------------------------ |
| change | (value: string[] \|number[]) => void | 当绑定值变化时触发的事件 |

### Slots

| 插槽名  | 说明                  |
| ------- | --------------------- |
| default | checkbox-group 选项组 |

## checkbox-button

### Props

| 属性名               | 类型                         | 默认值 | 说明                                                                  |
| -------------------- | ---------------------------- | ------ | --------------------------------------------------------------------- |
| checked              | boolean                      | false  | 是否默认勾选                                                          |
| disabled             | boolean                      | false  | 是否禁用                                                              |
| events               | ICheckboxGroupOptions.events |        | 原生事件                                                              |
| false-label          | string \| number             |        | 没有选中时的值                                                        |
| label                | string \| number \| boolean  |        | 选中状态的值（只有在 checkbox-group 中或者绑定对象类型为array时有效） |
| modelValue / v-model | string \| number \| boolean  |        | 绑定值                                                                |
| name                 | string                       |        | 原生 name 属性                                                        |
| text                 | string                       |        | 复选框文本                                                            |
| true-label           | string \| number             |        | 选中时的值                                                            |

### Slots

| 插槽名  | 说明                   |
| ------- | ---------------------- |
| default | checkbox-button 的内容 |

## Types

### ICheckboxGroupOptions

```typescript
interface ICheckboxGroupOptions {
  label: string // 选中时对应的值
  text?: number // 描述文本
  disabled?: boolean // 是否禁用
  checked?: boolean // 是否默认选中
  events?: {
    click?: (e: Event) => void // 点击事件
    change?: (e: Event) => void // change事件
  }
}
```
