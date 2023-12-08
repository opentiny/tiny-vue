export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '通过<code>visible</code>设置显示色彩选择面板。',
        'en-US': 'Set the display color selection panel through<code>visible</code>.'
      },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'alpha',
      'name': { 'zh-CN': '透明度', 'en-US': 'Alpha' },
      'desc': {
        'zh-CN': '通过<code>alpha</code>设置透明度选择。',
        'en-US': 'Set transparency selection through<code>alpha</code>.'
      },
      'codeFiles': ['alpha.vue']
    },
    {
      'demoId': 'event',
      'name': { 'zh-CN': '事件触发', 'en-US': 'event' },
      'desc': {
        'zh-CN': '通过点击确认时触发<code>confirm</code>事件, 取消时触发<code>cancel</code>事件。',
        'en-US':
          'When click confirm will trigger confirm event. When click outside or cancel will trigger cancel event.'
      },
      'codeFiles': ['event.vue']
    },
    {
      'demoId': 'history',
      'name': { 'zh-CN': '历史记录', 'en-US': 'history' },
      'desc': {
        'zh-CN':
          '当<code>history</code>不为<code>undefined</code>时, 将会启用历史记录功能。当用户点击确认时, 将会自动将颜色插入到<code>history</code>用户行为会更改历史记录, 外部可以更改历史记录。',
        'en-US':
          'When <code>history</code> is not <code>undefined</code>, the history function will be enabled. When the user clicks confirm, the color will automatically be inserted into the <code>history</code> User behavior can change history, and external users can also change history.'
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
        'zh-CN': '通过<code>predefine</code>预定义颜色值，用户行为不会更改预定义颜色, 但外部可以更改。',
        'en-US':
          'By<code>predefine</code>predefined color values, user behavior does not change the predefined colors, but they can be changed externally.'
      },
      'codeFiles': ['predefine.vue']
    }
  ],
  apis: [
    {
      'name': 'color select panel',
      'type': 'component',
      'props': [
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
          }
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
        },
        {
          name: 'history',
          type: 'string[] | undefined',
          defaultValue: 'undefined',
          desc: {
            'zh-CN': '时候启用历史记录',
            'en-US': 'enable history or not'
          },
          demoId: 'history'
        },
        {
          name: 'predefine',
          type: 'string[] | undefined',
          defaultValue: 'undefined',
          desc: {
            'zh-CN': '时候启用历史记录',
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
        },
        {
          name: 'color-update',
          type: '(color:Color) => void',
          defaultValue: '',
          desc: {
            'zh-cn': '当颜色更新的时候会触发该事件，包括：点击预定义颜色、点击历史记录',
            'en-US': 'when click predefine color or history, will trigger color-update event'
          }
        }
      ],
      'slots': []
    }
  ]
}
