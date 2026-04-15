## split

### Props

| 属性名                | 类型                       | 默认值     | 说明                                                                                                               |
| --------------------- | -------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------ |
| collapse-left-top     | boolean                    | false      | 简易模式启用左/上展开收起按钮                                                                                      |
| collapse-right-bottom | boolean                    | false      | 简易模式启用右/下展开收起按钮                                                                                      |
|                       |                            |            |                                                                                                                    |
| left-top-min          | number \| string           | 40px       | 左面板 / 上面板最小阈值                                                                                            |
| mode                  | 'horizontal' \| 'vertical' | horizontal | 分割类型，可选值为 horizontal 或 vertical；默认值horizontal                                                        |
| modelValue            | number \| string           | 0.5        | 分割面板的位置                                                                                                     |
| right-bottom-min      | number \| string           | 40px       | 右面板 / 下面板最小阈值                                                                                            |
| three-areas           | boolean                    | false      | 配置3个区块                                                                                                        |
| trigger-simple        | boolean                    | false      | 是否启用简易模式                                                                                                   |
| border                | boolean                    | true       | 是否显示边框                                                                                                       |
| right-bottom-value    | boolean                    | false      | 默认情况下，v-model的值为左/上面板的位置。 当设置right-bottom-value 为true时，指明 v-model的值为 右/下面板的位置。 |

### Events

| 事件名             | 回调参数              | 说明             |
| ------------------ | --------------------- | ---------------- |
| left-top-click     | () => void            | 左箭头收起时触发 |
| moveend            | () => void            | 拖拽结束的事件   |
| movestart          | () => void            | 拖拽开始的事件   |
| moving             | (event: Event)=> void | 拖拽中的事件     |
| right-bottom-click | () => void            | 右箭头收起时触发 |

### Slots

| 插槽名  | 说明       |
| ------- | ---------- |
| bottom  | 下面板插槽 |
| left    | 左面板插槽 |
| right   | 右面板插槽 |
| top     | 上面板插槽 |
| trigger | 拖拽插槽   |
