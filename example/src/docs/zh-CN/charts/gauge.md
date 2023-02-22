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

<nova-demo-view link="chart/gauge/base"></nova-demo-view>

### 指标维度配置

<nova-demo-view link="chart/gauge/demo2"></nova-demo-view>

### 设置数据类型

<nova-demo-view link="chart/gauge/demo3"></nova-demo-view>

### 设置指标别名与单位

<nova-demo-view link="chart/gauge/demo4"></nova-demo-view>

### 设置多表盘及修改样式

<nova-demo-view link="chart/gauge/demo5"></nova-demo-view>

<br>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | string | 默认 columns[0] |
| metrics | 指标 | string | 默认 columns[1] |
| dataType | 数据类型 | object | - |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| labelMap | 设置指标的别名 | object | - |
| seriesMap | 附加到 series 中的设置 | object | - |
| dataName | 表盘上显示的单位 | object | - |

> 备注1： 通过 seriesMap，可以为每一个仪表设置样式，具体样式的配置可以参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-gauge)
