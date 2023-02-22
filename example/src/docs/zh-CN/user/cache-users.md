<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-user"/>
</p>

## User 用户

<nova-uxlink widget-name="User"></nova-uxlink>

通过 Select 选择器组件实现对用户的查询，包括 单用户 和 多用户 两种形式。
</div>

### 缓存用户

通过 `cache` 属性指定用户数据是否缓存，默认为缓存。

<br>

`cache-key` 属性可以自定义缓存的 key 值，默认为 aurora-user 。

<br>

`cache-fields` 属性用于指定缓存哪些用户数据。

<nova-demo-view link="user/cache-users.vue"></nova-demo-view>

<br>
