<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Cascader 级联选择器

<nova-uxlink widget-name="Cascader"></nova-uxlink>

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。
</div>

### 父子级不相关联

通过 `props.checkStrictly = true` 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。默认单选模式下，只能选择叶子节点。

<nova-demo-view link="cascader/check-strictly.vue"></nova-demo-view>

<br>

### 多选选择任意一级选项

在多选模式下同时取消父子节点关联，选择任意一级选项。

<nova-demo-view link="cascader/check-strictly-multiple.vue"></nova-demo-view>

<br>
