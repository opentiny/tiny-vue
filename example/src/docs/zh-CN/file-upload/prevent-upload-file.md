<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-fileupload"/>
</p>

## FileUpload 文件上传

<nova-uxlink widget-name="Fileupload"></nova-uxlink>

可以设定文件的类型与上传的个数等。可自定义上传服务。
</div>

### 阻止上传文件

before-upload（上传前回调事件）,方法里面 return true/false，表示是否可以进行上传文件

<nova-demo-view link="file-upload/prevent-upload-file"></nova-demo-view>

<br>
