<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-usercontact"/>
</p>

## Espace 消息弹框

<nova-uxlink widget-name="Espace"></nova-uxlink>

主要和 UserContact 联系人组件配套使用，快捷打开对应用户的 eSpace 弹窗，eSpace 呼叫，邮件等应用。
</div>

### 基本用法

`data` 属性设置组件数据，数组对象中包含选项有 type、value、icon。其中 type 的可选择值有：im、sip、mailto 。单击图标，将会打开 type 选项值对应的外部应用。

<nova-demo-view link="espace/data.vue"></nova-demo-view>

<br>

<nova-attributes link="espace"></nova-attributes>
