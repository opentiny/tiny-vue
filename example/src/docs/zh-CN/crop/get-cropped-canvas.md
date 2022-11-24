<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-crop"/>
</p>

## Crop 图片裁剪

<nova-uxlink widget-name="Crop"></nova-uxlink>

Crop 图像裁切，可预览，支持 JPG 和 PNG 格式，浏览图像可以手动调整选择头像区域。
</div>

### 获取裁剪后的图片数据

调用 `getCroppedCanvas` 方法可以获取裁剪后的图片数据，搭配 `toDataURL` 方法将转成 base64 图片数据，搭配 `toBlob` 方法将生成 Blob 图片数据。

<nova-demo-view link="crop/get-cropped-canvas"></nova-demo-view>

<br>
