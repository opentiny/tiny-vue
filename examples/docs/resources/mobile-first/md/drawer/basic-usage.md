<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-drawer"/>
</p>

## Drawer 抽屉组件

<mobile-uxlink widget-name="Drawer"></mobile-uxlink>

</div>

### 基本用法

<nova-demo-view link="drawer/basic-usage.vue"></nova-demo-view>

### 抽屉方向

添加 `placement` 属性设置抽屉的方向，可选值有 `left|right|top|bottom`，默认值为 `right`。

<nova-demo-view link="drawer/placement.vue"></nova-demo-view>

### 抽屉宽度

添加 `width` 属性设置抽屉的宽度，默认值为 `300px`。

<nova-demo-view link="drawer/width.vue"></nova-demo-view>

添加 `dragable` 属性开启抽屉宽度拖拽功能，默认值为 `false`。

<nova-demo-view link="drawer/dragable.vue"></nova-demo-view>

### 遮罩层

添加 `mask` 属性可以关闭遮罩层，默认值为 `true` 。

<nova-demo-view link="drawer/mask.vue"></nova-demo-view>

默认弹窗打开后，可以单击遮罩层关闭弹窗，设置 `mask-closable` 为 `false` 后将禁用该功能，默认值为 `true` 。

<nova-demo-view link="drawer/mask-event.vue"></nova-demo-view>

### 显示隐藏

:::tip 显示隐藏说明

- show-header: 显示头部，默认值为 true；
- show-footer: 显示底部，默认值为 false；
  :::

<nova-demo-view link="drawer/show.vue"></nova-demo-view>

### 插槽

:::tip 插槽说明

- header: 头部插槽，默认显示头部，设置 :show-header="true" 时有效；
- header-right: 头部右侧插槽，默认显示关闭功能；
- footer: 头部插槽，默认隐藏底部，设置 :show-footer="true" 时有效；
  :::

<nova-demo-view link="drawer/slot.vue"></nova-demo-view>

### 事件

:::tip 事件说明

- hide: 关闭抽屉事件；
- confirm: 确认事件，设置 :show-footer="true" 时有效；
  :::

<nova-demo-view link="drawer/event.vue"></nova-demo-view>
