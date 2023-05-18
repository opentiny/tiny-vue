<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-alert"/>
</p>
 
## Rate 评分
 
<nova-uxlink widget-name="Rate"></nova-uxlink>
 
Rate 快速评级，对评价进行展示。
</div>
 
### 基本用法
 
<nova-demo-view link="rate/basic-usage.vue"></nova-demo-view>
 
### 自定义 3 分段颜色
 
可通过 `colors` 定义 3 分段颜色。
 
<nova-demo-view link="rate/custom-3-threshold-colors.vue"></nova-demo-view>
 
### 自定义禁用时未选中图标颜色
 
可通过 `disabled-default-color` 自定义禁用时未选中图标颜色。
 
<nova-demo-view link="rate/disabled-not-selected-color.vue"></nova-demo-view>
 
### 自定义禁用时未选中图标类名
 
可通过 `disabled-default-icon-class` 自定义禁用时未选中图标类名。
 
<nova-demo-view link="rate/disabled-not-selected-class.vue"></nova-demo-view>
 
### 自定义 3 分段图标样式
 
可通过 `icon-classes` 自定义 3 分段图标样式。
 
<nova-demo-view link="rate/custom-3-threshold-icon.vue"></nova-demo-view>
 
### 辅助文字及颜色
 
可通过 `texts show-text text-color` 三个属性分别设置辅助文字内容、是否显示辅助文字及辅助文字颜色。
 
<nova-demo-view link="rate/texts-and-text-color.vue"></nova-demo-view>
 
 
### 尺寸
 
可通过 `type` 设置尺寸 `big small(默认)` 。
 
<nova-demo-view link="rate/size.vue"></nova-demo-view>
 
### 自定义未选中图标颜色
 
可通过 `default-color` 定义未选中图标颜色。
 
<nova-demo-view link="rate/not-selected-color.vue"></nova-demo-view>
 
### 自定义未选中图标类名
 
可通过 `default-icon-class` 定义未选中图标类名。
 
<nova-demo-view link="rate/not-selected-class.vue"></nova-demo-view>
 
### 图标下文字提示
 
可通过 `text-on-bottom` 定义是否在图标下显示文字提示。
 
<nova-demo-view link="rate/text-on-bottom.vue"></nova-demo-view>
 
### 半选
 
可通过 `allow-half` 定义是否支持半选。
 
<nova-demo-view link="rate/allow-half.vue"></nova-demo-view>
 
### 禁用
 
可通过 `disabled` 定义是否禁用。
 
<nova-demo-view link="rate/dynamic-disable.vue"></nova-demo-view>
 
### 分数显示
 
可通过 `show-score  score-template` 分别定义是否显示分数和显示的模板。
 
<nova-demo-view link="rate/show-score.vue"></nova-demo-view>
 
### 单选模式
 
可通过 `radio` 设置单选模式。
 
<nova-demo-view link="rate/radio-rate.vue"></nova-demo-view>
 
### 最大分值
 
可通过 `max` 设置最大分值。
 
<nova-demo-view link="rate/max-score.vue"></nova-demo-view>
 
### 界限值
 
可通过 `low-threshold  high-threshold` 分别设置下限值和上限值，通过`colors`配置显示星的颜色
 
<nova-demo-view link="rate/threshold-value.vue"></nova-demo-view>
 
### 事件
 
监听 `change` 事件触发处理方法。
 
<nova-demo-view link="rate/rate-events.vue"></nova-demo-view>
 
<br />