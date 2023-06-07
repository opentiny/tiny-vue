<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-fileupload"/>
</p>

## FileUpload 文件上传

<nova-uxlink widget-name="Fileupload"></nova-uxlink>

可以设定文件的类型与上传的个数等。可自定义上传服务。

</div>

### 多媒体上传

在 `list-type` 为 `picture-card` 时，设置 `source-type` 为 `video/audio/picture` 时进行视频、音频、图片上传，`source-type` 支持 `video、audio、picture` 的互相组合
<nova-demo-view link="file-upload/multi-media.vue"></nova-demo-view>

同时在多媒体上传模式下，可配置hwh5属性，进行原生上传。可在 `trigger-click` 事件中进行文件选取操作并上传，可在 `play` 事件中进行音视频播放操作
<nova-demo-view link="file-upload/multi-media-native.vue"></nova-demo-view>

<br />
