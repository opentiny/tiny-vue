<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-select-view"/>
</p>

## SelectView 页面选择器组件

<mobile-uxlink widget-name="SelectView"></mobile-uxlink>
</div>

### 基本用法

<nova-demo-view link="select-view/basic-usage.vue"></nova-demo-view>

### 显示三个字段两行

<nova-demo-view link="select-view/field.vue"></nova-demo-view>

### 多选

<nova-demo-view link="select-view/multiple.vue"></nova-demo-view>

### 必选项

添加 `required-selected-list` 属性开启必选项列表，开启 `multiple` 多选时有效。可通过事件 `search-click` 的第二个返回参数判断是否操作成功，必选项不能取消勾选。

<nova-demo-view link="select-view/multiple-required.vue"></nova-demo-view>

### 文本信息

通过 `@update:text` 事件接收选中项的 `textField` 文本信息，`text-split` 设置文本分隔符，默认值为 `;`。

<nova-demo-view link="select-view/text.vue"></nova-demo-view>

### 无限滚动

配置 `infinite-scroll` 属性开启无限滚动，配置参数 `{ load: () => {}, delay: 200, disabled: false, distance: 0, immediate: true }`，可参考 `InfiniteScroll 无限滚动` 组件文档。

<nova-demo-view link="select-view/infinit-scroll.vue"></nova-demo-view>

<mobile-attributes link="select-view"></mobile-attributes>
