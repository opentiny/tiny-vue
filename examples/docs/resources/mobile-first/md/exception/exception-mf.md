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
 
### 组件级空态
 
通过添加`component-empty`属性展示组件级空态，其中 type 类型有`noperm、 nodata、 weaknet、noresult、 nonews`，
 
:::tip
对应场景：
`noperm` ：无访问权限
`nodata` ：暂无数据
`weaknet` ：网络不给力
`noresult`：无相关搜索结果
`nonews`：暂无最新消息
:::
 
<nova-demo-view link="exception/component-empty.vue"></nova-demo-view>
 
<br />
 
### 自定义二级标题内容
 
通过`sub-message`自定义二级标题
 
<nova-demo-view link="exception/sub-message.vue"></nova-demo-view>
 
<br />
 
### 自定义按钮文本
 
通过`button-text`自定义按钮文本
 
:::warning
页面级空态通过设置 type 值为`pagenoperm`展示按钮
组件级空态通过设置 type 值为`nodata`展示按钮
:::
 
<nova-demo-view link="exception/button-text.vue"></nova-demo-view>
 
<br />