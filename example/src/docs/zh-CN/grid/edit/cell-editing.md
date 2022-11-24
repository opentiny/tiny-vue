<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 单元格编辑

表格属性设置 `edit-config` 开启编辑模式，然后在该属性对象内设置 `mode: 'cell'` 开启行编辑，即：`:edit-config="{ mode: 'cell' }"`。
表格列属性设置 `show-icon` 设置列头是否显示编辑图标，在编辑时有效。

<nova-demo-view link="grid/aui3-first-menu/cell-editing"></nova-demo-view>

<br>

### 手动激活编辑

`setActiveCell(row, field)` 方法可激活指定单元格编辑。`setActiveRow(row)` 方法激活行编辑，如果是 mode=cell 则默认激活第一个单元格。

<nova-demo-view link="grid/methods/set-active-cell"></nova-demo-view>

<br>
