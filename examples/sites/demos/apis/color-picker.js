export default {
  mode: ['pc'],
  apis: [
    {
      name: 'color-picker',
      type: 'component',
      props: [
        {
          name: 'alpha',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用alpha选择',
            'en-US': 'enable alpha select or not'
          },
          mode: ['pc'],
          pcDemo: 'enable-alpha'
        },
        {
          name: 'history',
          type: 'string[] | undefined',
          defaultValue: 'undefined',
          desc: {
            'zh-CN': '启用历史记录',
            'en-US': 'enable history or not'
          },
          mode: ['pc'],
          pcDemo: 'history'
        },
        {
          name: 'predefine',
          type: 'string[] | undefined',
          defaultValue: 'undefined',
          desc: {
            'zh-CN': '启用预定义颜色',
            'en-US': 'enable predefine or not'
          },
          mode: ['pc'],
          pcDemo: 'predefine'
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '定义color-picker尺寸;该属性的可选值为 large / medium / small / mini',
            'en-US':
              'Define color-picker dimensions; The optional values for this attribute are large/medium/small/mini'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'visible',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否默认显示color-select',
            'en-US': 'Is color select displayed by default'
          },
          mode: ['pc'],
          pcDemo: 'default-visible'
        }
      ],
      events: [
        {
          name: 'cancel',
          type: '()=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '按下取消或点击外部的时触发该事件',
            'en-US': 'When click cancel or click out-side will trigger cancel event'
          },
          mode: ['pc'],
          pcDemo: 'event'
        },
        {
          name: 'confirm',
          type: '(hex:string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '按下确认时触发该事件',
            'en-US': 'When click confirm will trigger confirm event'
          },
          mode: ['pc'],
          pcDemo: 'event'
        }
      ],
      methods: [],
      slots: []
    }
  ]
}
