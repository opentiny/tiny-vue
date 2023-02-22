<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-chart-pie"/>
</p>

## Chart 图表

<nova-uxlink widget-name="Chart"></nova-uxlink>

基于 eCharts 封装，一个纯 Javascript 的图表库。
</div>

### 基本用法

<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>

<nova-demo-view link="chart/tree/base"></nova-demo-view>

### 多树图

<nova-demo-view link="chart/tree/demo2"></nova-demo-view>

### 径向树图

<nova-demo-view link="chart/tree/demo3"></nova-demo-view>

### 纵向树图

<nova-demo-view link="chart/tree/demo4"></nova-demo-view>

### 自定义提示框内容

<nova-demo-view link="chart/tree/demo5"></nova-demo-view>

<br>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | string | 默认columns第一项为维度 |
| metrics | 指标 | string | 默认columns第二项为指标 |
| seriesMap | 附加到 series 中的设置 | object | - |

> 备注1： 通过 seriesMap，可以为每一个树设置样式，具体样式的配置可以参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-tree)
