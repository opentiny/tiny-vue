<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Select 选择器

<nova-uxlink widget-name="Dropdown"></nova-uxlink>

Select 选择器是一种通过点击弹出下拉列表展示数据并进行选择的 UI 组件。

:::warning
在大数据量场景，为了防止大量 dom 渲染开销导致页面卡顿，请使用 [嵌套 Grid](#/webnova/zh-CN/component/select/nest-grid)
:::

</div>

### 基本用法

`v-model` 的值为当前被选中的 `tiny-option` 的 `value` 属性值。

<nova-demo-view link="select/basic-usage.vue"></nova-demo-view>

<br>

### Select 属性

<nova-attributes link="select"></nova-attributes>

<br>

### Option 属性

<nova-attributes link="option"></nova-attributes>

<br>

### Option-Group 属性

<nova-attributes link="option-group"></nova-attributes>
