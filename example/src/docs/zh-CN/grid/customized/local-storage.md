<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 本地存储

在 `toolbar` 标签上配置 `:setting="{storage:'local'}"` 开启个性化并保存到本地 `localSotrage` 里

:::danger  在V3.10.0版本中新增了列顺序存储功能， 在 @remote-setting 事件中暴露的数据由原来仅修改过的列信息变成了所有的列信息
:::

<nova-demo-view link="grid/custom/local-storage"></nova-demo-view>

<br>
