export default {
  mode: ['mobile-first', 'pc'],
  apis: [
    {
      name: 'message',
      type: 'component',
      props: [
        {
          name: 'duration',
          type: 'string',
          defaultValue: '3000',
          desc: {
            'zh-CN': '设置提示信息停留时间',
            'en-US': 'Set the prompt information retention time'
          },
          mode: ['mobile-first', 'pc'],
          mfDemo: '',
          pcDemo: 'message-duration'
        },
        {
          name: 'id',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置唯一的 id 防止重复提示，只对 type=message 有效',
            'en-US': 'Set a unique id to prevent duplicate prompts, only valid for type=message'
          },
          mode: ['mobile-first', 'pc'],
          mfDemo: '',
          pcDemo: 'prevent-duplicate'
        },
        {
          name: 'message',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置提示信息',
            'en-US': 'Set the prompt information'
          },
          mode: ['mobile-first', 'pc'],
          mfDemo: '',
          pcDemo: 'basic-usage'
        },
        {
          name: 'show-close',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '控制弹窗是否显示关闭图标',
            'en-US': 'Whether to display the close icon'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'message-closable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示关闭按钮，默认值为 false',
            'en-US': 'close button is displayed or not, the default value is false'
          },
          mode: ['pc'],
          mfDemo: '',
          pcDemo: 'message-close'
        },
        {
          name: 'status',
          typeAnchorName: 'IStatus',
          type: 'IStatus',
          defaultValue: "'info'",
          desc: {
            'zh-CN': '设置消息状态',
            'en-US': 'Set the message status'
          },
          mode: ['mobile-first', 'pc'],
          mfDemo: '',
          pcDemo: 'basic-usage'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ],
  types: [
    {
      name: 'IStatus',
      type: 'type',
      code: `
          type IStatus = 'info' | 'success' | 'warning' | 'error' | 'loading'
      `
    }
  ]
}
