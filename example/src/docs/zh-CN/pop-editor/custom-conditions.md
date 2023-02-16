<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-tips-popeditor"/>
</p>

## PopEditor 弹出编辑

<nova-uxlink widget-name="Popeditor"></nova-uxlink>

该组件只能在弹出的面板中选择数据，不能手动输入数据；弹出面板中显示为 Tree 组件或者 Grid 组件。
</div>

### 自定义查询条件

通过 `conditions` 属性可以自定义查询条件,组件内置的输入框支持按回车触发搜索的功能。

<nova-demo-view link="popeditor/conditions.vue"></nova-demo-view>

<br>

### 布局与配置

通过 `condition` 项目里属性里的`span`配置栅格，`labelWidth` 配置label宽度。 `component`配置自定义组件，并通过 `attrs`配置组件属性

<nova-demo-view link="popeditor/condition-layout.vue"></nova-demo-view>

<br>

### Form 表单中使用并开启表单校验

<nova-demo-view link="popeditor/condition-form.vue"></nova-demo-view>

<br>
