<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### Grid-表格校验-提交前校验

grid 标签配置 edit-config 对象，并配置 edit-rules 对象来设置校验对象和校验规则，通过按钮点击事件调用 this.\$refs.basicGrid.validate()方法来触发表格校验，具体参考下面示例。

<nova-demo-view link="grid/grid_Example/gridValid/before-submit-validation"></nova-demo-view>

<br>

### Grid-表格校验-触发校验时自动定位到当前校验的单元格

grid 编辑器引入 Tiny Vue 组件，标签配置 edit-config 对象，并配置 edit-rules 对象来设置校验对象和校验规则，通过按钮点击事件调用 this.\$refs.basicGrid.validate()方法来触发表格校验，具体参考下面示例。

<nova-demo-view link="grid/grid_Example/gridValid/validation-scroll-to-col"></nova-demo-view>

<br>
