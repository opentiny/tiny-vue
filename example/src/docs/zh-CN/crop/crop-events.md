<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-crop"/>
</p>

## Crop 图片裁剪

<nova-uxlink widget-name="Crop"></nova-uxlink>

Crop 图像裁切，可预览，支持 JPG 和 PNG 格式，浏览图像可以手动调整选择头像区域。

</div>

### ready 事件

当一个 cropper 实例完全构建时触发 `ready` 事件。

<nova-demo-view link="crop/event-ready"></nova-demo-view>

<br>

### 裁剪框方法 事件

当一个 cropper 实例完全构建时触发 ` disable` 方法禁用裁剪框，当触发 `enable` 启用裁剪框

<nova-demo-view link="crop/crop-meth"></nova-demo-view>

<br>

### 裁剪相关事件

:::tip

说明当画布或剪切框开始发生变化时触发 `cropstart` 事件

当画布或剪切框正在发生变化时触发 `cropmove` 事件

当画布或剪切框发生变化结束时触发 `cropend` 事件

当画布或裁剪框发生改变时触发 `crop` 事件

通过触发 `getCanvasData` 获取画布 Canvas（图像包装器）位置和大小数据

:::

<nova-demo-view link="crop/event-about-crop"></nova-demo-view>

<br>
