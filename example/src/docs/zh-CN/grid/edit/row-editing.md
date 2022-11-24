<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 行编辑

表格属性设置 `edit-config` 开启编辑模式，然后在该属性对象内设置 `mode: 'row'` 开启行编辑，即：`:edit-config="{ mode: 'row' }"`。

<nova-demo-view link="grid/aui3-first-menu/row-editing"></nova-demo-view>

### 还原更改

调用方法 `revertData(rows, field)` 可以还原指定行 row 或者整个表格的数据。rows 为对象则还原一行数据，为数组则还原多行数据，field 可不指定。不指定任何参数时则还原整个表格数据。

<nova-demo-view link="grid/edit/revertData"></nova-demo-view>

### 检查数据是否改变

`hasRowChange(row, field)` 检查行或列数据是否发生改变，field 可不指定。

<nova-demo-view link="grid/edit/hasRowChange"></nova-demo-view>

<br>
