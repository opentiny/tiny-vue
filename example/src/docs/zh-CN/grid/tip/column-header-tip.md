<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 列头提示

列头提示有2种，一种是 `show-header-tip` 提示（内容是否超出都会提示），另一种是 `show-header-overflow` 内容超出当前行时隐藏并提示。

:::tip
`show-header-overflow` 可选值有：
* `tooltip`：内容超出部分显示 `...`，左侧/右侧弹出提示层显示全部信息，`show-overflow` 开启时的缺省提示
* `title`：和原生标签的 `title` 属性一致
* `ellipsis`：内容超出部分显示 `...`，没有提示
:::

<nova-demo-view link="grid/tip/column-header-tip"></nova-demo-view>

<br>
