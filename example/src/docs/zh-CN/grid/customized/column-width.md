<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 列宽

在 `grid` 标签上配置 `resizable="true"` 可以调整列宽，并在 `toolbar` 标签上配置 `resizable="{storage: true}"` 保存在本地的 `localStroage` 里，刷新页面表格的列宽按照拖动后的列宽显示

<nova-demo-view link="grid/custom/column-width"></nova-demo-view>

### 手动重置列操作

:::tip 方法说明
`resetResizable()`：手动重置列宽拖动的操作，还原到初始状态
`resetCustoms()`：手动重置列的显示/隐藏操作，还原到初始状态
`resetAll()`：手动重置列的所有操作，还原到初始状态
:::

请先对列宽进行拖动、隐藏列等操作，然后单击对应按钮查看效果。

<nova-demo-view link="grid/custom/resetResizable"></nova-demo-view>
