<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-fileupload"/>
</p>

## FileUpload 文件上传

<nova-uxlink widget-name="Fileupload"></nova-uxlink>

可以设定文件的类型与上传的个数等。可自定义上传服务。
</div>

### 自定义上传请求

通过配置 `headers` ，设置自定义上传请求头信息

<nova-demo-view link="file-upload/custom-upload-request"></nova-demo-view>

<br>

### 覆盖默认请求

通过配置 `http-request` ，覆盖默认的上传行为，可以自定义上传的实现

<nova-demo-view link="file-upload/http-request"></nova-demo-view>

<br>
