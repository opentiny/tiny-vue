<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 行拖拽

通过设置 `drop-config` 的 `row` 属性控制行拖拽，默认为开启行拖拽，行拖拽事件有 `@row-drop-start`、`row-drop-move`、`row-drop-end`。

<nova-demo-view link="grid/drag/row-drag"></nova-demo-view>

<br>

### 拖拽控制

可以通过设置 `drop-config` 的 `onBeforeMove` 事件控制行拖动，也可以配置`drop-config` 的 `filter` 与自定义样式结合使用来限制拖动

<nova-demo-view link="grid/drag/row-drag-ctrl"></nova-demo-view>

<br>

