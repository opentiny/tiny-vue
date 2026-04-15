## rate

### Props

| 属性名                   | 类型                                          | 默认值                                                    | 说明                                                                    |
| ------------------------ | --------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------- |
| allow-half               | boolean                                       | false                                                     | 是否允许半选                                                            |
| colors                   | [string, string, string]                      | ['#FADB14', '#FADB14', '#FADB14']                         | icon 的颜色数组，为 Threshold 三个分段所对应的颜色                      |
| disabled                 | boolean                                       | false                                                     | 是否为只读                                                              |
| disabled-void-color      | string                                        | '#D9D9D9'                                                 | 禁用状态下未选中 icon 的颜色                                            |
| disabled-void-icon-class | IRateIconName                                 | 'icon-starActive'                                         | 只读状态下未选中的图标样式名                                            |
| high-threshold           | number                                        | 4                                                         | 高分和中等分数的界限值，值本身被划分在高分中                            |
| icon-classes             | [IRateIconName, IRateIconName, IRateIconName] | ['icon-starActive', 'icon-starActive', 'icon-starActive'] | 三个分段对应的图标样式名                                                |
| low-threshold            | number                                        | 2                                                         | 低分和中等分数的界限值，值本身被划分在低分中                            |
| max                      | number                                        | 5                                                         | 最大分值                                                                |
| modelValue / v-model     | number                                        | 0                                                         | 绑定值                                                                  |
| radio                    | boolean                                       | false                                                     | 评分其他形态单选                                                        |
| score-template           | string                                        | '{value}'                                                 | 分数显示模板，用“{value}”代表分数                                       |
| show-score               | boolean                                       | false                                                     | 是否显示当前分数，show-score 和 show-text 不能同时为真                  |
| show-text                | boolean                                       | false                                                     | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容 |
| size                     | string                                        | '18px'                                                    | 图标字体大小                                                            |
| space                    | string                                        | '24px'                                                    | 每个图标所占宽度                                                        |
| text-color               | string                                        | '#666666'                                                 | 辅助文字的颜色                                                          |
| text-on-bottom           | boolean                                       | false                                                     | 是否在图标下显示对应的文字                                              |
| texts                    | string[]                                      | ['很差', '差', '一般', '好', '很好']                      | 辅助文字数组，文字的数量应该与max属性一致                               |
| type                     | String                                        |                                                           | 设置尺寸 large small(默认)                                              |
| v-model                  | Number                                        |                                                           | 绑定值                                                                  |
| void-color               | string                                        | '#BFBFBF'                                                 | 未选中 icon 的颜色                                                      |
| void-icon-class          | IRateIconName                                 | 'icon-starDisable'                                        | 未选中 icon 的图标样式名                                                |
| clearable                | boolean                                       | false                                                     | 是否可清空                                                              |

### Events

| 事件名 | 回调参数                | 说明           |
| ------ | ----------------------- | -------------- |
| change | (value: number) => void | 分值改变时触发 |

## Types

### IRateIconName

```typescript
type IRateIconName = 'icon-starDisable' | 'icon-starActive' | 'icon-frown' | 'icon-meh' | 'icon-smile'
```
