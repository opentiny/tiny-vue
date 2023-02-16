<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。

</div>

### 过滤

::: tip filter 配置

通过自定义的 `filter` 的作用域插槽自定义筛选的规则

可以配置项：

multi 设置在显示枚举选项功能是否为多选, 仅在 enumable:true 下有效。

enumable 设置在过滤面板中显示枚举选项。

inputFilter 设置在过滤面板中显示输入筛选的项。

defaultFilter 设置在过滤面板中显示默认的筛选条件。

values 设置在显示枚举选项功能(enumable)下制定静态数据源。

label 设置枚举数据的显示值属性字段， 默认'label'。

value 设置枚举数据的实际值属性字段， 默认'value'。

:::

<nova-demo-view link="grid/filter/default-filter"></nova-demo-view>

### 自定义参数

通过 `params` 添加自定义参数

<nova-demo-view link="grid/column/column-params"></nova-demo-view>

<br>
