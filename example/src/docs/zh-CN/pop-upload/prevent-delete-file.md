<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-popupload"/>
</p>

## PopUpload 弹出框上传

<nova-uxlink widget-name="Popupload"></nova-uxlink>

点击所设置的元素，弹出上传对话框。

</div>

### 阻止删除文件

:before-remove（移除文件前回调事件）,方法里面return true/false，表示是否可以删除
<nova-demo-view link="pop-upload/prevent-delete-file.vue"></nova-demo-view>

<br>

### 阻止上传文件

:before-upload 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传
<nova-demo-view link="pop-upload/before-upload.vue"></nova-demo-view>

<br>
