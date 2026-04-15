## locales

### Props

| 属性名                | 类型     | 默认值                 | 说明                                                                                                |
| --------------------- | -------- | ---------------------- | --------------------------------------------------------------------------------------------------- |
| change-lang           | Function |                        | 切换语言                                                                                            |
| getChangeLocaleUrl    | Function |                        | 自定义更新语言服务接口，未使用框架服务并且未配置 change-lang 时必填                                 |
| getCurrentLocale      | Function |                        | 自定义获取当前语种接口，未使用框架服务时必填                                                        |
| getLocale             | Function |                        | 自定义获取系统语言列表接口，未使用框架服务时必填                                                    |
| local                 | boolean  | 该属性的默认值为 false | 是否本地                                                                                            |
| popper-append-to-body | boolean  | 该属性的默认值为 true  | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件) |
| popper-class          | string   |                        | 为 popper 添加类名(可参考 popover 组件)                                                             |
