<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-fileupload"/>
</p>

## FileUpload 文件上传

<mobile-uxlink widget-name="Fileupload"></mobile-uxlink>

可以设定文件的类型与上传的个数等。可自定义上传服务。
</div>

### 拖拽上传

可配置 `drag(type:boolean)`，来控制组件是否可以拖拽文件上传，如果配置了 `accept` 属性，可通过 `@drop-error` 事件获取不合规的拖拽文件。
<mobile-view link="file-upload/drag-upload"></mobile-view>

<br>
