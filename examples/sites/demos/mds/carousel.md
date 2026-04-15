## carousel

### Props

| 属性名             | 类型                           | 默认值       | 说明                                                        |
| ------------------ | ------------------------------ | ------------ | ----------------------------------------------------------- |
| arrow              | string                         | 'hover'      | 切换箭头的显示效果，该属性的可选值为 always / hover / never |
| aspect-ratio       | String                         |              | 宽高比，默认为16:2。                                        |
| autoplay           | boolean                        | false        | 是否自动切换                                                |
| height             | string                         |              | 走马灯的高度                                                |
| indicator-position | string                         |              | 指示器的位置，该属性的可选值为 outside / none               |
| indicator-style    | String                         | 'light'      | 指示器的样式，该属性的可选值为 light/dark                   |
| initial-index      | number                         | 0            | 初始状态激活的幻灯片的索引，从 0 开始                       |
| interval           | number                         | 3000         | 自动切换的时间间隔，单位为毫秒                              |
| loop               | boolean                        | true         | 是否循环显示                                                |
| disabled           | boolean                        | false        | 控制轮播箭头禁用状态，设置为 true 则禁用                    |
| show-title         | boolean                        | false        | 是否显示标题                                                |
| trigger            | string                         | 'hover'      | 指示器的触发方式，该属性的可选值为 hover / click            |
| type               | string                         | 'horizontal' | 走马灯的类型，该属性的可选值为 horizontal / vertical / card |
| swipeable          | boolean                        | false        | 是否支持触屏轮播                                            |
| lite               | boolean                        | false        | 是否打开精简模式，不显示切换按钮和指示器                    |
| beforeSwipe        | (newIndex,oldIndex) => boolean |              | 触摸轮播前，通过返回值控制某个图是否可轮播显示              |

### Events

| 事件名 | 回调参数                                     | 说明                                                                       |
| ------ | -------------------------------------------- | -------------------------------------------------------------------------- |
| change | (curIndex: number, preIndex: number) => void | 幻灯片切换时触发，第一个参数为当前幻灯片索引，第二个参数为上一张幻灯片索引 |

### Methods

| 方法名        | 返回值 | 说明                                                    |
| ------------- | ------ | ------------------------------------------------------- |
| next          |        | 切换至下一张幻灯片                                      |
| prev          |        | 切换至上一张幻灯片                                      |
| setActiveItem |        | 手动切换幻灯片，参数为需要切换的幻灯片的索引，从 0 开始 |

### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |

## carousel-item

### Props

| 属性名 | 类型   | 默认值 | 说明       |
| ------ | ------ | ------ | ---------- |
| name   | string |        | 幻灯片名称 |
| title  | string |        | 幻灯片标题 |

### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |
