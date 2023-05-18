<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-span"/>
</p>

## Input 输入框

<nova-uxlink widget-name="Input"></nova-uxlink>

通过鼠标或键盘输入字符。
</div>

### 禁用

可通过 `disabled` 属性设置禁用输入框。`disabled` 是原生属性。

<nova-demo-view link="input/disabled.vue"></nova-demo-view>

<br />

### 只读

可通过 `readonly` 属性设置输入框只读。`readonly` 是原生属性。

<nova-demo-view link="input/readonly.vue"></nova-demo-view>

<br />

:::warning 配置`readonly`属性后，在 IE 下输入框仍然有光标闪烁问题
配置 `readonly` 属性后，在 IE 下输入框仍然有光标闪烁问题，可在输入框配置`unselectable="on"`解决，但存在如下缺陷，请根据需求慎重修改。
在 IE 浏览器下屏蔽了 input 的 blur 事件，若用到 blur 事件，请用 click 事件来代替。
:::
