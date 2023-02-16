<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### Popeditor 弹窗编辑

在 `grid-column` 列元素上配置 `editor` 属性，该对象中可以指定 `component` 为 `Popeditor`、`attrs` 为 Popeditor 组件的属性。需要注意的是，引入 Popeditor 组件后，需要在 `data()` 中进行实例化。

<nova-demo-view link="grid/grid_Example/gridEdit/popeditor-in-grid"></nova-demo-view>

<br>

### Popeditor 弹窗编辑，配置远程搜索

<nova-demo-view link="grid/grid_Example/gridEdit/popeditor-in-grid-remote-search"></nova-demo-view>

<br>
