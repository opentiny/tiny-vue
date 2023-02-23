<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-chart-pie"/>
</p>

## Chart 图表

<nova-uxlink widget-name="Chart"></nova-uxlink>

基于 eCharts 封装，一个纯 Javascript 的图表库。
</div>

### 常见问题

#### 父元素的初始宽度未知

在一个初始宽度未知的容器内绘制图表时，因为无法获取宽度，所以图表会绘制失败，解决的办法是在容器宽度已知后，
调用 echarts 的 resize 方法。
通过 `cancel-resize-check` 是用于resize之前，检测组件元素是否存在，元素是否有宽高，没有则不resize。

<nova-demo-view link="chart/question/base"></nova-demo-view>

<br>

当父元素改变时，图表需要执行 resize 方法同步图表的宽高。

<nova-demo-view link="chart/question/demo5"></nova-demo-view>

<br>

#### 数据改变视图自动更新

图表是基于 Vue 开发的，同样支持 `双向数据绑定`，只要改变图表数据 `(示例中的 chartData.row)` 视图会自动更新。

<nova-demo-view link="chart/question/demo4"></nova-demo-view>


#### 小数显示精度

处理数据类型时默认保留两位有效数字，但是当数字较小并设置为百分比类型时，这种方式会导致显示上的问题，例如：

<nova-demo-view link="chart/question/demo2"></nova-demo-view>

<br>

每个图表内都有digit配置项，设置此属性，保证设置类型后，数值较小也能够正常显示，如下所示：

<nova-demo-view link="chart/question/demo3"></nova-demo-view>
