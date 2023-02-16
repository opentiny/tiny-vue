<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Cascader 级联选择器

<nova-uxlink widget-name="Cascader"></nova-uxlink>

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。
</div>

### 基本用法

通过 `options` 属性指定选项数组即可渲染出一个级联选择器。

<nova-demo-view link="cascader/basic-usage.vue"></nova-demo-view>

<br>

### hover 触发子菜单

通过 `props.expandTrigger` 可以指定展开子级菜单的触发方式为 `hover`，默认为 `click` 。

<nova-demo-view link="cascader/expand-trigger.vue"></nova-demo-view>

<br>

### Cascader 属性

<nova-attributes link="cascader"></nova-attributes>

<br>

### Cascader Props

<nova-attributes link="cascader-props" apititle="Cascader Props"></nova-attributes>

<br>
