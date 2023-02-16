<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-crop"/>
</p>

## Crop 图片裁剪

<nova-uxlink widget-name="Crop"></nova-uxlink>

Crop 图像裁切，可预览，支持 JPG 和 PNG 格式，浏览图像可以手动调整选择头像区域。
</div>

### 拖拽模式

通过 `drag-mode` 属性可以设置裁剪框的拖拽模式，有 `crop`、`move`、`none` 三种选项，默认为 `crop` 。

:::tip drag-mode 选项说明
`crop`：当裁剪框取消后，按住鼠标左键在图片区域拖拽，将产生一个新的裁剪框。
`move`：当裁剪框取消后，按住鼠标左键将移动图片。
`none`：当裁剪框取消后，不能裁剪、也不能移动图片。
`movable` 控制图片是否可以移动，默认为 true。
:::

<nova-demo-view link="crop/drag-mode"></nova-demo-view>

<br>
