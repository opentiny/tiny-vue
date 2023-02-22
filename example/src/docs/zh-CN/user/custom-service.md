<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-user"/>
</p>

## User 用户

<nova-uxlink widget-name="User"></nova-uxlink>

通过 Select 选择器组件实现对用户的查询，包括 单用户 和 多用户 两种形式。
</div>

### 自定义服务

通过 `service` 属性可自定义用户服务,当用户在文本框中输入准确的账号时,会在下拉菜单中出现此用户。
通过 `sort-by-fetch-data` 联想时下拉框的数据顺序和接口返回的数据顺序一致

<nova-demo-view link="user/custom-service.vue"></nova-demo-view>

<br>
