<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 高亮悬停行

设置 `highlight-hover-row` 属性控制鼠标悬停到当前行是否开启高亮。 默认为 `true` 开启高亮, 如果不需要悬停高亮设置 `highlight-hover-row` 为 `false`。

<nova-demo-view link="grid/highlight/highlight-hover-row"></nova-demo-view>

### 设置指定行高亮

`setCurrentRow(row)` 可设置某一行为高亮状态。

<nova-demo-view link="grid/methods/set-current-row"></nova-demo-view>

<br>
