## dropdown

### Props

| 属性名           | 类型                                | 默认值                                                                                                          | 说明                                                                   |
| ---------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| border           | Boolean                             |                                                                                                                 | 是否展示边框。默认为 false。在 split-button 属性为 false 时生效        |
| disabled         | boolean                             | false                                                                                                           | 是否禁用                                                               |
| hide-on-click    | boolean                             | true                                                                                                            | 点击菜单项后是否收起菜单。默认点击后收起                               |
| hide-timeout     | number                              | 150                                                                                                             | 延时多久收起下拉菜单，单位毫秒。注意：仅在 trigger 为 hover 时有效     |
| inherit-width    | boolean                             | false                                                                                                           | 下拉弹框的最小宽度是否继承触发源的宽度，默认不继承                     |
| menu-options     | IMenuOption                         | <pre><br>{<br> options:[],<br> textField:"label",<br> popperClass:"",<br> placement:"bottom-end"<br>}<br></pre> | 配置式且只使用 tiny-dropdown 组件时使用                                |
| round            | Boolean                             |                                                                                                                 | 是否展示圆角。默认为 false。在 border 属性为 true 时生效               |
| show-icon        | boolean                             | true                                                                                                            | 是否显示下拉触发源图标                                                 |
| show-self-icon   | Boolean                             |                                                                                                                 | 更多图标下拉菜单。默认值：false                                        |
| show-timeout     | number                              | 250                                                                                                             | 延时多久展开下拉菜单，单位毫秒。注意：仅在 trigger 为 hover 时有效     |
| single-button    | Boolean                             | false                                                                                                           | 下拉触发元素呈现为按钮组。                                             |
| size             | "medium" \| "small" \| "mini"       |                                                                                                                 | 菜单尺寸。注意：只在 split-button为 true 的情况下生效                  |
| split-button     | boolean                             | false                                                                                                           | 下拉触发元素呈现为按钮                                                 |
| suffix-icon      | Component                           |                                                                                                                 | 下拉触发源图标                                                         |
| tabindex         | number                              | 0                                                                                                               | 初始化触发元素的原生属性 tabindex                                      |
| title            | string                              | '下拉菜单'                                                                                                      | 自定义触发源的文本                                                     |
| trigger          | 'hover' \| 'click' \| 'contextmenu' | 'hover'                                                                                                         | 触发下拉的方式                                                         |
| type             | IButtonType                         |                                                                                                                 | 按钮类型。注意：只在 split-button 为 true 的情况下有效                 |
| v-model:visible  | boolean                             | false                                                                                                           | 手动控制下拉弹框显隐，优先级高于trigger                                |
| visible-arrow    | boolean                             | false                                                                                                           | 下拉弹框是否显示箭头，默认不显示                                       |
| lazy-show-popper | boolean                             | false                                                                                                           | 是否懒加载下拉菜单及内部的项，以优化性能，默认初始全加载菜单及内部项。 |

### Events

| 事件名         | 回调参数                       | 说明                                                 |
| -------------- | ------------------------------ | ---------------------------------------------------- |
| button-click   | () => void                     | 监听左侧按钮点击事件，仅 split-button 为 true 时生效 |
| item-click     | (data:IItemClickParam) => void | 监听点击菜单项事件                                   |
| visible-change | (status:boolean) => void       | 监听下拉框的显示或隐藏状态                           |

### Slots

| 插槽名   | 说明                                                     |
| -------- | -------------------------------------------------------- |
| default  | 自定义触发源文本区域。 注意： 必须是一个元素或者或者组件 |
| dropdown | 自定义下拉列表区域，通常使用 tiny-dropdown-menu 组件     |

## dropdown-menu

### Props

| 属性名       | 类型             | 默认值       | 说明                                   |
| ------------ | ---------------- | ------------ | -------------------------------------- |
| custom-class | String           |              | 设置弹出下拉自定义样式。               |
| max-height   | Number \| String | 400          | 设置下拉最大高度。                     |
| multi-stage  | Boolean          | false        | 设置二级下拉菜单。                     |
| options      | IItemData []     | []           | 通过配置式设置菜单项的属性             |
| placement    | IPlacementType   | 'bottom-end' | 菜单弹出位置                           |
| popper-class | string           |              | 下拉弹框的类名，用于自定义样式         |
| text-field   | string           | 'label'      | 菜单项文本的字段,结合 options 属性使用 |

### Slots

| 插槽名  | 说明                                           |
| ------- | ---------------------------------------------- |
| default | 下拉弹框区域，通常使用 tiny-dropdown-item 组件 |

## dropdown-item

### Props

| 属性名       | 类型               | 默认值  | 说明                                                          |
| ------------ | ------------------ | ------- | ------------------------------------------------------------- |
| disabled     | boolean            | false   | 是否禁用                                                      |
| divided      | boolean            | false   | 是否显示分割线                                                |
| icon         | Component          |         | 内嵌图标                                                      |
| item-data    | IItemData          |         | 菜单项的配置信息                                              |
| label        | string             |         | 菜单项的文本                                                  |
| level        | String             |         | 设置二级下拉菜单标志                                          |
| tip          | string \| Function |         | 提示信息内容，支持字符串或函数。函数接收参数 { itemData, vm } |
| tip-position | string             | 'right' | 提示信息的位置，可选值：top / right / bottom / left           |
| tip-effect   | string             | 'light' | 提示信息的主题，可选值：light（浅色）/ dark（深色）           |

### Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 菜单项文本区域 |

## Types

### IMenuOption

```typescript
interface IMenuOption {
  options: IItemData[]
  textField?: string
  popperClass?: string
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'
}
```

### IItemClickParam

```typescript
interface IItemClickParam {
  itemData: IItemData
  // dropdownItem 组件的实例
  vm: {
    selected: boolean
    textField: string
    tipPosition: string
    $el: HTMLElement
  }
}
```

### IItemData

```typescript
interface IItemData {
  label?: string
  disabled?: boolean
  divided?: boolean
  tip?: string | ((params: { itemData: IItemData; vm: any }) => string)
  tipPosition?: 'top' | 'right' | 'bottom' | 'left'
  tipEffect?: 'light' | 'dark'
  children?: IItemData[]
  icon?: Component
}
```

### IButtonType

```typescript
type IButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
```

### IPlacementType

```typescript
type IPlacementType = 'bottom-start' | 'bottom-end'
```
