<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### Grid-表格校验-选中时校验

表格默认错误提示显示在 `body` 上， 可以通过设置 `tooltip-config` 的 `appendTobody` 设置为 `false` 来解决页面滚动时tip位置错误的问题。设置 `placement` 属性调整默认显示方向。`tooltip-config` 的配置可参参考 tooltip 组件

<nova-demo-view link="grid/grid_Example/gridValid/tipconfig"></nova-demo-view>

<br>
