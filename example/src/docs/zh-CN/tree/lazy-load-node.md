<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-navigation-tree"/>
</p>

## Tree 树形控件

<nova-uxlink widget-name="Tree"></nova-uxlink>

可进行展示有父子层级的数据，支持选择，异步加载等功能。但不推荐用它来展示菜单，展示菜单推荐使用树菜单。
</div>

### 懒加载子节点

通过 `lazy` 属性设置是否懒加载子节点，需与 `load` 方法结合使用。默认值为 `false`。

<nova-demo-view link="tree/lazy-load-node"></nova-demo-view>

<br>
