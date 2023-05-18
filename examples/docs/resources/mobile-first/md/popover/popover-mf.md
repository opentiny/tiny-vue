<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-navigation-steps"/>
</p>

## Popover

<nova-uxlink widget-name="Popover"></nova-uxlink>

Popover 可通过对一个触发源操作触发弹出框,支持自定义弹出内容，延迟触发和渐变动画

</div>

### 基本用法

<nova-demo-view link="popover/basic-usage.vue"></nova-demo-view>
<br />

### 箭头偏移

`arrow-offset` 在 Popover 的范围内，设置箭头的偏移量，来改变箭头的位置。
<nova-demo-view link="popover/arrow-offset.vue"></nova-demo-view>
<br />

### 延迟隐藏

`close-delay` 弹出框延迟隐藏单位为毫秒(Number)

<nova-demo-view link="popover/close-delay.vue"></nova-demo-view>
<br />

### 自定义提示文本

`content` 设置自定义文本，也可在标签内直接嵌套默认插槽为自定义文本

<nova-demo-view link="popover/custom-tip-text.vue"></nova-demo-view>
<br />

### 禁用

`disabled` 设置是否禁用弹出框。

<nova-demo-view link="popover/dynamic-disable.vue"></nova-demo-view>

### 弹出框偏移

`offset` 在触发源的范围内，设置弹框的偏移量，来改变弹框的位置。
<nova-demo-view link="popover/frame-offset.vue"></nova-demo-view>

### 隐藏提示框箭头

`visible-arrow` 设定是否显示提示框的箭头

<nova-demo-view link="popover/hidden-arrow.vue"></nova-demo-view>

### 延迟显示

`open-delay`，设置延迟时间 ( type:number,单位毫秒 )

<nova-demo-view link="popover/open-delay.vue"></nova-demo-view>

### 添加内容

`content` 设置要显示的内容。

<nova-demo-view link="popover/popover-content.vue"></nova-demo-view>

### 事件

`hide` 隐藏时触发回调

<br />

`show` 显示时触发回调

<br />

`after-leave` 隐藏动画播放完毕后触发回调

<br />

`after-enter` 显示动画播放完毕后触发回调

<nova-demo-view link="popover/popover-events.vue"></nova-demo-view>

### 显示位置

`placement` 设置弹出框的的位置,可选值为（to/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end）

<nova-demo-view link="popover/popover-placement.vue"></nova-demo-view>

### 宽度

`width` 弹出框的宽度

<nova-demo-view link="popover/popover-width.vue"></nova-demo-view>

### 自定义样式

`popper-class` 可配置单个或多个 class

<nova-demo-view link="popover/popper-class.vue"></nova-demo-view>

### 弹出框选项

`popper-options` 配置弹出框选项

<nova-demo-view link="popover/popper-options.vue"></nova-demo-view>

### 触发方式

`trigger`设定弹出框的触发方式 <br /> `click` 点击触发 <br /> `focus` 鼠标长按触发 <br /> `hover` 鼠标悬浮触发 <br /> `manual` 点击触发，再次点击隐藏

<nova-demo-view link="popover/trigger-mode.vue"></nova-demo-view>

### 触发源

`slot` 设置弹出框的触发源

<nova-demo-view link="popover/trigger-reference.vue"></nova-demo-view>