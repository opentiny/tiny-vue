export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '通过引用组件标签，<code>v-model</code>绑定数据即可。',
        'en-US': 'By referencing component tags,<code>v model</code>bind data.'
      },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸设置', 'en-US': 'Size Setting' },
      'desc': {
        'zh-CN':
          '通过<code>size</code>属性设置<code>large</code><code>medium</code><code>small</code><code>mini</code>四种不同大小尺寸。不设置时为默认尺寸。',
        'en-US':
          'Set the size attribute to four different sizes: <code>large</code>, <code>medium</code>, <code>small</code>, and <code>mini</code>. Default size when not set'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'event',
      'name': { 'zh-CN': '事件触发', 'en-US': 'eventing' },
      'desc': {
        'zh-CN': '通过点击确认时触发<code>confirm</code>事件, 取消时触发<code>cancel</code>事件。',
        'en-US':
          'When click confirm will trigger <code>confirm</code>event. When click outside or cancel will trigger <code>cancel</code> event.'
      },
      'codeFiles': ['event.vue']
    },
    {
      'demoId': 'enable-alpha',
      'name': { 'zh-CN': 'Alpha', 'en-US': 'Alpha' },
      'desc': { 'zh-CN': '<code>Alpha</code>选择。', 'en-US': '<code>Alpha</code>select.' },
      'codeFiles': ['alpha.vue']
    },
    {
      'demoId': 'history',
      'name': { 'zh-CN': '历史记录', 'en-US': 'history' },
      'desc': {
        'zh-CN':
          '当<code>history</code>不为<code>undefined</code>时, 将会启用历史记录功能。当用户点击确认时, 将会自动将颜色插入到<code>history</code>. 用户行为会更改历史记录, 外部可以更改历史记录。',
        'en-US':
          'When <code>history</code> is not <code>undefined</code>, the history function will be enabled. When the user clicks confirm, the color will automatically be inserted into the <code>history</code> User behavior can change history, and external users can also change history.'
      },
      'codeFiles': ['history.vue']
    },
    {
      'demoId': 'predefine',
      'name': {
        'zh-CN': '预定义颜色',
        'en-US': 'Predefine color'
      },
      'desc': {
        'zh-CN': '通过<code>predefine</code>预定义颜色值，用户行为不会更改预定义颜色, 但外部可以更改。',
        'en-US':
          'By<code>predefine</code>predefined color values, user behavior does not change the predefined colors, but they can be changed externally.'
      },
      'codeFiles': ['predefine.vue']
    },
    {
      'demoId': 'default-visible',
      'name': { 'zh-CN': '默认显示', 'en-US': 'default-visible' },
      'desc': {
        'zh-CN':
          '当<code>visible</code>为<code>true</code>时, 将会默认显示<code>color-select</code>。 <code>visible</code>是响应式的, 所以你可以强制控制<code>color-select</code>的状态。当<code>visible</code>切换的时候, 会触发<code>cancel</code>事件。',
        'en-US':
          'If <code>visible</code> is true the <code>color-select</code> will show. The visible prop is reactive so you can force change <code>color-select</code> show or not. When change <code>visible</code> will trigger <code>cancel</code> event.'
      },
      'codeFiles': ['default-visible.vue']
    },
    {
      'demoId': 'dynamic-color-change',
      'name': { 'zh-CN': '颜色动态切换', 'en-US': 'dynamic-color-change' },
      'desc': {
        'zh-CN': '通过动态切换<code>color</code>属性, 以满足各种需求。',
        'en-US': 'Can dynamically switch <code>color</code> attributes to meet various needs.'
      },
      'codeFiles': ['dynamic-color-change.vue']
    }
  ],
  apis: [
    {
      'name': 'color-picker',
      'type': 'component',
      'props': [
        {
          'name': 'modelValue',
          'type': 'string',
          'defaultValue': `'transparent'`,
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
            'en-US':
              'Define color-picker dimensions; The optional values for this attribute are large/medium/small/mini'
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
