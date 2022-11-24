<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 嵌套表格

需要在 `grid` 标签上配 `edit-config` 对象，`activeMethod` 编辑前的事件处理编辑项数据集。`grid-column` 列上面配置 `editor` 对象，`component` 用来渲染编辑组件。`attrs` 配置级联数据。`events` 来设置事件。具体参考下面示例。

<nova-demo-view link="grid/grid_Example/nestedGrid"></nova-demo-view>

### 检查行是否已展开

通过调用 `hasRowExpand(row)` 方法可以检查行是否已展开，参数 row 为行数据对象。

<nova-demo-view link="grid/expand/hasRowExpand"></nova-demo-view>

### 设置展开所有行

通过调用 `setAllRowExpansion(checked)` 方法可设置所有行的展开与否。

<nova-demo-view link="grid/methods/set-all-row-expansion"></nova-demo-view>

### 设置展开指定行

通过调用 `setRowExpansion(rows, checked)` 方法可设置展开指定行，第二个参数设置这一行展开与否，展开指定行时，通过调用clearRowExpand()方法先，关闭已展开的行。

<nova-demo-view link="grid/methods/set-row-expansion"></nova-demo-view>

### 手动切换展开行

通过调用 `toggleRowExpansion(row)` 方法可手动切换展开行。

<nova-demo-view link="grid/methods/toggle-row-expansion"></nova-demo-view>

<br>
