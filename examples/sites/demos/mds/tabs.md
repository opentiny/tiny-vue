## tabs

### Props

| 属性名               | 类型                                                              | 默认值 | 说明                                                                                                                                                                        |
| -------------------- | ----------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| active-name          | string                                                            |        | 设置初始选中的页签项                                                                                                                                                        |
| before-leave         | (activeName: string, oldActiveName: string) => boolean \| Promise |        | 切换页签项之前的钩子，若返回 false 或返回 Promise 且被 reject，则阻止切换； activeName: 即将切换的页签项名称, oldActiveName: 当前页签项名称                                 |
| drop-config          | string                                                            |        | 启用页签拖拽功能，配置第三方排序插件，对页签项进行重新排序；需注意：不是通过 v-for 渲染的 tab-item，在拖拽排序后，无法在 tab-drag-end 事件中对其顺序进行保存                |
| editable             | boolean                                                           | false  | 是否同时显示添加和删除按钮，与 edit 事件搭配使用                                                                                                                            |
| modelValue / v-model | string                                                            |        | 绑定选中值，选中项的 name                                                                                                                                                   |
| optimized            | boolean                                                           |        | 是否开启优化渲染，默认值为true，表示开启优化渲染，此时只会渲染当前标签项                                                                                                    |
| popper-class         | string                                                            |        | 为"更多"下拉页签框添加类名，可用于自定义下拉选项的样式                                                                                                                      |
| position             | IPosition                                                         | 'top'  | 设置页签栏所在位置; 默认为 top                                                                                                                                              |
| separator            | boolean                                                           | false  | 设置分隔符样式                                                                                                                                                              |
| show-more-tabs       | boolean                                                           | false  | 设置当页签栏超过一定宽度时是否显示"更多"按钮，若为 true，则当鼠标悬停到按钮上时，将出现下拉框展示超出宽度的页签项                                                           |
| size                 | 'small' \| 'large'                                                |        | 设置 tabs 页签尺寸,该属性可选值为 large 或 small                                                                                                                            |
| swipeable            | boolean                                                           | false  | 是否开启滑动内容切换标签页                                                                                                                                                  |
| stretch              | boolean                                                           | false  | 页签项的宽度是否自动撑开                                                                                                                                                    |
| tab-style            | ITabStyle                                                         |        | 页签的类型；默认为空字符串                                                                                                                                                  |
| tooltip-config       | ITooltipProps \| "title"                                          |        | 设置文字超出提示, object 类型的值参考 tooltip 组件的 <a href="tooltip#API">Props</a> 配置，如果想使用默认的 title 属性，可设置为 string 类型，值为 title，【3.8.0版本新增】 |
| v-model              | string                                                            |        | 绑定值，选中选项卡的 name                                                                                                                                                   |
| with-add             | boolean                                                           | false  | 是否显示添加按钮，用来添加页签项                                                                                                                                            |
| with-close           | boolean                                                           | false  | 是否显示页签项的关闭按钮，用来删除页签项                                                                                                                                    |
| before-close         | (name: string)=> boolean \| Promise<boolean>                      |        | 关闭页签前的回调函数，入参为页签名。如果函数返回false 或 拒绝的Promise，则不关闭页签                                                                                        |
| more-show-all        | boolean                                                           | false  | '更多'按钮触发的下拉面板是否展示全部页签项，适用于超大数据量的情况                                                                                                          |
| overflow-title       | boolean                                                           | false  | 页签是否在超过 title-width 省略显示，优先级低于 tooltip-config                                                                                                              |
| panel-max-height     | string                                                            |        | '更多'按钮触发的下拉面板最大高度，超出则显示滚动条，适用于超大数据量的情况                                                                                                  |
| panel-width          | string                                                            |        | '更多'按钮触发的下拉面板的宽度                                                                                                                                              |
| title-width          | string                                                            | 256px  | 当 overflow-title 为 true 时，指定页签标题的最大宽度                                                                                                                        |
| header-only          | boolean                                                           | false  | 当 header-only 为 true 时，页签内容不再渲染                                                                                                                                 |

### Events

| 事件名         | 回调参数                                        | 说明                                                                            |
| -------------- | ----------------------------------------------- | ------------------------------------------------------------------------------- |
| add            | () => void                                      | 点击"添加"按钮后触发，用于编写增加页签项的逻辑                                  |
| click          | (TabItem: Component, event: Event) => void      | 点击页签项时触发，tab 被选中时触发； TabItem: 点中页签项的vueComponent对象信息  |
| close          | (name: string) => void                          | 点击页签项关闭按钮后触发，用于编写删除页签项的逻辑； name: 要删除的页签项name值 |
| edit           | (name: string, type: "add" \| "remove") => void | 点击"添加"或"关闭"按钮触发； name：null或删除的tab名称, type：添加或删除字段    |
| tab-drag-end   | (event: DragEvent) => void                      | 拖动结束后的事件                                                                |
| tab-drag-over  | (event: DragEvent) => void                      | 拖动中的事件                                                                    |
| tab-drag-start | (event: DragEvent) => void                      | 拖动开始时的事件                                                                |

### Slots

| 插槽名   | 说明           |
| -------- | -------------- |
| default  | 默认插槽       |
| moreIcon | 更多按钮插槽   |
| title    | 页签项标题插槽 |

## tab-item

### Props

| 属性名     | 类型    | 默认值 | 说明                                                                                     |
| ---------- | ------- | ------ | ---------------------------------------------------------------------------------------- |
| disabled   | boolean | false  | 设置页签项禁用，设置为 true 则无法点击                                                   |
| lazy       | boolean | false  | 设置本页签项内容是否为懒加载，默认为否                                                   |
| name       | string  |        | 页签项的值                                                                               |
| title      | string  |        | 页签项标题                                                                               |
| with-close | boolean | false  | 页签项是否展示删除按钮，与 Tabs 的 with-close 取或，只要有一个为true，则此项展示删除按钮 |

### Events

| 事件名         | 回调参数   | 说明                              |
| -------------- | ---------- | --------------------------------- |
| tab-nav-update | () => void | 当页签项的 title 值发生变化时触发 |

### Slots

| 插槽名  | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| default | 页签项对应内容部分的默认插槽，用来自定义页签项对应的页面内容 |

## Types

### IPosition

```typescript
type IPosition = 'top' | 'right' | 'bottom' | 'left'
```

### ITabStyle

```typescript
type ITabStyle = 'card' | 'border-card' | 'button-card' | ''
```

### ITooltipProps

```typescript
interface ITooltipProps {
  // 参照tooltip的props进行配置
  effect?: string
  placement?: string
  visible?: string
  [propName: string]: any
}
```
