<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 列显示隐藏

在 `toolbar` 标签上配置 `setting` 开启个性化设置，在个性化面板里可以设置是否显示和隐藏列

<nova-demo-view link="grid/custom/column-visible-hidden"></nova-demo-view>

### 手动隐藏显示列

通过调用 `hideColumn(column)` 方法隐藏指定列，`showColumn(column)` 方法显示指定列。使用这两个方法隐藏/显示列时，还需要再调用 `refreshColumn()` 方法刷新列配置才能实际生效。

<nova-demo-view link="grid/hide/hideColumn"></nova-demo-view>

<br>
