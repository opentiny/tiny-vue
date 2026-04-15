## base-select

### Props

| 属性名                | 类型                                         | 默认值                                                                                                                                                                                                                                                               | 说明                                                                                                                               |
| --------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| all-text              | string                                       |                                                                                                                                                                                                                                                                      | 当下拉中显示全部时，自定义全部的显示文本。不指定时，则默认显示"全部"                                                               |
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
| remote                | boolean                                      | false                                                                                                                                                                                                                                                                | 是否为远程搜索                                                                                                                     |
| remote-method         | (query:string) => void                       |                                                                                                                                                                                                                                                                      | 远程搜索的方法                                                                                                                     |
| reserve-keyword       | boolean                                      | false                                                                                                                                                                                                                                                                | 多选可搜索时，是否在选中一个选项后仍然保留当前的搜索关键词                                                                         |
| searchable            | boolean                                      | false                                                                                                                                                                                                                                                                | 是否启用下拉面板搜索                                                                                                               |
| show-alloption        | boolean                                      | true                                                                                                                                                                                                                                                                 | 是否展示 “全选” 选项                                                                                                               |
| show-empty-image      | boolean                                      | false                                                                                                                                                                                                                                                                | 是否显示空数据图片                                                                                                                 |
| size                  | 'medium' \| 'small' \| 'mini'                |                                                                                                                                                                                                                                                                      | 输入框尺寸。                                                                                                                       |
| tag-selectable        | boolean                                      | false                                                                                                                                                                                                                                                                | 输入框中的标签是否可通过鼠标选中复制                                                                                               |
| tag-type              | 'success' \| 'info' \| 'warning' \| 'danger' |                                                                                                                                                                                                                                                                      | 标签类型，仅多选适用。使用 aurora 主题时设置该属性为 info                                                                          |
| text-field            | string                                       | 'label'                                                                                                                                                                                                                                                              | 显示值字段                                                                                                                         |
| text-split            | string                                       | ','                                                                                                                                                                                                                                                                  | 自定义复制文本的分隔符，需结合 copyable 属性使用                                                                                   |
| top-create            | boolean                                      |                                                                                                                                                                                                                                                                      | 是否显示下拉框顶部新增按钮，点击按钮会抛出一个 top-create-click 事件，可以在事件中自定义一些行为                                   |
| value-field           | string                                       | 'value'                                                                                                                                                                                                                                                              | 绑定值字段                                                                                                                         |
| value-key             | string                                       | 'value'                                                                                                                                                                                                                                                              | 作为 value 唯一标识的键名，绑定值为对象类型时必填                                                                                  |
| show-proportion       | boolean                                      | false                                                                                                                                                                                                                                                                | 是否展示多选框选中条数和总条数的占比的文字提示                                                                                     |
| show-limit-text       | boolean                                      | false                                                                                                                                                                                                                                                                | 是否展示多选框开启多选限制选择数量时，选中条数和限制总条数的占比的文字提示。 该属性的优先级大于<code>show-proportion</code> 属性。 |

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

| 插槽名    | 说明             |
| --------- | ---------------- |
| default   | 选项默认插槽     |
| empty     | 空数据插槽       |
| footer    | 下拉弹框底部插槽 |
| prefix    | 输入框前缀插槽   |
| reference | 触发源插槽       |
| panel     | 下拉面板插槽     |

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
