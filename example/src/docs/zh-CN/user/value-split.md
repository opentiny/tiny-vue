<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-user"/>
</p>

## User 用户

<nova-uxlink widget-name="User"></nova-uxlink>

通过 Select 选择器组件实现对用户的查询，包括 单用户 和 多用户 两种形式。
</div>

### 值分隔符

通过 `value-split` 属性可指定多用户下获取到的 value 值中不同用户之间的分隔符，默认为 `,`。
通过 `text-split` 属性可指定多用户模式下输入匹配的文本分隔符，默认为 `,` ，可选值为 `!~%(=+^{/}).!]<->[\,:*#;`。

<nova-demo-view link="user/value-split"></nova-demo-view>

<br>
