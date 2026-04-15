## autocomplete

### Props

| 属性名                | 类型                          | 默认值         | 说明                                                                               |
| --------------------- | ----------------------------- | -------------- | ---------------------------------------------------------------------------------- |
| clearable             | boolean                       | false          | 是否可清空                                                                         |
| debounce              | number                        | 300            | 获取输入建议的去抖延时                                                             |
| disabled              | boolean                       |                | 是否禁用                                                                           |
| display-only          | boolean                       | false          | 设置只读                                                                           |
| fetch-suggestions     | IAutocompleteFetchSuggestions |                | 返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback 来返回它    |
| hide-loading          | boolean                       | false          | 是否隐藏远程加载时的加载图标                                                       |
| highlight-first-item  | boolean                       | false          | 是否默认突出显示远程搜索建议中的第一项                                             |
| label                 | string                        |                | 等价于原生 input aria-label 属性                                                   |
| name                  | string                        |                | input 元素的原生属性                                                               |
| placeholder           | string                        |                | 输入框占位文本                                                                     |
| placement             | IAutocompletePlacement        | 'bottom-start' | 菜单弹出位置                                                                       |
| popper-append-to-body | boolean                       | true           | 是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false |
| popper-class          | string                        |                | 下拉列表的类名                                                                     |
| prefix-icon           | Component                     |                | 输入框头部图标                                                                     |
| select-when-unmatched | boolean                       | false          | 在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件                       |
| size                  | 'medium' \| 'small' \| 'mini' |                | 设置组件大小                                                                       |
| suffix-icon           | Component                     |                | 输入框尾部图标                                                                     |
| trigger-on-focus      | boolean                       | true           | 是否在输入框 focus 时显示建议列表                                                  |
| v-model               | string                        |                | 必填值，输入绑定值                                                                 |
| value-key             | string                        | 'value'        | 在输入建议对象中，用于显示和匹配输入的键名                                         |

### Events

| 事件名 | 回调参数                                         | 说明                                                          |
| ------ | ------------------------------------------------ | ------------------------------------------------------------- |
| select | (selection: IAutocompleteSuggestionItem) => void | 点击选中建议项时触发，回调参数为 fetch-suggestions 中传入的项 |

### Slots

| 插槽名  | 说明                                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------- |
| append  | 输入框后置内容                                                                                                            |
| default | 下拉列表项插槽，插槽参数: arg: { slotScope: IAutocompleteSuggestionItem }, 其中 slotScope 是 fetch-suggestions 中传入的项 |
| prefix  | 输入框头部内容                                                                                                            |
| prepend | 输入框前置内容                                                                                                            |
| suffix  | 输入框尾部内容                                                                                                            |

## Types

### IAutocompleteSuggestionItem

```typescript
interface IAutocompleteSuggestionItem {
  [key: string]: string | undefined
  value?: string
}
```

### IAutocompletePlacement

```typescript
type IAutocompletePlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'
```

### IAutocompleteFetchSuggestions

```typescript
type IAutocompleteFetchSuggestions = (
  queryString: string,
  callback: (suggestions: IAutocompleteSuggestionItem[]) => void
) => void
```
