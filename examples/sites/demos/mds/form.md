## form

### Props

| 属性名                  | 类型                                           | 默认值  | 说明                                                                                                |
| ----------------------- | ---------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| disabled                | boolean                                        | false   | 是否禁用该表单内的所有表单组件，若设置为 true，则表单内组件上的 disabled 属性不再生效               |
| display-only            | boolean                                        | false   | 是否开启仅展示模式                                                                                  |
| form-item               | Object                                         |         | Form 下的 FormItem 组件,请参看 FormItem 的属性配置 Aurora.Widget.Form.FormItem                      |
| hide-required-asterisk  | boolean                                        | false   | 是否隐藏必填字段的标签旁边的红色星号                                                                |
| inline                  | boolean                                        | false   | 行内布局模式                                                                                        |
| inline-message          | boolean                                        |         | 当 validate-type 设置为 text 时，是否以行内形式展示校验信息(推荐使用 message-type 设置)             |
| label-align             | boolean                                        | false   | 当出现必填星号时，标签文本是否对齐，当 label-position 为 'right' 时有效                             |
| label-position          | 'right' \| 'left' \| 'top'                     | 'right' | 表单中标签的布局位置                                                                                |
| label-suffix            | string                                         |         | 表单中标签后缀                                                                                      |
| label-width             | string                                         | '84px'  | 表单中标签占位宽度                                                                                  |
| message-type            | 'inline' \| 'block' \| 'absolute'              | 'block' | 当 validate-type 设置为 text 时，配置文本类型错误类型，可配置行内或者块级，其他值都为 absolute 定位 |
| model                   | { [prop: string]: any }                        |         | 表单数据对象                                                                                        |
| overflow-title          | boolean                                        | false   | 标签超长是否显示提示                                                                                |
| popper-options          | Popover.IPopperOption                          |         | 校验错误提示配置，透传至 Popover 组件                                                               |
| rules                   | { [prop: string]: IFormRules \| IFormRules[] } |         | 表单验证规则                                                                                        |
| show-message            | boolean                                        | true    | 是否显示校验错误信息                                                                                |
| size                    | 'medium' \| 'small' \| 'mini'                  |         | 表单内组件的尺寸，不设置则为默认尺寸                                                                |
| validate-on-rule-change | boolean \| "deep"                              | true    | 是否在 rules 属性改变后立即触发一次验证（"deep"选项新增于3.21.0）                                   |
| validate-position       | IFormPosition                                  | 'right' | 指定校验提示框显示的位置                                                                            |
| validate-tag            | boolean                                        |         | vue2下面原生html标签支持显示tooltip校验提示信息                                                     |
| validate-type           | 'tip' \| 'text'                                | 'tip'   | 校验类型                                                                                            |

### Events

| 事件名   | 回调参数                                                  | 说明                   |
| -------- | --------------------------------------------------------- | ---------------------- |
| validate | (prop: string, isValid: boolean, message: string) => void | 任一表单项被校验后触发 |

### Methods

| 方法名        | 返回值                             | 说明                                                                                                                                                |
| ------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| clearValidate | (prop: string \| string[]) => void | 移除表单项的校验结果，可传入待移除的表单项的 prop ，或者 prop 组成的数组，如不传则移除整个表单的校验结果                                            |
| resetFields   | () => void                         | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                                                                          |
| validate      | IFormValidateMethod                | 对整个表单进行校验的方法，参数为一个回调函数（该回调函数会在校验结束后被调用，并传入两个参数：1、是否校验成功 2、未通过校验的字段）返回一个 promise |
| validateField | IFormValidateFieldMethod           | 对部分表单字段进行校验的方法, 第一个参数为单个 prop 或者 prop 数组，第二个参数是回调函数，每个表单项检验完后会依次调用该回调                        |

### Slots

| 插槽名  | 说明                     |
| ------- | ------------------------ |
| default | 默认插槽，自定义表单内容 |
| label   | 标签文本插槽             |

## form-item

### Props

| 属性名            | 类型                          | 默认值    | 说明                                                                   |
| ----------------- | ----------------------------- | --------- | ---------------------------------------------------------------------- |
| error             | string                        |           | 表单项错误文本，设置该值会使表单验证状态变为 error                     |
| extra             | string                        |           | 表单项额外提示                                                         |
| inline-message    | boolean                       |           | 是否以行内形式展示校验信息(推荐使用 message-type 设置)                 |
| label             | string                        |           | 标签文本                                                               |
| label-width       | string                        | '80px'    | 表单域标签的的宽度                                                     |
| message-type      | 'inline' \| 'block'           |           | 配置文本类型错误类型，可配置行内或者块级，不配置则为 absolute 定位     |
| prop              | string                        |           | 对应表单域 model 字段，如需使用表单校验，该属性是必填的                |
| required          | boolean                       | false     | 是否必填，如不设置，则会根据校验规则自动生成                           |
| rules             | IFormRules                    |           | 表单项验证规则                                                         |
| show-message      | boolean                       | true      | 是否显示校验错误信息                                                   |
| size              | 'medium' \| 'small' \| 'mini' |           | 用于控制该表单域下组件的尺寸，不设置则为默认尺寸                       |
| validate-debounce | boolean                       | false     | 是否开启校验防抖，在连续输入的情况下，会在最后一次输入结束时才开始校验 |
| validate-icon     | Component                     |           | 校验提示框的图标，类型为组件                                           |
| validate-position | IFormPosition                 | 'top-end' | 指定校验提示框显示的位置                                               |
| validate-type     | 'text' \| 'tip'               | 'tip'     | 校验提示显示类型                                                       |

### Methods

| 方法名        | 返回值     | 说明                                                 |
| ------------- | ---------- | ---------------------------------------------------- |
| clearValidate | () => void | 移除该表单项的校验结果                               |
| resetField    | () => void | 对该表单项进行重置，将其值重置为初始值并移除校验结果 |

### Slots

| 插槽名     | 说明               |
| ---------- | ------------------ |
| default    | 默认插槽           |
| label      | 标签文本的内容     |
| label-line | 标签文本显示的行数 |
| error      | 错误提示内容       |
| prompt     | 强提示插槽         |

## Types

### IFormPosition

```typescript
type IFormPosition =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'left-start'
  | 'left'
  | 'left-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end'
```

### IFormRules

```typescript
// 表单项检验触发时机
type IFormTrigger = 'change' | 'blur'

interface IFormRules {
  required?: boolean // 是否必填
  message?: string // 校验错误的提示
  // 内置的类型校验
  type?: 'date' | 'dateTime' | 'float' | 'array' | 'string' | 'number' | 'url' | 'time' | 'email' | 'object' | 'boolean' | 'enum'
  // 校验触发时机， 默认为 ['change', 'blur'] 两种场景都触发，如果仅在主动调用校验方式时触发，可设置为空数组 []。
  trigger?: IFormTrigger | IFormTrigger[]
  // 同步检验函数，调用回调传递错误信息。
  validator?: (
    rule: IFormInnerRule, // form内部处理后的rule
    value: any, // 表单model对应的值，根据表单项prop获取
    callback: (e: Error) => void
    data: object, // prop和value构造的对象
    options: object // 检验配置，一般不需要用到
  ) => void
  // 异步校验函数，resolve则表示校验成功，reject表示校验失败。
  asyncValidator?: (
    rule: IFormInnerRule,
    value: any,
    callback: (e: Error) => void
    data: object,
    options: object
  ) => Promise<any>
}

interface IFormInnerRule {
  field: string // 表单项prop
  fullField: string // 表单项完整prop（嵌套检验时有用）
  type: string // 内部使用
}
```

### IFormError

```typescript
// 校验错误返回对象
interface IFormError {
  [prop: string]: IFormErrorField[]
}
interface IFormErrorField {
  message: string // 校验错误提示
  field: string // 校验失败的prop
}
```

### IFormValidateMethod

```typescript
function IFormValidateMethod(callback: (isValid: boolean, fields: IFormError) => void): Promise<boolean>
```

### IFormValidateFieldMethod

```typescript
function IFormValidateFieldMethod(prop: string | string[], callback: (msg: string, field: IFormError) => void): void
```
