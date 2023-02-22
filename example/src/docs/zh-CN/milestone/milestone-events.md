<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-navigation-steps"/>
</p>

## Milestone

<nova-uxlink widget-name="Steps"></nova-uxlink>

里程碑模式是一个高度定制化的组件，用户可以自定义组件的状态，节点颜色，线条颜色等。支持在节点间插入活动旗子，tip 显示活动信息。

</div>

### 事件

单击里程碑节点时触发 `click` 事件，参数（index:节点索引, node：节点数据信息）。单击里程碑旗帜时触发 `flag-click` 事件，参数（index:节点内旗子的索引, node：节点上旗子的数据信息）。

<nova-demo-view link="milestone/milestone-events"></nova-demo-view>

<br>
