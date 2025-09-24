export default {
  mode: ['pc', 'mobile-first'],
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
            'zh-CN': '设置组件级异常',
            'en-US': 'Set component-level exception'
          },
          mode: ['pc', 'mobile-first'],
          mfDemo: 'component-page',
          pcDemo: 'component-page'
        },
        {
          name: 'exception-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置自定义类',
            'en-US': 'Setting Custom Classes'
          },
          mode: ['pc', 'mobile-first'],
          mfDemo: 'exception-class',
          pcDemo: 'exception-class'
        },
        {
          name: 'page-empty',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置页面级异常',
            'en-US': 'Set page-level exception'
          },
          mode: ['pc', 'mobile-first'],
          mfDemo: 'page-empty',
          pcDemo: 'page-empty'
        },
        {
          name: 'sub-message',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置二级标题',
            'en-US': 'Set Level-2 Title'
          },
          mode: ['pc', 'mobile-first'],
          mfDemo: 'sub-message',
          pcDemo: 'sub-message'
        },
        {
          name: 'type',
          typeAnchorName: 'IType',
          type: 'IType',
          defaultValue: 'nodata',
          desc: {
            'zh-CN': '<p>设置缺省页类型，默认为nodata</p>',
            'en-US': '<p>Set exception type, The default value is nodata</p>'
          },
          mode: ['pc', 'mobile-first'],
          mfDemo: 'page-empty',
          pcDemo: 'page-empty'
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
            'en-US': '<p>Set content</p>'
          },
          mode: ['pc', 'mobile-first'],
          mfDemo: 'slot',
          pcDemo: 'slot'
        },
        {
          name: 'icon',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '图标插槽',
            'en-US': 'Icon Slot'
          },
          mode: ['pc', 'mobile-first'],
          mfDemo: 'slot',
          pcDemo: 'slot'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IType',
      type: 'type',
      code: `
type IType = 'noperm' | 'nodata' | 'weaknet' | 'noresult' | 'nonews' | 'pagenoperm' | 'pageweaknet' | 'pagenothing' | 'pageservererror'
`
    }
  ]
}
