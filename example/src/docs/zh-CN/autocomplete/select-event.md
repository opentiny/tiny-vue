<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Autocomplete 自动完成

<nova-uxlink widget-name="Input"></nova-uxlink>

根据输入内容提供对应的输入建议。
</div>

### 事件

Autocomplete 组件提供 `select` 事件，点击选中建议项时触发，回调参数为选中建议项。
通过 `select-when-unmatched` 设置在输入联想没有匹配值时，按 Enter 键时是否触发 select 事件，默认值为 false。

<nova-demo-view link="autocomplete/select-event"></nova-demo-view>

<br>
