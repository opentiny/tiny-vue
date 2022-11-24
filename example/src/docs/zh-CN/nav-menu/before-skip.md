<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-menubar"/>
</p>

## NavMenu 导航菜单

<nova-uxlink widget-name="NavMenu"></nova-uxlink>

NavMenu 导航菜单，主要用于定义页面顶部导航的菜单。
</div>

### 菜单跳转处理

提供 `before-skip` 钩子函数，用于菜单点击跳转前处理相关逻辑，返回 `false` 将无法跳转。

<nova-demo-view link="nav-menu/before-skip"></nova-demo-view>

<br>

### 使用组件默认服务时，菜单跳转处理

如果使用组件的默认服务 `/workspace/current` 获取菜单数据 `response.data.leftMenuNode.children`，那么在使用 `before-skip` 时，需配置属性 `prevent`，用来阻止默认的跳转行为。属性 `prevent` 默认值为 `false`。

<nova-demo-view link="nav-menu/before-skip-prevent"></nova-demo-view>

<br>
