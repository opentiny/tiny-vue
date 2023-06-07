<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-button"/>
</p>

## ColumnListItem 分区列表项

<nova-uxlink widget-name="ColumnListItem"></nova-uxlink>

分区列表项 Column List Item

</div>

### 基本用法

<nova-demo-view link="column-list-item/basic-usage.vue"></nova-demo-view>

<br />

### 内容区插槽

通过 `#column1、#column2、#column3、#column4` 可以设置内容区插槽，最多支持 4 个内容插槽。

<nova-demo-view link="column-list-item/content-slot.vue"></nova-demo-view>

<br />

### 操作列按钮点击事件

通过 `icon-click` 给按钮加点击事件。

<nova-demo-view link="column-list-item/icon-click-event.vue"></nova-demo-view>

<br />

### 操作列按钮隐藏与禁用

操作列配置项 options 中添加属性 hidden 可以隐藏按钮，可以通过 disabled 属性禁用操作按钮。

<nova-demo-view link="column-list-item/icon-disabled.vue"></nova-demo-view>

<br />

### 图片和操作列插槽

通过 `#image` 可以设置图片插槽，通过 `#operate` 可以设置操作列插槽。

<nova-demo-view link="column-list-item/image-operate-slot.vue"></nova-demo-view>

<br />

### 单选

通过属性`show-radio`设置卡片单选，需同时设置 label，`disabled` 属性可以禁用单选按钮 。

<nova-demo-view link="column-list-item/show-radio.vue"></nova-demo-view>

<br />

### 多选

通过属性`show-checkbox`设置卡片多选，需同时设置 label，`disabled` 属性可以禁用复选按钮 。

<nova-demo-view link="column-list-item/show-checkbox.vue"></nova-demo-view>

<br />

### 设置尺寸

通过 `size` 属性可以设置分区列表项的大小，支持 small 和 medium 两种尺寸。

<nova-demo-view link="column-list-item/size.vue"></nova-demo-view>

<br />

### 自定义内容插槽宽度

通过 `flex-basis` 属性可以设置内容插槽的宽度，flex-basis 类型为数组，最多能传入 4 个值，支持百分比，固定宽度及固有的尺寸关键词，默认为 auto，详情见 flex 的 flex-basis 属性。<br />
通过设置`flex-grow`属性可以设置每一项在 flex 容器中分配剩余空间的相对比例，默认为 1。如果不想自动撑满主容器，可以设为 0，详情见 flex 的 flex-grow 属性。<br />
flex-grow 举例：`:flex-grow="[0, 0]" :flex-grow="[2, 1]" :flex-grow="[2, 1,1,1]"` <br />
flex-basis 举例：`:flex-basis="['200px', '100px','300px']" :flex-basis="['75%', '25%']" :flex-basis="['40%', '20%', '20%', '20%']"`

<nova-demo-view link="column-list-item/custom-width.vue"></nova-demo-view>

<br />
