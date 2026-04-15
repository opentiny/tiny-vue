## Card

### Props

| 属性名       | 类型                                   | 默认值 | 说明                                                   |
| ------------ | -------------------------------------- | ------ | ------------------------------------------------------ |
| auto-width   | boolean                                |        | 卡片的宽度是否自动撑开，设置后将不再给卡片设置固定宽度 |
| custom-class | string                                 |        | 卡片的class                                            |
| height       | string                                 |        | 卡片内容区域的高度                                     |
| src          | string                                 |        | 图片或者视频的地址                                     |
| title        | string                                 |        | 卡片的标题                                             |
| type         | "text" \| "image" \| "video" \| "logo" | text   | 设置卡片类型                                           |

### Slots

| 插槽名      | 说明         |
| ----------- | ------------ |
| default     | 组件默认插槽 |
| footer      | 组件底部插槽 |
| title       | 标题插槽     |
| title-left  | 标题左侧插槽 |
| title-right | 标题右侧插槽 |
