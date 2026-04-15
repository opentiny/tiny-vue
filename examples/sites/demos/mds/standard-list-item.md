## StandardListItem

### Props

| 属性名       | 类型    | 默认值 | 说明                                        |
| ------------ | ------- | ------ | ------------------------------------------- |
| custom-class | String  |        | 用户自定义class，可覆盖组件默认class        |
| data         | Object  |        | 列表数据源                                  |
| icon         | Object  |        | icon配置项                                  |
| icon-more    | Object  |        | 更多按钮图标，可传入一个svg图标对象进行替换 |
| options      | Array   |        | 操作按钮配置项                              |
| selected     | Boolean |        | 是否选中列表项，为true表示选中列表项。      |
| show-image   | Boolean |        | 显示图片                                    |
| tag          | Object  |        | 标签配置项                                  |
| title-option | Object  |        | 标题配置项                                  |
| type         | String  |        | 类型，支持 card 和 list 两种模式            |
| user-head    | Object  |        | 用户头像配置项                              |

### Events

| 事件名     | 回调参数   | 说明               |
| ---------- | ---------- | ------------------ |
| icon-click | Function() | 操作栏按钮点击事件 |

### Slots

| 插槽名  | 说明         |
| ------- | ------------ |
| default | 组件默认插槽 |
| image   | 图片插槽     |
| operate | 操作栏插槽   |
| tag     | 标签插槽     |
| title   | 标题插槽     |
