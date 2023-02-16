<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。

</div>

### 服务端过滤

配置 remote-filter 开启服务端过滤，服务端过滤会调用表格 fetch-data 进行查询，filter-change 服务端过滤后触发的事件

:::warning
该示例中的 `services/getGridMockData` 服务需要自行实现，示例模拟了远程服务返回的数据
:::

<nova-demo-view link="grid/filter/server-filter"></nova-demo-view>

<br>
