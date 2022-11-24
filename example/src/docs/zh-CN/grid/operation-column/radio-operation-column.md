<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。

</div>

### 基本用法

表格列属性设置 `type="radio"` 显示单选列。

<nova-demo-view link="grid/aui3-first-menu/default-serial-column"></nova-demo-view>

<br>

### 手动取消单选行

<nova-demo-view link="grid/aui3-first-menu/clearRadioRow"></nova-demo-view>

### 手动选中某一行

`setRadioRow(row)` 用于单选行，设置某一行为选中状态。

<nova-demo-view link="grid/methods/set-radio-row"></nova-demo-view>

### 单选配置项

`radio-config` 配置项,可以配置单选框的默认选中项和禁用配置等特性。

<nova-demo-view link="grid/aui3-first-menu/radio-config"></nova-demo-view>

<br>

### 单选禁用

单选模式，通过 `radio-config` 配置项的属性 `checkMethod` ，传入自定义方法判断哪些数据项被禁用，方法会判断每个数据项，需返回值为 `true` 或者 `false`，代表此数据项启用或者禁用。

<nova-demo-view link="grid/disable-radio"></nova-demo-view>

<br>
