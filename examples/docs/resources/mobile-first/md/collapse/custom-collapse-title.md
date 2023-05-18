<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-container-panel"/>
</p>

## Collapse 折叠面板

<nova-uxlink widget-name="Panel"></nova-uxlink>

内容区可指定动态页面或自定义 html 等，支持展开收起操作。

</div>

### 自定义面板标题

在 `collapse-item` 元素上配置 `title` 属性可以指定每个折叠面板项的标题。但同时也可以通过 `title` 插槽的方式自定义面板标题，比如在标题前增加图标。

<nova-demo-view link="collapse/custom-collapse-title.vue"></nova-demo-view>

<br />

### 自定义面板标题右侧内容

在 `collapse-item` 元素上配置 `title-right` 属性可以指定每个折叠面板项标题的右侧内容。但同时也可以通过 `title-right` 插槽的方式自定义面板标题右侧内容，比如在标题右侧增加图标。

<nova-demo-view link="collapse/custom-collapse-title-right.vue"></nova-demo-view>

<br />
