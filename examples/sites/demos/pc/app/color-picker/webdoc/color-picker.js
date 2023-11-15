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
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸设置', 'en-US': 'Size Setting' },
      'desc': { 'zh-CN': '通过 size 属性设置large 、medium 、small 、mini 四种不同大小尺寸。不设置时为默认尺寸。', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['size.vue']
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
      'demoId': 'history',
      'name': { 'zh-CN': '历史记录', 'en-US': 'history' },
      'desc': {
        'zh-CN': '当history不为undefined时, 将会启用历史记录功能。当用户点击确认时, 将会自动将颜色插入到history. 用户行为会更改历史记录, 外部可以更改历史记录',
        'en-US': 'When history is not undefined, the history function will be enabled. When the user clicks confirm, the color will automatically be inserted into the history User behavior can change history, and external users can also change history'
      },
      'codeFiles': ['history.vue']
    },
    {
      'demoId': 'predefine',
      'name': {
        'zh-CN': '预定义颜色',
        'en-US': 'predefine color'
      },
      'desc': {
        'zh-CN': '提供给一些定义颜色, 用户行为不会更改预定义颜色, 但外部可以更改',
        'en-US': 'Provide some defined colors, user behavior will not change the predefined colors, but can be changed externally'
      },
      'codeFiles': ['predefine.vue']
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
          name: 'size',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '定义color-picker尺寸;该属性的可选值为 large / medium / small / mini',
            'en-US': 'Define color-picker dimensions; The optional values for this attribute are large/medium/small/mini'
          },
          demoId: 'size'
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
        },
        {
          name: 'history',
          type: 'string[] | undefined',
          defaultValue: 'undefined',
          desc: {
            'zh-CN': '启用历史记录',
            'en-US': 'enable history or not'
          },
          demoId: 'history'
        },
        {
          name: 'predefine',
          type: 'string[] | undefined',
          defaultValue: 'undefined',
          desc: {
            'zh-CN': '启用预定义颜色',
            'en-US': 'enable predefine or not'
          },
          demoId: 'predefine'
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
