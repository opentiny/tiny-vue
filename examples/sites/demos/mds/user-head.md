## user-head

### Props

| 属性名              | 类型                | 默认值    | 说明                                                                 |
| ------------------- | ------------------- | --------- | -------------------------------------------------------------------- |
| background-color    | string              | '#d9d9d9' | 背景色                                                               |
| color               | string              | '#ffffff' | 文字颜色                                                             |
| message-total       | number              |           | 消息计数                                                             |
| message-type        | string              | 'details' | 消息类型 details\|basic 可选                                         |
| message-upper-limit | number              | 0         | 消息显示上限                                                         |
| min                 | boolean             | false     | 小尺寸模式                                                           |
| modelValue          | Component \| string |           | type=icon 时为图标组件，type=label时为字体串，type=image时为资源路径 |
| round               | boolean             |           | 圆形模式                                                             |
| size                | number              |           | <p>设置头像尺寸</p>                                                  |
| type                | string              | 'label'   | 头像类型，icon\|image\|label 可选                                    |
| value               | string              |           | type=icon 时为图标组件，type=label时为字体串，type=image时为资源路径 |

### Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义图像内容 |
