<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-chart-pie"/>
</p>

## Chart 图表

<nova-uxlink widget-name="Chart"></nova-uxlink>

基于 `eCharts v4.4.0` 封装，一个纯 Javascript 的图表库。

</div>

### 基本用法

图表组件支持 `双向数据绑定`，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。
可通过 `theme` 自定义主题

:::warning

百度地图和高德地图需要外网访问权限才能正常使用

:::

<nova-demo-view link="chart/base"></nova-demo-view>

<br>

#### settings 配置项

| 配置项 | 简介     | 类型   | 备注                                                                             |
| ------ | -------- | ------ | -------------------------------------------------------------------------------- |
| type   | 图表类型 | string | 可选值 'bar'，'histogram'，'line', 'pie'，'ring'，'funnel'，'radar'，'waterfall' |

:::tip

以下是图表公共属性，各图表 Settings 属性配置请查阅各图表详情页面

:::

<nova-attributes link="chart"></nova-attributes>
