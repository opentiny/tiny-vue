<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 分页发生改变事件

只对 在 `grid` 标签上配置 `page-change` 可以监听分页发生改变事件

<nova-demo-view link="grid/event/page-change-event"></nova-demo-view>

<br>
<br>
<br>

### 分页发生改变前的事件

通过在 `grid` 标签上配置 `is-before-page-change` 选择是否打开页面改变时的前置处理特性。在值为 `true` 时，翻页操作或者改变页大小操作不会立即生效，留给用户处理业务逻辑，之后通过调用预留的 `callback` 或者 `rollback` 使之生效或者失效；通过事件 `before-page-change` 在进行翻页操作或者改变页大小操作时触发，然后控制是否跳转分页。

<nova-demo-view link="grid/event/page-before-change-event"></nova-demo-view>

<br>
