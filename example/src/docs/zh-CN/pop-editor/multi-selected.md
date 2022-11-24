<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-tips-popeditor"/>
</p>

## PopEditor 弹出编辑

<nova-uxlink widget-name="Popeditor"></nova-uxlink>

该组件只能在弹出的面板中选择数据，不能手动输入数据；弹出面板中显示为 Tree 组件或者 Grid 组件。
</div>

### 多选

通过设置 `multi` 属性为 true 实现多选。
通过设置 `show-history` 当弹出面板配置的是表格时，设置历史记录标签页是否显示表格，默认为 false。

<nova-demo-view link="popeditor/multi.vue"></nova-demo-view>

<br>

### 多选且初始数据为数组

<nova-demo-view link="popeditor/multi-value-array.vue"></nova-demo-view>

<br>
