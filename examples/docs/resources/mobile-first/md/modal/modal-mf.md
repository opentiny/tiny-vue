<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-tips-messagebox"/>
</p>
 
## 反馈对话框 Feedback Dialog
 
<nova-uxlink widget-name="Notice"></nova-uxlink>
 
</div>
 
### 基本用法
 
可通过 `Modal.alert` 方法设置弹出框，通过 `Modal.confirm` 方法设置确认弹出框。
 
<nova-demo-view link="modal/base.vue"></nova-demo-view>
 
<br />
 
 
可在 `Modal.alert` 方法里通过添加 `confirmContent` 属性设置确定按钮内容，通过 `cancelContent` 属性设置取消按钮内容。
 
<nova-demo-view link="modal/div-button-content.vue"></nova-demo-view>
 
### 最大化显示
 
可通过 `fullscreen` 属性设置是否最大化显示。
 
<nova-demo-view link="modal/fullscreen.vue"></nova-demo-view>
 
### 按 Esc 键关闭弹出框
 
可通过 `esc-closable` 属性设置是否允许按 Esc 键关闭窗口，默认为 `false`。
 
<nova-demo-view link="modal/esc-closable.vue"></nova-demo-view>
 
### 自动关闭延时
 
可通过 `duration` 属性设置自动关闭的延迟时间，只对 type=message 有效。
 
<nova-demo-view link="modal/duration.vue"></nova-demo-view>
 
### 防止重复提示
 
如果不想窗口重复点击，可以设置唯一的 `id` 防止重复提示，只对 type=message 有效。
 
<nova-demo-view link="modal/id.vue"></nova-demo-view>
 
### 锁住滚动条
 
可通过 `lock-scroll` 属性设置是否锁住滚动条，不允许页面滚动。
 
<nova-demo-view link="modal/lock-scroll.vue"></nova-demo-view>
 
### 锁住页面
 
可通过 `lock-view` 属性设置是否锁住页面，不允许窗口之外的任何操作。
 
<nova-demo-view link="modal/lock-view.vue"></nova-demo-view>
 
### 显示遮罩层
 
可通过 `mask` 属性设置是否显示遮罩层，默认为 `true`。
 
<nova-demo-view link="modal/lock-view.vue"></nova-demo-view>
 
### 点击遮罩层关闭窗口
 
可通过 `mask-closable` 属性设置是否允许点击遮罩层关闭窗口。
 
<nova-demo-view link="modal/mask-closable.vue"></nova-demo-view>
 
### 自定义内容
 
可通过 `message` 属性设置窗口的内容。
 
<nova-demo-view link="modal/message.vue"></nova-demo-view>
 
<br />
 
### 内容支持 JSX
 
可通过 `message` 属性设置窗口的内容为 `JSX`。
 
<nova-demo-view link="modal/message-jsx.vue"></nova-demo-view>
 
### 不显示底部
 
可通过 `showFooter` 属性设置是否显示底部，默认为 `true`。
 
<nova-demo-view link="modal/showFooter.vue"></nova-demo-view>
 
### 不显示头部
 
可通过 `showHeader` 属性设置是否显示头部，默认为 `true`。
 
<nova-demo-view link="modal/showHeader.vue"></nova-demo-view>
 
### 消息状态
 
可通过 `status` 属性设置消息状态，可选值有 `info | success | warning | error | loading | 自定义组件`，`status` 可以是自定义组件。
 
<nova-demo-view link="modal/status.vue"></nova-demo-view>
 
### 标题
 
可通过 `title` 属性设置窗口的标题。
 
<nova-demo-view link="modal/title.vue"></nova-demo-view>
 
### 窗口类型
 
可通过 `type` 属性设置窗口类型，可选值 `alert | confirm | message`。
 
<nova-demo-view link="modal/type.vue"></nova-demo-view>
 
### 绑定值
 
可通过 `v-model` 属性绑定值。
 
<nova-demo-view link="modal/value.vue"></nova-demo-view>
 
### 自定义堆叠顺序
 
可通过 `zIndex` 属性设置自定义堆叠顺序（对于某些特殊场景，比如被遮挡时可能会用到）。
 
<nova-demo-view link="modal/zIndex.vue"></nova-demo-view>
 
### 取消按钮事件
 
点击取消按钮时触发 `cancel` 事件。
 
<nova-demo-view link="modal/cancel-event.vue"></nova-demo-view>
 
<br />
 
### 关闭按钮事件
 
点击关闭按钮时会触发 `close` 事件。
 
<nova-demo-view link="modal/close-event.vue"></nova-demo-view>
 
<br />
 
### 确定按钮事件
 
点击确定按钮时会触发 `confirm` 事件。
 
<nova-demo-view link="modal/confirm-event.vue"></nova-demo-view>
 
<br />
 
### 窗口关闭事件
 
窗口关闭时会触发 `hide` 事件。
 
<nova-demo-view link="modal/hide-event.vue"></nova-demo-view>
 
<br />
 
### 窗口显示事件
 
在窗口显示时会触发 `show` 事件。
 
<nova-demo-view link="modal/show-event.vue"></nova-demo-view>
 
<br />
 
### 窗口缩放事件
 
窗口缩放时会触发 `zoom` 事件。
 
<nova-demo-view link="modal/zoom-event.vue"></nova-demo-view>
 
### 默认插槽
 
可通过 `templete` 设置默认插槽。
 
<nova-demo-view link="modal/value.vue"></nova-demo-view>
 
<br />
 
### 底部插槽
 
可通过 `slot="footer"` 设置底部插槽。
 
<nova-demo-view link="modal/footer-slot.vue"></nova-demo-view>
 
<br />
 
### 嵌套 grid
 
可通过插槽嵌套 grid
 
<nova-demo-view link="modal/grid.vue"></nova-demo-view>
 
### 拦截弹窗关闭
 
通过 `before-close` 属性可以配置一个拦截弹窗关闭的方法。如果方法返回 false 值，则拦截弹窗关闭；否则不拦截
:::tip
可以通过该拦截方法传入的参数获取关闭的操作类型
confirm 弹窗有以下关闭类型：
* confirm：点击确认时关闭
* cancel：点击取消时关闭
* close：点击关闭按钮时关闭
* mask: 点击遮罩时关闭
* esc：通过按钮esc时关闭
 
alert 弹窗比confirm 弹窗少了 `confirm` 类型
message 弹窗只有 `show` 一种关闭类型
:::
 
 
<nova-demo-view link="modal/before-close.vue"></nova-demo-view>
 
<br />
 
