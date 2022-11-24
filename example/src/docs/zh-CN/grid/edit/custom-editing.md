<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 表格

表格属性设置 `edit-config` 开启编辑模式，然后在该属性对象内设置 `activeMethod` 自定义编辑规则。

<nova-demo-view link="grid/aui3-first-menu/custom-editing"></nova-demo-view>

<br>

### 自定义编辑校验规则

表格属性设置 `edit-config` 开启编辑模式，并配置 `edit-rules` 对象来设置校验对象和校验规则，然后在 `editor` 对象中设置 `isValidAlways` 开启编辑实时校验。

<nova-demo-view link="grid/aui3-first-menu/editor-is-salid-always"></nova-demo-view>

<br>
