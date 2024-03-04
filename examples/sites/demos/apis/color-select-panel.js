export default {
  mode: ['pc'],
  apis: [
    {
      name: 'color select panel',
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
          pcDemo: 'alpha'
        },
        {
          name: 'history',
          type: 'string[] | undefined',
          defaultValue: 'undefined',
          desc: {
            'zh-CN': '时候启用历史记录',
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
            'zh-CN': '时候启用历史记录',
            'en-US': 'enable predefine or not'
          },
          mode: ['pc'],
          pcDemo: 'predefine'
        },
        {
          name: 'visible',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否默认显示color select panel',
            'en-US': 'Is color select panel displayed by default'
          },
          mode: ['pc']
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
          name: 'color-update',
          type: '(color:Color) => void',
          defaultValue: '',
          desc: {
            'zh-cn': '当颜色更新的时候会触发该事件，包括：点击预定义颜色、点击历史记录',
            'en-US': 'when click predefine color or history, will trigger color-update event'
          },
          mode: ['pc']
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
