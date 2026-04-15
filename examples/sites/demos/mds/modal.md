## modal

### Props

| 属性名               | 类型                                     | 默认值  | 说明                                                                              |
| -------------------- | ---------------------------------------- | ------- | --------------------------------------------------------------------------------- |
| before-close         | Function                                 |         | 可以配置一个拦截弹窗关闭的方法。如果方法返回 false 值，则拦截弹窗关闭；否则不拦截 |
| cancel-btn-props     | Button.props                             | {}      | 自定义取消按钮的 props ，可选值与 Button 组件一致                                 |
| cancel-content       | string                                   | '取消'  | 自定义取消按钮内容                                                                |
| confirm-btn-props    | Button.props                             | {}      | 自定义确认按钮 props，可选值与 Button 组件一致                                    |
| confirm-content      | string                                   | '确认'  | 自定义确认按钮内容                                                                |
| custom-class         | string                                   |         | 组件自定义 class 样式                                                             |
| description          | string                                   |         | 组件详情信息                                                                      |
| duration             | number \| string                         | 3000    | 自动关闭的延时，仅当 type 为 'message' 有效，如果设置为0则窗口不会自动关闭        |
| esc-closable         | boolean                                  | true    | 是否允许按 Esc 键关闭窗口                                                         |
| footer-dragable      | boolean                                  | false   | 控制底部可拖拽                                                                    |
| header-dragable      | boolean                                  | true    | 控制标题可拖拽                                                                    |
| fullscreen           | boolean                                  | false   | 是否最大化显示                                                                    |
| height               | number \| string                         |         | 窗口的高度                                                                        |
| id                   | string                                   |         | 如果不想窗口重复点击，可以设置唯一的 id 防止重复提示，仅当 type 为 'message' 有效 |
| is-form-reset        | boolean                                  | true    | 关闭弹窗时，是否重置表单数据                                                      |
| lock-scroll          | boolean                                  | true    | 是否锁住滚动条，不允许页面滚动                                                    |
| lock-view            | boolean                                  | true    | 是否锁住页面，不允许窗口之外的任何操作                                            |
| mask                 | boolean                                  | true    | 是否显示遮罩层                                                                    |
| mask-closable        | boolean                                  |         | 是否允许点击遮罩层关闭窗口                                                        |
| message              | string \| VNode \| () => string \| VNode |         | 窗口的内容                                                                        |
| message-closable     | boolean                                  | false   | 'message' 类型弹窗是否显示关闭按钮                                                |
| min-height           | number \| string                         |         | 窗口的最小高度                                                                    |
| min-width            | number \| string                         |         | 窗口的最小宽度                                                                    |
| modelValue / v-model | boolean                                  | true    | 是否显示                                                                          |
| options              | string                                   |         | 多选选项，格式为 [{ value: 'value1', name: '选项1' }, ...]                        |
| position             | string                                   |         | 弹出框位置，默认居中显示，设置值为 'bottom-right' 时弹出框显示在右下角            |
| resize               | boolean                                  | false   | 是否允许拖动调整窗口大小                                                          |
| show-close           | boolean                                  | true    | 是否显示关闭按钮，默认值为 true                                                   |
| show-footer          | boolean                                  | false   | 是否显示底部                                                                      |
| show-header          | boolean                                  | true    | 是否显示头部                                                                      |
| status               | IStatus                                  | 'info'  | 消息状态，当 type 为 'alert'、'message'、'confirm' 时有效                         |
| title                | string                                   |         | 窗口的标题                                                                        |
| top                  | number \| string                         | 80      | 消息距离顶部的位置，仅当 type 为 'message' 时有效                                 |
| type                 | 'alert' \| 'confirm' \| 'message'        | 'alert' | 窗口类型                                                                          |
| v-model              | boolean                                  |         | 绑定值                                                                            |
| width                | number \| string                         |         | 窗口的宽度（设置宽度像素或者百分比，浏览器窗口大小改变可居中显示)                 |
| z-index              | number                                   |         | 自定义堆叠顺序（对于某些特殊场景，比如被遮挡时可能会用到）                        |

### Events

| 事件名  | 回调参数                                         | 说明                       |
| ------- | ------------------------------------------------ | -------------------------- |
| cancel  | (params: IModalEventParam, event: Event) => void | 点击取消按钮时会触发该事件 |
| close   | (params: IModalEventParam, event: Event) => void | 点击关闭按钮时会触发该事件 |
| confirm | (params: IModalEventParam, event: Event) => void | 点击确定按钮时会触发该事件 |
| hide    | (params: IModalEventParam) => void               | 在窗口关闭时会触发该事件   |
| show    | (params: IModalEventParam) => void               | 在窗口显示时会触发该事件   |
| zoom    | (params: IModalEventParam, event: Event) => void | 窗口缩放时会触发该事件     |

### Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 默认插槽       |
| footer  | 窗口底部的模板 |

## Types

### IModalEventParam

```typescript
interface IModalEventParam {
  type: 'alert' | 'message' | 'confirm' // 弹窗类型
  $modal: ComponentPublicInstance // Modal组件实例
}
```

### IStatus

```typescript
type IStatus = 'info' | 'success' | 'warning' | 'error' | 'loading'
```
