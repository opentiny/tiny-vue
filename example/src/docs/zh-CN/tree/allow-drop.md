<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-navigation-tree"/>
</p>

## Tree 树形控件

<nova-uxlink widget-name="Tree"></nova-uxlink>

可进行展示有父子层级的数据，支持选择，异步加载等功能。但不推荐用它来展示菜单，展示菜单推荐使用树菜单。
</div>

### 自定义目标节点能否被放置

通过 `allow-drop` 属性设置拖拽时判断目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后。

<nova-demo-view link="tree/allow-drop"></nova-demo-view>

<br>
