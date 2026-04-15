## number-animation

### Props

| 属性名    | 类型    | 默认值 | 说明                   |
| --------- | ------- | ------ | ---------------------- |
| active    | boolean | true   | 是否开始动画           |
| duration  | number  | 3000   | 动画持续时间           |
| from      | number  | 0      | 数值动画起始值         |
| to        | number  |        | 目标值                 |
| precision | number  | 0      | 精度，保留小数点后几位 |
| separator | string  | ,      | 千分位分隔符           |

### Events

| 事件名 | 回调参数   | 说明             |
| ------ | ---------- | ---------------- |
| finish | () => void | 动画结束后的回调 |

### Methods

| 方法名 | 返回值     | 说明     |
| ------ | ---------- | -------- |
| play   | () => void | 播放动画 |
