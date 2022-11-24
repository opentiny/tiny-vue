<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 内置渲染器

内置渲染器设置当前表格列的显示获取类型。
在 `grid-column` 列配置 `format-text` 对象，配合 `format-config` 可以控制数据格式。

:::tip
`format-text` 的可取值包括：
  * `integer`：显示成整数。
  * `number`：显示成小数。
  * `money`：显示成钱数。
  * rate：显示成百分比的数据。
  * filesize：显示成文件大小的数据。
  * boole：显示成对号或者叉号的图标。
  * date：显示成年月日。
  * dateTime：显示成年月日时分。
  * longDateTime：显示成年月日时分秒。
  * time：显示成时分。
  * longTime：显示成时分秒。
  * yearMonth：显示成年月。
  * enum：通过数据的值，查询出要显示的文本。
  * ellipsis：显示成省略的内容，鼠标移到该单元格上，显示完整内容的提示信息。需要同时配置 format 的 len 属性。
:::

<nova-demo-view link="grid/grid_Example/gridRenderer/inner-renderer"></nova-demo-view>

<br>
