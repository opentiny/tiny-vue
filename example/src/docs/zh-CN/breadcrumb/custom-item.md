<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-breadcrumb"/>
</p>

## Breadcrumb 面包屑

<nova-uxlink widget-name="Breadcrumb"></nova-uxlink>

Breadcrumb 面包屑导航，作用是告诉访问者他们目前在网站中的位置以及如何返回。
</div>

### 自定义节点

设置子组件 BreadcrumbItem 的 默认插槽，自定义节点内容。`to` 设置路由跳转的对象，同时设置 `replace` 后将不会向 history 添加新记录。

<nova-demo-view link="breadcrumb/slot-default.vue"></nova-demo-view>

<br>
