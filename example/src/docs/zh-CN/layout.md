<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-attr-publicattr"/>
</p>

## Layout 布局

<nova-uxlink widget-name="Layout"></nova-uxlink>

采用栅格布局，可使布局方法变得非常简单与清晰。

<br>

Tiny 采用 12 栅格系统，将屏幕区域划分 12 等份，通过使用栅格系统可轻松应对大多数页面布局。
另提供两个布局组件 Row 与 Col，配合使用使排版布局更高效。
</div>

### 栅格布局

通过使用 `Row` , `Col` 组件的 `span` 属性实现栅格系统布局。
<nova-demo-view link="layout/base.vue"></nova-demo-view>

<br>

### 间隔

通过设置 `Row` 组件的 `gutter` 属性来指定子元素之间的间隔。

<nova-demo-view link="layout/gutter.vue"></nova-demo-view>

<br>

### 对齐方式

通过设置 `flex` 属性为 `true` 来启用 flex 布局，并通过 `justify` 与 `align` 属性调整子元素的对齐方式。

:::tip 提示
flex 布局存在 IE 兼容性问题，只能在 IE 10 以上运行。
:::

<nova-demo-view link="layout/alignment.vue"></nova-demo-view>

<br>

### 排序

在启用 `flex` 布局时，可通过设置 `Row` 组件的 `order` 属性，给带 `no` 属性的 `col`排序。

:::tip 提示
flex 布局存在 IE 兼容性问题，只能在 IE 10 以上运行。
:::

<nova-demo-view link="layout/order.vue"></nova-demo-view>

<br>

### 偏移

通过设置 `Col` 组件的 `offset` 属性来指定分栏偏移的栏数。
<nova-demo-view link="layout/offset.vue"></nova-demo-view>

<br>

<nova-attributes link="layout"></nova-attributes>
