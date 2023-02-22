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

<nova-demo-view link="chart/radar/base"></nova-demo-view>

### 设置显示的指标维度

<nova-demo-view link="chart/radar/demo2"></nova-demo-view>

### 修改指标名称

<nova-demo-view link="chart/radar/demo3"></nova-demo-view>

<br>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | string | 默认columns第一项为维度 |
| metrics | 指标 | array | 默认columns第二项起为指标 |
| dataType | 数据类型 | object | 可选值: KMB, normal, percent |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| label | 图形上的文本标签 | object | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-radar.label) |
| itemStyle | 折线拐点标志的样式 | object | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-radar.itemStyle) |
| lineStyle | 线条样式 | object | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-radar.lineStyle) |
| areaStyle | 区域填充样式 | object | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-radar.areaStyle)  |


> 备注：dataType中直接设置对应维度的数据类型，例如示例的`{ '占比': 'percent' }`，即将占比数据设置为百分比类型
