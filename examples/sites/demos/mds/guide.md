## guide

### Props

| 属性名                        | 类型       | 默认值   | 说明                                                           |
| ----------------------------- | ---------- | -------- | -------------------------------------------------------------- |
| alignment-axis                | number     | 0        | 设置引导框对齐轴距离                                           |
| arrow                         | boolean    | true     | 是否显示工具提示的箭头                                         |
| cross-axis                    | number     | 0        | 设置引导框横轴距离                                             |
| dom-data                      | IDomData[] |          | 用户引导参数                                                   |
| height                        | number     |          | 设置引导框高度                                                 |
| light-class                   | string     |          | 当元素突出显示时（即，当其步骤处于活动状态时）应用于元素的类名 |
| main-axis                     | number     | 18       | 设置引导框主轴（纵轴）距离                                     |
| modal-overlay-opening-padding | number     | 0        | 在模态叠加层开口周围添加的填充量                               |
| modal-overlay-opening-radius  | number     | 0        | 在模态叠加层开口周围添加的边界半径量                           |
| pop-position                  | IPosition  | 'bottom' | 引导框箭头位置，该属性的可选值可参考 IPosition 类型            |
| show-step                     | boolean    | false    | 是否开启指引                                                   |
| width                         | number     | 510      | 设置引导框宽度                                                 |
| mask                          | boolean    | false    | 是否显示遮罩层                                                 |
| show-close                    | boolean    | true     | 是否显示关闭按钮                                               |

### Slots

| 插槽名 | 说明           |
| ------ | -------------- |
| main   | 设置引导框内容 |

## Types

### IDomData

```typescript
interface IDomData {
  // 指引的标题
  title: string
  // 指引的内容（可以是 html）
  text: string
  // 需要绑定指引的元素类名（只能是类名，若未传入则显示为上下左右居中且无指示箭头）
  domElement: string
  // 添加需要高亮的元素的类名
  hightBox: string[]
  // 要添加到步骤的内容元素的一串类名
  classes: string

  // 展示前的回调函数
  beforeShow: () => void
  // 隐藏前的回调函数
  beforeHide: () => void
  // 显示的回调函数
  show: () => void
  // 隐藏的回调函数
  hide: () => void
  // 关闭的回调函数
  cancel: () => void
  //销毁的回调函数
  destroy: () => void
  // 完成的回调函数
  complete: () => void

  // 需要设置的按钮组
  button: {
    // 按钮名
    text: string
    // 需要执行的步骤，包含 next(下一步)、back(返回)、complete(完成)
    action: 'next' | 'back' | 'complete'
    // 按钮的类名
    classes: string
    // 是否是次要按钮
    secondary: boolean
  }[]
}
```

### IPosition

```typescript
type IPosition =
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
