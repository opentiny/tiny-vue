<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-chart-pie"/>
</p>

## Chart 图表

<nova-uxlink widget-name="Chart"></nova-uxlink>

基于 eCharts 封装，一个纯 Javascript 的图表库。
</div>

### 基本用法

可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。

:::warning 百度地图需要外网访问权限才能正常使用
:::

<nova-demo-view link="chart/bmap/base"></nova-demo-view>

<br>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| key | 百度地图 access_key | string | 可[由此](http://lbsyun.baidu.com/apiconsole/key)获取 |
| v | 百度地图版本 | string | 默认2.0 |
| bmap | 百度地图配置项 | object | 参考[文档](https://github.com/ecomfe/echarts/tree/master/extension/bmap#使用)配置 |
| useOuterMap | 使用全局的地图依赖 | boolean | - |

> 百度地图在与其他地图搭配使用时，需要额外引入相应的 echarts 模块，例如使用热力图，则需要`import 'echarts/lib/chart/heatmap'`。

> 使用 script 引入百度地图后，配置 useOuterMap 可以阻止组件对地图资源的引用

> 百度地图 `<script src="https://api.map.baidu.com/api?v=2.0&ak=key"></script>`
