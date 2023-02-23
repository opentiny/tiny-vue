<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-business-country"/>
</p>

## Country 国家/地区

<nova-uxlink widget-name="Country"></nova-uxlink>

Country 国家/地区组件，用于国家/地区名称展示及选择，通过配置数据源获取选项。
</div>

### 自定义服务

通过 `fetch-country` 属性可以指定一个方法，在方法中可实现请求自定义的服务。 `clearable` 设置是否可清空，默认值为 true。

<nova-demo-view link="country/custom-service"></nova-demo-view>

<br>

自定义服务时，通过 `fields` 属性可以指定显示内容和值在数据中对应的字段。

通过 `disabled` 设置是否输入，默认值为 false。

<nova-demo-view link="country/fields"></nova-demo-view>

<br>

