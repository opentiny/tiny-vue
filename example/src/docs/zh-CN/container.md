<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-container-layoutbar"></span>
</p>

## Container 版型

<nova-uxlink widget-name="Container"></nova-uxlink>

用于布局的容器组件，方便快速搭建页面的版型。

<br>

提示布局容器内置 `default（默认）`、`simple（简约）`、`classic（经典）`、`fashion（时尚）`、`legend（传奇）` 五种布局类型，用户可通过 `pattern` 属性选择合适的布局类型，可选值有 `default | simple | classic | fashion | legend`
</div>

### 默认布局

<nova-demo-view link="container/basic-usage.vue"></nova-demo-view>

### 简约布局

<nova-demo-view link="container/simple.vue"></nova-demo-view>

### 经典布局

<nova-demo-view link="container/classic.vue"></nova-demo-view>

### 时尚布局

<nova-demo-view link="container/fashion.vue"></nova-demo-view>

### 传奇布局

<nova-demo-view link="container/legend.vue"></nova-demo-view>

### 自定义宽度和高度

Container 布局容器支持用户通过设置 `headerHeight`、`footerHeight`、`asideWidth` 等属性来控制 `header（头部区域）`、`footer（底部区域）` 的高度和 `aside(左侧区域)` 的宽度。`main（主体区域）` 的宽度和高度是自适应的。

<nova-demo-view link="container/custom-with-height.vue"></nova-demo-view>

### 版型切换

Container 布局容器支持用户通过切换 `pattern` 版型属性的值实现版型切换。 <nova-demo-view link="container/custom-container.vue"></nova-demo-view>

<br>
<!-- <core-attributes-container widget-name="Tiny_Widget_Container" :is-show-tip="false"></core-attributes-container> -->

<nova-attributes link="container"></nova-attributes>
