<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。

</div>

### 基本用法

工具栏配置步骤：
1、表格以插槽方式引入表格工具栏组件 `GridToolbar`，并设置工具栏组件属性 `slot="toolbar"` 。
2、设置工具栏组件属性 `buttons` 进行按钮组相关配置。
3、表格事件设置 `@toolbar-button-click` 获取工具栏 `buttons` 的事件，用户可自定义实现增删改操作的业务逻辑。

:::tip 新增的行需要标记新增状态的样式时需要配置 edit-config 的 markInsert 项为 true
:::

<nova-demo-view link="grid/aui3-first-menu/insert-delete-update"></nova-demo-view>

<br>

### 取消删除

在工具栏中配置 `mark_cancel` 的 code，勾选数据后，单击 `删除/取消删除` 按钮，勾选的数据将标记删除线。再单击 `保存` 按钮请求服务删除标记的数据。已标记删除线的数据勾选后再次单击 `删除/取消删除` 按钮，会取消删除线。

:::warning 需要配置 fetch-data 请求服务时才有标记删除线和取消删除线的效果
:::

<nova-demo-view link="grid/toolbar/cancel-delete"></nova-demo-view>

<br>

### 清空数据

clearData 方法手动清空单元格内容，如果不传参数，则清空整个表格内容。如果传了行则清空指定行内容，如果传了指定字段，则清空该字段内容。具体参考下面示例。

<nova-demo-view link="grid/aui3-first-menu/clearData"></nova-demo-view>

<br>

### 指定行插入数据和删除指定行

通过 `insertAt(records, row)` 方法可以在指定行插入一行或多行数据。`remove(rows)` 方法可以删除指定一行或多行数据，rows 为对象则是一行，数组则是多行数据，为空则删除所有数据。

<nova-demo-view link="grid/toolbar/insert-remove-rows"></nova-demo-view>

<br>
