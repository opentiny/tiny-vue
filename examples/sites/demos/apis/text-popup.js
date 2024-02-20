export default {
  mode: ['pc'],
  apis: [
    {
      name: 'text-popup',
      type: 'component',
      props: [
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框内的提示占位文本',
            'en-US': 'Set the prompt placeholder text in the text box.'
          },
          mode: ['pc'],
          pcDemo: 'placeholder'
        },
        {
          name: 'readonly',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否只读',
            'en-US': 'Set whether to read only'
          },
          mode: ['pc'],
          pcDemo: 'readonly'
        },
        {
          name: 'separtor',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '分隔符',
            'en-US': 'Separator'
          },
          mode: ['pc'],
          pcDemo: 'separtor'
        },
        {
          name: 'value',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Bound Value'
          },
          mode: ['pc'],
          pcDemo: 'value'
        },
        {
          name: 'width',
          type: 'number , string',
          defaultValue: '150',
          desc: {
            'zh-CN': '宽度',
            'en-US': 'Set width'
          },
          mode: ['pc'],
          pcDemo: 'width'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
