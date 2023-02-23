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

<nova-demo-view link="chart/candle/base"></nova-demo-view>

### 使用简化的数据格式

<nova-demo-view link="chart/candle/demo2"></nova-demo-view>

### 设置数据格式

<nova-demo-view link="chart/candle/demo3"></nova-demo-view>

### 显示 MA, VOL

<nova-demo-view link="chart/candle/demo4"></nova-demo-view>

### 修改指标名和图例文字

<nova-demo-view link="chart/candle/demo5"></nova-demo-view>

### 修改 MA 显示周期

<nova-demo-view link="chart/candle/demo6"></nova-demo-view>

### 设置 dataRoom 控件

<nova-demo-view link="chart/candle/demo7"></nova-demo-view>

<br>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | string | 默认为 columns[0] |
| metrics | 指标 | array | 默认为 [columns[1] ~ columns[5]] |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| itemStyle | 图形样式 | object | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-candlestick.itemStyle) |
| labelMap | 设置指标的别名 | object | - |
| legendName | 设置图表上方图例的别名 | object | - |
| showMA | 是否展示移动平均线指标 | boolean | 默认 为 false |
| MA | 移动平均线指标周期 |  array | 默认 `[5, 10, 20, 30]` |
| showVol | 是否展示成交量 | boolean |  默认为 false |
| downColor | 下降颜色 | string | 默认为 #ec0000 |
| upColor | 上升颜色 | string | 默认为 #00da3c |
| showDataZoom | 是否展示 dataZoom 控件 | boolean | 默认为 false |
| start | dataZoom 控件的起始位置 | number | 默认为 50，即中间位置 |
| end | dataZoom 控件的结束位置 | number | 默认为 100，即末尾位置 |
| dataType | 数据展示格式 | string | 可选值: KMB, normal, percent |

> 备注1: metrics 各项的值分别代表 `['open', 'close', 'lowest', 'highest', 'vol']`（开盘值, 收盘值, 最低值, 最高值, 成交量）, 其中 vol 为可选值。
> 备注2: k 线图左侧数值被遮挡时，可以通过设置 grid 属性来增加数值可用空间，从而避免遮挡。示例： <!-- TODO: add demo -->
