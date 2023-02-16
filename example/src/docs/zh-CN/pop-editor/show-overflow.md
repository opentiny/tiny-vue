<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-tips-popeditor"/>
</p>

## PopEditor 弹出编辑

<nova-uxlink widget-name="Popeditor"></nova-uxlink>

该组件只能在弹出的面板中选择数据，不能手动输入数据；弹出面板中显示为 Tree 组件或者 Grid 组件。
</div>

### 数据超出隐藏

在数据的列上配置 `showOverflow` 属性用于设置数据超出列宽时的显示和隐藏。值的类型可以为 Boolean 和 String，有三个值可以选择，如下所示。默认为换行显示全部内容。

:::tip 可选值说明
tooltip：内容超出部分显示 ...，左侧/右侧弹出提示层显示全部信息。
title：和原生标签的 title 属性一致。
ellipsis：内容超出部分显示 ...，没有提示。
true：为 true 时，效果和 tooltip 一致。
:::

<nova-demo-view link="popeditor/showOverflow.vue"></nova-demo-view>

<br>
