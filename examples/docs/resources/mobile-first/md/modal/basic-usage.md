<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-tips-messagebox"/>
</p>

## Modal 模态框

<nova-uxlink widget-name="Notice"></nova-uxlink>

</div>

### 基本用法

可通过 `Modal.alert` 方法设置弹出框，通过 `Modal.confirm` 方法设置确认弹出框。

<nova-demo-view link="modal/base.vue"></nova-demo-view>

<br />

<nova-attributes link="modal"></nova-attributes>

可在 `Modal.alert` 方法里通过添加 `confirmContent` 属性设置确定按钮内容，通过 `cancelContent` 属性设置取消按钮内容。

<nova-demo-view link="modal/div-button-content.vue"></nova-demo-view>

<br />

<nova-attributes link="modal"></nova-attributes>
