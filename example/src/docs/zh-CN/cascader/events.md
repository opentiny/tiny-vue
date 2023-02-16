<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Cascader 级联选择器

<nova-uxlink widget-name="Cascader"></nova-uxlink>

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

</div>

### 事件

Cascader 级联选择器的事件有：`change`、`expand-change`、`blur`、`focus`、`visible-change`。

<nova-demo-view link="cascader/events.vue"></nova-demo-view>

<br>

### 节点返回的数据类型

`emitPath` 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值

<nova-demo-view link="cascader/events.vue"></nova-demo-view>

<br>
