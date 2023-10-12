export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>要实现滚动加载，需要在列表上添加指令 <code>v-infinite-scroll</code> 并指定加载方法，参考示例</p>\n',
        'en-US':
          '<p>To implement rolling loading, you need to add the directive <code>v-infinite-scroll</code> to the list and specify the loading method. For details, see the example. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用加载', 'en-US': 'Disabling loading' },
      'desc': {
        'zh-CN': '<p>在滚动加载列表上添加属性 <code>infinite-scroll-disabled</code> 控制是否禁用加载，参考示例</p>\n',
        'en-US':
          '<p>Adds the property <code>infinite-scroll-disabled</code> to the scrolling load list to control whether loading is disabled. For details, see the example. </p>\n'
      },
      'codeFiles': ['disabled.vue']
    }
  ],
  apis: [
    {
      'name': 'infinite-scroll',
      'type': 'directive',
      'properties': [
        {
          'name': 'v-infinite-scroll',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': "无限滚动加载指令，指定加载方法",
            'en-US':
              "Infinite roll load instruction, specifying the load method."
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'infinite-scroll-disabled',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否禁用滚动',
            'en-US': 'Whether to disable scrolling. '
          },
          'demoId': 'disabled'
        },
        {
          'name': 'infinite-scroll-immediate',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否立即加载，以防初始状态下内容无法撑满容器。',
            'en-US': 'Indicates whether to load the container immediately to prevent the container from being full in the initial state.'
          },
          'demoId': ''
        },
        {
          'name': 'infinite-scroll-delay',
          'type': 'number',
          'defaultValue': '该属性的默认值为 200',
          'desc': {
            'zh-CN': '加载延时，单位为 ms。',
            'en-US': 'Loading delay, the unit is millisecond.'
          },
          'demoId': ''
        },
        {
          'name': 'infinite-scroll-distance',
          'type': 'number',
          'defaultValue': '该属性的默认值为 0',
          'desc': {
            'zh-CN': '加载触发距离阈值，单位为 px。',
            'en-US':
              'Threshold of the load triggering distance,the unit is px. '
          },
          'demoId': ''
        },
      ],
    }
  ]
}
