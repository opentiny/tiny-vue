<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-transfer"/>
</p>

## Transfer 穿梭框

<nova-uxlink widget-name="Transfer"></nova-uxlink>

穿梭框，提供表格数据的双向选择。
</div>

### 右侧排序策略

通过 `target-order` 属性设置右侧列表元素的排序策略，有 original、push、unshift 三个选项，默认为 original 。

:::tip 排序策略
若为 original，则保持与数据源相同的顺序
若为 push，则新加入的元素排在最后
若为 unshift，则新加入的元素排在最前
:::

<nova-demo-view link="transfer/target-order.vue"></nova-demo-view>

<br>
