## crop

### Props

| 属性名               | 类型    | 默认值 | 说明                                                                                                                                                    |
| -------------------- | ------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aspect-ratio         | number  | 16 / 9 | 裁剪框的宽高比                                                                                                                                          |
| auto-crop            | boolean | true   | 初始化时，是否自动显示裁剪框                                                                                                                            |
| auto-crop-area       | number  | 0.8    | 定义自动裁剪面积大小（百分比）                                                                                                                          |
| background           | boolean | true   | 是否显示容器的网格背景                                                                                                                                  |
| center               | boolean | false  | 裁剪框是否在图片正中心,并显示一个 + 号                                                                                                                  |
| crop-type            | string  | base64 | 设置图片裁剪后返回的类型，可配置为 blob 和 base64                                                                                                       |
| cropvisible          | boolean | false  | 设置裁剪弹框是否可见                                                                                                                                    |
| drag-mode            | string  | crop   | 定义 cropper 的拖拽模式;'crop'： 可以产生一个新的裁剪框 3 。'move'：只可以移动图片 3 。'none'： 什么也不处理                                            |
| guides               | boolean | true   | 是否在裁剪框上方显示虚线                                                                                                                                |
| max-size             | string  | 1M     | 设置待裁剪图片的最大大小，默认为 1M                                                                                                                     |
| min-container-height | number  | 300    | 容器的最小高度                                                                                                                                          |
| min-container-width  | number  | 652    | 容器的最小宽度                                                                                                                                          |
| min-crop-box-height  | number  | 0      | 裁剪层的最小高度                                                                                                                                        |
| min-crop-box-width   | number  | 0      | 裁剪层的最小宽度                                                                                                                                        |
| modal                | boolean | true   | 是否显示图片上方裁剪框下方的黑色模态                                                                                                                    |
| movable              | boolean | true   | 是否允许可以移动后面的图片                                                                                                                              |
| quality              | number  | 0.92   | 设置图片裁剪后的压缩比例，值在 0-1 之间                                                                                                                 |
| rotatable            | boolean | true   | 是否允许旋转图像;默认为 true                                                                                                                            |
| src                  | string  |        | 默认裁剪的源图片                                                                                                                                        |
| view-mode            | number  | 0      | 定义 cropper 的视图模式;0：没有限制，3 可以移动到 2 外。1：3 只能在 2 内移动。2：2 图片不全部铺满 1 （即缩小时可以有一边出现空隙）。3：2 图片填充整个 1 |
| wheel-zoom-ratio     | number  | 0.1    | 用鼠标移动图像时，定义缩放比例                                                                                                                          |
| zoom-on-wheel        | boolean | true   | 是否可以通过滚动鼠标滚轮来缩放图像                                                                                                                      |
| zoomable             | boolean | true   | 是否允许放大图像                                                                                                                                        |

### Events

| 事件名    | 回调参数        | 说明                                                                           |
| --------- | --------------- | ------------------------------------------------------------------------------ |
| crop      | Function(value) | 当画布（图像包装器）或裁剪框发生改变时触发;回调参数为 (event: Event)，原生事件 |
| cropdata  | Function(data)  | cropdata 事件回调函数中可以拿到裁剪后的数据，默认为 base64 数据                |
| cropend   |                 | 当画布（图像包装器）或剪切框发生变化结束时触发;回调参数为 (event: Event)       |
| cropmove  |                 | 当画布（图像包装器）或剪切框正在发生变化时触发;回调参数为 (event: Event)       |
| cropstart |                 | 当画布（图像包装器）或剪切框开始发生变化时触发;回调参数为 (event: Event)       |
| ready     |                 | 当一个 cropper 实例完全构建时触发                                              |

### Methods

| 方法名           | 返回值 | 说明                                                                                                                                           |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| clear            |        | 清除裁切框                                                                                                                                     |
| destroy          |        | 销毁 cropper 并从图像中删除整个 cropper                                                                                                        |
| disable          |        | 禁用裁切框（裁切框不可移动）                                                                                                                   |
| enable           |        | 启用裁切框                                                                                                                                     |
| getCanvasData    |        | 获取画布 Canvas（图像包装器）位置和大小数据;返回的数据类型为 object                                                                            |
| getContainerData |        | 获取 container 容器大小数据;返回的数据类型为 object                                                                                            |
| getCropBoxData   |        | 获取剪切框的位置和大小数据;返回的数据类型为 object                                                                                             |
| getCroppedCanvas |        | 获取裁剪后的图片数据;.getCroppedCanvas().toDataURL()：转成 base64 图片;.getCroppedCanvas().toBlob()：生成 Blob 图片数据                        |
| getData          |        | 获取最终裁剪的区域位置和大小数据（根据原始图像的自然大小）;参数为 (rounded) ，默认 false，设置 true 可以获取其所有数据;返回的数据类型为 object |
| getImageData     |        | 获取图像 image 位置、大小和其他相关数据;返回的数据类型为 object                                                                                |
| replace          |        | 替换图像的 src 并重新构建 cropper;参数为 图片 URL                                                                                              |
| setAspectRatio   |        | 改变裁切框的宽高比;参数为(aspectRatio)，类型 number，是一个正数                                                                                |
