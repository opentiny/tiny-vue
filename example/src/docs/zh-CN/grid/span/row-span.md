<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 基本用法

通过表格列属性 `row-span` 设置内置的行合并规则,该属性仅适用于普通表格，嵌套树表不支持。

<nova-demo-view link="grid/span/row-span/row-span-easy"></nova-demo-view>

<br>

### 自定义合并规则

通过表格列属性 `span-method` 设置自定义合并规则。

<nova-demo-view link="grid/span/row-span/row-span"></nova-demo-view>

<br>
