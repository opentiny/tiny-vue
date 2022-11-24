<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 排序

在 `column` 标签上配置 `sortable` 可以排序（未配置的列，在个性化面板中的排序图标会隐藏），并在 `toolbar` 标签上配置 `setting` 开启个性化设置，在个性化面板里进行排序，排序过后会保存在本地的 `localStroage` 里，刷新页面页面上会显示排序过后的数据

<nova-demo-view link="grid/custom/column-sort"></nova-demo-view>

<br>
