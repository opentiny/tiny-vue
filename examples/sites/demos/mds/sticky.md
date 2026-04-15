## sticky

### Props

| 属性名   | 类型              | 默认值 | 说明                                          |
| -------- | ----------------- | ------ | --------------------------------------------- |
| offset   | string \| number  |        | 偏移距离，支持 px vw vh rem 单位，默认为 0    |
| position | "bottom" \| "top" | top    | 吸附位置，可选值有 bottom、top，默认为top     |
| target   | string            |        | 目标元素参照的吸顶容器，不设置时默认为 window |
| z-index  | string \| number  |        | 目标元素的层级，默认 100                      |

### Events

| 事件名 | 回调参数                                        | 说明                           |
| ------ | ----------------------------------------------- | ------------------------------ |
| change | (isFixed: boolean) => void                      | 吸顶或吸底状态改变时触发的事件 |
| scoll  | ({scrollTop: number, isFixed: boolean}) => void | 鼠标滚动时触发                 |

### Slots

| 插槽名  | 说明         |
| ------- | ------------ |
| default | 组件默认插槽 |
