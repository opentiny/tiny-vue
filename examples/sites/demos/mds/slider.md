## slider

### Props

| 属性名         | 类型                             | 默认值  | 说明                                                                                |
| -------------- | -------------------------------- | ------- | ----------------------------------------------------------------------------------- |
| disabled       | boolean                          | false   | 是否禁用                                                                            |
| format-label   | Function(value)                  |         | 格式化刻度值                                                                        |
| format-tooltip | (currentValue: number) => string |         | 格式化 tooltip 提示                                                                 |
| height         | string                           | '300px' | Slider 组件的高度，当 vertical 为 true 时有效                                       |
| max            | number                           | 100     | 设置最大值，必需是整数，可以负数，必需大于所设置的最小值                            |
| min            | number                           | 0       | 设置最小值                                                                          |
| num-pages      | number                           | 1       | 设置总步数，即按快捷键 PageDown/PageUp 时，每次移动的距离是 "⌈(max-min)/num-pages⌉" |
| show-input     | boolean                          | false   | 是否显示输入框                                                                      |
| show-label     | boolean                          |         | 显示 Label，需结合show-steps一起使用                                                |
| show-steps     | boolean                          |         | 显示刻度，需结合 step 一起使用，最前与最后的刻度默认不显示                          |
| show-tip       | boolean                          | true    | 是否显示 tooltip                                                                    |
| step           | number                           | 1       | 设置滑块移动时，每步位移距离，必需是大于0的正整数                                   |
| unit           | boolean                          | false   | 输入框后面显示的单位，仅在输入框模式下有效                                          |
| v-model        | number \| [number, number]       |         | 设置单滑块的当前值，必需是整数或数组                                                |
| marks          | { [key:number]: string }         |         | <p>设置滑杆的刻度值</p>                                                             |
| vertical       | boolean                          | false   | 是否竖向模式                                                                        |

### Events

| 事件名 | 回调参数                                                  | 说明                                               |
| ------ | --------------------------------------------------------- | -------------------------------------------------- |
| change | (value: number \| [number, number]) => void               | 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发） |
| start  | (event: Event, value: number \| [number, number]) => void | 设置滑块滑动开始时，触发该事件                     |
| Start  | Function(arg)                                             | 设置滑块滑动开始时，触发该事件                     |
| stop   | (value: number \| [number, number]) => void               | 设置滑块滑动结束时，触发该事件                     |
| Stop   | Function(arg)                                             | 设置滑块滑动结束时，触发该事件                     |

### Slots

| 插槽名  | 说明                                                                                        |
| ------- | ------------------------------------------------------------------------------------------- |
| default | 显示滑块值的插槽，仅仅 v-model 是单数值时才有效，插槽参数为：slotArg: { slotScope: number } |
