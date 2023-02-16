<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 基本用法

表格列属性设置 `type="selection"` 显示多选列。

<nova-demo-view link="grid/aui3-first-menu/custom-serial-column"></nova-demo-view>

<br>

### 手动取消多选行

<nova-demo-view link="grid/aui3-first-menu/clearSelection"></nova-demo-view>

### 手动选中所有行

`setAllSelection(checked)` 用于多选行，可设置所有行的选中状态。

<nova-demo-view link="grid/methods/set-all-selection"></nova-demo-view>

### 手动选中指定行

`setSelection(rows, checked)` 用于多选行，可设置指定行为选中状态，第一个参数可传入对象或数组，如果是对象则选择单行，如果是数组则选择多行，第二个参数为选中与否。

:::tip
`setSelection` 方法不会触发 `select-change` 事件，只有点击才会触发
:::

<nova-demo-view link="grid/methods/set-selection"></nova-demo-view>

### 手动切换所有行选中状态

`toggleAllSelection()` 方法可直接切换所有行的选中状态。

<nova-demo-view link="grid/methods/toggle-all-selection"></nova-demo-view>

### 手动切换指定行选中状态

`toggleRowSelection(row)` 方法可直接切换某一行的选中状态。

<nova-demo-view link="grid/methods/toggle-row-selection"></nova-demo-view>

<br>

### 多选禁用

多选模式，通过 `select-config` 配置项的属性 `checkMethod` ，传入自定义方法判断哪些数据项被禁用，方法会判断每个数据项，需返回值为 `true` 或者 `false`，代表此数据项启用或者禁用。

<nova-demo-view link="grid/disable-selection"></nova-demo-view>

<br>
