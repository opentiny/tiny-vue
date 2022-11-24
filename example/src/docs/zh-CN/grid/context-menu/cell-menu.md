<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### Grid-右键菜单-单元格菜单

配置 `context-menu="{body: {options: bodyMenus}，visibleMethod}"` 对象来控制单元格菜单。
`bodyMenus` 里面配置 `visible` 是否显示菜单，`disabled` 是否禁用菜单项。
可配合 `visibleMethod` 方法来控制菜单权限。
`@cell-context-menu` 监控菜单弹出前事件。
`@context-menu-click` 监控菜单点击事件。
具体参考下面示例。

<nova-demo-view link="grid/grid_Example/shortcutMenu/cell-menu"></nova-demo-view>

<br>
