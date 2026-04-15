## color-picker

### Props

| 属性名                 | 类型                           | 默认值     | 说明                                                                                                      |
| ---------------------- | ------------------------------ | ---------- | --------------------------------------------------------------------------------------------------------- |
| alpha                  | boolean                        | false      | 是否支持透明度选择                                                                                        |
| history                | string[] \| undefined          | undefined  | 历史记录默认值                                                                                            |
| predefine              | string[] \| undefined          | undefined  | 预定义颜色色值                                                                                            |
| enable-history         | boolean                        | false      | 是否启用预定义颜色                                                                                        |
| enable-predefine-color | boolean                        | false      | 是否启用预定义颜色                                                                                        |
| size                   | string                         |            | 定义color-picker尺寸;该属性的可选值为 large / medium / small / mini                                       |
| visible                | boolean                        | false      | 是否默认显示color-select                                                                                  |
| format                 | ('hex'\|'rgb'\|'hsl'\|'hsv')[] | []         | 点击确认后, confirm的事件将会返回对应的format数值. 如果为空数组则表示禁用颜色格式下拉选择                 |
| colorMode              | monochrome \| linear-gradient  | monochrome | 设定颜色模式, 如果为linear-gradient则为线性渐变. 如果为线性渐变, modelValue必须为一个合法的线性渐变表达式 |

### Events

| 事件名  | 回调参数             | 说明                             |
| ------- | -------------------- | -------------------------------- |
| cancel  | () =>void            | 按下取消或点击外部的时触发该事件 |
| confirm | (hex:string) => void | 按下确认时触发该事件             |
