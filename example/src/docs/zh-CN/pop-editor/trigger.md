<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-tips-popeditor"/>
</p>

## PopEditor 弹出编辑

<nova-uxlink widget-name="Popeditor"></nova-uxlink>

该组件只能在弹出的面板中选择数据，不能手动输入数据；弹出面板中显示为 Tree 组件或者 Grid 组件。
</div>

### 单选时触发勾选的方式

弹出编辑为单选时，默认只能通过单击单选按钮进行勾选。但也可以通过设置属性 `trigger` 为 `row` 实现单击行中任意位置进行勾选。或者设置 `trigger` 为 `cell`，单击操作列的单元格上任意位置进行勾选。

<nova-demo-view link="popeditor/trigger.vue"></nova-demo-view>

<br>
