<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-checkboxgroup"/>
</p>

## Form 表单

<nova-uxlink widget-name="Form"></nova-uxlink>

由按钮、输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。

</div>

### 表单校验

包括常用的必填、日期、时间、URL、邮件等校验规则。通过 `trigger` 配置触发校验规则的方式，为 `change` 时，当输入框值改变即触发校验，为 `blur` 时则失焦后触发校验。

<nova-demo-view link="form/form-validation.vue"></nova-demo-view>

:::tip 注意

校验时若校验类型为 `date`，则需要使用 `DatePicker` 组件进行日期选择，若使用 `Input` 组件进行日期输入，建议使用自定义校验规则。

:::

### 自定义校验规则

通过 `validator` 选项进行自定义校验，校验方法中 `callback` 必须被调用。通过配置 `validate-on-rule-change` 属性,设置是否在 `rules` 属性改变后立即触发一次验证

<nova-demo-view link="form/custom-validation-rule.vue"></nova-demo-view>

### 校验提示位置

通过 `validate-position` 可自定义错误提示出现的位置，在 `Form` 组件上设置后，子组件`FormItem`会继承父组件设置。单独在 `FormItem` 组件上进行设置优先级高于在 `From`上的设置。

<nova-demo-view link="form/validation-position.vue"></nova-demo-view>

#### 校验提示跟随表单项移动

通过配置 `popperOptions.bubbling` 为 `true` ，可实现表单的校验提示跟随 Form 表单外部的滚动条滚动。

<nova-demo-view link="form/popper-options-bubbling.vue"></nova-demo-view>

### 动态切换 FormItem

:::warning
在表单中通过 `v-if` 切换两个 `FormItem` 控制页面元素时，会存在错误提示错位问题，原因时 Vue 复用了 ToolTip 组件，这时需要将 form-item 上加上 `key` 属性标识
:::

<nova-demo-view link="form/switch-from-item.vue"></nova-demo-view>

### RichText 等无校验的组件添加校验的方法

<nova-demo-view link="form/no-validate-to-add.vue"></nova-demo-view>
