<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-datepicker"/>
</p>

## DatePicker 日期选择器

<nova-uxlink widget-name="DatePicker"></nova-uxlink>

用于设置/选择日期，包括年月/年月日/年月日时分/年月日时分秒日期格式。
</div>

### 不触发表单校验

日期选择器在输入时默认会触发表单校验，触发方式有 blur、change。但若设置 `validate-event` 属性为 false，将不再触发表单校验。

<nova-demo-view link="date-picker/validate-event.vue"></nova-demo-view>

<br>
