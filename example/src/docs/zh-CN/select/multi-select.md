<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Select 选择器

<nova-uxlink widget-name="Dropdown"></nova-uxlink>

Select 选择器是一种通过点击弹出下拉列表展示数据并进行选择的 UI 组件。
</div>

### 多选

通过 `multiple` 属性启用多选功能，此时 `v-model` 的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现。

<nova-demo-view link="select/multiple"></nova-demo-view>

<br>

### 折叠 Tag

多选时通过设置 `collapse-tags` 属性将选中值合并为一段文字。

<nova-demo-view link="select/collapse-tags"></nova-demo-view>

<br>

### 选择个数限制

`multiple-limit` 属性可指定多选时用户最多可以选择的项目数，默认为 0 不限制。

<nova-demo-view link="select/multiple-limit"></nova-demo-view>

 <br>
