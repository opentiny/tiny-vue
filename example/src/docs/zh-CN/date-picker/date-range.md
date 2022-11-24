<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-datepicker"/>
</p>

## DatePicker 日期选择器

<nova-uxlink widget-name="DatePicker"></nova-uxlink>

用于设置/选择日期，包括年月/年月日/年月日时分/年月日时分秒日期格式。
</div>

### 选择日期范围

设置 `type` 属性为 daterange，可以设置以日期范围的形式进行选择。
通过 `onPick` 获取选中日期后会执行的回调，需要与 `daterange` 或 `datetimerange` 才生效，需要配置在 `picker-options` 中。

<nova-demo-view link="date-picker/date-range.vue"></nova-demo-view>

<br>

