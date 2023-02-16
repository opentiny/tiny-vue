<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-menubar"/>
</p>

## NavMenu 导航菜单

<nova-uxlink widget-name="NavMenu"></nova-uxlink>

NavMenu 导航菜单，主要用于定义页面顶部导航的菜单。
</div>

### 显示策略

当一级菜单无法在当前菜单容器里显示完全时，可以通过 `overflow` 属性配置显示策略，共有 `auto`、`retract`、`fixed`、`hidden` 4个选项，默认为 `auto`。

::: tip overflow 选项说明
auto：菜单栏右侧显示 `更多` 菜单，鼠标悬停该菜单时，将显示剩余未展示的菜单。
fixed：菜单栏左侧显示 `三明治折叠/展开` 图标，鼠标悬停该图标时，将显示所有菜单。
retract：菜单栏不显示任何菜单，只显示 `三明治折叠/展开` 图标，鼠标悬停该图标时，将显示所有菜单。
hidden：剩余未展示的菜单隐藏不显示。
:::

<nova-demo-view link="nav-menu/overflow"></nova-demo-view>

<br>
