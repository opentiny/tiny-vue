<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-fileupload"/>
</p>

## FileUpload 文件上传

<nova-uxlink widget-name="Fileupload"></nova-uxlink>

可以设定文件的类型与上传的个数等。可自定义上传服务。
</div>

### 上传的文件列表

通过 `show-file-list` 配置是否显示是否显示已上传文件列表，默认值为 true ，需要与 file-list 同时使用
可配置 `:file-list（type：Object）`来显示已上传的文件名和地址

<nova-demo-view link="file-upload/upload-file-list"></nova-demo-view>


### 上传的文件列表弹出显示

通过 `list-type = thumb` 开启文件列表弹窗显示,`thumbOption` 设置弹窗相关数据；


<nova-demo-view link="file-upload/upload-file-list-thumb"></nova-demo-view>

<br>
