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

<nova-demo-view link="chart/line/base"></nova-demo-view>

### 设置显示的指标维度

<nova-demo-view link="chart/line/demo2"></nova-demo-view>

### 设置双 y 轴

<nova-demo-view link="chart/line/demo3"></nova-demo-view>

### 横坐标的倾斜

<nova-demo-view link="chart/line/demo4"></nova-demo-view>

### 堆叠面积图

<nova-demo-view link="chart/line/demo5"></nova-demo-view>

### 设置别名

<nova-demo-view link="chart/line/demo6"></nova-demo-view>

### 显示指标数值

<nova-demo-view link="chart/line/demo7"></nova-demo-view>

### 设置横轴为连续的数值轴

<nova-demo-view link="chart/line/demo8"></nova-demo-view>

### 设置横轴为连续的时间轴

<nova-demo-view link="chart/line/demo9"></nova-demo-view>

<br>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | array | 默认columns第一项为维度 |
| metrics | 指标 | array | 默认columns第二项起为指标 |
| xAxisType | 横轴的数据类型 | string | 可选值: category, value, time, log |
| yAxisType | 左右坐标轴数据类型 | array | 可选值: KMB, normal, percent |
| yAxisName | 左右坐标轴标题 | array | - |
| axisSite | 指标所在的轴 | object | 默认不在right轴的指标都在left轴 |
| stack | 堆叠选项 | object | - |
| area | 是否展示为面积图 | boolean | 默认为false |
| scale | 是否是脱离 0 值比例 | array | 默认为[false, false]，表示左右<br>两个轴都不会脱离0值比例。<br>设置成 true 后坐标刻度不会<br>强制包含零刻度<br> |
| min | 左右坐标轴最小值 | array | - |
| max | 左右坐标轴最大值 | array | - |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| labelMap | 设置指标的别名，同时作用于提示框和图例 | object | - |
| legendName | 设置图表上方图例的别名 | object | - |

>  备注1. axisSite 可以设置 left 和 right，例如示例所示 `axisSite: { right: ['占比'] }` 即将占比的数据置于右轴上。

>  备注2. stack 用于将两数据堆叠起来，例如实例中所示`stack: { '销售额': ['成本', '利润'] }` 即将'成本', '利润'相应的数据堆叠在一起。

>  备注3. min和max的值可以直接设置为数字，例如：`[100, 300]`；也可以设置为`['dataMin', 'dataMin']`, `['dataMax', 'dataMax']`，此时表示使用该坐标轴上的最小值或最大值为最小或最大刻度。
