<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-cascader-select"/>
</p>

## CascaderSelect 级联选择

</div>

### 基本用法

使用 `v-model` 绑定组件 `当前值`，使用 `options` 绑定组件 `选项列表`，这两个数组长度必须相同。

<nova-demo-view link="cascader-select/basic-usage.vue"></nova-demo-view>

### 循环滚动

设置属性 `cycle-roll` 为 `true` 打开选项循环滚动功能。默认值为 `false`。

<nova-demo-view link="cascader-select/cycle-roll.vue"></nova-demo-view>

### 数组选项禁用

如果组件 `选项列表` 是数组值，可以使用属性 `disabled` 配置一个方法判断选项是否禁用。
此方法的第一个参数是可见选项的当前值，其它参数是组件当前聚焦值，返回 `true` 则禁用选项。

<nova-demo-view link="cascader-select/disabled-array.vue"></nova-demo-view>

### 对象选项禁用

如果组件 `选项列表` 是对象值，使用 `optionMethod` 生成选项时即可指定是否禁用。
`optionMethod` 方法的第一个参数是可见选项的当前值，其它参数是组件当前聚焦值，设置返回值的 `disabled` 为 `true` 则禁用选项。

<nova-demo-view link="cascader-select/disabled.vue"></nova-demo-view>

### 对象选项

组件的 `选项列表` 可以是对象值。此方式更方便生成动态选项值，但是选项值必须为数字值。
此对象需配置选项范围 `range`，和生成方法 `optionMethod`。选项范围也可以指定为生成方法 `rangeMethod`。
`rangeMethod` 的参数是组件当前聚焦值。
`optionMethod` 的第一个参数是可见选项的当前值，其它参数是组件当前聚焦值。

<nova-demo-view link="cascader-select/object-option.vue"></nova-demo-view>

### 文字颜色

<nova-demo-view link="cascader-select/text-color-class.vue"></nova-demo-view>

### 城市级联

<nova-demo-view link="cascader-select/cities.vue"></nova-demo-view>
