<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-container-tab"/>
</p>

## Tabs 标签页

<nova-uxlink widget-name="Tabs"></nova-uxlink>

分隔内容上有关联但属于不同类别的数据集合。
</div>

### 离开前事件

`before-leave` 切换标签之前的钩子函数，若返回 false 或者返回 Promise 且被 reject，则阻止切换，返回 true 则可以切换。

<nova-demo-view link="tabs/before-leave"></nova-demo-view>

<br>
