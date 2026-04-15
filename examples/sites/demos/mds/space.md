## space

### Props

| 属性名    | 类型                    | 默认值    | 说明                                                                  |
| --------- | ----------------------- | --------- | --------------------------------------------------------------------- |
| size      | [string, number, array] | 'small'   | 设置间距大小，可为字符串、数字或数组，数组形式为 [横向间距, 纵向间距] |
| align     | string                  | 'stretch' | 设置交叉轴上的对齐方式，对应 CSS align-items 属性                     |
| justify   | string                  | 'start'   | 设置主轴上的对齐方式，对应 CSS justify-content 属性                   |
| direction | string                  | 'row'     | 设置排列方向，可选值为 row 或 column                                  |
| wrap      | boolean                 | false     | 是否自动换行，默认为 false                                            |
| order     | array                   | []        | 用于指定子元素的显示顺序，数组的值对应插槽中子节点的索引              |

### Slots

| 插槽名  | 说明                     |
| ------- | ------------------------ |
| default | 用于插入需要布局的子元素 |
