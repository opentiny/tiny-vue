<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 自定义排序

通过表格列设置 `sortable` 属性开启该列排序功能，然后设置 `sort-method` 方法实现自定义排序。

<nova-demo-view link="grid/sort/custom-sort"></nova-demo-view>

### 手动排序

通过 `sort(field, order)` 方法可手动对表格进行排序（如果 order 为空则自动切换排序）。

<nova-demo-view link="grid/methods/sort"></nova-demo-view>

<br>
