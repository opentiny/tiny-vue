<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-business-area"/>
</p>

## Area 片区

<nova-uxlink widget-name="Area"></nova-uxlink>

用于显示区域名称，通过配置区域和数据源获取选项。
</div>

### 自定义服务

通过 `fetch-jcr` 可以自定义服务用于获取片区 JCR 数据，`fetch-rigion` 用于获取地区部 Region 的数据，`fetch-rep` 用于获取代表处 Rep 的数据，`fetch-office` 用于获取办事处 Office 的数据。同时 当数据字段为非默认的 `name_cn` `org_id` 时，可以通过 `props` 属性设置数据的映射字段。

<nova-demo-view link="area/custom-service"></nova-demo-view>

<br>
