## popover

### Props

| 属性名               | 类型                                      | 默认值           | 说明                                                      |
| -------------------- | ----------------------------------------- | ---------------- | --------------------------------------------------------- |
| append-to-body       | boolean                                   | true             | 是否添加到body上                                          |
| arrow-offset         | number                                    | 0                | 弹出层的箭头偏移位置                                      |
| close-delay          | number                                    | 200              | 触发方式为 hover 时的隐藏延迟，单位为毫秒                 |
| content              | string                                    |                  | 弹出层的内容                                              |
| disabled             | boolean                                   | false            | 是否禁用                                                  |
| height               | 'auto' \| number                          | 'auto'           | 弹出层高度                                                |
| offset               | number                                    | 0                | 弹出层的偏移量                                            |
| open-delay           | number                                    | 0                | 触发方式为 hover 时的显示延迟，单位为毫秒                 |
| placement            | IPopperPlacement                          | 'bottom'         | 弹出层出现的位置                                          |
| popper-class         | string                                    |                  | 为弹出层添加类名                                          |
| popper-options       | IPopperOption                             | {}               | 弹出层参数                                                |
| title                | string                                    |                  | 弹出层的标题                                              |
| transform-origin     | Boolean \| String                         | true             | <p>组件的旋转中心点</p>                                   |
| transition           | string                                    | 'fade-in-linear' | 定义渐变动画                                              |
| trigger              | 'click' \| 'focus' \| 'hover' \| 'manual' | 'click'          | 触发方式                                                  |
| v-model              | boolean                                   |                  | 状态是否可见                                              |
| v-model / modelValue | boolean                                   | false            | 状态是否可见，仅在 <code> trigger="manual" </code> 时有效 |
| visible-arrow        | boolean                                   | true             | 是否显示弹出层的箭头                                      |
| width                | 'auto' \| number                          | 'auto'           | 弹出层宽度                                                |

### Events

| 事件名      | 回调参数  | 说明                     |
| ----------- | --------- | ------------------------ |
| after-enter | () =>void | 进入的动画播放完毕后触发 |
| after-leave | () =>void | 离开的动画播放完毕后触发 |
| hide        | () =>void | 隐藏时触发               |
| show        | () =>void | 显示时触发               |

### Slots

| 插槽名    | 说明                               |
| --------- | ---------------------------------- |
| default   | 弹出层元素插槽                     |
| reference | 触发源元素插槽，该插槽是必传插槽。 |

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
