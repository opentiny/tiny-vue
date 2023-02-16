<style>
.my-autocomplete li{
  line-height: normal;
  padding: 7px;
}
.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete li .addr {
  font-size: 12px;
  color: #a29b91;
}
.my-autocomplete li .highlighted .addr {
  color: #ddd;
}
</style>

<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Autocomplete 自动完成

<nova-uxlink widget-name="Input"></nova-uxlink>

根据输入内容提供对应的输入建议。
</div>

### 自定义列表样式

`popper-class` 属性可指定一个样式类名，可自定义建议列表的样式。

`popper-append-to-body` 属性可设置是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false。

<nova-demo-view link="autocomplete/popper-class"></nova-demo-view>

<br>
