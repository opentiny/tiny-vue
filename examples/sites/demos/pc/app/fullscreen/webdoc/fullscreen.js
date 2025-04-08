export default {
  column: '2',
  owner: '',
  show: true,
  cloud: false,
  demos: [
    {
      demoId: 'example-component',
      name: {
        'zh-CN': '组件式使用',
        'en-US': 'Component Use'
      },
      desc: {
        'zh-CN': '组件式使用详细用法参考如下示例',
        'en-US': 'For detailed usage of component-based usage, please refer to the following example.'
      },
      codeFiles: ['example-component.vue']
    },
    {
      demoId: 'example-api',
      name: {
        'zh-CN': '函数式使用',
        'en-US': 'Functional use'
      },
      desc: {
        'zh-CN': '函数式使用详细用法参考如下示例',
        'en-US': 'For detailed usage of functional expressions, please refer to the following example.'
      },
      codeFiles: ['example-api.vue']
    },
    {
      demoId: 'before-change',
      name: {
        'zh-CN': '拦截事件',
        'en-US': 'Intercept Events'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['before-change.vue']
    }
  ],
  features: [
    {
      id: 'component',
      name: '组件式使用',
      support: {
        value: true
      },
      description: '支持组件式使用方式。',
      cloud: {
        value: false
      },
      apis: ['component'],
      demos: ['example-component']
    },
    {
      id: 'api',
      name: '函数式使用',
      support: {
        value: true
      },
      description: '支持函数式使用方式。',
      cloud: {
        value: false
      },
      apis: ['api'],
      demos: ['example-api']
    },
    {
      id: 'before-change',
      name: '拦截事件',
      support: {
        value: true
      },
      description: '支持在切换全屏前进行拦截。',
      cloud: {
        value: false
      },
      apis: ['before-change'],
      demos: ['before-change']
    }
  ]
}
