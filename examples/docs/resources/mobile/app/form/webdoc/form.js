export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'auto-wordwrap',
      name: {
        'zh-CN': '自动换行',
        'en-US': 'left right arrow',
      },
      desc: {
        'zh-CN': '<p>自动换行</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['auto-wordwrap.vue'],
    },
    {
      demoId: 'form-label-suffix',
      name: {
        'zh-CN': '标签宽度',
        'en-US': 'left right arrow',
      },
      desc: {
        'zh-CN': '<p>自定义标签的宽度</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['form-label-suffix.vue'],
    },
    {
      demoId: 'form-select',
      name: {
        'zh-CN': '选择展示',
        'en-US': 'left right text',
      },
      desc: {
        'zh-CN': '<p>表单（纯展示）</p>',
        'en-US': '<p>button round</p>',
      },
      codeFiles: ['form-select.vue'],
    },
    {
      demoId: 'form-tabselect',
      name: {
        'zh-CN': '分段器',
        'en-US': 'form-tabselect',
      },
      desc: {
        'zh-CN': '<p>表单（分段器）</p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['form-tabselect.vue'],
    },
    {
      demoId: 'form-writeone',
      name: {
        'zh-CN': '可填写(1)',
        'en-US': 'form-writeone',
      },
      desc: {
        'zh-CN': '<p>表单（文本框）</p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['form-writeone.vue'],
    },
    {
      demoId: 'form-writetwo',
      name: {
        'zh-CN': '可填写(2)',
        'en-US': 'form-writetwo',
      },
      desc: {
        'zh-CN': '<p>表单（文本域）</p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['form-writetwo.vue'],
    },
    {
      demoId: 'hide-required-asterisk',
      name: {
        'zh-CN': '显示红色星号',
        'en-US': 'hide-required-asterisk',
      },
      desc: {
        'zh-CN': '<p>是否显示红色星号</p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['hide-required-asterisk.vue'],
    },
    {
      demoId: 'label-width',
      name: {
        'zh-CN': '标签宽度',
        'en-US': 'label-width',
      },
      desc: {
        'zh-CN': '<p>自定义标签的宽度</p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['label-width.vue'],
    },
    {
      demoId: 'only-read',
      name: {
        'zh-CN': '纯展示',
        'en-US': 'only-read',
      },
      desc: {
        'zh-CN': '<p>表单（纯展示）</p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['only-read.vue'],
    },
    {
      demoId: 'validate-position',
      name: {
        'zh-CN': '校验显示位置',
        'en-US': 'validate-position',
      },
      desc: {
        'zh-CN': '<p>校验提示信息的位置</p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['validate-position.vue'],
    },
    {
      demoId: 'validate',
      name: {
        'zh-CN': '表单校验',
        'en-US': 'validate',
      },
      desc: {
        'zh-CN': '<p>表单校验</p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['validate.vue'],
    },
  ],
  apis: [
    {
      name: 'Form', // 组件名称展示使用
      type: 'component', // API 类型
      FormProperties: [
        {
          name: 'model',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>表单数据对象。</p>',
            'en-US': '',
          },
          demoId: '',
        },
        {
          name: 'rules',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>表单验证规则。</p>',
            'en-US': 'width',
          },
          demoId: 'validate',
        },
        {
          name: 'label-width',
          type: 'String',
          defaultValue: '80px',
          desc: {
            'zh-CN': '<p>表单中标签占位宽度，默认为 80px 。</p>',
            'en-US': 'set main-title',
          },
          demoId: 'label-width',
        },
        {
          name: 'label-position',
          type: 'String',
          defaultValue: '"right" | "left" | "top"',
          desc: {
            'zh-CN': '<p>表单中标签的布局位置，提供可选项有：right/left/top，默认为 right 。</p>',
            'en-US': 'Is show left text',
          },
          demoId: 'label-width',
        },
        {
          name: 'label-suffix',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>表单中标签后缀 。</p>',
            'en-US': 'set sub-title',
          },
          demoId: 'form-label-suffix',
        },
        {
          name: ' hide-required-asterisk',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否显示必填字段的标签旁边的红色星号</p>',
            'en-US': 'Is show left arrow',
          },
          demoId: 'hide-required-asterisk',
        },
        {
          name: 'inline',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>行内布局模式，默认为 false 。</p>',
            'en-US': 'Is show right arrow',
          },
          demoId: 'hide-required-asterisk',
        },
        {
          name: 'inline-message',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否以行内形式展示校验信息</p>',
            'en-US': 'Is show right text',
          },
          demoId: 'validate',
        },
        {
          name: 'show-message',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否显示校验错误信息</p>',
            'en-US': 'width',
          },
          demoId: '',
        },
        {
          name: 'validate-on-rule-change',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否以行内形式展示校验信息</p>',
            'en-US': 'width',
          },
          demoId: '',
        },
      ],
      FormMethods: [
        {
          name: 'clearValidate',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果</p>',
            'en-US': 'width',
          },
          demoId: 'validate',
        },
        {
          name: 'resetFields',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>对整个表单进行重置，将所有字段值重置为初始值并移除校验结果</p>',
            'en-US': 'width',
          },
          demoId: 'validate',
        },
        {
          name: 'validate',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN':
              '<p>对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise</p>',
            'en-US': 'width',
          },
          demoId: 'validate',
        },
        {
          name: 'validateField',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>对部分表单字段进行校验的方法</p>',
            'en-US': 'width',
          },
          demoId: '',
        },
      ],
      FormEvents: [
        {
          name: 'validate',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>任一表单项被校验后触发。</p>',
            'en-US': 'width',
          },
          demoId: '',
        },
      ],
      FormSlots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>默认插槽</p>',
            'en-US': 'Click',
          },
          demoId: '',
        },
      ],
      FormItemProperties: [
        {
          name: 'ellipsis',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>默认自动换行，不换行，显示省略号</p>',
            'en-US': 'Is fixed top',
          },
          demoId: 'auto-wordwrap',
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>标签文本</p>',
            'en-US': 'Is fixed top',
          },
          demoId: 'auto-wordwrap',
        },
        {
          name: 'prop',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>表单域 model 字段</p>',
            'en-US': 'Is fixed top',
          },
          demoId: 'auto-wordwrap',
        },
        {
          name: 'vertical',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>垂直换行</p>',
            'en-US': 'Is fixed top',
          },
          demoId: 'auto-wordwrap',
        },
      ],
    },
  ],
}
