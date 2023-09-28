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
      'demoId': 'alpha',
      'name': {'zh-CN': '透明度', 'en-US': 'Alpha'},
      'desc': {'zh-CN': '透明度选择', 'en-US': 'Alpha select.'},
      'codeFiles': ['alpha.vue']
    },
    {
      'demoId': 'event',
      'name': { 'zh-CN': '事件触发', 'en-US': 'event' },
      'desc': { 'zh-CN': '点击确认是将会触发confirm事件, 取消时触发cancel事件', 'en-US': 'When click confirm will trigger confirm event. When click outside or cancel will trigger cancel event' },
      'codeFiles': ['event.vue']
    },
    {
      'demoId': 'history',
      'name': { 'zh-CN': '历史记录', 'en-US': 'history' },
      'desc': { 'zh-CN': '点击确认是将会触发confirm事件, 取消时触发cancel事件', 'en-US': 'When click confirm will trigger confirm event. When click outside or cancel will trigger cancel event' },
      'codeFiles': ['history.vue']
    },
  ],
  apis: [
    {
      'name': 'color select panel',
      'type': 'component',
      'properties': [
        {
          name: 'modelValue',
          type: 'String',
          defaultValue: 'transparent',
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
            'zh-CN': '是否默认显示color select panel',
            'en-US': 'Is color select panel displayed by default'
          },
        },
        {
          name: 'alpha',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用alpha选择',
            'en-US': 'enable alpha select or not'
          },
          demoId: 'alpha'
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
