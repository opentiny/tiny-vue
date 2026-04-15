## ip-address

### Props

| 属性名    | 类型                          | 默认值 | 说明                                           |
| --------- | ----------------------------- | ------ | ---------------------------------------------- |
| delimiter | Component                     |        | 设置 ip 段之间的分隔符，默认图标为 IconDotIpv4 |
| disabled  | boolean                       | false  | 设置文本的禁用属性                             |
| readonly  | boolean                       | false  | 设置文本的只读属性                             |
| size      | 'medium' \| 'small' \| 'mini' |        | 地址输入框大小                                 |
| type      | 'IPv4' \| 'IPv6'              | 'IPv4' | 设置 ip 地址输入框的类型                       |
| v-model   | string                        |        | 设置地址输入框的绑定值                         |

### Events

| 事件名 | 回调参数                               | 说明                     |
| ------ | -------------------------------------- | ------------------------ |
| blur   | (value: string, index: number) => void | 文本框失去焦点时触发事件 |
| change | (value: string) => void                | 文本框内容改变后事件     |
| focus  | (value: string, index: number) => void | 文本框获取焦点时触发事件 |
| input  | (event: InputEvent) => void            | 文本框内容输入时触发事件 |
| select | (value: string, index: number) => void | 文本框内容选中时触发事件 |

### Slots

| 插槽名  | 说明                               |
| ------- | ---------------------------------- |
| default | 默认插槽，自定义 ip 段之间的分隔符 |
