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

<nova-demo-view link="chart/heatmap/base"></nova-demo-view>

### 配置坐标轴

<nova-demo-view link="chart/heatmap/demo2"></nova-demo-view>

### 自定义 visualMap

<nova-demo-view link="chart/heatmap/demo3"></nova-demo-view>

### 地图热力图

<nova-demo-view link="chart/heatmap/demo4"></nova-demo-view>

### 百度地图热力图

:::warning 百度地图和高德地图需要外网访问权限才能正常使用
:::

<nova-demo-view link="chart/heatmap/demo5"></nova-demo-view>

<br>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| type | 热力图的类型 | string | 可选值：`cartesian`(默认值，直角坐标系), `map`(地图)，`bmap`(百度地图) |
| xAxisList | x 轴数据 | array | 默认取数据中的数据中的第一维度的数据 |
| yAxisList | y 轴数据 | array | 默认取数据中的数据中的第二维度的数据 |
| dimension | 维度 | array | 默认为 [columns[0], columns[1]] |
| metrics | 指标 | string | 默认为 columns[2] |
| dataType | 数据类型 | string | 可选值: KMB, normal, percent |
| min | visualMap 中的最小值 | number | 默认取指标中最小的数据 |
| max | visualMap 中的最大值 | number | 默认取指标中最大的数据 |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| key | 百度地图 access_key | string | 可[由此](http://lbsyun.baidu.com/apiconsole/key)获取 |
| bmap | 百度地图配置项 | object | 参考[文档](https://github.com/ecomfe/echarts/tree/master/extension/bmap#使用)配置 |
| geo |  地图配置项 |  object | 参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#geo) |
| position | 地图类型 | string | 默认为 `'china'` |
| positionJsonLink | 地图数据源 | string | - |
| beforeRegisterMap | 地图数据注册前执行的函数 | Function | 参数为地图数据，需返回地图数据 |
| beforeRegisterMapOnce | 地图数据注册前执行的函数(仅执行一次) | Function | 参数为地图数据，需返回地图数据 |
| specialAreas | 地图中的位置配置 | object | 将地图中的部分区域缩放到合适的位置，可以使得整个地图的显示更加好看, 用法参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/api.html#echarts.registerMap) |
| mapURLProfix | 位置请求的 URL 前缀 | string | 默认为 `https://unpkg.com/echarts@3.6.2/map/json/` |
| pointSize | 点大小 | number | 默认为 10 |
| blurSize | 模糊大小 | number | 默认为 5 |
| heatColor | visualMap 中的最大值颜色区间 | array | - |
| yAxisName | y 轴名称 | string | - |
| xAxisName | x 轴名称 | string | - |

> 备注：当不指定指标时，指标的值默认为1。
