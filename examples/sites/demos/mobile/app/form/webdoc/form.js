export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'form',
      type: 'component',
      props: [
        {
          name: 'inline',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '行内布局模式',
            'en-US': 'In-line layout mode'
          },
          demoId: 'hide-required-asterisk'
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
          demoId: 'validate'
        },
        {
          name: 'label-position',
          type: "'right' | 'left' | 'top'",
          defaultValue: "'right'",
          desc: {
            'zh-CN': '表单中标签的布局位置',
            'en-US': 'Layout position of the label in the form'
          },
          demoId: 'label-width'
        },
        {
          name: 'label-suffix',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '表单中标签后缀',
            'en-US': 'Label suffix in the form'
          },
          demoId: 'form-label-suffix'
        },
        {
          name: 'label-width',
          type: 'string',
          defaultValue: "'84px'",
          desc: {
            'zh-CN': '表单中标签占位宽度',
            'en-US': 'Label placeholder width in the form'
          },
          demoId: 'label-width'
        },
        {
          name: 'model',
          type: '{ [prop: string]: any }',
          defaultValue: '',
          desc: {
            'zh-CN': '表单数据对象',
            'en-US': 'Form data object'
          },
          demoId: ''
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
          demoId: 'validate'
        },
        {
          name: 'show-message',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示校验错误信息',
            'en-US': 'Display verification error information.'
          },
          demoId: ''
        },
        {
          name: 'validate-on-rule-change',
          type: 'boolean | "deep"',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否在 rules 属性改变后立即触发一次验证（"deep"选项新增于3.21.0）',
            'en-US': 'Whether to trigger a verification immediately after the rules attribute is changed'
          },
          demoId: ''
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
          demoId: ''
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
          demoId: 'validate'
        },
        {
          name: 'resetFields',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '对整个表单进行重置，将所有字段值重置为初始值并移除校验结果',
            'en-US': 'Reset all field values to the initial values and remove the verification result.'
          },
          demoId: 'validate'
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
          demoId: 'validate'
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
          demoId: ''
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
          demoId: ''
        }
      ]
    },
    {
      name: 'form-item',
      type: 'component',
      props: [],
      events: [],
      methods: [],
      slots: []
    }
  ],
  demos: [
    {
      demoId: 'auto-wordwrap',
      name: {
        'zh-CN': '自动换行',
        'en-US': 'left right arrow'
      },
      desc: {
        'zh-CN': '<p>自动换行</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['auto-wordwrap.vue']
    },
    {
      demoId: 'form-label-suffix',
      name: {
        'zh-CN': '标签宽度',
        'en-US': 'left right arrow'
      },
      desc: {
        'zh-CN': '<p>自定义标签的宽度</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['form-label-suffix.vue']
    },
    {
      demoId: 'form-select',
      name: {
        'zh-CN': '选择展示',
        'en-US': 'left right text'
      },
      desc: {
        'zh-CN': '<p>表单（纯展示）</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['form-select.vue']
    },
    {
      demoId: 'form-tabselect',
      name: {
        'zh-CN': '分段器',
        'en-US': 'form-tabselect'
      },
      desc: {
        'zh-CN': '<p>表单（分段器）</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['form-tabselect.vue']
    },
    {
      demoId: 'form-writeone',
      name: {
        'zh-CN': '可填写(1)',
        'en-US': 'form-writeone'
      },
      desc: {
        'zh-CN': '<p>表单（文本框）</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['form-writeone.vue']
    },
    {
      demoId: 'form-writetwo',
      name: {
        'zh-CN': '可填写(2)',
        'en-US': 'form-writetwo'
      },
      desc: {
        'zh-CN': '<p>表单（文本域）</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['form-writetwo.vue']
    },
    {
      demoId: 'hide-required-asterisk',
      name: {
        'zh-CN': '显示红色星号',
        'en-US': 'hide-required-asterisk'
      },
      desc: {
        'zh-CN': '<p>是否显示红色星号</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['hide-required-asterisk.vue']
    },
    {
      demoId: 'label-width',
      name: {
        'zh-CN': '标签宽度',
        'en-US': 'label-width'
      },
      desc: {
        'zh-CN': '<p>自定义标签的宽度</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['label-width.vue']
    },
    {
      demoId: 'only-read',
      name: {
        'zh-CN': '纯展示',
        'en-US': 'only-read'
      },
      desc: {
        'zh-CN': '<p>表单（纯展示）</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['only-read.vue']
    },
    {
      demoId: 'validate-position',
      name: {
        'zh-CN': '校验显示位置',
        'en-US': 'validate-position'
      },
      desc: {
        'zh-CN': '<p>校验提示信息的位置</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['validate-position.vue']
    },
    {
      demoId: 'validate',
      name: {
        'zh-CN': '表单校验',
        'en-US': 'validate'
      },
      desc: {
        'zh-CN': '<p>表单校验</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['validate.vue']
    }
  ],
  types: [
    {
      name: 'IFormRules',
      type: 'interface',
      code: `
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
