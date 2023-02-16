<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### Grid-数据级联-正常列级联

需要在 `grid` 标签上配 `edit-config` 对象，`activeMethod` 编辑前的事件处理编辑项数据集。
`grid-column` 列上面配置 `editor` 对象，`component` 用来渲染编辑组件。
`attrs` 配置级联数据。
`events` 来设置事件。
具体参考下面示例。

<nova-demo-view link="grid/grid_Example/dataCascading/cascade"></nova-demo-view>

<br>
