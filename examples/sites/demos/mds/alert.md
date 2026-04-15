## alert

### Props

| 属性名        | 类型                | 默认值        | 说明                                                             |
| ------------- | ------------------- | ------------- | ---------------------------------------------------------------- |
| center        | boolean             | false         | 文字是否居中                                                     |
| closable      | boolean             | true          | 警告是否可以关闭                                                 |
| close-text    | string              |               | 关闭按钮自定义文本                                               |
| custom-class  | string              | 'customClass' | 自定义类名                                                       |
| description   | string              |               | 警告的提示内容                                                   |
| icon          | Component           |               | 传入图标组件自定义警告的图标，默认会根据 type 值自动使用对应图标 |
| scrolling     | string              |               | 是否开启描述文字在鼠标 hover 时滚动显示的动画。                  |
| show-foldable | string              |               | 展示带标题可折叠样式。                                           |
| show-icon     | boolean             | true          | 是否显示图标                                                     |
| show-title    | boolean             | true          | 是否显示标题，在 size 为 large 时有效                            |
| single-line   | string              |               | 描述内容是否一行显示，超出显示...，默认值为 false。              |
| size          | 'normal' \| 'large' | 'normal'      | 警告的尺寸大小                                                   |
| title         | string              |               | 警告的标题，在 size 为 large 时有效，默认会根据 type 自动设置    |
| type          | IType               | 'info'        | 警告的类型                                                       |

### Events

| 事件名            | 回调参数   | 说明                                              |
| ----------------- | ---------- | ------------------------------------------------- |
| close             | () => void | 关闭 alert 时触发的事件                           |
| handleHeaderClick | Function() | 标题点击事件，设置 show-foldable 为 true 时有效。 |

### Methods

| 方法名            | 返回值 | 说明                                            |
| ----------------- | ------ | ----------------------------------------------- |
| close             |        | 隐藏组件                                        |
| handleHeaderClick |        | 标题点击事件，设置 show-foldable 为 true 时有效 |

### Slots

| 插槽名      | 说明                                                                           |
| ----------- | ------------------------------------------------------------------------------ |
| close       | 自定义关闭内容，当 closable 属性为 false 时有效                                |
| default     | 组件默认插槽，当 size 设置为 large 时有效，显示在 <code>description</code>下方 |
| description | 提示内容插槽                                                                   |
| title       | 标题的内容，当 size 设置为 large 后有效                                        |

## Types

### IType

```typescript
type IType = 'success' | 'warning' | 'info' | 'error' | 'simple'
```
