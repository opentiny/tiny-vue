<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 服务端存储

在 `toolbar` 标签上配置 `:setting="{storage:'remote'}"` 开启个性化并启用远程服务获取个性化数据，并配置 `@remote-setting` 调用 `reloadCustoms` 方法更新个性化数据。

:::warning 注意
如果是根据服务端数据控制显示/隐藏列，调用接口获取到个性化的数据后需手动调用 `reloadCustoms` 方法更新。
:::
:::danger  在V3.10.0版本中新增了列顺序存储功能， 在 @remote-setting 事件中暴露的数据由原来仅修改过的列信息变成了所有的列信息
:::

<nova-demo-view link="grid/custom/server-storage"></nova-demo-view>

:::tip 说明
Grid 个性化设置默认不是服务端存储，如果需要服务端存储，需要每个 Grid 单独实现。
:::

<br>
