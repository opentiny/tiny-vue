<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Select 选择器

<nova-uxlink widget-name="Dropdown"></nova-uxlink>

Select 选择器是一种通过点击弹出下拉列表展示数据并进行选择的 UI 组件。
</div>

### 配置方式

通过设置 `cache-op` 开启缓存功能并且通过 `options` 设置下来选项。

<nova-demo-view link="select/cache-usage"></nova-demo-view>

<br>

### 插槽方式

通过 slot 设置列表渲染组件为 `vue-option` 来输出下拉列表，则需要手动加入缓存功能。

<nova-demo-view link="select/memoize-usage"></nova-demo-view>

