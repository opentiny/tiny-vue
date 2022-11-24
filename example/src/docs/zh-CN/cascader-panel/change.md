<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## CascaderPanel 级联面板

<nova-uxlink widget-name="CascaderPanel"></nova-uxlink>

级联面板与级联选择器一样，有单选、多选、动态加载等多种功能。

</div>

### 选中节点变化

通过 `change` 点击节点后触发的事件，回调参数为 选中节点的值
通过 `clearCheckedNodes` 清除选中的节点。
通过 `getCheckedNodes` 获取选中的节点。


<nova-demo-view link="cascader-panel/change.vue"></nova-demo-view>

<br>

### 展开节点发生变化

通过 `expand-change` 点击展开节点发生变化时触发，回调参数为 各父级选项值组成的数组

<nova-demo-view link="cascader-panel/expand-change.vue"></nova-demo-view>

<br>
