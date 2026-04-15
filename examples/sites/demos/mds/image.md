## image

### Props

| 属性名           | 类型                                                      | 默认值 | 说明                                                                                                                                                                                 |
| ---------------- | --------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| fit              | 'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down ' |        | 确定图片如何适应容器大小                                                                                                                                                             |
| image-size       | string                                                    |        | 设置预览的图片的大小                                                                                                                                                                 |
| lazy             | boolean                                                   | false  | 是否懒加载                                                                                                                                                                           |
| preview-src-list | string[]                                                  | []     | 指定预览大图时的图片列表                                                                                                                                                             |
| preview-visible  | string                                                    |        | 开启移动端预览大图的功能                                                                                                                                                             |
| round            | string                                                    |        | 通过 round 设置是否展示圆形                                                                                                                                                          |
| scroll-container | string \| HTMLElement                                     |        | 指定滚动容器。启用懒加载时，监听滚动容器的 scroll 事件来懒加载。<br> 该属性用于设置图片的容器,当未设置容器时，默认会取最近一个 overflow 值为 auto 或 scroll 的父元素做为滚动容器<br> |
| show-hover       | string                                                    |        | 设置预览的图片的悬浮效果                                                                                                                                                             |
| show-index       | boolean                                                   |        | 开启图片序列号展示                                                                                                                                                                   |
| src              | string                                                    |        | 设置图片路径                                                                                                                                                                         |
| z-index          | number                                                    | 2000   | 图片预览功能时，设置最外层元素的 z-index                                                                                                                                             |
| keep-style       | boolean                                                   |        | 保持图片样式属性                                                                                                                                                                     |
| appendToBody     | boolean                                                   | true   | 预览弹框是否显示在 body 下面。<br>为 <code>false</code> 时显示在当前节点下面                                                                                                         |

### Events

| 事件名 | 回调参数     | 说明                                           |
| ------ | ------------ | ---------------------------------------------- |
| delete | Function()   | 图片删除触发                                   |
| error  | (ev) => void | 图片加载失败后触发的事件，参数为原生的失败事件 |
| load   | (ev) => void | 图片加载成功的触发的事件，参数为原生的成功事件 |

### Slots

| 插槽名      | 说明                       |
| ----------- | -------------------------- |
| error       | 图片加载失败的占位内容插槽 |
| placeholder | 图片加载的占位内容插槽     |
| count       | 设置图片计数插槽           |
