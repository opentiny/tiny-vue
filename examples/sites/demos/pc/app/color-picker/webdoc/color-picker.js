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
      'demoId': 'event',
      'name': { 'zh-CN': '事件触发', 'en-US': 'event' },
      'desc': { 'zh-CN': '点击确认是将会触发confirm事件, 取消时触发cancel事件', 'en-US': 'When click confirm will trigger confirm event. When click outside or cancel will trigger cancel event' },
      'codeFiles': ['event.vue']
    },
    {
      'demoId': 'enable-alpha',
      'name': { 'zh-CN': 'Alpha', 'en-US': 'Alpha' },
      'desc': { 'zh-CN': 'Alpha选择', 'en-US': 'Alpha select.' },
      'codeFiles': ['alpha.vue']
    },
    {
      'demoId': 'default-visible',
      'name': { 'zh-CN': '默认显示', 'en-US': 'default-visible' },
      'desc': {
        'zh-CN': '当visible为true时, 将会默认显示color-select. visible是响应式的, 所以你可以强制控制color-select的状态。当visible切换的时候, 会触发cancel事件',
        'en-US': 'If visible is true the <code>color-select</code> will show. The visible prop is reactive so you can force change <code>color-select</code> show or not. When change visible will trigger cancel event'
      },
      'codeFiles': ['default-visible.vue']
    },
    {
      'demoId': 'dynamic-color-change',
      'name': { 'zh-CN': '颜色动态切换', 'en-US': 'dynamic-color-change' },
      'desc': {
        'zh-CN': '可以动态切换color属性, 以满足各种需求',
        'en-US': 'Can dynamically switch color attributes to meet various needs'
      },
      'codeFiles': ['dynamic-color-change.vue']
    },
  ],
  apis: [
    {
      'name': 'color-picker',
      'type': 'component',
      'properties': [
        {
          'name': 'modelValue',
          'type': 'string',
          'defaultValue': 'transparent',
          desc: {
            'zh-CN': '默认颜色',
            'en-US': 'default color'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'visible',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否默认显示color-select',
            'en-US': 'Is color select displayed by default'
          },
          demoId: 'default-visible'
        },
        {
          name: 'alpha',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用alpha选择',
            'en-US': 'enable alpha select or not'
          },
          demoId: 'enable-alpha'
        }
      ],
      'events': [
        {
          name: 'confirm',
          type: '(hex:string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '按下确认时触发该事件',
            'en-US': 'When click confirm will trigger confirm event'
          },
          demoId: 'event'
        },
        {
          name: 'cancel',
          type: '()=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '按下取消或点击外部的时触发该事件',
            'en-US': 'When click cancel or click out-side will trigger cancel event'
          },
          demoId: 'event'
        }
      ],
      'slots': []
    }
  ]
}
