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

<nova-demo-view link="chart/funnel/base"></nova-demo-view>

### 指定指标维度

<nova-demo-view link="chart/funnel/demo2"></nova-demo-view>

### 自动按照数值排序并过滤 0 值

<nova-demo-view link="chart/funnel/demo3"></nova-demo-view>

### 定制顺序漏斗图

<nova-demo-view link="chart/funnel/demo4"></nova-demo-view>

### 指定数据类型漏斗图

<nova-demo-view link="chart/funnel/demo5"></nova-demo-view>

### 修改 legend 别名漏斗图

<nova-demo-view link="chart/funnel/demo6"></nova-demo-view>

### 金字塔

<nova-demo-view link="chart/funnel/demo7"></nova-demo-view>

<br>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | string | 默认columns第一项为维度 |
| metrics | 指标 | string | 默认columns第二项为指标 |
| dataType | 数据类型 | string | 可选值: KMB, normal, percent |
| sequence | 数据显示顺序 | array | 默认按照数据大小顺序 |
| ascending | 是否显示为金字塔 | boolean | 默认为false |
| useDefaultOrder | 是否自动按照数值大小排序 | boolean | 默认为false |
| filterZero | 是否过滤指标为0的数据 | boolean | 默认为false |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| label | 设置文本标签样式 | object | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-funnel.label) |
| labelLine | 设置标签的视觉引导线样式 | object | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-funnel.labelLine) |
| itemStyle | 设置图形样式 | object | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-funnel.itemStyle) |
