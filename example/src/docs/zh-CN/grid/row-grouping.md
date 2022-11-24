<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 基本用法

`row-group` 属性可以配置行分组，行分组会将具有相同值的列进行分组展示。

<nova-demo-view link="grid/row-grouping"></nova-demo-view>

<br>

### 自定义分组

`row-group` 配置项 `render` 可以自定义渲染分组内容， `closeable` 可以控制分组行是否可以折叠。

<nova-demo-view link="grid/rowGroupRender"></nova-demo-view>

<br>
