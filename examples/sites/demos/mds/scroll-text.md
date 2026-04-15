## scroll-text

### Props

| 属性名     | 类型                                | 默认值       | 说明                   |
| ---------- | ----------------------------------- | ------------ | ---------------------- |
| direction  | 'up' \| 'left' \| 'down' \| 'right' | 'left'       | 滚动的方向             |
| hover-stop | boolean                             | true         | hover 滚动是否停止     |
| text       | string                              | 'ScrollText' | 滚动的文本内容         |
| time       | number                              | 5            | 整个滚动过程所用的时间 |

### Slots

| 插槽名  | 说明                       |
| ------- | -------------------------- |
| default | 默认插槽，滚动的内容的插槽 |
