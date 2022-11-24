<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Select 选择器

<nova-uxlink widget-name="Dropdown"></nova-uxlink>

Select 选择器是一种通过点击弹出下拉列表展示数据并进行选择的 UI 组件。
</div>

### change clear blur focus 事件

:::tip 事件说明
change：选中值发生变化时触发，回调参数为目前的选中值
clear：可清空的单选模式下用户点击清空按钮时触发
blur：当 input 失去焦点时触发
focus：当 input 获得焦点时触发
scroll：当 select 下拉列表滚动时触发
:::

<nova-demo-view link="select/envts-change"></nova-demo-view>

<br>

### visible-change remove-tag 事件

:::tip 事件说明
visible-change：下拉框出现/隐藏时触发，回调参数为：出现则为 true，隐藏则为 false
remove-tag：多选模式下移除tag时触发，回调参数为移除的 tag 值
:::

<nova-demo-view link="select/envts-remove"></nova-demo-view>

 <br>

