<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Cascader 级联选择器

<nova-uxlink widget-name="Cascader"></nova-uxlink>

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。
</div>

### 动态加载

当选中某一级时，动态加载该级下的选项。通过 `props` 属性中的 `lazy` 开启动态加载，并通过 `lazyload` 来设置加载数据源的方法。`lazyload` 方法有两个参数，第一个参数 node 为当前点击的节点，第二个 resolve 为数据加载完成的回调(必须调用)。为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (默认字段为 leaf，可通过 props.leaf 修改)，否则会简单的以有无子节点来判断是否为叶子节点。

<nova-demo-view link="cascader/auto-load.vue"></nova-demo-view>

<br>

### 动态加载且父子级不相关联

当选中某一级时，动态加载该级下的选项。通过 `props` 属性中的 `lazy` 开启动态加载，并通过 `lazyload` 来设置加载数据源的方法。通过 `props` 属性中的 `checkStrictly` 开启父子级不相关联。

<nova-demo-view link="cascader/auto-load-checkStrictly.vue"></nova-demo-view>

<br>
