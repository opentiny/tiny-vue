<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Select 选择器

<nova-uxlink widget-name="Dropdown"></nova-uxlink>

Select 选择器是一种通过点击弹出下拉列表展示数据并进行选择的 UI 组件。

</div>

### 配置方式

通过 `options` 设置下拉选项并且设置 `optimization` 开启大数据虚拟滚动功能。使用标签配置选项时不支持开启虚拟滚动。
多选模式下，最大选中项数 `multiple-limit` 默认值为 20，如果选中项比较多，建议开启 `collapse-tags` 进行折叠显示。

<!-- | 名称               | 类型             | 默认值    | 描述                                                   |
| ------------------ | ---------------- | --------- | ------------------------------------------------------ |
| optimization       | [Boolean,Object] | false     | 设置为 true 使用内置虚滚参数，设置为对象自定义虚滚参数 |
| optimization.gt    | Number           | 100       | 项数大于此值时开启虚拟滚动                             |
| optimization.rSize | Number           | 10        | 每次渲染的项数                                         |
| multiple-limit     | Number           | 20        | 多选模式下最大选中项数                                 |
| optimization.delay | Number           | 10        | 滚动过程防抖延时                                       | -->

<nova-demo-view link="select/optimization"></nova-demo-view>
