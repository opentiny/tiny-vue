<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-business-slideimg"/>
</p>

## Carousel 走马灯

<nova-uxlink widget-name="Carousel"></nova-uxlink>

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

</div>

### 基本用法

<nova-demo-view link="carousel/basic-usage.vue"></nova-demo-view>

<br />

### Carousel 属性

<nova-attributes link="carousel"></nova-attributes>

<br />

### Carousel-Item 属性

<nova-attributes link="carousel-item"></nova-attributes>

<br />

### 自动切换

配置 `autoplay` 属性为 true 后，走马灯的幻灯片内容将自动轮播切换。

<nova-demo-view link="carousel/autoplay.vue"></nova-demo-view>

<br />

### 总是显示切换箭头

<nova-demo-view link="carousel/carousel-arrow-always.vue"></nova-demo-view>

### hover 时显示切换箭头

<nova-demo-view link="carousel/carousel-arrow-hover.vue"></nova-demo-view>

### 隐藏切换箭头

<nova-demo-view link="carousel/carousel-arrow-never.vue"></nova-demo-view>

<br />

### 宽高比

`aspect-ratio` 属性可以设置轮播图的宽高比，如果设置了 height，会以 height 为主，默认值为 16:2，可以设置任意的整数宽高比例。
设置了`aspect-ratio`之后页面缩放时会按照设定的比例自动调整轮播器的高度。

<nova-demo-view link="carousel/aspect-ratio.vue"></nova-demo-view>

<br />

### 关闭循环轮播

配置 `loop` 属性为 false 后，若走马灯幻灯片已切换到最后一项，则将不能再从第一项开始循环切换。即切换到最后一项时，右侧切换箭头不再显示，切换到第一项时，左侧切换箭头不再显示。

<nova-demo-view link="carousel/close-loop.vue"></nova-demo-view>

<br />

### 设置高度

<nova-demo-view link="carousel/custom-height.vue"></nova-demo-view>

<br />

### 指示器样式

`indicator-style` 属性可以设置轮播图指示器样式，支持 light 与 dark 两种类型，默认为 light。

<nova-demo-view link="carousel/indicator-style.vue"></nova-demo-view>

<br />

### 指示器和触发方式

走马灯指示器默认显示在幻灯片内容上，配置 `indicator-position` 为 outside 后，将显示在外部。<br />

配置 `trigger` 为 click ，可以修改指示器触发方式为单击，默认鼠标悬停到指示器时，走马灯幻灯片就会对应切换。

<nova-demo-view link="carousel/indicator-trigger.vue"></nova-demo-view>

<br />

### 播放开始位置

<nova-demo-view link="carousel/initial-index.vue"></nova-demo-view>

<br />

### 手动轮播

调用 `setActiveItem()`、`next()`、`prev()` 方法可根据需要进行轮播。`initial-index` 属性可以指定初始激活的幻灯片索引。

<nova-demo-view link="carousel/manual-play.vue"></nova-demo-view>

<br />

### 轮播间隔时间

走马灯幻灯片轮播间隔时间默认为 3000 毫秒，通过 `interval` 属性可以自定义。

<nova-demo-view link="carousel/play-interval.vue"></nova-demo-view>

<br />

### 显示标题

通过 `title` 配置显示标题，需要与 `show-title` 结合使用。
<nova-demo-view link="carousel/show-title.vue"></nova-demo-view>

<br />

### 纵向轮播

配置 `type` 属性为 vertical 即可实现纵向轮播。

<nova-demo-view link="carousel/up-down-carousel.vue"></nova-demo-view>

<br />
