## tooltip

### Props

| 属性名               | 类型                                                    | 默认值                | 说明                                                                                 |
| -------------------- | ------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------ |
| append-to-body       | boolean                                                 | true                  | 是否将弹出层的元素添加到body上                                                       |
| close-delay          | number                                                  | 300                   | 延迟关闭的时长，单位毫秒                                                             |
| content              | string                                                  |                       | 显示的内容                                                                           |
| content-max-height   | string                                                  | 50vh                  | 内容最大高度，仅当使用content设置内容时生效，使用插槽等其他方式时无效                |
| disabled             | boolean                                                 | false                 | Tooltip 是否禁用                                                                     |
| effect               | 'dark' \| 'light'                                       | 'dark'                | 提示的主题                                                                           |
| enterable            | boolean                                                 | true                  | 鼠标是否可进入到 tooltip 的弹出层中                                                  |
| hide-after           | number                                                  | 0                     | 出现后自动隐藏的时长，单位毫秒，为 0 则不会自动隐藏                                  |
| manual               | boolean                                                 | false                 | 手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效                |
| modelValue / v-model | boolean                                                 | false                 | 配置 manual = true时，控制弹出状态                                                   |
| offset               | number                                                  | 0                     | 弹出层出现位置的偏移量                                                               |
| open-delay           | number                                                  | 0                     | 延迟出现的时长，单位毫秒                                                             |
| placement            | IPopperPlacement                                        | 'bottom'              | Tooltip 的出现位置                                                                   |
| popper-class         | string                                                  |                       | 为 Tooltip 的弹出层添加类名                                                          |
| popper-options       | IPopperOption                                           | { }                   | 弹出层参数                                                                           |
| pre                  | boolean                                                 | false                 | content 文本是否预格式化                                                             |
| renderContent        | (h: Vue.h, content:string)=> VNode                      |                       | 自定义渲染函数,返回需要渲染的节点内容                                                |
| tabindex             | number                                                  |                       | 设置组件的触发源的 tabindex                                                          |
| transition           | string                                                  | 'tiny-fade-in-linear' | 定义渐变动画的类名                                                                   |
| type                 | 'normal' \| 'warning' \| 'error' \| 'info' \| 'success' |                       | 提示的类型， type 的优先级大于 effect                                                |
| v-model              | Boolean                                                 |                       | 状态是否可见                                                                         |
| visible              | 'always' \| 'auto'                                      | 'always'              | 提示的智能出现的模式                                                                 |
| visible-arrow        | boolean                                                 | true                  | 是否显示箭头                                                                         |
| z-index              | String                                                  |                       | 设置 z-index 属性为 relative 时，弹出层样式属性 zIndex 值参考 Reference 及其父级 Dom |

### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| content | 内容插槽 |
| default | 默认插槽 |

## Types

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

### IPopperPlacement

```typescript
type IPopperPlacement =
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
