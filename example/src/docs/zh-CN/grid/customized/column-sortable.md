<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 本地记录

配置 `setting` 的 `sortable` 为 `sortablejs` 可实现拖拽排序列功能， 此功能在多级列头下无效

<nova-demo-view link="grid/custom/ordercolumn-local"></nova-demo-view>

<br>

### 加载远端数据

通过 `reloadCustoms` 方法，将第二个参数置为 `true` 可按序加载列

<nova-demo-view link="grid/custom/ordercolumn-remote"></nova-demo-view>

<br>
