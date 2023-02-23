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

<nova-demo-view link="chart/wordcloud/base"></nova-demo-view>

### 设置词云图的颜色

<nova-demo-view link="chart/wordcloud/demo2"></nova-demo-view>

### 设置词云图的形状

<nova-demo-view link="chart/wordcloud/demo3"></nova-demo-view>

### 设置词云图的字体大小范围

<nova-demo-view link="chart/wordcloud/demo4"></nova-demo-view>

<br>

#### settings 配置项
| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | String | 默认 `columns[0]` |
| metrics | 指标 | String | 默认 `columns[1]` |
| sizeMin | 最小字体大小 | Number | 默认为 `12` |
| sizeMax | 最大字体大小 | Number | 默认为 `60` |
| shape | 词云图的形状 | String | 默认为 `circle`，可选值见备注 |
| color | 词云图字体颜色 | Array[String], String, Function | 默认为 `"rgb(Math.round(Math.random * 160), Math.round(Math.random * 160), Math.round(Math.random * 160))"` |

> 备注1: shape 可选值有cardioid、 diamond、triangle-forward、triangle、pentagon、star等。如果最终的形状不是理想的形状（都为矩形），可能是画布高度或者宽度不够以及数据过多导致的。可通过设置画布或容器的width或height，通过extend设置series的drawOutOfBound尝试解决。

> 备注2: 详细配置详见[echarts-wordcloud文档](https://github.com/ecomfe/echarts-wordcloud)。更多个性化配置可以结合wordcloud文档在extend的series配置项中设置。
