<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-togglemenu"/>
</p>

## ToggleMenu 收缩菜单

<nova-uxlink widget-name="ToggleMenu"></nova-uxlink>

以树形方式显示、适用于版型定制的一种组件，菜单可收缩，收缩后只显示图标，点击图标展示子节点菜单。
</div>

### 点击节点事件

`node-click` 点击节点后触发的事件。

<nova-demo-view link="toggle-menu/node-click"></nova-demo-view>

<br>

### 展开节点事件

`node-expand` 展开节点后触发的事件。

<nova-demo-view link="toggle-menu/node-expand"></nova-demo-view>

<br>

### 收缩节点事件

`node-collapse` 收缩节点后触发的事件。

<nova-demo-view link="toggle-menu/node-collapse"></nova-demo-view>

<br>

### 拖放节点事件

`node-drop` 拖放节点后触发的事件，需要设置 `dragable` 属性为 `true`。

<nova-demo-view link="toggle-menu/node-drop"></nova-demo-view>

<br>

### 拖拽事件

`node-drag-start` 拖拽节点后的事件，`node-drag-enter` 拖拽进入其他节点时触发的事件，`node-drag-over` 在拖拽节点时触发的事件，`node-drag-leave` 拖拽离开某个节点时触发的事件，`node-drag-end` 拖拽结束时触发的事件。

<nova-demo-view link="toggle-menu/drag-events"></nova-demo-view>

<br>
