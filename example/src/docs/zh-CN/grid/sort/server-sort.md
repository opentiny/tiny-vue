<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

:::tip
* 表格设置 `remote-sort` 开启所有列服务端排序，列设置 `remote-sort` 开启该列服务端排序
* 列排序优先级高于表格排序
* 列设置 `sortable` 时有效
:::

### 表格服务端排序

通过表格列设置 `sortable` 属性开启该列排序功能，然后表格设置 `remote-sort` 方法开启服务端排序。

:::warning
该示例中的 `services/getGridMockData` 服务需要自行实现，示例模拟了远程服务返回的数据
:::

<nova-demo-view link="grid/sort/server-sort"></nova-demo-view>
