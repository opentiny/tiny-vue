export default {
  mode: ['pc'],
  apis: [
    {
      name: 'locales',
      type: 'component',
      props: [
        {
          name: 'change-lang',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '切换语言',
            'en-US': 'Switch Language'
          },
          mode: ['pc'],
          pcDemo: 'change-lang'
        },
        {
          name: 'getChangeLocaleUrl',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义更新语言服务接口，未使用框架服务并且未配置 change-lang 时必填',
            'en-US':
              'Customized language update service interface. This parameter is mandatory when the framework service is not used and change-lang is not configured.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'getCurrentLocale',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义获取当前语种接口，未使用框架服务时必填',
            'en-US':
              'Customized interface for obtaining the current language. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'getLocale',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义获取系统语言列表接口，未使用框架服务时必填',
            'en-US':
              'User-defined interface for obtaining the system language list. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'local',
          type: 'boolean',
          defaultValue: '该属性的默认值为 false',
          desc: {
            'zh-CN': '是否本地',
            'en-US': 'Local or not'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: '该属性的默认值为 true',
          desc: {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert the pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '为 popper 添加类名(可参考 popover 组件)',
            'en-US': 'Add a class name for the popper. For details, see the popover component.'
          },
          mode: ['pc'],
          pcDemo: ''
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
