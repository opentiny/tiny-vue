<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-tips-dialog"/>
</p>

## DialogBox 对话框

<nova-uxlink widget-name="DialogBox"></nova-uxlink>

模态对话框，在浮层中显示，引导用户进行相关操作。
</div>

### 隐藏关闭按钮

默认弹窗右上角会显示关闭图标，单击可以关闭弹窗。若设置 `show-close` 为 false 后，将隐藏关闭图标，要实现关闭弹窗的功能可以通过底部操作区按钮的 click 事件切换 `visible` 属性的值为 false 。

<nova-demo-view link="dialog-box/hidden-close-buttons"></nova-demo-view>

<br>
