<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-button"/>
</p>

## Button 按钮

<nova-uxlink widget-name="Button"></nova-uxlink>

常用的操作按钮，提供包括默认按钮、图标按钮、图片按钮、下拉按钮等类型。
</div>

### 图标按钮

指定 `icon` 属性值为需要的 Icon 图标即可展示为图标按钮。

:::tip Icon 图标用法
先从 `@aurora/vue-icon` 中导入需要的 Icon，再在 data 函数中初始化 Icon 组件并赋值给一个属性。最后在模板中通过 `icon` 属性进行引用。<a href="#/webnova/zh-CN/component/icon" target="_blank">点击这里</a>查看更多图标。
通过 `native-type` 设置 button、image 两种按钮的表单类型。该属性仅当属性 type 为 button 或 image 时使用。该属性的可选值为 button / submit / reset。
:::

<nova-demo-view link="button/icon.vue"></nova-demo-view>

<br />
