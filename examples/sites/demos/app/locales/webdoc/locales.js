export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>配置 <code>local</code> 属性后，不会自动调用服务，仅用做当前语言切换，不会刷新页面。</p>\n',
        'en-US':
          '<p>After the <code>local</code> attribute is configured, the service is not automatically invoked. It is only used to switch the current language and does not refresh the page. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'custom-service',
      'name': { 'zh-CN': '自定义服务', 'en-US': 'Custom Service' },
      'desc': {
        'zh-CN':
          '<p><code>get-locale</code> 可用于自定义获取所有语言。<code>get-current-locale</code> 用于获取当前语言。<code>get-change-locale-url</code> 用于获取改变语言后的 URL，参数为切换后的语言。</p>\n',
        'en-US':
          '<p><code>get-locale</code> can be used to customize all languages. <code>get-current-locale</code> is used to obtain the current language. <code>get-change-locale-url</code> is used to obtain the URL after the language is changed. The parameter is the language after the language is changed. </p>\n'
      },
      'codeFiles': ['custom-service.vue']
    },
    {
      'demoId': 'change-lang',
      'name': { 'zh-CN': '语言切换', 'en-US': 'Switch Language' },
      'desc': {
        'zh-CN': '<p>提供 <code>change-lang</code> 函数用于自定义语言切换的逻辑，不设置则使用内置的切换方法。</p>\n',
        'en-US':
          '<p>Provides the <code>change-lang</code> function to customize the language switching logic. If this function is not set, the built-in switching method is used. </p>\n'
      },
      'codeFiles': ['change-lang.vue']
    }
  ],
  apis: [
    {
      'name': 'locales',
      'type': 'component',
      'properties': [
        {
          'name': 'local',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否本地', 'en-US': 'Local or not' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'change-lang',
          'type': 'Function',
          'defaultValue': '',
          'desc': { 'zh-CN': '切换语言', 'en-US': 'Switch Language' },
          'demoId': 'change-lang'
        },
        {
          'name': 'getLocale',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义获取系统语言列表接口，未使用框架服务时必填',
            'en-US':
              'User-defined interface for obtaining the system language list. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '为 popper 添加类名(可参考 popover 组件)',
            'en-US': 'Add a class name for the popper. For details, see the popover component.'
          },
          'demoId': ''
        },
        {
          'name': 'popper-append-to-body',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert the pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
          },
          'demoId': ''
        },
        {
          'name': 'getCurrentLocale',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义获取当前语种接口，未使用框架服务时必填',
            'en-US':
              'Customized interface for obtaining the current language. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'getChangeLocaleUrl',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义更新语言服务接口，未使用框架服务并且未配置 change-lang 时必填',
            'en-US':
              'Customized language update service interface. This parameter is mandatory when the framework service is not used and change-lang is not configured.'
          },
          'demoId': 'custom-service'
        }
      ],
      'events': [],
      'slots': []
    }
  ]
}
