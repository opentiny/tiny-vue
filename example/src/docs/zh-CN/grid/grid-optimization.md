<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 优化配置项

:::tip optimization(Object) 配置说明
| animat(Boolean) | 表格动画效果开关（关闭后视觉效果更快）默认为 true |
| delayHover(Number) | 当表格发生拖动、滚动...等行为时，至少多少毫秒之后才允许触发 hover 事件 默认 250ms |
| scrollX(Object) | 横向 X 虚拟滚动配置（用于特殊场景手动调优）例如：{ gt: 100 } |
| scrollY(Object) | 纵向 Y 虚拟滚动配置（用于特殊场景手动调优）例如：{ gt: 500 } |
:::

<br>

<nova-demo-view link="grid/aui3-first-menu/grid-optimization"></nova-demo-view>

<br>
