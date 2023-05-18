<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-page"/>
</p>
 
## Pager 分页
 
<nova-uxlink widget-name="Pager"></nova-uxlink>
 
当数据量过多时，使用分页分解数据，常用于 Grid 和 Repeater 组件。
</div>
 
### 基本用法
 
<nova-demo-view link="pager/basic-usage.vue"></nova-demo-view>
 
<br />
 
### 当前页
 
通过 `current-page` 设置初始加载页码数, 通过 `total` 设置总条数
 
<nova-demo-view link="pager/current-page.vue"></nova-demo-view>
 
<br />
 
### number 模式
 
通过 `mode="number"` 设置组件渲染模式
 
<nova-demo-view link="pager/pager-mode-number.vue"></nova-demo-view>
 
<br />
 
### fixed 模式
 
通过 `mode="fixed"` 设置组件渲染模式
 
<nova-demo-view link="pager/pager-mode-fixed.vue"></nova-demo-view>
 
<br />
 
### simple 模式
 
通过 `mode="simple"` 设置组件渲染模式
 
<nova-demo-view link="pager/pager-mode-simple.vue"></nova-demo-view>
 
<br />
 
### complete 模式
 
通过 `mode="complete"` 设置组件渲染模式
 
<nova-demo-view link="pager/pager-mode.vue"></nova-demo-view>
 
<br />
 
## Pager 分页
 
<nova-uxlink widget-name="Pager"></nova-uxlink>
 
当数据量过多时，使用分页分解数据，常用于 Grid 和 Repeater 组件。
</div>
 
### 总页数
 
通过 `page-count` 设置总页数
 
<nova-demo-view link="pager/page-count.vue"></nova-demo-view>
 
<br />
 
### 分页事件
 
`size-change` 每页条数改变时触发
 
<nova-demo-view link="pager/pager-events.vue"></nova-demo-view> <br />
 
`current-change` 切换当前页码时触发
 
<nova-demo-view link="pager/pager-events-current-change.vue"></nova-demo-view> <br />
 
`prev-click` 切换至前一页时触发
 
<nova-demo-view link="pager/pager-events-prev-click.vue"></nova-demo-view><br />
 
`next-click` 切换至后一页时触发
 
<nova-demo-view link="pager/pager-events-nextclick.vue"></nova-demo-view><br />
 
`before-page-change` 切换分页前事件
 
<nova-demo-view link="pager/before-page-change.vue"></nova-demo-view>
 
<br />
 
### 分页下拉框显示位置
 
`popper-append-to-body` 分页下拉框元素是否追加到 body 元素节点下，默认值为 `true` 。
 
<nova-demo-view link="pager/page-append-to-body.vue"></nova-demo-view>
 
<br />
 
### 自定义分页布局
 
`layout` 设置分页布局，通过在`layout`里调整`slot`的位置，从而调整插槽内容渲染的位置
 
<nova-demo-view link="pager/custom-layout.vue"></nova-demo-view>
 
<br />
 
### 页码按钮数量
 
`pager-count` 设置页码数量
 
<nova-demo-view link="pager/pager-count.vue"></nova-demo-view>
 
<br />
 
### 每页显示数量
 
`page-sizes` 和 `page-size` 结合使用调整每页显示数量
 
<nova-demo-view link="pager/page-size.vue"></nova-demo-view>
 
<br />
 
### 只有一页时隐藏分页
 
`hide-on-single-page` 只有一页时隐藏分页
 
<nova-demo-view link="pager/hide-on-single-page.vue"></nova-demo-view>
 
<br />
 
### 自定义上下页按钮文本
 
`prev-text` ,`next-text` 自定义上下页按钮文本
 
<nova-demo-view link="pager/custom-next-prev-text.vue"></nova-demo-view>
 
<br />
 
### Grid 表格分页
 
Grid 表格使用分页组件
 
:::warning
该示例中的 `services/getGridMockData` 服务需要自行实现，示例模拟了远程服务返回的数据
:::
 
<nova-demo-view link="pager/pager-in-grid.vue"></nova-demo-view>
 
<br />