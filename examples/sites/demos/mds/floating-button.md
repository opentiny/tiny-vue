## FloatingButton

### Props

| 属性名           | 类型                          | 默认值   | 说明                                                     |
| ---------------- | ----------------------------- | -------- | -------------------------------------------------------- |
| animated         | boolean                       | false    | 悬浮按钮开启动画                                         |
| background-color | string                        |          | 悬浮按钮背景颜色                                         |
| element-selector | string                        |          | 悬浮按钮设置可传入的元素类名或者id                       |
| expand-list      | IFloatingButtonExpandItem[]   | []       | 拓展按钮接收数据的数组，接收项分为图标 icon 和标题 title |
| icon             | Component                     | IconPlus | 自定义悬浮按钮图标                                       |
| is-expand        | boolean                       | false    | 是否展开拓展按钮                                         |
| mask             | boolean                       | false    | 悬浮按钮遮罩层                                           |
| position         | 'left' \| 'center' \| 'right' | 'right'  | 悬浮按钮展示位置                                         |
| reset-time       | number                        | 0        | 悬浮按钮防重点击重置时间                                 |
| vague            | boolean                       | false    | 悬浮按钮模糊层                                           |

### Events

| 事件名 | 回调参数                              | 说明                 |
| ------ | ------------------------------------- | -------------------- |
| click  | (event: Event, index: number) => void | 悬浮按钮点击触发事件 |
