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
        'zh-CN': '<p>通过 <code>type</code> 设置链接的主题类型。</p>',
        'en-US': '<p>Set the topic type of the link through the <code>type</code> attribute. </p>'
      },
      'codeFiles': ['link-style.vue']
    },
    {
      'demoId': 'dynamic-disable',
      'name': { 'zh-CN': '禁用链接', 'en-US': 'Disable links' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 设置是否禁用链接。</p>',
        'en-US': '<p>You can use the <code>disabled</code> attribute to specify whether to disable links. </p>'
      },
      'codeFiles': ['dynamic-disable.vue']
    },
    {
      'demoId': 'focus-no-underline',
      'name': { 'zh-CN': '聚焦时不显示下划线', 'en-US': 'Do not display underscores when focusing.' },
      'desc': {
        'zh-CN': '<p>通过 <code>underline</code> 设置鼠标悬浮是否显示下划线。</p>',
        'en-US':
          '<p>When you hover the cursor over a link, the underline is displayed by default. If <code>underline</code> is set to false, the underline is not displayed when you focus. </p>'
      },
      'codeFiles': ['focus-no-underline.vue']
    },
    {
      'demoId': 'custom-icon',
      'name': { 'zh-CN': '自定义图标', 'en-US': 'Custom Icon' },
      'desc': {
        'zh-CN': '<p>通过属性 <code>icon</code>、默认插槽、<code>icon</code> 插槽都可以自定义图标。</p>',
        'en-US':
          '<p>Icon can be customized by attribute <code>icon</code>, default slot, and <code>icon</code> slot. </p>'
      },
      'codeFiles': ['custom-icon.vue']
    },
    {
      'demoId': 'config-href',
      'name': { 'zh-CN': '链接地址', 'en-US': 'Link' },
      'desc': {
        'zh-CN': '<p>通过 <code>href</code> 设置跳转连接，可配合原生属性 <code>target</code> 一起使用。</p>',
        'en-US':
          '<p>Use the <code>href</code> attribute to specify the URL to be redirected to. This attribute can be used together with the native attribute <code>target</code>. </p>'
      },
      'codeFiles': ['config-href.vue']
    }
  ],
  apis: [
    {
      'name': 'link',
      'type': 'component',
      'props': [
        {
          'name': 'type',
          'type': "'primary' | 'success' | 'warning' | 'danger' | 'info'",
          'defaultValue': '',
          'desc': {
            'zh-CN': '文本链接类型',
            'en-US': 'Text link type'
          },
          'demoId': 'link-style'
        },
        {
          'name': 'underline',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '是否下划线', 'en-US': 'Whether has Underline' },
          'demoId': 'focus-no-underline'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否禁用状态', 'en-US': 'Is disabled' },
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
          'type': 'VueComponent',
          'defaultValue': '',
          'desc': { 'zh-CN': '图标组件', 'en-US': 'Icon component' },
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
