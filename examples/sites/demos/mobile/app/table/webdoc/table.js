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
    }
  ],
  apis: [
    {
      name: 'Table', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
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
          name: 'width',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>表格宽度</p>',
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
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>数据标识</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        }
      ]
    }
  ]
}
