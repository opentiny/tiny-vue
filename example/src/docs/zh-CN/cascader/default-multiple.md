<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Cascader 级联选择器

<nova-uxlink widget-name="Cascader"></nova-uxlink>

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。
</div>

### 多选

通过 `props.multiple = true` 来开启多选模式。

<nova-demo-view link="cascader/default-multiple.vue"></nova-demo-view>

<br>

### 折叠展示 Tag

在开启多选模式后，默认情况下会展示所有已选中的选项的 Tag，可以使用 `collapse-tags` 来折叠 Tag 。
通过 `disabled` 设置组件是否禁用，默认值为 false 。
<nova-demo-view link="cascader/collapse-tags.vue"></nova-demo-view>

<br>
