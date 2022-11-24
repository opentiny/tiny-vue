<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 基本用法

当表格数据过多时会有性能问题，用户可通过 `$refs` 获取表格对象，设置表格对象的 `loadData` 方法启用全量加载来优化性能。

<nova-demo-view link="grid/aui3-first-menu/full-data-loading"></nova-demo-view>

<br>
