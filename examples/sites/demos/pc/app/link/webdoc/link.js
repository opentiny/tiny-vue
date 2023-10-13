export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'link-style',
      'name': { 'zh-CN': '主题样式', 'en-US': 'Theme Style' },
      'desc': {
        'zh-CN': '<p>通过 <code>type</code> 属性设置链接的主题类型。</p>\n',
        'en-US': '<p>Set the topic type of the link through the <code>type</code> attribute. </p>\n'
      },
      'codeFiles': ['link-style.vue']
    },
    {
      'demoId': 'dynamic-disable',
      'name': { 'zh-CN': '禁用链接', 'en-US': 'Disable links' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 属性可以指定是否禁用链接。</p>\n',
        'en-US': '<p>You can use the <code>disabled</code> attribute to specify whether to disable links. </p>\n'
      },
      'codeFiles': ['dynamic-disable.vue']
    },
    {
      'demoId': 'focus-no-underline',
      'name': { 'zh-CN': '聚焦时不显示下划线', 'en-US': 'Do not display underscores when focusing.' },
      'desc': {
        'zh-CN':
          '<p>鼠标悬停在链接上时，默认会显示下划线，设置 <code>underline</code> 为 false 后聚焦时不显示下划线。</p>\n',
        'en-US':
          '<p>When you hover the cursor over a link, the underline is displayed by default. If <code>underline</code> is set to false, the underline is not displayed when you focus. </p>\n'
      },
      'codeFiles': ['focus-no-underline.vue']
    },
    {
      'demoId': 'custom-icon',
      'name': { 'zh-CN': '自定义图标', 'en-US': 'Custom Icon' },
      'desc': {
        'zh-CN': '<p>通过属性 <code>icon</code>、默认插槽、<code>icon</code> 插槽都可以自定义图标。</p>\n',
        'en-US':
          '<p>Icon can be customized by attribute <code>icon</code>, default slot, and <code>icon</code> slot. </p>\n'
      },
      'codeFiles': ['custom-icon.vue']
    },
    {
      'demoId': 'config-href',
      'name': { 'zh-CN': '链接地址', 'en-US': 'Link' },
      'desc': {
        'zh-CN':
          '<p>通过属性 <code>href</code> 指定链接需要跳转的地址，可配合原生属性 <code>target</code> 一起使用。</p>\n',
        'en-US':
          '<p>Use the <code>href</code> attribute to specify the URL to be redirected to. This attribute can be used together with the native attribute <code>target</code>. </p>\n'
      },
      'codeFiles': ['config-href.vue']
    }
  ],
  apis: [
    {
      'name': 'link',
      'type': 'component',
      'properties': [
        {
          'name': 'type',
          'type': 'string',
          'defaultValue': '该属性的默认值为 default',
          'desc': {
            'zh-CN': '该属性的可选值为 primary / success / warning / danger / info',
            'en-US': 'This attribute can be set to primary / success / warning / danger / info'
          },
          'demoId': 'link-style'
        },
        {
          'name': 'underline',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否下划线', 'en-US': 'Underline' },
          'demoId': 'focus-no-underline'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否禁用状态', 'en-US': 'Disabled' },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'href',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '原生 href 属性', 'en-US': 'Native href attribute' },
          'demoId': 'config-href'
        },
        {
          'name': 'icon',
          'type': 'object , string',
          'defaultValue': '',
          'desc': { 'zh-CN': '图标类名', 'en-US': 'Icon class name' },
          'demoId': 'custom-icon'
        }
      ],
      'events': [],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
          'demoId': 'custom-icon'
        },
        {
          'name': 'icon',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '图标', 'en-US': 'Icon' },
          'demoId': 'custom-icon'
        }
      ]
    }
  ]
}
