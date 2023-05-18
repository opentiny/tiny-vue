<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-grid-formitem"/>
</p>

## Form 表单

<nova-uxlink widget-name="Form"></nova-uxlink>

由按钮、输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。

</div>

### 防抖处理

设置 FormItem 的属性 `validate-debounce` 为 `true`，可以开启校验防抖，在连续输入的情况下，会在最后一次输入结束时才开始校验。默认为 `false` 不开启。

<nova-demo-view link="form/validate-debounce.vue"></nova-demo-view>

<br />
