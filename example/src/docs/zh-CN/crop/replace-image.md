<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-crop"/>
</p>

## Crop 图片裁剪

<nova-uxlink widget-name="Crop"></nova-uxlink>

Crop 图像裁切，可预览，支持 JPG 和 PNG 格式，浏览图像可以手动调整选择头像区域。

</div>

### 替换图片

调用 `replace` 方法可以替换图像的 src 并重新构建 cropper 。 通过 `rotatable` 属性控制图片旋转，默认为 true 。

<nova-demo-view link="crop/replace-image"></nova-demo-view>

<br>

### 放大图片

调用 `zoomable` 属性可以设置是否允许放大图像，默认值为 true。

<nova-demo-view link="crop/replace-image"></nova-demo-view>

<br>
