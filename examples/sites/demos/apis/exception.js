export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'Exception',
      type: 'component',
      props: [
        {
          name: 'component-page',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置组件级空态',
            'en-US': 'Set component-level empty state'
          },
          mode: ['mobile-first'],
          mfDemo: 'component-empty'
        },
        {
          name: 'exception-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置自定义类',
            'en-US': 'Setting Custom Classes'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'page-empty',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置页面级空态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'sub-message',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置二级标题',
            'en-US': 'Set Level-2 Title'
          },
          mode: ['mobile-first'],
          mfDemo: 'sub-message'
        },
        {
          name: 'type',
          type: 'string',
          defaultValue: 'nodata',
          desc: {
            'zh-CN':
              '<p>设置缺省页类型，默认为nodata,可选值有 weaknet || noperm || busy || build || weaknet || pcview</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile-first'],
          mfDemo: 'page-empty'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'content',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile-first'],
          mfDemo: 'content-slot'
        },
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default Slot'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ]
    }
  ]
}
