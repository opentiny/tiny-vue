<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Cascader 级联选择器

<nova-uxlink widget-name="Cascader"></nova-uxlink>

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

</div>

### 可搜索

将 `filterable` 赋值为 `true` 即可打开搜索功能，默认会匹配节点的 `label` 或所有父节点的 `label` (由 `show-all-levels` 决定)中包含输入值的选项。 `empty` 无匹配选项时显示的内容

<nova-demo-view link="cascader/filterable.vue"></nova-demo-view>

<br>

### 搜索延时

通过 `debounce` 属性可以设置搜索关键词输入的去抖延迟，默认值为 300 毫秒。

<nova-demo-view link="cascader/filterable.vue"></nova-demo-view>

<br>

### 多选可搜索

多选模式下开启搜索功能。

<nova-demo-view link="cascader/filterable-multiple.vue"></nova-demo-view>

<br>

### 自定义搜索逻辑

` filter-method` 自定义搜索逻辑，第一个参数是节点 node，第二个参数是搜索关键词 keyword，通过返回布尔值表示是否命中,如果需要选择父级，通过 props.checkStrictly = true 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。默认单选模式下，只能选择叶子节点。

<nova-demo-view link="cascader/filter-method"></nova-demo-view>

<br>

### 占位文本

输入框占位文本。

<nova-demo-view link="cascader/filterable-multiple.vue"></nova-demo-view>

<br>
