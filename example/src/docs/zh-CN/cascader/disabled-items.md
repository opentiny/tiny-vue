<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Cascader 级联选择器

<nova-uxlink widget-name="Cascader"></nova-uxlink>

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

</div>

### 禁用选项

通过在数据源中设置 `disabled` 字段来声明该选项是禁用的，本例中，`options` 指定的数组中的第一个元素含有 `disabled: true` 键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的 `disabled` 字段是否为 `true`，如果你的数据中表示禁用含义的字段名不为 `disabled`，可以通过 `props.disabled` 属性来指定（详见 Cascader Props 的 API 表格）。当然，`value`、`label` 和 `children` 这三个字段名也可以通过同样的方式指定。

<nova-demo-view link="cascader/disabled-items.vue"></nova-demo-view>

<br>

### 指定属性值

通过 `label` 属性设置指定选项标签为选项对象的某个属性值，默认值为 label。

<nova-demo-view link="cascader/disabled-items.vue"></nova-demo-view>

<br>
