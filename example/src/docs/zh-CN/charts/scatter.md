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

<nova-demo-view link="chart/scatter/base"></nova-demo-view>

### 双维度多指标散点图示例

<nova-demo-view link="chart/scatter/demo2"></nova-demo-view>

### 指标维度配置

<nova-demo-view link="chart/scatter/demo3"></nova-demo-view>

### 数据类型配置

<nova-demo-view link="chart/scatter/demo4"></nova-demo-view>

### 属性名配置

<nova-demo-view link="chart/scatter/demo5"></nova-demo-view>

### 缩放配置

<nova-demo-view link="chart/scatter/demo6"></nova-demo-view>

### 散点样式配置

<nova-demo-view link="chart/scatter/demo7"></nova-demo-view>

### 散点出现覆盖时, 提示框可以改成通过坐标轴触发

<nova-demo-view link="chart/scatter/demo8"></nova-demo-view>

<br>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | string | 默认 columns[0] |
| metrics | 指标 | array | 默认 [columns[0], columns[1]] |
| dataType | 数据类型 | object | - |
| xAxisType | x轴类型 | string | 可选值: category, value, time, log |
| xAxisName | x轴标题 | string | - |
| yAxisName | y轴标题 | string | - |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| labelMap | 设置指标的别名 | object | - |
| legendName | 设置图表上方图例的别名 | object | - |
| tooltipTrigger | 提示框的触发方式 | string | 可选值: item, axis |
| axisVisible | 是否显示坐标轴 | boolean | - |
| symbolSizeMax | 气泡最大值 | number | 默认为50 |
| symbol | 标记的图形 | string | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-scatter.symbol) |
| symbolSize | 标记的大小 | number, array, Function | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-scatter.symbolSize) |
| symbolRotate | 标记的旋转角度 | number | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-scatter.symbolRotate) |
| symbolOffset | 标记相对于原本位置的偏移 | array | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-scatter.symbolOffset) |
| cursor | 鼠标悬浮时在图形元素上时鼠标的样式 | string | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-scatter.cursor) |
| scale | 是否是脱离 0 值比例 | boolean | - |
| min | y轴最小值 | number | - |
| max | y轴最大值 | number | - |
