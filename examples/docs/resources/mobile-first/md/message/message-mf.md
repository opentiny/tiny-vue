<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-tips-messagebox"/>
</p>
 
## 提示条 Message
 
<nova-uxlink widget-name="Notice"></nova-uxlink>
</div>
 
### 基本用法
 
可通过 `this.$message` 弹出信息提示框。
 
<nova-demo-view link="message/base.vue"></nova-demo-view>
 
### 自动关闭延时
 
可通过 `duration` 属性设置自动关闭的延迟时间，只对 type=message 有效。
 
<nova-demo-view link="message/duration.vue"></nova-demo-view>
 
### 防止重复提示
 
如果不想窗口重复点击，可以设置唯一的 `id` 防止重复提示，只对 type=message 有效。
 
<nova-demo-view link="message/id.vue"></nova-demo-view>
 
### 消息状态
 
可通过 `status` 属性设置消息状态，可选值有 `info | success | warning | error | loading`。
可通过 `isclose` 属性设置关闭事件，可选值有 `ture | false`。
 
<nova-demo-view link="message/status.vue"></nova-demo-view>
 
<br />