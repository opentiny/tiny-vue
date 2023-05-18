<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-filter"/>
</p>
 
## Filter 过滤器
 
<nova-uxlink widget-name="Filter"></nova-uxlink>
 
Filter 过滤器。
</div>
 
### 基本用法
 
过滤类型 `type` 包括 `单选、多选、枚举单选 (radio | checkbox | enum-radio)`。
 
<nova-demo-view link="filter/basic-usage.vue"></nova-demo-view>
 
### 面板每行标签数
 
通过 `column-num` 属性设置面板每行标签数，默认值为 3。
 
<nova-demo-view link="filter/column-num.vue"></nova-demo-view>
 
### 过滤组
 
通过 `filter-group` 属性开启过滤组功能，`filter-value` 绑定过滤组的值。过滤组类型 `type` 包括 `单选、多选 (radio | checkbox)`。
 
<nova-demo-view link="filter/filter-group.vue"></nova-demo-view>
 
<nova-attributes link="filter"></nova-attributes>
 
### 枚举单选
 
设置过滤类型 `type: 'enum-radio'` 时，当前数据为枚举单选，通过 `showAll: true` 显示 `全部` 选择项。
<nova-demo-view link="filter/enumeration.vue"></nova-demo-view>
 
<nova-attributes link="filter"></nova-attributes>