export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'container',
      type: 'component',
      props: [
        {
          name: 'left-width',
          type: 'number | string',
          defaultValue: '60',
          desc: {
            'zh-CN': '左侧宽度',
            'en-US': 'Left width'
          },
          demoId: 'custom-width'
        },
        {
          name: 'pattern',
          typeAnchorName: 'IContainerPattern',
          type: 'IContainerPattern',
          defaultValue: '"default"',
          desc: {
            'zh-CN': '版型类型',
            'en-US': 'Measurement type'
          },
          demoId: 'basic-usaage'
        },
        {
          name: 'right-width',
          type: 'number | string',
          defaultValue: '44',
          desc: {
            'zh-CN': '右侧宽度',
            'en-US': 'right width'
          },
          demoId: 'custom-width'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'center',
          defaultValue: '',
          desc: {
            'zh-CN': '中部内容插槽',
            'en-US': 'Renter Slot'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'left',
          defaultValue: '',
          desc: {
            'zh-CN': '左侧内容插槽',
            'en-US': 'Title Slot'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'right',
          defaultValue: '',
          desc: {
            'zh-CN': '右侧内容插槽',
            'en-US': 'Right Slot'
          },
          demoId: 'basic-usage'
        }
      ]
    }
  ],
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '基础用法',
        'en-US': 'base'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-width',
      name: {
        'zh-CN': '自定义宽度和高度',
        'en-US': 'Custom width '
      },
      desc: {
        'zh-CN': '自定义宽度',
        'en-US': 'custom width'
      },
      codeFiles: ['custom-width.vue']
    }
  ],
  types: [
    {
      name: 'IContainerPattern',
      type: 'interface',
      code: `type IContainerPattern = 'default' | 'simple' | 'legend' | 'classic' | 'fashion'`
    }
  ]
}
