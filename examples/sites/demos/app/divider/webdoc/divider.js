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
      'name': { 'zh-CN': '垂直分隔线', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '通过 props direction 可以设置分隔线的方向',
        'en-US': 'The direction of the divider can be set using the props "direction".'
      },
      'codeFiles': ['direction.vue']
    },
    {
      'demoId': 'content-position',
      'name': { 'zh-CN': '分隔线文案的位置', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '通过 props content-position 可以分隔线文案的位置',
        'en-US': 'The position of the divider content can be set using the prop "content-position".'
      },
      'codeFiles': ['contentPosition.vue']
    },
    {
      'demoId': 'custom-style',
      'name': { 'zh-CN': '自定义分隔线样式', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '通过 props 自定义分隔线样式',
        'en-US': 'You can customize the divider style through props.'
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
          'demoId': 'basic-usage'
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
          'demoId': 'contentPosition'
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
