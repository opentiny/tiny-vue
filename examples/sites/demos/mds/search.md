## search

### Props

| 属性名          | 类型               | 默认值 | 说明                                                                       |
| --------------- | ------------------ | ------ | -------------------------------------------------------------------------- |
| big             | boolean            |        | 大尺寸，配置为true时，搜索框高度将变高。                                   |
| change-bg-color | boolean            |        | 可通过 change-bg-color 属性切换背景色(只针对移动端有效)。                  |
| clearable       | boolean            | false  | 是否显示清空图标按钮                                                       |
| default-value   | string             |        | 设置搜索输入框内的默认搜索值                                               |
| disabled        | boolean            | false  | 设置是否禁用【3.18.0新增】                                                 |
| is-enter-search | boolean            | true   | 是否在按下键盘 Enter 键时触发 search 事件                                  |
| maxlength       | number             |        | input 框的原生属性，限制最大输入字符数【3.14.0新增】                       |
| mini            | boolean            | false  | 是否为迷你模式，配置为 true 时，默认显示为一个带图标的圆形按钮，点击后展开 |
| placeholder     | string             |        | 搜索输入框内的提示占位文本                                                 |
| search-size     | string             |        | 通过 size 属性定义输入框尺寸，可选项有 medium、small、mini，默认为 small   |
| search-types    | ITypeValue[]       | []     | 搜索类型的选项列表                                                         |
| show-button     | string             |        | 可通过 show-button 属性对移动端设置按钮搜索。                              |
| size            | 'medium' \| 'mini' |        | 输入框尺寸                                                                 |
| transparent     | boolean            | false  | 是否为透明模式，此模式一般用在带有背景的场景                               |
| type-value      | ITypeValue         |        | 搜索类型的默认值。默认为搜索类型的第一项【3.11.0新增】                     |
| v-model         | string             |        | 绑定搜索值                                                                 |

### Events

| 事件名   | 回调参数                                   | 说明                                                                            |
| -------- | ------------------------------------------ | ------------------------------------------------------------------------------- |
| change   | (value: ITypeValue, input: string) => void | 输入完成时触发的回调函数； value 为搜索类型，input 为当前输入值                 |
| clear    | () => void                                 | 清空值触发的回调函数                                                            |
| collapse | () => void                                 | mini模式的搜索框收回时触发的回调函数                                            |
| expand   | () => void                                 | mini模式的搜索框展开时触发的回调函数                                            |
| input    | (input: string, value: ITypeValue) => void | 输入实时触发的回调函数； input 为当前输入值，value 为搜索类型【3.9.1新增】      |
| search   | (value: ITypeValue, input: string) => void | 展开模式下，点击搜索按钮时触发的回调函数； value 为搜索类型，input 为当前输入值 |
| select   | (value: ITypeValue) => void                | 切换类型时触发的回调函数； value 为搜索类型                                     |

### Slots

| 插槽名  | 说明               |
| ------- | ------------------ |
| poplist | 搜索的弹出列表插槽 |
| prefix  | 左侧插槽           |
| text    | 默认搜索类型插槽   |

## Types

### ITypeValue

```typescript
interface ITypeValue {
  text: string
  value: number
}
```
