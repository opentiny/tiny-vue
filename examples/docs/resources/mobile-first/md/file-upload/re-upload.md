<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-fileupload"/>
</p>

## FileUpload 文件上传

<nova-uxlink widget-name="Fileupload"></nova-uxlink>

可以设定文件的类型与上传的个数等。可自定义上传服务。

</div>

### 文件重新上传

文件上传模式，配置 `re-upload` 事件，上传失败的文件会显示重新上传按钮，点击重新上传按钮会触发 `re-upload` 事件
<nova-demo-view link="file-upload/re-upload.vue"></nova-demo-view>

<br />

图片上传模式，配置 `re-upload` 事件，上传失败的文件会显示重新上传图标，点击重新上传按钮会触发 `re-upload` 事件
<nova-demo-view link="file-upload/re-upload-picture.vue"></nova-demo-view>

<br />
