<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-grid-rowoperation"/>
</p>

## Row 行配置

<nova-uxlink widget-name="Layout"></nova-uxlink>

定义 Layout 的行配置信息。
</div>

### 垂直排列方式

通过使用 `Row` 组件的 `align` 属性实现	flex 布局下的垂直排列方式。

<nova-demo-view link="row/align.vue"></nova-demo-view>

<br>

### 栅格间隔

通过使用 `Row` 组件的 `gutter` 属性实现栅格间隔。

<nova-demo-view link="row/gutter.vue"></nova-demo-view>

<br>

### 取消栅格默认间隔

组件的 `gutter` 属性未设置或者设置为0时，栅格默认有左右内边距10px，可以通过 `no-space` 取消栅格默认间隔。

<nova-demo-view link="row/gutter-nospace"></nova-demo-view>

<br>

### 水平排列方式

通过使用 `Row` 组件的 `justify` 属性实现 flex 布局下的水平排列方式。

<nova-demo-view link="row/justify.vue"></nova-demo-view>

<br>

### 排序方式

通过使用 `Row` 组件的 `order` 属性实现 flex 布局下排序方式。

<nova-demo-view link="row/order.vue"></nova-demo-view>

<br>

### 自定义元素标签

通过使用 `Row` 组件的 `tag` 属性实现自定义元素标签，可选任意标签。

<nova-demo-view link="row/tag1.vue"></nova-demo-view>

<br>

<nova-attributes link="row"></nova-attributes>
