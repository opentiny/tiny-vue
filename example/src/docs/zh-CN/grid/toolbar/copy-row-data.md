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
2、设置工具栏组件属性 `buttons` 进行按钮组相关配置。
3、表格事件设置 `@toolbar-button-click` 获取工具栏 `buttons` 的事件，用户可自定义实现复制行操作的业务逻辑。
* `size` 属性设置工具栏尺寸大小。

<nova-demo-view link="grid/aui3-first-menu/copy-row-data"></nova-demo-view>

<br>
