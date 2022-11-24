<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Select 选择器

<nova-uxlink widget-name="Dropdown"></nova-uxlink>

Select 选择器是一种通过点击弹出下拉列表展示数据并进行选择的 UI 组件。

</div>

### 可搜索

通过 `filterable` 属性可启用搜索功能。默认情况下，Select 会找出所有 `label` 属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个 `filter-method` 来实现。`filter-method` 为一个 Function，它会在输入值发生变化时调用，参数为当前输入值。

<nova-demo-view link="select/filter-method"></nova-demo-view>

<br>

### 搜索允许复制

搜索单选场景，不能复制输入框的内容，需要添加属性 `allow-copy` 才能复制。属性 `allow-copy` 默认为 `false`。
在鼠标悬浮在输入框上时，按下鼠标左键并移动鼠标，可选中之前输入文本；
在鼠标悬浮在输入框上时，点击鼠标左键，还是原有行为，即输入内容变为 placeholder，内容清空，进入输入状态；

<nova-demo-view link="select/search-allow-copy"></nova-demo-view>
