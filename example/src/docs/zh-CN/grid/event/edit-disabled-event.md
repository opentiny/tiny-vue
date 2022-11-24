<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。

</div>

### 当单元格激活时如果是禁用状态时会触发该事件

只对 在 `grid` 标签上配置 `edit-disabled-event` 有效，同时需要在 `edit-config` 配置中的 `activeMethod` 方法控制单元格是否可以编辑（返回 `true` 可以编辑，反之亦然）。

<nova-demo-view link="grid/event/edit-disabled-event"></nova-demo-view>

<br>
