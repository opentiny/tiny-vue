export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>基础用法</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'success',
      name: {
        'zh-CN': '成功样式',
        'en-US': 'success'
      },
      desc: {
        'zh-CN': '<p>成功提示</p>',
        'en-US': '<p>success</p>'
      },
      codeFiles: ['success.vue']
    },
    {
      demoId: 'failed',
      name: {
        'zh-CN': '失败样式',
        'en-US': 'failed'
      },
      desc: {
        'zh-CN': '<p>失败提示</p>',
        'en-US': '<p>failed</p>'
      },
      codeFiles: ['failed.vue']
    }
  ],
  apis: [
    {
      name: 'Toast', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'zIndex',
          type: 'Number',
          defaultValue: '100',
          desc: {
            'zh-CN': '<p>弹框层级</p>',
            'en-US': ''
          },
          demoId: 'base'
        },
        {
          name: 'type',
          type: 'string',
          defaultValue: 'text',
          desc: {
            'zh-CN': '<p>类型， text：纯文本 correct：成功 error：失败</p>',
            'en-US': 'type'
          },
          demoId: 'base'
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>展示的文本</p>',
            'en-US': 'display text'
          },
          demoId: 'base'
        },
        {
          name: 'time',
          type: 'Number',
          defaultValue: '2000',
          desc: {
            'zh-CN': '<p>展示持续时间，单位：ms</p>',
            'en-US': 'display times'
          },
          demoId: 'base'
        }
      ],
      method: [
        {
          name: 'timeout',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>消失前的回调</p>',
            'en-US': ''
          },
          demoId: 'base'
        }
      ]
    }
  ]
}
