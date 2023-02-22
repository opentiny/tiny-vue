<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-business-roles"/>
</p>

## Roles 角色切换

<nova-uxlink widget-name="Roles"></nova-uxlink>

Roles 角色组件，提供当前用户的角色列表，并可以在不同角色间进行切换。
</div>

### 基本用法

> 注意 Roles 组件请求的是 mock 数据，开发时请用真实服务。

通过 `change(userId)` 可以监听切换事件，入参是切换后的用户ID。

<nova-demo-view link="roles/base.vue"></nova-demo-view>

<br>

<nova-attributes link="roles"></nova-attributes>

