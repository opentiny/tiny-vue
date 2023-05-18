<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-numeric"/>
</p>

## Numeric 计数器

<nova-uxlink widget-name="Numeric"></nova-uxlink>

Numeric 计数器可用于输入数字,可自定义数值范围，步进大小。支持鼠标键盘增减。

</div>

### 基本用法

<nova-demo-view link="numeric/basic-usage.vue"></nova-demo-view>

<br />

### 步长

可通过 `step` 属性设置计数器的步长。

<nova-demo-view link="numeric/about-step.vue"></nova-demo-view>

<br />

### 禁用

通过设置 disabled 控制是否禁用计数器

<nova-demo-view link="numeric/dynamic-disabled.vue"></nova-demo-view>

<br />

### 数值循环

可通过设置 `max` 属性设置计数器允许的最大值，通过设置 `min` 属性设置计数器允许的最小值
通过设置 `circulate` 属性设置是否循环，即数组首尾相连

<nova-demo-view link="numeric/max-min.vue"></nova-demo-view>

<br />

### 聚焦事件

输入框获得焦点时触发 `focus` 事件。

<nova-demo-view link="numeric/focus-event.vue"></nova-demo-view>

<br />

### 失焦事件

输入框失去焦点时触发 `blur` 事件。

<nova-demo-view link="numeric/blur-event.vue"></nova-demo-view>

<br />

### 值改变事件

输入框值被改变时触发 `change` 事件。

<nova-demo-view link="numeric/change-event.vue"></nova-demo-view>

<br />

### 尺寸

可通过 `size` 属性设置计数器尺寸。可取值 `medium`。

<nova-demo-view link="numeric/numeric-size.vue"></nova-demo-view>

<br />

### 数值单位

可通过 `unit` 属性设置计数器的单位

<nova-demo-view link="numeric/unit.vue"></nova-demo-view>

<br />
