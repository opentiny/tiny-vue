<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-fileupload"/>
</p>

## FileUpload 文件上传

<nova-uxlink widget-name="Fileupload"></nova-uxlink>

可以设定文件的类型与上传的个数等。可自定义上传服务。
</div>

### 钩子函数

`before-remove` 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。`before-upload` 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。

<nova-demo-view link="file-upload/custom-prefix"></nova-demo-view>

<br>
