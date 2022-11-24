<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 基本用法

工具栏配置步骤：
1、表格以插槽方式引入表格工具栏组件 `GridToolbar`，并设置工具栏组件属性 `slot="toolbar"` 。
2、设置工具栏组件属性 `refresh` 开启表格刷新功能。
* 设置工具栏属性 `loading` 开启/关闭加载中。

自定义实现刷新时直接调用`handleFetch('reload')`

<nova-demo-view link="grid/aui3-first-menu/refresh-grid"></nova-demo-view>

<br>
