<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## 树表

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 增删改

在 grid-toolbar 标签上配置 slot="toolbar" 插槽，配置相关的操作按钮 ，注意：新增数据需要在 grid 标签上配置 edit-config 编辑框的配置信息，并通过 ref 获取到组件实例调用方法进行相关操作，findTree、filterTree 是工具类里的查找和过滤方法。由于tree数据节构的特殊性，grid的`getInsertRecords`与`getRecordset`方法无法获取到新增数据，此类数据需要用户自行处理。

<nova-demo-view link="grid/tree-table/tree-grid-insert-delete-update"></nova-demo-view>

<br>
