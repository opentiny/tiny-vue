## dialog-box

### Props

| 属性名                | 类型              | 默认值  | 说明                                                                        |
| --------------------- | ----------------- | ------- | --------------------------------------------------------------------------- |
| append-to-body        | boolean           | false   | DialogBox 本身是否插入到 body 上，嵌套的 Dialog 必须指定该属性并赋值为 true |
| center                | boolean           | false   | 设置为 true 时 弹出框的头部与底部内容会自动居中                             |
| close-on-click-modal  | boolean           | true    | 是否可以通过点击遮罩层关闭弹窗                                              |
| close-on-press-escape | boolean           | true    | 是否可以通过 ESC 键关闭遮罩层                                               |
| destroy-on-close      | boolean           | false   | 关闭时销毁对话框内的元素，而非隐藏                                          |
| drag-outside-window   | boolean           | false   | 可将弹窗拖出窗口                                                            |
| dialog-class          | string            |         | 自定义配置弹窗类名                                                          |
| draggable             | boolean           | false   | 是否开启弹窗的拖拽功能                                                      |
| fullscreen            | boolean           | false   | 弹出框是否全屏                                                              |
| is-form-reset         | boolean           | true    | 关闭弹窗，默认重置表单数据                                                  |
| lock-scroll           | boolean           | true    | Dialog 弹出时是否禁用滚动条                                                 |
| max-height            | number            |         | 实现窗口最大高度                                                            |
| modal                 | boolean           | true    | 是否启用遮罩层                                                              |
| modal-append-to-body  | boolean           | true    | 遮罩层是否应用到 body 上，为 false 时遮罩层会应用到 DialogBox 的父元素上    |
| resize                | boolean           | false   | 弹窗是否能切换全屏                                                          |
| right-slide           | boolean           | false   | 是否开启弹出右侧滑出功能                                                    |
| show-close            | boolean           | true    | 是否显示关闭按钮                                                            |
| show-header           | boolean           | true    | 是否显示弹窗头部 header                                                     |
| title                 | string            |         | 弹出框标题                                                                  |
| top                   | string            | '15vh'  | 设置弹出框距离窗口顶部的高度                                                |
| visible               | boolean           | false   | 控制弹出框显示与关闭                                                        |
| width                 | string            | '500px' | 弹出框的宽度                                                                |
| custom-style          | string            |         | 自定义实现双层抽屉                                                          |
| no-animation          | boolean           | false   | 是否开启动画                                                                |
| dialog-transition     | string            |         | 启动弹出动效由小变大                                                        |
| before-close          | (type) => boolean |         | 设置弹窗关闭前的回调函数，如果函数返回 `false`,可以拦截关闭弹窗             |

### Events

| 事件名       | 回调参数                   | 说明                                                                  |
| ------------ | -------------------------- | --------------------------------------------------------------------- |
| before-close | (event, hideFn) => void    | Dialog 关闭弹窗前的事件，通过 event.preventDefault() 可以拦截关闭弹窗 |
| close        | () => {}                   | Dialog 关闭的回调                                                     |
| closed       | () => {}                   | Dialog 关闭动画结束时的回调                                           |
| drag-end     | (arg) => {}                | Dialog 拖拽结束事件;arg包含弹窗的位置等信息                           |
| drag-move    | (arg) => {}                | Dialog 拖拽移动事件;arg包含弹窗的位置等信息                           |
| drag-start   | (arg) => {}                | Dialog 拖拽开始事件;arg包含弹窗的位置等信息                           |
| open         | () => {}                   | Dialog 打开的回调                                                     |
| opened       | () => {}                   | Dialog 打开动画结束时的回调                                           |
| resize       | (ev: IResizeEvent) => void | 弹窗大小变化时的事件，比如切换全屏状态时                              |

### Slots

| 插槽名  | 说明                        |
| ------- | --------------------------- |
| default | Dialog 的内容插槽           |
| footer  | Dialog 按钮操作区的内容插槽 |
| title   | Dialog 标题区的内容插槽     |

## Types

### IResizeEvent

```typescript
interface IResizeEvent {
  // 当前的全屏状态
  fullscreen: boolean
  // 弹窗的元素
  dialog: HTMLElement
}
```
