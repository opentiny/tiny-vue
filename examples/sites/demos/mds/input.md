## input

### Props

| 属性名               | 类型                                                           | 默认值 | 说明                                                                                                        |
| -------------------- | -------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------- |
| autocomplete         | string                                                         | 'off'  | 原生 autocomplete 属性                                                                                      |
| autofocus            | boolean                                                        | false  | 原生属性，页面加载时，自动获取焦点                                                                          |
| autosize             | boolean \| { minRows: number, maxRows: number }                | false  | 自适应内容高度，只对 <code>type="textarea"</code> 有效。可传入对象，如，{ minRows: 2, maxRows: 6 }          |
| clearable            | boolean                                                        |        | 是否显示清除按钮，该属性不适用于 <code>type="textarea"</code>                                               |
| cols                 | string \| number                                               |        | 原生属性，设置宽度，在 type ="textarea" 时有效                                                              |
| counter              | boolean                                                        | false  | 是否显示字数统计，只在 type = "text" 或 type = "textarea" 时有效                                            |
| custom-class         | string                                                         |        | 设置自定义样式                                                                                              |
| disabled             | boolean                                                        | false  | 是否禁用                                                                                                    |
| display-only         | boolean                                                        |        | 设置文本只读态                                                                                              |
| display-only-content | string                                                         |        | 设置只读态时的文本内容区，如果没有则会使用 modelValue 的值作为只读文本                                      |
| form                 | string                                                         |        | 原生属性                                                                                                    |
| height               | number                                                         |        | 设置文本域的最小高度                                                                                        |
| hover-expand         | boolean                                                        |        | 设置文本域鼠标悬浮展开/收起，只对 `type=textarea` 有效，最好搭配 autosize 一起使用                          |
| label                | string                                                         |        | 等价于原生 input aria-label 属性                                                                            |
| mask                 | boolean                                                        |        | 启用掩码功能，只在 disabled 和 display-only 状态下生效                                                      |
| max                  | number                                                         |        | 原生属性，设置最大值                                                                                        |
| maxlength            | number                                                         |        | 原生属性，最大输入长度                                                                                      |
| memory-space         | number                                                         | 5      | 设置 addMemory 方法中，最大能保存条目的数量                                                                 |
| min                  | number                                                         |        | 原生属性，设置最小值                                                                                        |
| modelValue / v-model | string \| number                                               |        | 设置文本的绑定值                                                                                            |
| name                 | string                                                         |        | 原生 input name 属性                                                                                        |
| placeholder          | string                                                         |        | 输入框占位文本                                                                                              |
| prefix-icon          | Component                                                      |        | 输入框头部图标                                                                                              |
| readonly             | boolean                                                        | false  | 原生属性，是否只读                                                                                          |
| resize               | 'both' \| 'horizontal' \| 'vertical' \| 'none'                 |        | 控制是否能被用户缩放                                                                                        |
| rows                 | string \| number                                               | 2      | 输入框行数，只对 type="textarea" 有效                                                                       |
| show-password        | boolean                                                        | false  | 是否显示切换密码图标                                                                                        |
| show-word-limit      | boolean                                                        | false  | 是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效                                        |
| show-tooltip         | boolean                                                        | true   | 只读状态下，文本超出是否悬浮提示                                                                            |
| size                 | 'medium' \| 'small' \| 'mini'                                  |        | 输入框尺寸，只在 type 不为 "textarea" 时有效                                                                |
| step                 | number                                                         |        | 原生属性，设置输入字段的合法数字间隔                                                                        |
| suffix-icon          | Component                                                      |        | 输入框尾部图标                                                                                              |
| tabindex             | string                                                         |        | 原生属性，输入框的 tabindex                                                                                 |
| type                 | 'text' \| 'textarea' \| 'password' \| InputHTMLAttributes.type | 'text' | 设置 input 框的 type 属性，默认为 "text",可选值 "text"，"textarea" 和其他 原生 input 的 type 值             |
| v-model              | String / Number                                                |        | 设置文本显示的默认值                                                                                        |
| validate-event       | boolean                                                        | true   | 输入时是否触发表单的校验                                                                                    |
| popup-more           | boolean                                                        |        | 在只读的基础上增加 <code>popup-more</code> 属性，可使文本域超出显示更多按钮，点击更多按钮可以查看详细信息。 |
| input-box-type       | "normal" \| "underline"                                        | normal | 设置边框模式                                                                                                |

### Events

| 事件名 | 回调参数                          | 说明                                        |
| ------ | --------------------------------- | ------------------------------------------- |
| blur   | (event: FocusEvent) => void       | 在 Input 失去焦点时触发                     |
| change | (value: string \| number) => void | 在 Input 值改变时触发                       |
| clear  | () => void                        | 在点击由 clearable 属性生成的清空按钮时触发 |
| focus  | (event: FocusEvent) => void       | 在 Input 获得焦点时触发                     |
| input  | (event: InputEvent) => void       | 输入值时触发事件                            |

### Methods

| 方法名    | 返回值                  | 说明                   |
| --------- | ----------------------- | ---------------------- |
| addMemory | (value: string) => void | 历史输入内容的记忆方法 |
| blur      | () => void              | 使 input 失去焦点      |
| focus     | () => void              | 使 input 获取焦点      |
| select    | () => void              | 选中 input 中的文字    |

### Slots

| 插槽名  | 说明                                  |
| ------- | ------------------------------------- |
| append  | 输入框后置内容，只对 type="text" 有效 |
| prefix  | 输入框头部内容，只对 type="text" 有效 |
| prepend | 输入框前置内容，只对 type="text" 有效 |
| suffix  | 输入框尾部内容，只对 type="text" 有效 |
