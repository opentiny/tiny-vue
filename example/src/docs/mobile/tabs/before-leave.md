<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-Tabs"/>
</p>

## Tabs 标签页

<mobile-uxlink widget-name="Tabs"></mobile-uxlink>
</div>

### 离开前事件

`before-leave`切换标签之前的钩子函数，若返回 `false` 或者返回 `Promise` 且被`reject`，则阻止切换，返回 `true` 则可以切换。

<mobile-view link="tabs/before-leave"></mobile-view>

<br>
