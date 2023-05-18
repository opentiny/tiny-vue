<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-container-panel"/>
</p>
 
## Flowchart 流程图
 
<nova-uxlink widget-name="Panel"></nova-uxlink>
 
</div>
 
### 基本用法
 
该组件可以用来定制流程图，不依赖其它库或组件。默认的实现支持有状态的节点和连线，支持节点和连线以及空白区域的点击事件。
 
### 垂直图形
 
<nova-demo-view link="flowchart/basic-usage.vue"></nova-demo-view>
 
### 水平图形
 
<nova-demo-view link="flowchart/horizon.vue"></nova-demo-view>
 
节点属性：
|名称|类型|描述|值|
|--|--|--|--|
|node.name|string|节点唯一标识|必选|
|node.info|Object|节点属性|必选|
|node.info.row|number|节点所在的行|必选|
|node.info.col|number|节点所在的列|必选|
|node.info.width|number|节点宽度或节点直径|shape 为 circle 时为 40，为 rectangle 时为 160|
|node.info.height|number|节点高度|shape 为 rectangle 时有效为 56|
|node.info.shape|string|节点形状| rectangle 或 circle|
|node.info.status|number|节点状态|无默认值，可以为 config.status 所有 key 值|
|node.info.other|Object|节点扩展|必选|
|node.info.other.main|string|节点主描述|必选|
|node.info.other.auxi|string|节点辅描述|必选|
|node.info.other.error|string|失败节点 Tip 提示|必选|
|node.hidden|boolean|节点是否隐藏|false|
|node.renderOuter|function|节点的定制渲染，覆盖状态边框|undefined|
|node.renderInner|function|节点的定制渲染，不覆盖状态边框|undefined|
 
连线属性：
|名称|类型|描述|值|
|--|--|--|--|
|link.from|string|连线起始节点|起始节点的 name|
|link.to|string|连线结束节点|结束节点的 name|
|link.fromJoint|string|连线在起始节点的出发位置|默认为 bottom，表示起始节点底部中间|
|link.to|string|连线在结束节点的终止位置|默认为 top，表示结束节点顶部中间|
|link.info|Object|连线属性|必选|
|link.info.status|number|连线状态|必选|
|link.info.style|string|连线样式|必选，为 solid 或 dashed|
 
fromJoint、toJoint 连接点配置：
值可以为 bottom、top、left、right，表示从底部中间、顶部中间、左侧中间、右侧中间；
值也可以为变体 bottom-1/2、bottom-2/2，表示从底部左半部分中间、底部右半部分中间；
值也可以为变体 bottom-1/3、bottom-2/3、bottom-3/3 等
 
图形属性：
|名称|类型|描述|值|
|--|--|--|--|
|config.width|number|图形宽度|如果配置宽度够用，就使用此配置宽度，否则使用图形实际需要宽度|
|config.height|number|图形高度|如果配置高度够用，就使用此配置高度，否则使用图形实际需要高度|
|config.gap|number|节点间距|大于 0 数字|
|config.padding|number|图形内边距|大于 0 数字|
|config.prior|string|折线优先方向|vertical 或 horizontal，对于水平图形，应使用 horizontal|
|config.align|string|同行节点水平居中|不配置或 center|
|config.status|Object|状态值和名称映射|必选|
|config.colors|Object|状态值和颜色映射|必选，作为连线和节点边框颜色|
|config.ongoingBackgroundColor|string|进行中节点背景色|必选|
|config.popoverPlacement|string|Tip 提示位置|必选|
<br />