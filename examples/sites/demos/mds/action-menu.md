## action-menu

### Props

| 属性名       | 类型                | 默认值       | 说明                                           |
| ------------ | ------------------- | ------------ | ---------------------------------------------- |
| max-show-num | number              | 2            | 最多显示菜单按钮的个数，其他菜单在下拉弹框显示 |
| mode         | "default" \| "card" | "default"    | 菜单按钮模式                                   |
| more-text    | string              | '更多'       | 下拉按钮文本                                   |
| options      | IItemData[]         | []           | 菜单项列表的数据                               |
| popper-class | string              |              | 下拉弹框的类名，用于自定义样式                 |
| show-icon    | boolean             | true         | 是否显示下拉触发源图标                         |
| spacing      | string \| number    | '5px'        | 菜单按钮之间的间距                             |
| suffix-icon  | Component           |              | 下拉触发源图标                                 |
| text-field   | string              | 'label'      | 菜单按钮文本的键值                             |
| placement    | IPlacement          | 'bottom-end' | 二级下拉面板的显示位置                         |

### Events

| 事件名         | 回调参数                        | 说明                                            |
| -------------- | ------------------------------- | ----------------------------------------------- |
| item-click     | (data:IItemClickParams) => void | 监听菜单项的点击事件                            |
| more-click     | () => void                      | 监听下拉按钮的点击事件。trigger 为 click 时生效 |
| visible-change | (status: boolean) => void       | 监听下拉弹框的显示或隐藏状态变化                |

### Slots

| 插槽名 | 说明         |
| ------ | ------------ |
| item   | 菜单选项插槽 |

## Types

### IItemData

```typescript
interface IItemData {
  label?: string // 菜单项文本
  disabled?: boolean // 是否禁用
  divided?: boolean // 是否显示分割线
  children?: IItemData[] // 菜单项子集
  icon?: Component // 菜单项图标
}
```

### IItemClickParams

```typescript
interface IItemClickParams {
  itemData: IItemData // 菜单项配置
  vm: {
    // 菜单项实例
    selected: boolean
    textField: string
    tipPosition: string
    $el: HTMLElement
  }
}
```

### IPlacement

```typescript
type IPlacement = 'bottom-start' | 'bottom-end'
```
