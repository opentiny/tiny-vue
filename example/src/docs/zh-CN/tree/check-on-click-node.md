<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-navigation-tree"/>
</p>

## Tree 树形控件

<nova-uxlink widget-name="Tree"></nova-uxlink>

可进行展示有父子层级的数据，支持选择，异步加载等功能。但不推荐用它来展示菜单，展示菜单推荐使用树菜单。
</div>

### 点击节点时选中

通过 `check-on-click-node` 属性设置点击节点内容同时可以勾选数据/去勾选数据。
通过 `icon-trigger-click-node` 属性控制点击图标是否触发 node-click 事件，默认为 true。

<nova-demo-view link="tree/check-on-click-node"></nova-demo-view>

<br>
