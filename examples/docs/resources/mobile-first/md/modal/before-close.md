<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-tips-messagebox"/>
</p>

## Modal 模态框

<nova-uxlink widget-name="Modal"></nova-uxlink>

</div>

### 拦截弹窗关闭

通过 `before-close` 属性可以配置一个拦截弹窗关闭的方法。如果方法返回 false 值，则拦截弹窗关闭；否则不拦截
:::tip
可以通过该拦截方法传入的参数获取关闭的操作类型
confirm 弹窗有以下关闭类型：

- confirm：点击确认时关闭
- cancel：点击取消时关闭
- close：点击关闭按钮时关闭
- mask: 点击遮罩时关闭
- esc：通过按钮 esc 时关闭

alert 弹窗比 confirm 弹窗少了 `confirm` 类型
message 弹窗只有 `show` 一种关闭类型
:::

<nova-demo-view link="modal/before-close.vue"></nova-demo-view>

<br />
