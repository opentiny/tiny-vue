<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 输入过滤的默认选项

通过属性 `inputFilter.relation` 配置输入过滤的默认选项。
输入过滤的内置选项：`equals`，`unequal`，`greaterThan`，`lessThan`，`equalToGreaterThan`，`equalToLessThan`，`contains`，`startwith`，`endwith`；也可以配置自定义选项。
配置自定义选项的同时要配置过滤方法，通过属性 `inputFilter.method` 配置。

<nova-demo-view link="grid/filter/default-relation"></nova-demo-view>

<br>



