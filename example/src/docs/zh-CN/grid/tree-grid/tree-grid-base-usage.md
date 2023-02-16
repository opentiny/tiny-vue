<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 有子级的数据结构

在 grid 标签上配置 tree-config="{children: 'children'}"以树的形式来展示数据,还需要在展示树节点的字段上配置 tree-node 属性

<nova-demo-view link="grid/tree-table/tree-grid-base"></nova-demo-view>

### 扁平化数据结构

注意：扁平化的数据结构需要调用 aggregateTableData 方法把数据转换成带有子级的数据才能正常的显示出树表的结构

<nova-demo-view link="grid/tree-table/tree-grid-data"></nova-demo-view>

<br>
