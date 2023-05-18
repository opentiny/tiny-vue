<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-button"/>
</p>

## ColumnListItem 分区列表项

<nova-uxlink widget-name="ColumnListItem"></nova-uxlink>

分区列表项 Column List Item

</div>

### 自定义内容插槽宽度

通过 `flex-basis` 属性可以设置内容插槽的宽度，flex-basis 类型为数组，最多能传入 4 个值，支持百分比，固定宽度及固有的尺寸关键词，默认为 auto，详情见 flex 的 flex-basis 属性。<br />
通过设置`flex-grow`属性可以设置每一项在 flex 容器中分配剩余空间的相对比例，默认为 1。如果不想自动撑满主容器，可以设为 0，详情见 flex 的 flex-grow 属性。<br />
flex-grow 举例：`:flex-grow="[0, 0]" :flex-grow="[2, 1]" :flex-grow="[2, 1,1,1]"` <br />
flex-basis 举例：`:flex-basis="['200px', '100px','300px']" :flex-basis="['75%', '25%']" :flex-basis="['40%', '20%', '20%', '20%']"`

<nova-demo-view link="column-list-item/custom-width.vue"></nova-demo-view>

<br />
