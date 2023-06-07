<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-page"/>
</p>

## Pager 分页

<nova-uxlink widget-name="Pager"></nova-uxlink>

当数据量过多时，使用分页分解数据，常用于 Grid 和 Repeater 组件。

</div>

### 使用组件内置总条数显示规则

`custom-total` 为 true 时使用组件内置总条数显示规则：0 ～ 99999，显示具体数值；100000 ～ 999999 显示 10 万+；1000000 ～ 9999999 显示 100 万+；超过 10000000，1 千万+。默认值为 `false`，也可以传入一个字符串类型的数据显示指定内容 。

<nova-demo-view link="pager/pager-custom-total.vue"></nova-demo-view>

<br />
