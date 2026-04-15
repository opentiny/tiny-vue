## loading

### Props

| 属性名      | 类型                           | 默认值        | 说明                                                                                                                                      |
| ----------- | ------------------------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| background  | string                         |               | 遮罩背景色                                                                                                                                |
| body        | boolean                        | false         | 遮罩层是否在body上，同 v-loading 指令中的 body 修饰符                                                                                     |
| customClass | string                         |               | Loading 的自定义类名                                                                                                                      |
| fullscreen  | boolean                        | true          | 属性为 true 显示全屏，同 v-loading 指令中的 fullscreen 修饰符                                                                             |
| lock        | boolean                        | false         | 全屏时是否锁定滚动，同 v-loading 指令中的 lock 修饰符                                                                                     |
| size        | 'medium' \| 'small' \| 'large' | 'small'       | 加载图标尺寸                                                                                                                              |
| spinner     | Component                      |               | 自定义加载图标                                                                                                                            |
| target      | HTMLElement \| string          | document.body | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector 以获取到对应 DOM 节点 |
| text        | string                         |               | 显示在加载图标下方的加载文案                                                                                                              |
