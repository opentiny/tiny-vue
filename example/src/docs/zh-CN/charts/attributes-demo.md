<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-chart-pie"/>
</p>

## Chart 图表

<nova-uxlink widget-name="Chart"></nova-uxlink>

基于 eCharts 封装，一个纯 Javascript 的图表库。
</div>

### 属性配置示例

:::tip 如果某属性加上去之后没有生效，很可能是没有引入相应的模块。例如：
在使用 dataZoom 组件时，需要引入 dataZoom 模块资源 `import 'echarts/lib/component/dataZoom'` 。
:::

### 1 设置区域缩放组件

可通过 `init-options` 配置组件初始化附加参数，具体可[参考文档](http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/api.html#echarts.init)

<nova-demo-view link="chart/props/demo10"></nova-demo-view>

### 2 设置extend配置项

extend 属性支持数组、对象、函数配置方式，以下3种配置是等效的。

<nova-demo-view link="chart/props/base"></nova-demo-view>

### 3 修改颜色列表

<nova-demo-view link="chart/props/demo12"></nova-demo-view>

### 4 设置暂无数据状态

<nova-demo-view link="chart/props/demo4"></nova-demo-view>

### 5 增加自定义内容

<nova-demo-view link="chart/props/demo5"></nova-demo-view>


### 6 隐藏提示框与图例

<nova-demo-view link="chart/props/demo6"></nova-demo-view>

### 7 设置图表容器样式

<nova-demo-view link="chart/props/demo7"></nova-demo-view>

### 8 设置图表标线与标点

<nova-demo-view link="chart/props/demo8"></nova-demo-view>

### 9 设置视觉映射组件

<nova-demo-view link="chart/props/demo9"></nova-demo-view>

### 10 设置afterConfig函数

<nova-demo-view link="chart/props/demo2"></nova-demo-view>

### 11 设置工具箱

<nova-demo-view link="chart/props/demo11"></nova-demo-view>

### 12 设置加载状态

<nova-demo-view link="chart/props/demo3"></nova-demo-view>
