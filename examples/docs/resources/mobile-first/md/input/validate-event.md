<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-span"/>
</p>

## Input 输入框

<nova-uxlink widget-name="Input"></nova-uxlink>

通过鼠标或键盘输入字符。
</div>

### 输入时触发表单校验

可通过 `validate-event` 属性设置输入时触发表单校验。通过 `trigger` 配置触发校验规则的方式，为 `change` 时，当输入框值改变即触发校验，为 `blur` 时则失焦后触发校验。

<nova-demo-view link="input/validate-event.vue"></nova-demo-view>

<br />
