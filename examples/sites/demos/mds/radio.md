## radio

### Props

| 属性名               | 类型                        | 默认值 | 说明                              |
| -------------------- | --------------------------- | ------ | --------------------------------- |
| disabled             | boolean                     | false  | 是否禁用                          |
| display-only         | boolean                     | false  | 是否只读状态                      |
| label                | boolean \| number \| string |        | radio 选中时的值                  |
| modelValue / v-model | boolean \| number \| string |        | 绑定值                            |
| name                 | string                      |        | 原生 name 属性                    |
| tabindex             | string                      |        | Radio 组件的 tabindex。默认值为 1 |
| text                 | string                      |        | 单选框文本内容                    |
| v-model              | string                      |        | 绑定值                            |

### Events

| 事件名 | 回调参数                                     | 说明                   |
| ------ | -------------------------------------------- | ---------------------- |
| change | (value: boolean \| number \| string) => void | 绑定值变化时触发的事件 |

### Slots

| 插槽名  | 说明             |
| ------- | ---------------- |
| default | radio 的默认插槽 |

## radio-group

### Props

| 属性名               | 类型                         | 默认值  | 说明                         |
| -------------------- | ---------------------------- | ------- | ---------------------------- |
| disabled             | boolean                      | false   | 是否禁用单选组               |
| display-only         | boolean                      | false   | 是否只读状态                 |
| fill                 | string                       |         | 按钮形式单选选中时的背景颜色 |
| modelValue / v-model | string[] \| number[]         |         | 单选组绑定值                 |
| options              | IRadioGroupOptions[]         |         | 配置式单选组设置列表         |
| size                 | 'medium' \| small' \| 'mini' |         | 单选组尺寸                   |
| text-color           | string                       |         | 按钮形式单选激活时的文本颜色 |
| type                 | 'radio' \| 'button'          | 'radio' | 配置式单选组的展示形式       |
| vertical             | boolean                      | false   | 垂直显示单选组               |

### Events

| 事件名 | 回调参数                              | 说明                   |
| ------ | ------------------------------------- | ---------------------- |
| change | (value: number[] \| string[]) => void | 绑定值变化时触发的事件 |

### Slots

| 插槽名  | 说明                   |
| ------- | ---------------------- |
| default | radio-group 的默认插槽 |

## radio-button

### Props

| 属性名   | 类型                        | 默认值 | 说明           |
| -------- | --------------------------- | ------ | -------------- |
| disabled | boolean                     | false  | 是否禁用       |
| label    | boolean \| number \| string |        | Radio 的 value |
| name     | string                      |        | 原生name属性   |
| text     | string                      |        | 单选框文本内容 |

### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |

## Types

### IRadioGroupOptions

```typescript
interface IRadioGroupOptions {
  label: string // 选中时对应的值
  text?: number // 描述文本
  events?: {
    click?: (e: Event) => void // 点击事件
    change?: (e: Event) => void // change事件
  }
}
```
