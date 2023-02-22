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

<nova-demo-view link="chart/sankey/base"></nova-demo-view>

### 设置数据类型

<nova-demo-view link="chart/sankey/demo2"></nova-demo-view>

<br>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | string | 默认columns第一项为维度 |
| metrics | 指标 | string | 默认columns第二项为指标 |
| dataType | 数据类型 | array | 数组的第一项为item的数据类型，<br>第二项为line的数据类型，<br>可选值: KMB, normal, percent |
| links | 节点间的关系数据 | array | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-sankey.links) |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| label | 每个矩形节点中文本标签的样式 | object | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-sankey.label) |
| itemStyle | 节点矩形的样式 | object | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-sankey.itemStyle) |
| lineStyle | 桑基图边的样式 | object | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-sankey.lineStyle) |
