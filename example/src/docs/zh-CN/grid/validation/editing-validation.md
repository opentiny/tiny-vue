<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### Grid-表格校验-编辑时校验

grid 标签配置 edit-config 对象，并配置 edit-rules 对象来设置校验对象和校验规则。具体参考下面示例。

<nova-demo-view link="grid/grid_Example/gridValid/editing-validation"></nova-demo-view>

<br>

### Grid-表格校验-隐藏列编辑时校验

grid 标签配置 edit-config 对象且列配置type：visible 且配置isValidAlways属性时, 即列总是显示可编辑状态时，支持编辑时校验,并配置 edit-rules 对象来设置校验对象和校验规则。具体参考下面示例。

<nova-demo-view link="grid/grid_Example/gridValid/editing-isvalidalways-validation"></nova-demo-view>

<br>

### 自定义校验配置

配置 valid-config 对象来设置校验提示信息展示在表格内部。具体参考下面示例。

<nova-demo-view link="grid/grid_Example/gridValid/valid-config"></nova-demo-view>

<br>

### 数据关联校验

在自定义校验时，`validator`方法`rule`参数中可获取到当前行与列的信息。可以按业务的需求实现数据关联的校验逻辑

<nova-demo-view link="grid/grid_Example/gridValid/row-data-valid"></nova-demo-view>

<br>

### 自定义组件与插槽编辑器校验

在使用自定义组件时，组件需要实现`v-model`的功能。在使用插槽时想要实时校验需要手动触发组件的校验方法

<nova-demo-view link="grid/grid_Example/gridValid/custcomp"></nova-demo-view>

<br>

