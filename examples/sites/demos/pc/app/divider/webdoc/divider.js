export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'direction',
      'name': { 'zh-CN': '垂直分隔线', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>通过 <code>direction</code> 属性可以设置分隔线的方向。</p>',
        'en-US': ''
      },
      'codeFiles': ['direction.vue']
    },
    {
      'demoId': 'content-position',
      'name': { 'zh-CN': '分隔线文案的位置', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>通过 <code>content-position</code> 属性 可以设置分隔线文案的位置。</p>',
        'en-US': ''
      },
      'codeFiles': ['contentPosition.vue']
    },
    {
      'demoId': 'custom-style',
      'name': { 'zh-CN': '自定义分隔线样式', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>你可以自定义分割线样式。</p>',
        'en-US': ''
      },
      'codeFiles': ['customStyle.vue']
    }
  ],
  apis: [
    {
      'name': 'divider',
      'type': 'component',
      'properties': [
        {
          'name': 'color',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置分隔线的颜色', 'en-US': 'Set the color of the divider.' },
          'demoId': 'custom-style'
        },
        {
          'name': 'direction',
          'type': 'string',
          'defaultValue': 'horizontal',
          'desc': {
            'zh-CN': '设置分隔线的方向，该属性的可选值为 horizontal / vertical 。',
            'en-US':
              'Set the direction of the divider; the possible values for this property are "horizontal" or "vertical".'
          },
          'demoId': 'direction'
        },
        {
          'name': 'content-position',
          'type': 'string',
          'defaultValue': 'center',
          'desc': {
            'zh-CN': '设置分隔线文案的位置，该属性的可选值为 left / center / right 。',
            'en-US':
              'Set the position of the divider content; the possible values for this property are "left", "center", or "right".'
          },
          'demoId': 'content-position'
        },
        {
          'name': 'border-style',
          'type': 'string',
          'defaultValue': 'solid',
          'desc': {
            'zh-CN': '设置分隔线的样式，该属性的可选值为 solid / dashed',
            'en-US': 'Set the style of the divider; the possible values for this property are "solid" or "dashed".'
          },
          'demoId': 'custom-style'
        },
        {
          'name': 'content-color',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置分隔线文案的颜色', 'en-US': 'Set the color of the divider content.' },
          'demoId': 'custom-style'
        },
        {
          'name': 'content-background-color',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置分割线文案的背景颜色', 'en-US': 'Set the background color of the divider content.' },
          'demoId': 'custom-style'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
          'demoId': 'content-position'
        }
      ]
    }
  ]
}
