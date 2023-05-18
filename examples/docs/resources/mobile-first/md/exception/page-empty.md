<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-exception"/>
</p>

## Exception 缺省页

<nova-uxlink widget-name="Exception"></nova-uxlink>

</div>

### 页面级空态

通过添加`page-empty`属性展示页面级空态，其中 type 类型有`pagenoperm`、 `pageweaknet`、 `pagenothing`、 `pageservererror`，

:::tip
对应场景：
`pagenoperm` ：无访问权限
`pageweaknet` ：网络异常
`pagenothing` ：你访问的页面不存在
`pageservererror`：服务器异常
:::

<nova-demo-view link="exception/page-empty.vue"></nova-demo-view>

<br />

<nova-attributes link="exception"></nova-attributes>
