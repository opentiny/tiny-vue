<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 表格列头与单元格错位

当出现grid表头与表体单元格错位时，可以选择性地做以下偿试
1.给每列设置列宽，可以使用`column-width`属性，也可以单独给每列进行设置
2.将`show-overflow`、`show-header-overflow` 都设置为 `true`
3.将 `table-layout` 设置为 `auto`

<nova-demo-view link="grid/faq/unbalanced"></nova-demo-view>


<br>
