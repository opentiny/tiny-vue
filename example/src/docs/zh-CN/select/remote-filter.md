<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Select 选择器

<nova-uxlink widget-name="Dropdown"></nova-uxlink>

Select 选择器是一种通过点击弹出下拉列表展示数据并进行选择的 UI 组件。

</div>

### 远程搜索

为了启用远程搜索，需要将 `filterable` 和 `remote` 设置为 `true`，同时传入一个 `remote-method`。`remote-method` 为一个 Function，它会在输入值发生变化时调用，参数为当前输入值。`reserve-keyword` 属性在多选且可搜索时，可以在选中一个选项后保留当前的搜索关键词。

<nova-demo-view link="select/remote-method"></nova-demo-view>

<br>

### 获焦时触发远程搜索

<nova-demo-view link="select/focus-remote-method"></nova-demo-view>

<br>

### 远程搜索允许复制

远程搜索单选场景，不能复制输入框的内容，需要添加属性 `allow-copy` 才能复制。属性 `allow-copy` 默认为 `false`。
在鼠标悬浮在输入框上时，按下鼠标左键并移动鼠标，可选中之前输入文本；
在鼠标悬浮在输入框上时，点击鼠标左键，还是原有行为，即输入内容变为 placeholder，内容清空，进入输入状态；

<nova-demo-view link="select/remote-search-allow-copy"></nova-demo-view>
