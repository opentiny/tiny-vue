<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-transfer"/>
</p>

## Transfer 穿梭框

<nova-uxlink widget-name="Transfer"></nova-uxlink>

穿梭框，提供表格数据的双向选择。
</div>

### 基本用法

通过 `value` 属性进行双向绑定，其指定的值为默认选择的值，将展示在右侧列表。

<br>

`data` 属性提供数据源，其是一个对象数组，对象中默认字段有 key、label、disabled 。

<nova-demo-view link="transfer/basic-usage.vue"></nova-demo-view>

<br>

<nova-attributes link="transfer"></nova-attributes>
