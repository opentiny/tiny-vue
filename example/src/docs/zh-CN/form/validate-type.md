<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-checkboxgroup"/>
</p>

## Form 表单

<nova-uxlink widget-name="Form"></nova-uxlink>

由按钮、输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。
</div>

### 校验提示的形式

通过 `validate-type` 可设置校验提示信息是以 `text` 文本显示还是以 `tip` 提示框的形式显示，默认为 `tip` 。也可直接配置在某一个 `<form-item>` 上控制某一项的校验提示形式。

<nova-demo-view link="form/validate-type.vue"></nova-demo-view>
