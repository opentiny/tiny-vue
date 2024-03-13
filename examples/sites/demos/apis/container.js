export default {
  mode: ['pc', 'mobile'],
  apis: [
    {
      name: 'container',
      type: 'component',
      props: [
        {
          name: 'aside-width',
          type: 'number | string',
          defaultValue: '200',
          desc: {
            'zh-CN': '左侧宽度',
            'en-US': 'Left width'
          },
          mode: ['pc'],
          pcDemo: 'custom-with-height'
        },
        {
          name: 'footer-height',
          type: 'number | string',
          defaultValue: '60',
          desc: {
            'zh-CN': '底部高度',
            'en-US': 'Height at the bottom'
          },
          mode: ['pc'],
          pcDemo: 'custom-with-height'
        },
        {
          name: 'header-height',
          type: 'number | string',
          defaultValue: '60',
          desc: {
            'zh-CN': '头部高度',
            'en-US': 'Head height'
          },
          mode: ['pc'],
          pcDemo: 'custom-with-height'
        },
        {
          name: 'left-width',
          type: 'number | string',
          defaultValue: '60',
          desc: {
            'zh-CN': '左侧宽度',
            'en-US': 'Left width'
          },
          mode: ['mobile'],
          mobileDemo: 'custom-width'
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
          mode: ['pc', 'mobile'],
          pcDemo: 'basic-usage',
          mobileDemo: 'basic-usaage'
        },
        {
          name: 'right-width',
          type: 'number | string',
          defaultValue: '44',
          desc: {
            'zh-CN': '右侧宽度',
            'en-US': 'right width'
          },
          mode: ['mobile'],
          mobileDemo: 'custom-width'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'aside',
          defaultValue: '',
          desc: {
            'zh-CN': '侧边内容插槽',
            'en-US': 'Side Content Slot'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'center',
          defaultValue: '',
          desc: {
            'zh-CN': '中部内容插槽',
            'en-US': 'Renter Slot'
          },
          mode: ['mobile'],
          mobileDemo: 'basic-usage'
        },
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '主要内容插槽',
            'en-US': 'Main Content Slot'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'footer',
          defaultValue: '',
          desc: {
            'zh-CN': '底部内容插槽',
            'en-US': 'Bottom Content Slot'
          },
          mode: ['pc'],
          pcDemo: 'classic'
        },
        {
          name: 'header',
          defaultValue: '',
          desc: {
            'zh-CN': '头部内容插槽',
            'en-US': 'Header Content Slot'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'left',
          defaultValue: '',
          desc: {
            'zh-CN': '左侧内容插槽',
            'en-US': 'Title Slot'
          },
          mode: ['mobile'],
          mobileDemo: 'basic-usage'
        },
        {
          name: 'right',
          defaultValue: '',
          desc: {
            'zh-CN': '右侧内容插槽',
            'en-US': 'Right Slot'
          },
          mode: ['mobile'],
          mobileDemo: 'basic-usage'
        }
      ]
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
