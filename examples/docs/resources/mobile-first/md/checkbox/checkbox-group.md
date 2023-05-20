<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-radioboxgroup"/>
</p>

## Checkbox 复选框

<nova-uxlink widget-name="Selectgroup"></nova-uxlink>

用于配置不同场景的选项，提供用户可在一组选项中进行多选。

</div>

### 复选框组

通过 `checkbox-group` 元素把多个 `checkbox` 元素管理为一组，在 `checkbox-group` 中使用 `v-model` 绑定 Array 类型的变量即可实现双向绑定。 `checkbox` 的 `label` 属性是其对应的值，若该标签中无内容，则该属性也充当 checkbox 后的介绍。`label` 与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

<nova-demo-view link="checkbox/checkbox-group.vue"></nova-demo-view>

### 配置式复选框组

提供 `options` 属性，支持通过配置对象数组数据的形式来渲染多选框组。使用该属性后，可以不用再在标签中以插槽的形式插入 `checkbox` 或 `checkbox-button` 元素。

<br />

`options` 对象数组中包括三个字段：`label`、`text`、`events`。

<br />

另外还提供 `type` 属性，配合 `options` 属性一起使用，默认值为 `checkbox`。还可以配置为 `button`，配置后复选框组将以按钮的形式展示。

<demo-editor-mobilefirst link="checkbox/group-options.vue"></demo-editor-mobilefirst>

<br />
