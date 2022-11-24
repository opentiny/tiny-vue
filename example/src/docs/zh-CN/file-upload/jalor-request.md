<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-fileupload"/>
</p>

## FileUpload 文件上传

<nova-uxlink widget-name="Fileupload"></nova-uxlink>

可以设定文件的类型与上传的个数等。可自定义上传服务。
</div>

### 网关上传

不配置 `action` 属性时，默认生成网关链接，也可以通过 `getFileUploadUrl()` 方法获取生成的网关链接，如果要修改网关后面的上传地址请修改 `$service.setting.services.Fileupload.Upload`。

<nova-demo-view link="file-upload/jalor-request"></nova-demo-view>

<br>
