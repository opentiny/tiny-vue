<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-tips-popeditor"/>
</p>

## PopEditor 弹出编辑

<nova-uxlink widget-name="Popeditor"></nova-uxlink>

该组件只能在弹出的面板中选择数据，不能手动输入数据；弹出面板中显示为 Tree 组件或者 Grid 组件。
</div>

### 只读

通过 `readonly` 属性设置为是否只读。

<nova-demo-view link="popeditor/readonly.vue"></nova-demo-view>

<br>

### 输入框的 tabindex

通过 `tabindex` 属性置是否可通过 Tab 键获焦及获焦顺序（`readonly` 属性设置为 false 时有效）。

<nova-demo-view link="popeditor/tabindex.vue"></nova-demo-view>

<br>
