export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'Table',
      type: 'component',
      props: [
        {
          name: 'columns',
          type: '[]',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>列数据</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        },
        {
          name: 'data',
          type: '[]',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>表格数据</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        },
        {
          name: 'defaultChecked',
          type: '[]',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>默认选中项</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        },
        {
          name: 'keys',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>数据标识</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        },
        {
          name: 'width',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>表格宽度</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ],
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
    }
  ]
}
