## select

### Props

| 属性名                | 类型                                         | 默认值                                                                                                                                                                                                                                                               | 说明                                                                                                                               |
| --------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| all-text              | string                                       |                                                                                                                                                                                                                                                                      | 当下拉中显示全部时，自定义全部的显示文本。不指定时，则默认显示"全部"                                                               |
| show-all-text-tag     | boolean                                      | false                                                                                                                                                                                                                                                                | 指定多选模式全选后，在输入框中，是否只显示 all-text 指定的Tag。 默认值为 <code>false</code>，所有选项循环显示在输入框。            |
| allow-copy            | boolean                                      | false                                                                                                                                                                                                                                                                | 是否允许复制输入框的内容，适用单选可搜索场景                                                                                       |
| allow-create          | boolean                                      | false                                                                                                                                                                                                                                                                | 是否允许创建新条目，需配合 filterable 使用。若搜索字段不在选项列表中，可创建为新的选项                                             |
| autocomplete          | string                                       | 'off'                                                                                                                                                                                                                                                                | 输入框的原生 autocomplete 属性                                                                                                     |
| cache-op              | ICacheOp                                     | <pre><br>{<br> key: '',<br> sortBy: 'frequency',<br> sort: 'desc',<br> dataKey: 'value',<br> highlightClass: <br> 'memorize-highlight',<br> highlightNum: Infinity,<br> cacheNum: Infinity,<br> serialize: JSON.stringify<br> deserialize: JSON.parse<br>}<br></pre> | 启用本地缓存已选项的功能配置（根据用户点击选择的次数、最后时间继续存储排序)                                                        |
| clear-no-match-value  | boolean                                      | false                                                                                                                                                                                                                                                                | 是否自动清空无法在 options 中找到匹配项的值                                                                                        |
| clearable             | boolean                                      | false                                                                                                                                                                                                                                                                | 是否启用一键清除的功能                                                                                                             |
| click-expend          | boolean                                      | false                                                                                                                                                                                                                                                                | 点击可展开或收起显示不全的选项。仅用于多选                                                                                         |
| collapse-tags         | boolean                                      | false                                                                                                                                                                                                                                                                | 是否将多个标签折叠显示。仅适用多选                                                                                                 |
| copyable              | boolean                                      | false                                                                                                                                                                                                                                                                | 是否启用一键复制的功能。点击复制按钮一键复制所有标签的文本内容并以逗号分隔，仅适用于多选                                           |
| default-first-option  | boolean                                      | false                                                                                                                                                                                                                                                                | 是否启用按 Enter 键选择第一个匹配项的功能。需配合 filterable 或 remote 使用                                                        |
| disabled              | boolean                                      | false                                                                                                                                                                                                                                                                | 是否禁用                                                                                                                           |
| dropdown-icon         | Component                                    |                                                                                                                                                                                                                                                                      | 自定义下拉图标                                                                                                                     |
| dropdown-style        | String                                       |                                                                                                                                                                                                                                                                      | 自定义下拉选项样式                                                                                                                 |
| filter-method         | (query: string) => void                      |                                                                                                                                                                                                                                                                      | 自定义过滤方法                                                                                                                     |
| filterable            | boolean                                      | false                                                                                                                                                                                                                                                                | 是否可搜索                                                                                                                         |
| grid-op               | IGridOption                                  |                                                                                                                                                                                                                                                                      | 下拉表格时，内置表格的配置，用法同 Grid 组件。需结合 render-type 属性使用                                                          |
| input-box-type        | 'input' \| 'underline'                       | 'input'                                                                                                                                                                                                                                                              | 输入框的显示类型                                                                                                                   |
| is-drop-inherit-width | boolean                                      | false                                                                                                                                                                                                                                                                | 下拉弹框的宽度是否跟输入框保持一致。默认超出输入框宽度时由内容撑开                                                                 |
| loading               | boolean                                      | false                                                                                                                                                                                                                                                                | 是否加载中，适用于远程搜索场景                                                                                                     |
| loading-text          | string                                       | '加载中'                                                                                                                                                                                                                                                             | 远程加载时显示的文本                                                                                                               |
| max-visible-rows      | number                                       | 1                                                                                                                                                                                                                                                                    | 多行默认最大显示行数，超出后选项自动隐藏                                                                                           |
| modelValue / v-model  | string \| number \| Array<string\|number>    |                                                                                                                                                                                                                                                                      | 绑定值                                                                                                                             |
| multiple              | boolean                                      | false                                                                                                                                                                                                                                                                | 是否允许选择多个选项                                                                                                               |
| multiple-limit        | number                                       | 0                                                                                                                                                                                                                                                                    | 多选时最多可选择的个数，默认为 0 不限制                                                                                            |
| name                  | string                                       |                                                                                                                                                                                                                                                                      | 输入框的原生 name 属性                                                                                                             |
| no-data-text          | string                                       | '暂无相关数据'                                                                                                                                                                                                                                                       | 选项列表为空时显示的文本，也可以使用 empty 插槽设置                                                                                |
| no-match-text         | string                                       | '无匹配数据'                                                                                                                                                                                                                                                         | 搜索条件无匹配时显示的文本，也可以使用 empty 插槽设置                                                                              |
| optimization          | boolean                                      | false                                                                                                                                                                                                                                                                | 是否开启大数据虚拟滚动功能。仅配置式（使用 options 属性）时支持                                                                    |
| options               | IOption[]                                    |                                                                                                                                                                                                                                                                      | 选项列表配置，使用后不需要再配置 tiny-option                                                                                       |
| placeholder           | string                                       | '请选择'                                                                                                                                                                                                                                                             | 占位符                                                                                                                             |
| placement             | IPlacement                                   | 'bottom-start'                                                                                                                                                                                                                                                       | 下拉弹框相对于触发源的弹出位置                                                                                                     |
| popper-append-to-body | boolean                                      | true                                                                                                                                                                                                                                                                 | 是否将弹出框的 dom 元素插入至 body 元素                                                                                            |
| popper-class          | string                                       |                                                                                                                                                                                                                                                                      | 自定义下拉框的类名，用于自定义样式                                                                                                 |
| popper-options        | IPopperOption                                | { }                                                                                                                                                                                                                                                                  | 弹出层参数                                                                                                                         |
| remote                | boolean                                      | false                                                                                                                                                                                                                                                                | 是否为远程搜索                                                                                                                     |
| remote-method         | (query:string) => void                       |                                                                                                                                                                                                                                                                      | 远程搜索的方法                                                                                                                     |
| render-type           | 'tree' \| 'grid'                             |                                                                                                                                                                                                                                                                      | 渲染为下拉表格或下拉树，需结合 grid-op / tree-op 使用                                                                              |
| reserve-keyword       | boolean                                      | false                                                                                                                                                                                                                                                                | 多选可搜索时，是否在选中一个选项后仍然保留当前的搜索关键词                                                                         |
| searchable            | boolean                                      | false                                                                                                                                                                                                                                                                | 是否启用下拉面板搜索                                                                                                               |
| show-alloption        | boolean                                      | true                                                                                                                                                                                                                                                                 | 是否展示 “全选” 选项                                                                                                               |
| show-empty-image      | boolean                                      | false                                                                                                                                                                                                                                                                | 是否显示空数据图片                                                                                                                 |
| size                  | 'medium' \| 'small' \| 'mini'                |                                                                                                                                                                                                                                                                      | 输入框尺寸。                                                                                                                       |
| tag-selectable        | boolean                                      | false                                                                                                                                                                                                                                                                | 输入框中的标签是否可通过鼠标选中复制                                                                                               |
| tag-type              | 'success' \| 'info' \| 'warning' \| 'danger' |                                                                                                                                                                                                                                                                      | 标签类型，仅多选适用。使用 aurora 主题时设置该属性为 info                                                                          |
| max-tag-width         | string                                       |                                                                                                                                                                                                                                                                      | 多选时，设置最大标签宽度                                                                                                           |
| text-field            | string                                       | 'label'                                                                                                                                                                                                                                                              | 显示值字段                                                                                                                         |
| text-split            | string                                       | ','                                                                                                                                                                                                                                                                  | 自定义复制文本的分隔符，需结合 copyable 属性使用                                                                                   |
| top-create            | boolean                                      |                                                                                                                                                                                                                                                                      | 是否显示下拉框顶部新增按钮，点击按钮会抛出一个 top-create-click 事件，可以在事件中自定义一些行为                                   |
| tree-op               | ITreeOption                                  |                                                                                                                                                                                                                                                                      | 下拉树时，内置树组件的配置，用法同 Tree 组件。需结合 render-type 属性使用                                                          |
| value-field           | string                                       | 'value'                                                                                                                                                                                                                                                              | 绑定值字段                                                                                                                         |
| value-key             | string                                       | 'value'                                                                                                                                                                                                                                                              | 作为 value 唯一标识的键名，绑定值为对象类型时必填                                                                                  |
| show-proportion       | boolean                                      | false                                                                                                                                                                                                                                                                | 是否展示多选框选中条数和总条数的占比的文字提示                                                                                     |
| show-limit-text       | boolean                                      | false                                                                                                                                                                                                                                                                | 是否展示多选框开启多选限制选择数量时，选中条数和限制总条数的占比的文字提示。 该属性的优先级大于<code>show-proportion</code> 属性。 |
| init-label            | string                                       |                                                                                                                                                                                                                                                                      | 通过 <code>init-label</code> 属性设置远程搜索或者嵌套树懒加载数据未获取到时显示的初始化 <code>label </code>值。                    |
| display-only          | boolean                                      | false                                                                                                                                                                                                                                                                | 设置组件只显示文字。在Form中使用时，会默认继承上级的<code>display-only</code>的值。                                                |
| hover-expand          | boolean                                      | false                                                                                                                                                                                                                                                                | 多选时，鼠标移入触发标签的自动展开                                                                                                 |

### Events

| 事件名           | 回调参数                                                                              | 说明                                                 |
| ---------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| blur             | (event:MouseEvent) => void                                                            | 监听输入框失去焦点事件                               |
| change           | (value:string\|number\|Array<string\|number>, list:Array<IOption\|ITreeNode>) => void | 监听绑定值变更事件                                   |
| clear            | () => void                                                                            | 监听一键清除事件                                     |
| focus            | (event:MouseEvent) => void                                                            | 监听输入框获取焦点事件                               |
| remove-tag       | (tag:string\|number) => void                                                          | 监听多选时移除标签事件                               |
| top-create-click | () => void                                                                            | 监听顶部新增按钮点击事件，同 top-create 属性一起使用 |
| visible-change   | (status:boolean) => void                                                              | 监听下拉弹框的显示隐藏状态                           |

### Methods

| 方法名 | 返回值     | 说明             |
| ------ | ---------- | ---------------- |
| blur   | () => void | 使输入框失去焦点 |
| focus  | () => void | 使输入框获取焦点 |

### Slots

| 插槽名    | 说明                                                        |
| --------- | ----------------------------------------------------------- |
| default   | 选项默认插槽。接收 <code>item</code> 的参数                 |
| empty     | 空数据插槽                                                  |
| footer    | 下拉弹框底部插槽                                            |
| dropdown  | 下拉弹框顶部插槽                                            |
| label     | 多选模式时，标签的自定义插槽。接收 <code>item</code> 的参数 |
| prefix    | 输入框前缀插槽                                              |
| reference | 触发源插槽                                                  |

## option

### Props

| 属性名   | 类型      | 默认值 | 说明             |
| -------- | --------- | ------ | ---------------- |
| disabled | boolean   | false  | 选项是否禁用     |
| icon     | Component |        | 自定义选项的图标 |
| label    | string    |        | 选项的显示文本   |
| required | boolean   | false  | 选项是否必选     |
| value    | string    |        | 选项的值         |

## Types

### IOption

```typescript
interface IOption {
  value?: string | number
  label?: string
  disabled?: boolean
  icon?: Component
  required?: boolean
}
```

### ICacheOp

```typescript
interface ICacheItem {
  frequency: number
  key: string
  time: number
}

interface ICacheOp {
  key: string // 本地缓存的唯一 key 值
  sortBy?: 'frequency' | 'time' // 排序的字段，默认 frequency (频次)
  sort?: 'desc' | 'asc' // 排序方式，默认 desc (降序)
  dataKey?: string // 数据中的唯一标识的 key 名称,默认 value
  highlightClass?: string // 个性化高亮 class 名称，默认：memorize-highlight
  highlightNum?: number // 高亮个性化的条数,默认：Infinity
  cacheNum?: number // 存储个性化的条数,默认：Infinity
  serialize?: () => string // 本地存储序列化方法,默认：JSON.stringify
  deserialize?: () => ICacheItem[] // 本地存储序反列化方法，默认：JSON.parse
}
```

### IGridOption

```typescript
interface IGridOption {
  data: any[] // 表格数据，用法同 Grid
  columns: any[] // 列配置，用法同 Grid
}
```

### ITreeOption

```typescript
interface ITreeNode {
  label: string // 默认树节点的文本字段
  id: number | string // 树节点唯一标识
  children: ITreeNode[] // 子节点
}

interface ITreeOption {
  data: ITreeNode[] // 树数据，用法同 Tree
}
```

### IPlacement

```typescript
type IPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'
```

### IPopperOption

```typescript
interface IPopperOption {
  bubbling: boolean // 是否监听元素所有上级有滚动元素的scroll事件，监听到则更新popper的位置。用于解决某些弹出层位置在页面滚动时，位置不正确的场景，默认false
  followReferenceHide: boolean // 当触发源隐藏时，自动隐藏弹出层，默认true
  removeOnDestroy: boolean // 弹出层消失后，是否移除弹出层的DOM元素，布尔false
  updateHiddenPopperOnScroll: boolean // 滚动过程中是否更新隐藏的弹出层位置
  boundariesElement: 'viewport' | 'body' | HTMLElement // 滚动过程中,弹出层的碰撞边界。 默认值为： 'viewport'
  ignoreBoundaries: boolean // 忽略边界判断，弹出的位置始终是设置的 placement 值
  scrollParent: HTMLElement // 指定滚动的父节点，优化级最高。 默认为null
}
```
