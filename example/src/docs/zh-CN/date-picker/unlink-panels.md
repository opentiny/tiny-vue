<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-datepicker"/>
</p>

## DatePicker 日期选择器

<nova-uxlink widget-name="DatePicker"></nova-uxlink>

用于设置/选择日期，包括年月/年月日/年月日时分/年月日时分秒日期格式。
</div>

### 范围选择取消面板联动

范围选择时，默认情况下，在开始日期面板中单击上一月或上一年箭头图标时，结束日期面板中日期也联动切换到上一月或上一年。在结束日期面板中切换下一月或下一年时，开始日期面板也随之联动。但若配置 `unlink-panels` 属性为 true ，面板之间就不再联动，切换年月时只对当前面板生效。

<nova-demo-view link="date-picker/unlink-panels.vue"></nova-demo-view>

<br>

