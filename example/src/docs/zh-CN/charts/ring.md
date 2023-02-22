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

<nova-demo-view link="chart/ring/base"></nova-demo-view>

### 设置指标维度

<nova-demo-view link="chart/ring/demo2"></nova-demo-view>

### 玫瑰图

<nova-demo-view link="chart/ring/demo3"></nova-demo-view>

### 限制显示条数环图

<nova-demo-view link="chart/ring/demo4"></nova-demo-view>

### 设置数据类型

<nova-demo-view link="chart/ring/demo5"></nova-demo-view>

### 设置环图半径

<nova-demo-view link="chart/ring/demo6"></nova-demo-view>

### 设置环图title的位置

<nova-demo-view link="chart/ring/ring-title"></nova-demo-view>
<br>

#### settings 配置项

| 配置项            | 简介                     | 类型              | 备注                                                                            |
| -------------- | ---------------------- | --------------- | ----------------------------------------------------------------------------- |
| dimension      | 维度                     | string          | 默认columns第一项为维度                                                               |
| metrics        | 指标                     | string          | 默认columns第二项为指标                                                               |
| dataType       | 数据类型                   | string          | 可选值: KMB, normal, percent                                                     |
| legendLimit    | legend显示数量限制           | number          | legend数量过多会导致环图样式错误，限制legend最大值并且当超过此值时，隐藏legend可以解决这个问题                      |
| selectedMode   | 选中模式                   | string          | 可选值：single, multiple，默认为false                                                 |
| hoverAnimation | 是否开启 hover 在扇区上的放大动画效果 | boolean         | 默认值为true                                                                      |
| radius         | 环图外半径与内半径              | array           | 数组元素支持数值和百分比，如：[50, 70] 或 ['50%', '70%']                                      |
| offsetY        | 纵向偏移量                  | number / string | 支持数值和百分比                                                                      |
| digit          | 设置数据类型为percent时保留的位数   | number          | 默认为2                                                                          |
| roseType       | 显示为南丁格尔玫瑰图             | string          | 默认不展示为南丁格尔玫瑰图，可设置为`'radius', 'area'`                                          |
| label          | 环图图形上的文本标签             | object          | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-pie.label)     |
| labelLine      | 标签的视觉引导线样式             | object          | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-pie.labelLine) |
| itemStyle      | 图形样式                   | object          | 内容参考[文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html#series-pie.itemStyle) |
| limitShowNum   | 设置超过此数字时使用‘其他’代替       | number          | 此时数据会按照由大到小顺序显示                                                               |
