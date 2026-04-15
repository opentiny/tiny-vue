## collapse

### Props

| 属性名               | 类型                                                                 | 默认值 | 说明                                                                              |
| -------------------- | -------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------- |
| accordion            | boolean                                                              | false  | 是否手风琴模式                                                                    |
| before-close         | (item: Component, activeNames: string \| number \| Array) => boolean |        | 阻止折叠面板切换                                                                  |
| modelValue / v-model | string \| number \| Array                                            |        | 当前激活的面板。如果是手风琴模式，绑定值类型需要为 string \| number，否则为 Array |
| v-model              | String / Array /Number                                               |        | 当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)             |

### Events

| 事件名 | 回调参数                                         | 说明                                                                                             |
| ------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| change | (activeNames: string \| number \| Array) => void | 当前激活面板改变时触发。如果是手风琴模式，参数 activeNames 类型为 string \| number，否则为 Array |

### Slots

| 插槽名  | 说明             |
| ------- | ---------------- |
| default | 默认插槽         |
| icon    | 展开收起icon插槽 |

## collapse-item

### Props

| 属性名      | 类型             | 默认值 | 说明                   |
| ----------- | ---------------- | ------ | ---------------------- |
| disabled    | boolean          | false  | 是否禁用               |
| name        | string \| number |        | 唯一标志符             |
| title       | string           |        | 面板标题               |
| title-right | string           |        | 自定义面板标题右侧内容 |
| expand-icon | Component        |        | 自定义icon 图标        |

### Slots

| 插槽名      | 说明                   |
| ----------- | ---------------------- |
| default     | 默认插槽               |
| icon        | 展开折叠 icon 图标     |
| title       | 标题                   |
| title-right | 自定义面板标题右侧内容 |
