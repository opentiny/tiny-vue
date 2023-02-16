<div class="demo-header">
<p class="overviewicon">
  <span class="resource-ui-columnoperation"/>
</p>

## Col 列配置

<nova-uxlink widget-name="Layout"></nova-uxlink>

定义 Layout 的列配置信息。
</div>

### 基本用法

<nova-demo-view link="col/base.vue"></nova-demo-view>

<br>

### 偏移

通过设置 `Col` 组件的 `offset` 属性来指定分栏偏移的栏数。

<nova-demo-view link="layout/offset.vue"></nova-demo-view>

<br>

### 移动

通过设置 `Col` 组件的 `move` 属性来指定分栏偏移的栏数。

<nova-demo-view link="col/col-move.vue"></nova-demo-view>

<br>

### 排序

:::tip 提示
flex 布局存在 IE 兼容性问题，只能在 IE 10 以上运行。
:::

<nova-demo-view link="col/order.vue"></nova-demo-view>

<br>

### 响应式布局

参照了 Bootstrap 的响应式设计，预设了五个响应尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`。

<nova-demo-view link="layout/responsive-layout.vue"></nova-demo-view>

<br>

### 自定义元素标签

可选任意标签。

<nova-demo-view link="col/tag.vue"></nova-demo-view>

<br>

<nova-attributes link="col"></nova-attributes>
