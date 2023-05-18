<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-action-sheet"/>
</p>

## ActionSheet 动作面板组件

<nova-uxlink widget-name="ActionSheet"></nova-uxlink>
</div>

### 基本用法

<nova-demo-view link="action-sheet/basic-usage.vue"></nova-demo-view>

### 操作列表模式

设置 `type` 为 `action` 启用操作列表模式，设置 `title` 显示提示语。

<nova-demo-view link="action-sheet/action.vue"></nova-demo-view>

### 显示隐藏

:::tip 显示隐藏说明

- show-header: 显示头部，默认值为 true；
- show-search: 显示头部搜索功能，默认值为 true；
- show-footer: 显示底部，默认值为 false；
  :::

<nova-demo-view link="action-sheet/show.vue"></nova-demo-view>

### 遮罩层

添加 `mask` 属性可以关闭遮罩层，默认值为 `true` 。

<nova-demo-view link="action-sheet/mask.vue"></nova-demo-view>

默认弹窗打开后，可以单击遮罩层关闭弹窗，设置 `mask-closable` 为 `false` 后将禁用该功能，默认值为 `true` 。

<nova-demo-view link="action-sheet/mask-event.vue"></nova-demo-view>

### 插槽

:::tip 插槽说明

- header: 头部插槽，默认显示头部，设置 show-header="true" 时有效；
- header-left: 头部左侧插槽，默认显示搜索功能；
- header-right: 头部右侧插槽，默认显示关闭功能；
- footer: 头部插槽，默认隐藏底部，设置 show-footer="true" 时有效；
  :::

<nova-demo-view link="action-sheet/slot.vue"></nova-demo-view>

<br />