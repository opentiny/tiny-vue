<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-datepicker"/>
</p>

## DatePicker 日期选择器

<nova-uxlink widget-name="DatePicker"></nova-uxlink>

用于设置/选择日期，包括年月/年月日/年月日时分/年月日时分秒日期格式。
</div>

### 日期范围默认时刻

使用 `datetimerange` 设置日期范围时，可以通过 `default-time` 属性设置起始与结束的时刻，默认是选定日期的 00:00:00 作为起始与结束的时刻。`default-time` 接受一个数组，数组的每一项都为一个字符串，第一项控制起始日期的时刻，第二项控制结束日期的时刻。

<nova-demo-view link="date-picker/default-time-of-range.vue"></nova-demo-view>

<br>

