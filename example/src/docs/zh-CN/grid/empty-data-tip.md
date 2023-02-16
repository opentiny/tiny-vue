<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。

</div>

### 自定义提示

空数据时默认显示 `图标 + 文字` 提示，用户也可通过设置插槽 `v-slot:empty` 或者 属性 `render-empty` 来自定义提示内容。

<nova-demo-view link="grid/aui3-first-menu/empty-data-tip"></nova-demo-view>

### 默认提示

<nova-demo-view link="grid/aui3-first-menu/empty-data-default-tip"></nova-demo-view>

<br>

### 固定居中

配置 `is-center-empty` 为 `true` 时，拖动横向滚动条可以保持空数据提示使终相对表格宽度居中显示

<nova-demo-view link="grid/aui3-first-menu/empty-data-iscenter"></nova-demo-view>

<br>
