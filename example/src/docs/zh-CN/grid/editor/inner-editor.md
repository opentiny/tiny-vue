<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### Grid-编辑器-内置编辑器

`grid` 标签上配置 `edit-config`。在 `grid-column` 列配置 `editor` 对象， `component` 渲染内置编辑组件， `events` 配置组件事件。具体参考下面示例。

:::tip 说明

TinyGrid 内置编辑器只支持 `Input` 和 `Select` 组件，需要使用其他组件可参考自定义编辑器

:::

<nova-demo-view link="grid/grid_Example/gridEdit/inner-editor"></nova-demo-view>

<br>
