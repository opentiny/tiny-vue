<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-fileupload"/>
</p>

## FileUpload 文件上传

<nova-uxlink widget-name="Fileupload"></nova-uxlink>

可以设定文件的类型与上传的个数等。可自定义上传服务。

</div>

### 下载全部

文件上传模式，配置 `download-all` 事件，会显示下载全部按钮，点击下载全部按钮会触发 `download-all` 事件
<nova-demo-view link="file-upload/download-all.vue"></nova-demo-view>

### 文件下载

文件上传模式，配置 `download-file` 事件，已上传的文件会显示下载按钮，点击下载按钮会触发 `download-file` 事件
<nova-demo-view link="file-upload/download.vue"></nova-demo-view>

<br />

图片上传模式，配置 `download-file` 事件，已上传的文件会显示下载图标，点击下载按钮会触发 `download-file` 事件
<nova-demo-view link="file-upload/download-picture.vue"></nova-demo-view>

<br />
