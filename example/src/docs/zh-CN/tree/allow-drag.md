<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-navigation-tree"/>
</p>

## Tree 树形控件

<nova-uxlink widget-name="Tree"></nova-uxlink>

可进行展示有父子层级的数据，支持选择，异步加载等功能。但不推荐用它来展示菜单，展示菜单推荐使用树菜单。
</div>

### 自定义节点能否被拖拽

通过 `allow-drag` 钩子函数判断节点能否被拖拽，返回值为 `false` 时，节点不能拖拽。

<nova-demo-view link="tree/allow-drag"></nova-demo-view>

<br>
