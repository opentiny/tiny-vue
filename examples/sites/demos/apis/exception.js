export default {
  mode: ['mobile', 'mobile-first'],
  apis: [
    {
      name: 'Exception',
      type: 'component',
      props: [
        {
          name: 'buttonText',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>按钮文字/p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'buttonText'
        },
        {
          name: 'component-page',
          type: 'Boolean',
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
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置自定义类',
            'en-US': 'Setting Custom Classes'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'exceptionClass',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义缺省页类名</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'exceptionClass'
        },
        {
          name: 'imageUrl',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义图片</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'buttonText'
        },
        {
          name: 'message',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>主图片文字，在图片下方</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'message'
        },
        {
          name: 'page-empty',
          type: 'Boolean',
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
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置二级标题',
            'en-US': 'Set Level-2 Title'
          },
          mode: ['mobile-first'],
          mfDemo: 'sub-message'
        },
        {
          name: 'subMessage',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>副文本内容,在描述文字的下方</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'subMessage'
        },
        {
          name: 'type',
          type: 'String',
          defaultValue: 'nodata',
          desc: {
            'zh-CN':
              '<p>设置缺省页类型，默认为nodata,可选值有 weaknet || noperm || busy || build || weaknet || pcview</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile', 'mobile-first'],
          mobileDemo: 'type',
          mfDemo: 'page-empty'
        }
      ],
      events: [
        {
          name: 'click',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>点击按钮时触发，type 为 nodata 时启用</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'message'
        }
      ],
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
          mode: ['mobile', 'mobile-first'],
          mobileDemo: 'mobileexception',
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
        },
        {
          name: 'footer',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置底部内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'mobileexception'
        }
      ]
    }
  ]
}
