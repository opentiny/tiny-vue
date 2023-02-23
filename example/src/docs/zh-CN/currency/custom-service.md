<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-business-currency"/>
</p>

## Currency 币种

<nova-uxlink widget-name="Currency"></nova-uxlink>

Currency 币种组件，用于货币名称展示及选择，通过配置数据源获取选项。
</div>

### 自定义服务

通过 `fetch-currency` 属性可以指定一个方法，在方法中可实现请求自定义的服务。
通过 `clearable ` 属性设置是否可以清空，默认值为 true。

<nova-demo-view link="currency/custom-service"></nova-demo-view>

<br>

自定义服务时，通过 `fields` 属性可以指定显示内容和值在数据中对应的字段。

<nova-demo-view link="currency/fields"></nova-demo-view>

<br>
