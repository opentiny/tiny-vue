<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 基本用法

虚拟滚动配置步骤：
1、表格属性设置 `height` 固定高度；
2、表格属性设置 `optimization` 开启虚拟滚动。

:::tip optimization(Object) 配置说明
| delayHover(Number) | 当表格发生拖动、滚动...等行为时，至少多少毫秒之后才允许触发 hover 事件 默认 250ms |
| scrollX(Object) | 横向 X 虚拟滚动配置（用于特殊场景手动调优）例如：{ gt: 100 } |
| scrollY(Object) | 纵向 Y 虚拟滚动配置（用于特殊场景手动调优）例如：{ gt: 500 } |
:::

:::tip 开启虚拟滚动注意事项
1、开启虚拟滚动的前提是需要保证每列的宽度一样，可以通过在 `<tiny-grid>` 标签上的 `column-width` 属性配置统一的宽度。
2、开启虚拟滚动将会禁用列宽调整功能，因为列拖拽会改变列宽度，导致虚拟滚动渲染的列数计算有误从而引起表格样式错乱，所以禁止列拖拽。
:::


<nova-demo-view link="grid/aui3-first-menu/virtual-rolling"></nova-demo-view>

<br>

### 树表虚滚
 
<nova-demo-view link="grid/aui3-first-menu/grid-large-tree-data"></nova-demo-view>
 
<br>
