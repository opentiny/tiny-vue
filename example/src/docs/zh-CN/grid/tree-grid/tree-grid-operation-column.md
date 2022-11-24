<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## 树表

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 操作列

列通过配置 type="radio" 实现单选，配置 type="selection" 实现多选

<nova-demo-view link="grid/tree-table/tree-grid-operation-column"></nova-demo-view>

### 手动展开所有树节点

`setAllTreeExpansion(checked)` 可设置所有树节点的展开与否。

<nova-demo-view link="grid/methods/set-all-tree-expansion"></nova-demo-view>

### 手动展开指定树节点

`setTreeExpansion(rows, checked)` 可设置展开指定的树形节点，第二个参数设置这一行展开与否。

<nova-demo-view link="grid/methods/set-tree-expansion"></nova-demo-view>

### 手动切换展开树形节点

`toggleTreeExpansion(row)` 可设置切换展开树形节点。

<nova-demo-view link="grid/methods/toggle-tree-expansion"></nova-demo-view>

<br>
