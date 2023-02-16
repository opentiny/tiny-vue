<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## CascaderPanel 级联面板

<nova-uxlink widget-name="CascaderPanel"></nova-uxlink>

级联面板与级联选择器一样，有单选、多选、动态加载等多种功能。
</div>

### 自定义节点内容

可以通过 `scoped slot` 对级联面板的备选项的节点内容进行自定义，`scoped slot` 会传入两个字段 `node` 和 `data`，分别表示当前节点的 Node 对象和数据。

<nova-demo-view link="cascader-panel/custom-option-content.vue"></nova-demo-view>

<br>
