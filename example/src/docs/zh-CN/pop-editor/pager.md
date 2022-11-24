<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-tips-popeditor"/>
</p>

## PopEditor 弹出编辑

<nova-uxlink widget-name="Popeditor"></nova-uxlink>

常用的操作按钮，提供包括默认按钮、图标按钮、图片按钮、下拉按钮等类型。
</div>

### 分页

`showPager` 属性只有当 `popseletor` 为 `grid` 时才能生效，默认值为 `false` 不启用分页，配置为 `true` 后还需配置 `pagerOp` 属性；并且需要监听 `page-change` 事件改变 `gridOp` 的 `data` 数据源

<nova-demo-view link="popeditor/pager.vue"></nova-demo-view> <br>
