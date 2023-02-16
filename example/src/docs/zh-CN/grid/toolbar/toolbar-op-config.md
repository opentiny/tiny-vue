<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 配置式

TINY 3 版本通过 `v-bind` 绑定一个对象来实现配置式。在绑定的对象中 `toolbar` 字段用于工具栏配置，可配合 `events` 字段对工具栏中按钮进行 `toolbarButtonClick` 事件配置。另外，`pager` 字段用于分页配置，`fetchData` 字段用于请求服务。

<nova-demo-view link="grid/toolbar/toolbar-op-config.vue"></nova-demo-view>

<br>
