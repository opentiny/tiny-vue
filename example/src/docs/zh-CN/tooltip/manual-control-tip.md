<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-tips-tip"/>
</p>

## ToolTip 文字提示

<nova-uxlink widget-name="Tip"></nova-uxlink>

动态显示提示信息，一般通过鼠标事件进行响应；提供 warning、error、info、success 四种类型显示不同类别的信息。
</div>

### 手动控制

手动控制模式，通过设置 `manual` 属性为 true 后，mouseenter 和 mouseleave 事件将不会生效,然后可以通过设置 `v-model` 动态控制显示和隐藏

<nova-demo-view link="tooltip/manual-control-tip"></nova-demo-view>

<br>
