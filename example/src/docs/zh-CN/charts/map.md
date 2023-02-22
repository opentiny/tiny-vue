<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-chart-pie"/>
</p>

## Chart 图表

<nova-uxlink widget-name="Chart"></nova-uxlink>

基于 eCharts 封装，一个纯 Javascript 的图表库。
</div>

### 基本用法

<nova-demo-view link="chart/map/base"></nova-demo-view>

<br>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | string | 默认columns第一项为维度 |
| metrics | 指标 | array | 默认columns第二项为指标 |
| position | 位置 | string | 默认为 `'china'` |
| selectData | 是否高亮显示数据对应位置 | boolean | 默认为 `false` |
| selectedMode | 地图选中模式 | Boolean，String | 默认为 `false`, 可选值有<br>`'single', 'multiple'` |
| dataType | 指标数据类型 | object | 内容为 指标-指标数据 <br>类型的键值对，支持<br>`'normal', 'KMB', 'percent'` |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| zoom | 视角的缩放比例 | number | 默认为1 |
| center | 当前视角的中心点 | array | - |
| aspectScale | 用于 scale 地图的长宽比 | number | 默认为0.75 |
| boundingCoords | 左上角以及右下角分别所对应的经纬度 | array | 默认为null |
| roam | 是否开启鼠标缩放和平移漫游 | boolean, string | 默认为false, 可选值有<br>`false, true, 'scale', 'move'` |
| scaleLimit | 滚轮缩放的极限控制 | object | 默认`{ min: 1, max: 1 }` |
| mapGrid | 地图距离容器的边距 | object | 默认值为<br>`{`<br>` left: auto,`<br>` right: auto,`<br>` top: auto,`<br>` bottom: auto`<br>` }` |
| label | 文本标签 | boolean, object | 默认为`true`, 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-map.label) |
| itemStyle | 地图区域的多边形 图形样式 | boolean, object | 默认为true, 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-map.itemStyle) |
| positionJsonLink | 地图数据源 | string | - |
| beforeRegisterMap | 地图数据注册前执行的函数 | Function | 参数为地图数据，需返回地图数据 |
| beforeRegisterMapOnce | 地图数据注册前执行的函数(仅执行一次) | Function | 参数为地图数据，需返回地图数据 |
| specialAreas | 地图中的位置配置 | object | 将地图中的部分区域缩放到合适的位置，可以使得整个地图的显示更加好看, 用法参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/api.html#echarts.registerMap) |
| mapURLProfix | 位置请求的 URL 前缀 | string | 默认为 `https://unpkg.com/echarts@3.6.2/map/json/` |
| mapOrigin | 地图 geojson | object | - |

> 备注: 属性中的 position 默认为'china',可设置的类型有'china'、'china-cities'、'china-contour'、'world'、'province/beijing'、'province/shanghai'等，省份的position如例子中所示需要在前面加'province/'
