export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'message',
      type: 'component',
      props: [
        {
          name: 'duration',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置提示信息停留时间',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'id',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置唯一的 id 防止重复提示，只对 type=message 有效',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'message',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置提示信息',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-close',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '控制弹窗是否显示关闭图标',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'status',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置消息状态，可选值有 info | success | warning | error',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
