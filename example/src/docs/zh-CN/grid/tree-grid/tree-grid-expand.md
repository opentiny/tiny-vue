<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## 树表

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 展开行

在 column 标签上配置 type="expand" 展开行,可以通过 v-slot 插槽插入需要的模板信息

<nova-demo-view link="grid/tree-table/tree-grid-expand"></nova-demo-view>

### 检查树节点是否已展开

通过 `hasTreeExpand(row)` 方法可以检查树节点是否已展开，参数 row 为行数据对象。

<nova-demo-view link="grid/tree-table/hasTreeExpand"></nova-demo-view>

<br>
