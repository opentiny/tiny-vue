<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-chart-pie"/>
</p>

## Chart 图表

<nova-uxlink widget-name="Chart"></nova-uxlink>

基于 eCharts 封装，一个纯 Javascript 的图表库。
</div>

### 基本用法

Boxplot 中文可以称为『箱形图』、『盒须图』、『盒式图』、『盒状图』、『箱线图』，是一种用作显示一组数据分散情况资料的统计图。它能显示出一组数据的最大值、最小值、中位数、下四分位数及上四分位数。

<nova-demo-view link="chart/boxplot/base"></nova-demo-view>

### 多数据显示

`boxplot` 提供数据转化方法 `prepareBoxplotData` 将源数据转化为 `{ axisData: [...], boxData: [...], outliers: [...] }` 的格式化数据。

<nova-demo-view link="chart/boxplot/multiple"></nova-demo-view>

<br>

### 垂直显示

通过 `extend` 属性实现 `echarts` 方式的配置。

<nova-demo-view link="chart/boxplot/vertical"></nova-demo-view>

<br>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| metrics | 指标 | array | 默认columns为指标 |
| xAxisType | 上下坐标轴数据类型 | array | 可选值: category, value |
| xAxisName | 上下坐标轴标题 | array | - |
| axisSite | 指标所在的轴 | object | 默认不在top轴的指标都在bottom轴 |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| scale | 是否是脱离 0 值比例 | array | 默认为[false, false]，表示上下两个轴都不会脱离0值比例。设置成 true 后坐标刻度不会强制包含零刻度 |
| min | 上下坐标轴最小值 | array | - |
| max | 上下坐标轴最大值 | array | - |
| labelMap | 设置指标的别名，同时作用于提示框和图例| object | - |
| legendName | 设置图表上方图例的别名 | object | - |
| label | 设置图形上的文本标签 | object | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-bar.label) |
| itemStyle | 图形样式 | object | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-bar.itemStyle) |
| yAxisType | 纵轴的类型 | string | 可选值'category'，'value'，默认为'category' |
