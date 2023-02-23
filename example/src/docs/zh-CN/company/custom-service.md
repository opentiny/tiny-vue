<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-business-company"/>
</p>

## Company 公司

<nova-uxlink widget-name="Company"></nova-uxlink>

Company 公司组件，用于公司名称展示及选择，通过配置数据源获取选项。
</div>

### 自定义服务

通过 `fetch-company` 属性可以指定一个方法，在方法中可实现请求自定义的服务。

<nova-demo-view link="company/custom-service"></nova-demo-view>

<br>

自定义服务时，通过 `fields` 属性可以指定显示内容和值在数据中对应的字段。

<nova-demo-view link="company/fields"></nova-demo-view>

<br>
