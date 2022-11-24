<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-Calendar"/>
</p>

## Calendar 日历

<nova-uxlink widget-name="Calendar"></nova-uxlink>

按照日历形式展示数据的容器。
</div>

### 添加日程事件

通过 events 属性可以指定事件列表，它是一个对象数组，对象中包含如下字段：

:::tip events 说明
time：指定需要展示事件的日期
title：指定事件标题
content：指定事件的具体内容 type：指定当鼠标悬停在事件标题上时，弹出的展示事件具体内容的提示框的主题，包括 warning、error、info、success
:::

<nova-demo-view link="calendar/dynamic-add-schedule.vue"></nova-demo-view>

<br>
