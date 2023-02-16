<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-crop"/>
</p>

## Crop 图片裁剪

<nova-uxlink widget-name="Crop"></nova-uxlink>

Crop 图像裁切，可预览，支持 JPG 和 PNG 格式，浏览图像可以手动调整选择头像区域。

</div>

### 裁剪框宽高比

通过 `aspect-ratio` 属性可以设置裁剪框的宽高比例，默认为 `16 / 9` 。还可以通过调用 `setAspectRatio` 方法来设置裁切框的宽高比。

通过 `center` 属性可以设置裁剪框是否在图片正中心。

<nova-demo-view link="crop/aspect-ratio"></nova-demo-view>

<br>
