## ColumnListItem

### Props

| 属性名        | 类型            | 默认值 | 说明                                                                                         |
| ------------- | --------------- | ------ | -------------------------------------------------------------------------------------------- |
| auto-width    | Boolean         |        | 卡片的宽度是否自动撑开，设置后将不再给卡片设置固定宽度                                       |
| custom-class  | String          |        | 用户自定义class，可覆盖组件默认class                                                         |
| disabled      | Boolean         |        | 卡片禁用勾选                                                                                 |
| flex-basis    | Array           |        | 设置内容插槽的宽度，最多能传入 4 个值，支持百分比，固定宽度及固有的尺寸关键词，默认为 auto。 |
| flex-grow     | Array           |        | 设置每一项在 flex 容器中分配剩余空间的相对比例，默认为 [1, 1, 1, 1]。                        |
| icon-more     | Object          |        | 更多按钮图标，可传入一个svg图标对象进行替换                                                  |
| image         | String          |        | 图片地址                                                                                     |
| label         | String / Number |        | checkbox或radio的label                                                                       |
| options       | Array           |        | 操作按钮配置                                                                                 |
| round         | String          |        | 通过 round 设置是否展示圆形                                                                  |
| show-checkbox | Boolean         |        | 显示checkbox按钮                                                                             |
| show-radio    | Boolean         |        | 显示radio按钮                                                                                |
| size          | String          |        | 尺寸，支持medium、small 2个尺寸，默认值为medium                                              |
| type          | String          | card   | 组件类型，可选值有list \| card，默认为 card                                                  |
| v-model       |                 |        | 双向数据绑定                                                                                 |

### Events

| 事件名     | 回调参数   | 说明                  |
| ---------- | ---------- | --------------------- |
| change     | Function() | 组件选中/取消选中事件 |
| icon-click | Function() | 操作栏按钮点击事件    |

### Slots

| 插槽名  | 说明       |
| ------- | ---------- |
| column1 | 内容插槽1  |
| column2 | 内容插槽2  |
| column3 | 内容插槽3  |
| column4 | 内容插槽4  |
| image   | 图片插槽   |
| operate | 操作栏插槽 |
