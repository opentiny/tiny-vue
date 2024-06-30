export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'form',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用该表单内的所有表单组件，若设置为 true，则表单内组件上的 disabled 属性不再生效',
            'en-US':
              'Whether to disable all components in the form. If this parameter is set to true, the disabled attribute of components in the form does not take effect.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'form-disabled',
          mfDemo: ''
        },
        {
          name: 'display-only',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启仅展示模式',
            'en-US': 'Enable read-only mode through the display only attribute'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'display-only',
          mfDemo: ''
        },
        {
          name: 'form-item',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': 'Form 下的 FormItem 组件,请参看 FormItem 的属性配置 Aurora.Widget.Form.FormItem ',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'hide-required-asterisk',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否隐藏必填字段的标签旁边的红色星号，SMB 主题下默认值为true',
            'en-US':
              'Whether to hide the red asterisk next to the label of mandatory fields, The default value for SMB theme is true'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'smb-required',
          mfDemo: ''
        },
        {
          name: 'inline',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '行内布局模式',
            'en-US': 'In-line layout mode'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'form-in-row',
          mobileDemo: 'hide-required-asterisk',
          mfDemo: ''
        },
        {
          name: 'inline-message',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '当 validate-type 设置为 text 时，是否以行内形式展示校验信息(推荐使用 message-type 设置)',
            'en-US':
              ' Whether to display the verification information inline form when validate-type is set to text,(It is recommended to use message-type setting)'
          },
          mode: ['pc', 'mobile'],
          pcDemo: '',
          mobileDemo: 'validate'
        },
        {
          name: 'label-align',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': "当出现必填星号时，标签文本是否对齐，当 label-position 为 'right' 时有效",
            'en-US': 'When a mandatory asterisk appears, is it aligned with the text'
          },
          mode: ['pc'],
          pcDemo: 'label-align'
        },
        {
          name: 'label-position',
          type: "'right' | 'left' | 'top'",
          defaultValue: "'right'",
          desc: {
            'zh-CN': '表单中标签的布局位置',
            'en-US': 'Layout position of the label in the form'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'label-position',
          mobileDemo: 'label-width',
          mfDemo: ''
        },
        {
          name: 'label-suffix',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '表单中标签后缀',
            'en-US': 'Label suffix in the form'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'form-in-row',
          mobileDemo: 'form-label-suffix',
          mfDemo: ''
        },
        {
          name: 'label-width',
          type: 'string',
          defaultValue: "'80px'",
          desc: {
            'zh-CN': '表单中标签占位宽度',
            'en-US': 'Label placeholder width in the form'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'label-position',
          mobileDemo: 'label-width',
          mfDemo: ''
        },
        {
          name: 'message-type',
          type: "'inline' | 'block'",
          defaultValue: '',
          desc: {
            'zh-CN':
              '当 validate-type 设置为 text 时，配置文本类型错误类型，可配置行内或者块级，不设置则为 absolute 定位',
            'en-US':
              'Configure the text type error type, which can be configured at the inline or block level when validate-type is set to text. The default is absolute positioning'
          },
          mode: ['pc'],
          pcDemo: 'message-type'
        },
        {
          name: 'model',
          type: '{ [prop: string]: any }',
          defaultValue: '',
          desc: {
            'zh-CN': '表单数据对象',
            'en-US': 'Form data object'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'form-validation',
          mobileDemo: '',
          mfDemo: ''
        },
        {
          name: 'overflow-title',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '标签超长是否显示提示',
            'en-US': 'Does the label display a prompt if it is too long'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'overflow-title',
          mfDemo: ''
        },
        {
          name: 'popper-options',
          typeAnchorName: 'popover#IPopperOption',
          type: 'Popover.IPopperOption',
          defaultValue: '',
          desc: {
            'zh-CN': '校验错误提示配置，透传至 Popover 组件',
            'en-US': 'Verify error prompt configuration and transparently transmit it to Popover component'
          },
          mode: ['pc'],
          pcDemo: 'popper-options'
        },
        {
          name: 'rules',
          typeAnchorName: 'IFormRules',
          type: '{ [prop: string]: IFormRules | IFormRules[]  }',
          defaultValue: '',
          desc: {
            'zh-CN': '表单验证规则',
            'en-US': 'Form validation rule'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'form-validation',
          mobileDemo: 'validate',
          mfDemo: ''
        },
        {
          name: 'show-message',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示校验错误信息',
            'en-US': 'Display verification error information.'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'novalid-tip',
          mobileDemo: '',
          mfDemo: ''
        },
        {
          name: 'size',
          type: "'medium' | 'small' | 'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': '表单内组件的尺寸，不设置则为默认尺寸',
            'en-US': 'Controls the size of components in the form'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'validate-on-rule-change',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否在 rules 属性改变后立即触发一次验证',
            'en-US': 'Whether to trigger a verification immediately after the rules attribute is changed'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'custom-validation-rule',
          mobileDemo: '',
          mfDemo: ''
        },
        {
          name: 'validate-position',
          typeAnchorName: 'IFormPosition',
          type: 'IFormPosition',
          defaultValue: "'right'",
          desc: {
            'zh-CN': '指定校验提示框显示的位置',
            'en-US': 'Specify the position where the verification dialog box is displayed'
          },
          mode: ['pc'],
          pcDemo: 'validation-position'
        },
        {
          name: 'validate-tag',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': 'vue2下面原生html标签支持显示tooltip校验提示信息',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'validate-type',
          type: "'tip' | 'text'",
          defaultValue: "'tip'",
          desc: {
            'zh-CN': '校验类型',
            'en-US': 'Verification type'
          },
          mode: ['pc'],
          pcDemo: 'validate-type'
        }
      ],
      events: [
        {
          name: 'validate',
          type: '(prop: string, isValid: boolean, message: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '任一表单项被校验后触发',
            'en-US': 'Triggered after any form item is verified'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'events',
          mobileDemo: '',
          mfDemo: ''
        }
      ],
      methods: [
        {
          name: 'clearValidate',
          type: '(prop: string | string[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '移除表单项的校验结果，可传入待移除的表单项的 prop ，或者 prop 组成的数组，如不传则移除整个表单的校验结果',
            'en-US':
              'The verification result of removing a form item is transferred to the prop attribute of the form item to be removed or an array consisting of prop. If this parameter is not transferred, the verification result of the entire form is removed.'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'form-validate-field',
          mobileDemo: 'validate',
          mfDemo: ''
        },
        {
          name: 'resetFields',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '对整个表单进行重置，将所有字段值重置为初始值并移除校验结果',
            'en-US': 'Reset all field values to the initial values and remove the verification result.'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'form-validation',
          mobileDemo: 'validate',
          mfDemo: ''
        },
        {
          name: 'validate',
          typeAnchorName: 'IFormValidateMethod',
          type: 'IFormValidateMethod',
          defaultValue: '',
          desc: {
            'zh-CN':
              '对整个表单进行校验的方法，参数为一个回调函数（该回调函数会在校验结束后被调用，并传入两个参数：1、是否校验成功 2、未通过校验的字段）返回一个 promise',
            'en-US':
              'Method for verifying the entire form. The parameter is a callback function. The callback function will be invoked after the verification is complete and two parameters are transferred: whether the verification is successful and whether the verification fails. If the callback function is not transferred, a promise is returned.'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'form-validation',
          mobileDemo: 'validate',
          mfDemo: ''
        },
        {
          name: 'validateField',
          typeAnchorName: 'IFormValidateFieldMethod',
          type: 'IFormValidateFieldMethod',
          defaultValue: '',
          desc: {
            'zh-CN':
              '对部分表单字段进行校验的方法, 第一个参数为单个 prop 或者 prop 数组，第二个参数是回调函数，每个表单项检验完后会依次调用该回调',
            'en-US':
              'A method for verifying some form fields. The first parameter is a single prop or a prop array, and the second parameter is a callback function. After each form item is verified, the callback will be called in sequence'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'form-validate-field',
          mobileDemo: '',
          mfDemo: ''
        }
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽，自定义表单内容',
            'en-US': 'Default slot'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'basic-usage',
          mobileDemo: '',
          mfDemo: ''
        },
        {
          name: 'label',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '标签文本插槽',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ]
    },
    {
      name: 'form-item',
      type: 'component',
      props: [
        {
          name: 'error',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '表单项错误文本，设置该值会使表单验证状态变为 error',
            'en-US': 'Form item error text,Setting this value will change the form validation status to error'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'extra',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '表单项额外提示',
            'en-US': 'Form item extra tip'
          },
          mode: ['pc'],
          pcDemo: 'extra-tip'
        },
        {
          name: 'inline-message',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否以行内形式展示校验信息(推荐使用 message-type 设置)',
            'en-US':
              'Whether to display the verification information inline form(It is recommended to use message-type setting) '
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '标签文本',
            'en-US': 'Label text'
          },
          mode: ['pc'],
          pcDemo: 'form-validation'
        },
        {
          name: 'label-width',
          type: 'string',
          defaultValue: "'80px'",
          desc: {
            'zh-CN': '表单域标签的的宽度',
            'en-US': 'Width of the form field label'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'message-type',
          type: "'inline' | 'block'",
          defaultValue: '',
          desc: {
            'zh-CN': '配置文本类型错误类型，可配置行内或者块级，不配置则为 absolute 定位',
            'en-US':
              'Configure the text type error type, which can be configured at the inline or block level. The default is absolute positioning'
          },
          mode: ['pc'],
          pcDemo: 'message-type'
        },
        {
          name: 'prop',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '对应表单域 model 字段，如需使用表单校验，该属性是必填的',
            'en-US':
              'Is it mandatory? If not set, it will be automatically generated according to the verification rules'
          },
          mode: ['pc'],
          pcDemo: 'form-validation'
        },
        {
          name: 'required',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否必填，如不设置，则会根据校验规则自动生成',
            'en-US':
              'Is it mandatory? If not set, it will be automatically generated according to the verification rules'
          },
          mode: ['pc'],
          pcDemo: 'form-validation'
        },
        {
          name: 'rules',
          typeAnchorName: 'IFormRules',
          type: 'IFormRules',
          defaultValue: '',
          desc: {
            'zh-CN': '表单项验证规则',
            'en-US': 'Form validation rule'
          },
          mode: ['pc'],
          pcDemo: 'form-validation'
        },
        {
          name: 'show-message',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示校验错误信息',
            'en-US': 'Whether to display verification error information'
          },
          mode: ['pc'],
          pcDemo: 'novalid-tip'
        },
        {
          name: 'size',
          type: "'medium' | 'small' | 'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': '用于控制该表单域下组件的尺寸，不设置则为默认尺寸',
            'en-US': 'Controls the size of the component in the form field'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'validate-debounce',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启校验防抖，在连续输入的情况下，会在最后一次输入结束时才开始校验',
            'en-US':
              'Enable verification anti shake. In the case of continuous input, verification will only begin at the end of the last input'
          },
          mode: ['pc'],
          pcDemo: 'validate-debounce'
        },
        {
          name: 'validate-icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '校验提示框的图标，类型为组件',
            'en-US': 'Icon for verification prompt box, type is component'
          },
          mode: ['pc'],
          pcDemo: 'form-validation'
        },
        {
          name: 'validate-position',
          typeAnchorName: 'IFormPosition',
          type: 'IFormPosition',
          defaultValue: "'top-end'",
          desc: {
            'zh-CN': '指定校验提示框显示的位置',
            'en-US': 'Specify the position where the verification dialog box is displayed'
          },
          mode: ['pc'],
          pcDemo: 'validation-position'
        },
        {
          name: 'validate-type',
          type: "'text' | 'tip'",
          defaultValue: "'tip'",
          desc: {
            'zh-CN': '校验提示显示类型',
            'en-US': 'Verification prompt display type'
          },
          mode: ['pc'],
          pcDemo: 'validate-type'
        }
      ],
      events: [],
      methods: [
        {
          name: 'clearValidate',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '移除该表单项的校验结果',
            'en-US': 'Remove the verification result of the table item.'
          },
          mode: ['pc'],
          pcDemo: 'form-validation'
        },
        {
          name: 'resetField',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '对该表单项进行重置，将其值重置为初始值并移除校验结果',
            'en-US': 'Reset the table item to the initial value and remove the verification result.'
          },
          mode: ['pc'],
          pcDemo: 'form-validate-field'
        }
      ],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'label',
          defaultValue: '',
          desc: {
            'zh-CN': '标签文本的内容',
            'en-US': 'Label text content'
          },
          mode: ['pc'],
          pcDemo: 'slot-label'
        },
        {
          name: 'error',
          defaultValue: '',
          desc: {
            'zh-CN': '错误提示内容',
            'en-US': 'Error content'
          },
          mode: ['pc'],
          pcDemo: 'error-label'
        },
        {
          name: 'prompt',
          defaultValue: '',
          desc: {
            'zh-CN': '强提示插槽',
            'en-US': 'Prompt slot'
          },
          mode: ['mobile-first'],
          mfDemo: 'prompt-slot'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IFormPosition',
      type: 'type',
      code: `
type IFormPosition = 'top-start' | 'top' | 'top-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end'`
    },
    {
      name: 'IFormRules',
      type: 'interface',
      code: `
// 表单项检验触发时机
type IFormTrigger = 'change' | 'blur'

interface IFormRules {
  required?: boolean // 是否必填
  message?: number // 校验错误的提示
  // 内置的类型校验
  type?: 'date' | 'dateTime' | 'float' | 'array' | 'string' | 'number' | 'url' | 'time' | 'email' | 'object' | 'boolean' | 'enum'
  // 校验触发时机， 默认为 ['change', 'blur'] 两种场景都触发，如果仅在主动调用校验方式时触发，可设置为空数组 []。
  trigger?: IFormTrigger | IFormTrigger[] 
  // 同步检验函数，调用回调传递错误信息。
  validator?: (
    rule: IFormInnerRule, // from内部处理后的rule
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
`
    },
    {
      name: 'IFormError',
      type: 'interface',
      code: `
// 校验错误返回对象
interface IFormError {
  [prop: string]: IFormErrorField[]
}
interface IFormErrorField {
  message: string // 校验错误提示
  field: string // 校验失败的prop
}
`
    },
    {
      name: 'IFormValidateMethod',
      type: 'function',
      code: `
function IFormValidateMethod(callback: (isValid: boolean, fields: IFormError) => void ): Promise<boolean>
`
    },
    {
      name: 'IFormValidateFieldMethod',
      type: 'function',
      code: `
function IFormValidateFieldMethod(
  prop: string | string[],
  callback: (msg: string, field: IFormError) => void
): void
`
    }
  ]
}
