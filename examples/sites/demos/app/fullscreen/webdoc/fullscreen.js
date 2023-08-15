export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'example-component',
      'name': { 'zh-CN': '组件式使用', 'en-US': 'Component Use' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['example-component.vue']
    },
    {
      'demoId': 'example-api',
      'name': { 'zh-CN': '函数式使用', 'en-US': 'Functional use' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['example-api.vue']
    }
  ],
  apis: [
    {
      'name': 'fullscreen',
      'type': 'component',
      'properties': [
        {
          'name': 'page-only',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '显示模式。true 为网页全屏，false 为浏览器全屏。默认值为 false',
            'en-US':
              'Display mode. The value true indicates that the web page is displayed in full screen mode, and the value false indicates that the browser is displayed in full screen mode. The default value is false'
          },
          'demoId': 'example-component'
        },
        {
          'name': 'teleport',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否将目标元素移动到 body 下。true 为移动，false 为不移动。默认值为 false',
            'en-US':
              'Indicates whether to move the target element to the body. true: move; false: do not move. The default value is false'
          },
          'demoId': 'example-component'
        },
        {
          'name': 'z-index',
          'type': 'Number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在全屏显示时，目标元素的 zIndex',
            'en-US': 'ZIndex of the target element in full-screen display'
          },
          'demoId': 'example-component'
        },
        {
          'name': 'fullscreen-class',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义组件 wrapper 的样式类名',
            'en-US': 'Style class name of the custom component wrapper'
          },
          'demoId': 'example-component'
        },
        {
          'name': 'fullscreen',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '组件式使用时，控制组件是否全屏显示。默认为 false',
            'en-US': 'Whether to display a component in full screen mode. The default value is false'
          },
          'demoId': 'example-component'
        },
        {
          'name': 'exit-on-click-wrapper',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '组件式使用时，点击组件 wrapper 是否关闭全屏显示。默认为 true',
            'en-US':
              'When the component is used in component mode, click the component wrapper to determine whether to disable full-screen display. The default value is true.'
          },
          'demoId': 'example-component'
        }
      ],
      'events': [
        {
          'name': 'update:fullscreen',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '组件式使用时，更新 fullscreen 属性',
            'en-US': 'Update the fullscreen attribute in component mode.'
          },
          'demoId': 'example-component'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义内容，需要在 layout 中列出 slot',
            'en-US': 'User-defined content. Slots must be listed in the layout.'
          },
          'demoId': 'example-component'
        }
      ],
      'methods': [
        {
          'name': 'toggle',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '函数式使用时，切换全屏模式',
            'en-US': 'Switch the full-screen mode when the function mode is used.'
          },
          'demoId': 'example-component'
        }
      ]
    }
  ]
}
