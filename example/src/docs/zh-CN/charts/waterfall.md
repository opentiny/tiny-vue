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

<nova-demo-view link="chart/waterfall/base"></nova-demo-view>

### 设置指标维度

<nova-demo-view link="chart/waterfall/demo2"></nova-demo-view>

### 设置数据类型

<nova-demo-view link="chart/waterfall/demo3"></nova-demo-view>

### 修改指标名称

<nova-demo-view link="chart/waterfall/demo4"></nova-demo-view>

### 设置 总计、剩余 的名称

<nova-demo-view link="chart/waterfall/demo5"></nova-demo-view>

<br>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | string | 默认columns第一项为维度 |
| metrics | 指标 | string | 默认columns第二项为指标 |
| dataType | 数据类型 | string | 可选值: KMB, normal, percent |
| totalNum | 总量 | number | 默认瀑布图总量为所有数据的和 |
| totalName | 总量的显示文案 | string | 默认显示总计 |
| remainName | 剩余的显示文案 | string | 默认显示其他 |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
