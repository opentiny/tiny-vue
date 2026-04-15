## button-group

### Props

| 属性名               | 类型                          | 默认值    | 说明                                                                                                                             |
| -------------------- | ----------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------- |
| data                 | IButtonGroupData[]            |           | 按钮组数据                                                                                                                       |
| disabled             | boolean                       | false     | 是否被禁用按钮组                                                                                                                 |
| modelValue / v-model | number \| string              |           | 默认选中按钮的值                                                                                                                 |
| plain                | boolean                       | false     | 是否朴素按钮                                                                                                                     |
| show-more            | number                        |           | 当超过给定的按钮数量时显示更多按钮                                                                                               |
| size                 | 'medium' \| 'small' \| 'mini' |           | 按钮组尺寸大小                                                                                                                   |
| text-field           | string                        | 'text'    | 按钮显示文字的字段值                                                                                                             |
| v-model              | Number / String               |           | 默认选中按钮的值                                                                                                                 |
| value-field          | string                        | 'value'   | 按钮选中值的字段值                                                                                                               |
| display-mode         | 'default' \| 'merged'         | 'default' | 按钮组显示模式，可选值为"default"和"merged"，默认为"default"。当设置为"merged"时，按钮组内的按钮将合并显示，形成一个整体的外观。 |

### Events

| 事件名 | 回调参数                          | 说明                     |
| ------ | --------------------------------- | ------------------------ |
| change | (value: string \| number) => void | 当选中按钮发生改变时触发 |

### Slots

| 插槽名  | 说明                       |
| ------- | -------------------------- |
| default | 默认插槽，自定义按钮组内容 |
| empty   | 自定义数据为空时展示内容   |

## Types

### IButtonGroupData

```typescript
interface IButtonGroupData {
  text: string // 显示文本
  value: number | string // 选中的值
  disabled?: boolean // 是否禁用
  tip?: string // 按钮悬浮提示 v3.17.0版本增加此功能
  // 配置选块角标
  sup?: {
    text: string // 角标文本
    class?: string // 角标的自定义class
    slot?: string // 自定义插槽名称，提供后可在button-group内使用对应的插槽自定义角标内容
    icon?: Component // 传入图标组件
  }
}
```
