<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-span"/>
</p>
 
## Input 输入框
 
<nova-uxlink widget-name="Input"></nova-uxlink>
 
通过鼠标或键盘输入字符。
 
</div>
 
### 基本用法
 
<nova-demo-view link="input/basic-usage.vue"></nova-demo-view>
 
### 可清空
 
可通过 `clearable` 属性设置输入框显示清空图标按钮。
 
<nova-demo-view link="input/clearable.vue"></nova-demo-view>
 
<br />
 
### 密码显示
 
当 `type` 为 `password` 时，可通过 `show-password` 属性设置输入框显示密码显示/隐藏切换图标按钮。
 
<nova-demo-view link="input/show-password.vue"></nova-demo-view>
 
<br />
 
### type 属性
 
通对应的 type 属性，可以设置为对应的类型。默认为 text，可选值为 text，textarea 和其他 原生 input 的 type 值
 
<nova-demo-view link="input/type.vue"></nova-demo-view>
 
<br />
 
### 尺寸
 
可通过 `size` 属性设置尺寸大小，可选值：`medium / small / mini`。注意：只在 `type!="textarea"` 时有效。
 
<nova-demo-view link="input/size.vue"></nova-demo-view>
 
<br />
 
### 前置内容
 
配置 `prepend` slot，设置输入框前置内容，注意：只对 `type="text"` 有效。
 
<nova-demo-view link="input/slot-prepend.vue"></nova-demo-view>
 
<br />
 
### 后置内容
 
配置 `append` slot，设置输入框后置内容，注意：只对 `type="text"` 有效。
 
<nova-demo-view link="input/slot-append.vue"></nova-demo-view>
 
<br />
 
### 头部内容
 
配置 `prefix` slot，设置输入框头部内容，注意：只对 `type="text"` 有效。
 
<nova-demo-view link="input/slot-prefix.vue"></nova-demo-view>
 
<br />
 
### 尾部内容
 
配置 `suffix` slot，设置输入框尾部内容，注意：只对 `type="text"` 有效。
 
<nova-demo-view link="input/slot-suffix.vue"></nova-demo-view>
 
<br />
 
### 输入时触发表单校验
 
可通过 `validate-event` 属性设置输入时触发表单校验。通过 `trigger` 配置触发校验规则的方式，为 `change` 时，当输入框值改变即触发校验，为 `blur` 时则失焦后触发校验。
 
<nova-demo-view link="input/validate-event.vue"></nova-demo-view>
 
<br />
 
### 失焦事件
 
输入框失去焦点时触发 `blur` 事件。
 
<nova-demo-view link="input/event-blur.vue"></nova-demo-view>
 
<br />
 
### 值改变事件
 
输入框值改变时触发 `change` 事件。
 
<nova-demo-view link="input/event-change.vue"></nova-demo-view>
 
<br />
 
### 清除事件
 
点击输入框清除按钮时触发 `clear` 事件。
 
<nova-demo-view link="input/event-clear.vue"></nova-demo-view>
 
<br />
 
### 聚焦事件
 
输入框获取焦点时触发 `focus` 事件。
 
<nova-demo-view link="input/event-focus.vue"></nova-demo-view>
 
<br />