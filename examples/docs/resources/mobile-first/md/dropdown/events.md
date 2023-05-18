<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-usercontact"/>
</p>

## Dropdown 下拉菜单

<nova-uxlink widget-name="Dropdown"></nova-uxlink>

将动作或菜单折叠到下拉菜单中。

</div>

### 内置事件

内置事件包含：`button-click`、`item-click`、`visible-change` 事件。

### visible-change 事件

下拉框出现/隐藏时触发

<nova-demo-view link="dropdown/events-visible-change.vue"></nova-demo-view>

### item-click 事件

点击菜单项时触发的事件回调
可以通过`itemData`，获取菜单项中设置的`item-data`属性

<nova-demo-view link="dropdown/events-item-click.vue"></nova-demo-view>

### button-click 事件

当下拉触发元素呈现为按钮组，即`split-button`属性为`true`时，点击左侧按钮的事件回调

<nova-demo-view link="dropdown/events-button-click.vue"></nova-demo-view>

<br />

<nova-attributes link="dropdown"></nova-attributes>
