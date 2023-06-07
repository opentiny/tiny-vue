<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-container-panel"/>
</p>

## Collapse 折叠面板

<nova-uxlink widget-name="Panel"></nova-uxlink>

内容区可指定动态页面或自定义 html 等，支持展开收起操作。

</div>

### 手风琴效果

配置 `accordion` 属性为 true 后，折叠面板将展示手风琴效果。
配置 `v-model` 设置当前激活的面板(如果是手风琴模式，绑定值类型需要为 string ，否则为 array )
`change` 事件，在当前激活面板改变时触发，参数为当前的 value 值
配置 `name` 属性作为每个 collapse-item 的唯一标志符

<nova-demo-view link="collapse/accordion.vue"></nova-demo-view>

<br />
