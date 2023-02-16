<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-treemenu"/>
</p>

## TreeMenu 树型菜单

<nova-uxlink widget-name="TreeMenu"></nova-uxlink>

以树形方式显示的菜单，适用于版型定制的一种组件。
</div>

### 事件

`current-change` 当前选中节点变化时触发的事件。

<nova-demo-view link="tree-menu/event-current-change"></nova-demo-view>

</br>

`check-change` 节点选中状态发生变化时的回调。

<nova-demo-view link="tree-menu/event-check-change"></nova-demo-view>

</br>

`node-click` 节点被点击时的回调。

<nova-demo-view link="tree-menu/event-node-click"></nova-demo-view>

</br>

`node-collapse` 节点被关闭时触发的事件。

<nova-demo-view link="tree-menu/event-node-collapse"></nova-demo-view>

</br>

`node-expand` 节点被展开时触发的事件。

<nova-demo-view link="tree-menu/event-node-expand"></nova-demo-view>

<br>

`allow-drag`节点能否被拖动回调事件，`allow-drop` 节点能否被拖放回调事件。需配置 `draggable` 同时使用。

<nova-demo-view link="tree-menu/event-allow-draggable"></nova-demo-view>

<br>
