<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Select 选择器

<nova-uxlink widget-name="Dropdown"></nova-uxlink>

Select 选择器是一种通过点击弹出下拉列表展示数据并进行选择的 UI 组件。

</div>

### 嵌套单选 Grid

<nova-demo-view link="select/nest-radio-grid"></nova-demo-view>

<br>

### 嵌套单选 Grid，可搜索，可清除

<nova-demo-view link="select/nest-checkbox-grid-clearable"></nova-demo-view>

<br>

### 嵌套多选 Grid

<nova-demo-view link="select/nest-checkbox-grid"></nova-demo-view>

<br>

### 嵌套 Grid 同时开启远程搜索

<nova-demo-view link="select/nest-grid-remote-filter"></nova-demo-view>

<br>

### text-field

通过 `text-field` 属性可以设置下拉框的文本对应的数据源的字段名称。

<nova-demo-view link="select/nest-checkbox-grid"></nova-demo-view>

<br>

### value-field

通过 `value-field` 属性可以下拉框的值所对应数据源的字段名称,下拉框的值用于提交到服务器。

<nova-demo-view link="select/nest-checkbox-grid"></nova-demo-view>

<br>

### 嵌套 Grid 数据项禁用

下拉表格多选模式，通过 `select-config` 配置项的属性 `checkMethod` ，传入自定义方法判断哪些数据项被禁用，方法会判断每个数据项，需返回值为 `true` 或者 `false`，代表此数据项启用或者禁用。下拉表格单选模式，通过 `radio-config` 配置项的属性 `checkMethod` ，传入自定义方法判断哪些数据项被禁用，方法会判断每个数据项，需返回值为 `true` 或者 `false`，代表此数据项启用或者禁用。

<nova-demo-view link="select/disable-grid-select-radio"></nova-demo-view>

<br>

### 嵌套 Grid 开启远程搜索

配置 `render-type` 为 `grid` 嵌套Grid；将 `filterable` 和 `remote` 设置为 `true`，同时传入 `remote-method` 方法，开启远程搜索。

<nova-demo-view link="select/nest-remote-grid"></nova-demo-view>

<br>

### 嵌套 Grid 且数据量大

<nova-demo-view link="select/nest-radio-grid-much-data"></nova-demo-view>

<br>
