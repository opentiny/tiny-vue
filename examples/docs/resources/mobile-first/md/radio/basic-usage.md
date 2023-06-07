<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-radioboxgroup"/>
</p>

## Radio 单选框

<nova-uxlink widget-name="Selectgroup"></nova-uxlink>

用于配置不同场景的选项，在一组备选项中进行单选。

</div>

### 基本用法

通过 `v-model` 绑定变量，设置的变量值为默认选中的 Radio，变量值对应 `label` 属性的值。通过 `text` 也可以配置显示文本，与默认插槽配置纯文本的结果一致

<br />

`label` 可以是 `String`、`Number` 或 `Boolean`。

<demo-editor-mobilefirst link="radio/basic-usage.vue"></demo-editor-mobilefirst>

<br />

### 配置式单选组

提供 `options` 属性，支持通过配置对象数组数据的形式来渲染单选组。使用该属性后，可以不用再在标签中以插槽的形式插入 `<radio>` 或 `<radio-button>` 标签。

<br />

`options` 对象数组中包括三个字段：`label`、`text`、`events`。

<br />

另外还提供 `type` 属性，配合 `options` 属性一起使用，默认值为 `radio`。还可以配置为 `button`，配置后单选组将以按钮的形式展示。

<demo-editor-mobilefirst link="radio/group-options.vue"></demo-editor-mobilefirst>

<br />

### Radio

<nova-attributes link="radio" apititle="Radio"></nova-attributes>

<br />

### RadioGroup

<nova-attributes link="radio-group" apititle="RadioGroup"></nova-attributes>

<br />

### RadioButton

<nova-attributes link="radio-button" apititle="RadioButton"></nova-attributes>
