## button

### Props

| 属性名       | 类型                                     | 默认值    | 说明                                                        |
| ------------ | ---------------------------------------- | --------- | ----------------------------------------------------------- |
| autofocus    | boolean                                  | false     | 是否默认聚焦                                                |
| banner       | boolean                                  |           | 设置通栏按钮                                                |
| circle       | boolean                                  | false     | 是否圆形按钮                                                |
| custom-class | string                                   |           | 设置 custom-class 属性定制按钮样式                          |
| disabled     | boolean                                  | false     | 是否被禁用按钮                                              |
| custom-style | object                                   |           | 设置 custom-style 属性按钮样式                              |
| ghost        | boolean                                  | false     | 是否幽灵按钮                                                |
| href         | string                                   |           | 通过设置 href 属性可跳转到指定页面                          |
| icon         | Component                                |           | 按钮左侧展示的图标，接收为<code>Icon</code>组件             |
| loading      | boolean                                  | false     | 是否加载中状态                                              |
| native-type  | 'button' \| 'submit' \| 'reset'          | 'button'  | 对应按钮原生<code>type</code>属性                           |
| plain        | boolean                                  | false     | 是否朴素按钮                                                |
| reset-time   | number                                   | 1000      | 设置按钮禁用时间，防止重复提交，单位毫秒                    |
| round        | boolean                                  | false     | 是否圆角按钮                                                |
| size         | 'large' \| 'medium' \| 'small' \| 'mini' |           | 定义按钮尺寸                                                |
| text         | string                                   |           | 按钮显示的文本                                              |
| type         | IButtonType                              | 'default' | 展示按钮不同的状态，设置为<code>text</code>则展示为文本按钮 |

### Events

| 事件名 | 回调参数                    | 说明                         |
| ------ | --------------------------- | ---------------------------- |
| click  | (event: PointEvent) => void | 当按钮被点击时触发的回调函数 |

### Slots

| 插槽名  | 说明                         |
| ------- | ---------------------------- |
| default | 默认插槽，自定义按钮展示内容 |

## Types

### IButtonType

```typescript
type IButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
```
