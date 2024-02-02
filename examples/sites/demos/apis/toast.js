export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'Toast',
      type: 'component',
      props: [
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>展示的文本</p>',
            'en-US': 'display text'
          },
          mode: ['mobile'],
          mobileDemo: 'base'
        },
        {
          name: 'time',
          type: 'Number',
          defaultValue: '2000',
          desc: {
            'zh-CN': '<p>展示持续时间，单位：ms</p>',
            'en-US': 'display times'
          },
          mode: ['mobile'],
          mobileDemo: 'base'
        },
        {
          name: 'type',
          type: 'string',
          defaultValue: 'text',
          desc: {
            'zh-CN': '<p>类型， text：纯文本 correct：成功 error：失败</p>',
            'en-US': 'type'
          },
          mode: ['mobile'],
          mobileDemo: 'base'
        },
        {
          name: 'zIndex',
          type: 'Number',
          defaultValue: '100',
          desc: {
            'zh-CN': '<p>弹框层级</p>',
            'en-US': ''
          },
          mode: ['mobile'],
          mobileDemo: 'base'
        }
      ],
      events: [],
      methods: [
        {
          name: 'timeout',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>消失前的回调</p>',
            'en-US': ''
          },
          mode: ['mobile'],
          mobileDemo: 'base'
        }
      ],
      slots: []
    }
  ]
}
