<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-business-anchor" />
</p>

## Anchor 锚点

<nova-uxlink widget-name="Anchor"></nova-uxlink>

用于跳转到页面指定位置

</div>

### 指定容器内滚动

指定容器 `containerId` 后，可以通过阻止a标签的默认事件，实现单页面`hash`路由模式的页面跳转
还可以通过`maskClass`属性设置自定义类名，高亮显示滚动的目标元素；通过`linkClick`监听锚点点击事件

<nova-demo-view link="anchor/set-container"></nova-demo-view>

<br>

<nova-attributes link="anchor"></nova-attributes>
