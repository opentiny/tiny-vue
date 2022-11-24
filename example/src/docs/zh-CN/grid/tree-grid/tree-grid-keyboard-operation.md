<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## 树表

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 键盘操作

键盘移动高亮行,设置斑马线属性 stripe 为 false,鼠标悬停高亮行 highlight-hover-row 为 false,高亮当前行 highlight-current-row ,并配置 keyboard-config={isArrow: true} 属性启用方向键功能

<p> | Arrow Up ↑ | 移动到高亮行的上一行</p>
<p> | Arrow Down ↓ | 移动到高亮行的下一行</p>
<p> | Enter | 展开节点，进入子节点</p>
<p> | Backspace | 关闭节点，返回到父节点</p>

<nova-demo-view link="grid/tree-table/tree-grid-keyboard-operation"></nova-demo-view>

<br>
