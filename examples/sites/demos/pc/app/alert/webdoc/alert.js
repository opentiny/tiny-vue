export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>description</code> 属性或者 <code>description</code> 插槽来设置提示内容，通过 <code>type</code> 设置不同的类型。</p>',
        'en-US':
          '<p>Set the prompt content through the <code>description</code> attribute or <code>description</code> slot, and set different types through <code>type</code> . </p>'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Size' },
      'desc': {
        'zh-CN': '<p>通过 <code>size</code> 设置不同的尺寸，可选值： <code>normal、large</code> 。</p>',
        'en-US':
          '<p>Set different sizes through <code>size</code> , with optional values: <code>normal, large</code> . </p>'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'title',
      'name': { 'zh-CN': '自定义标题', 'en-US': 'Custom Title' },
      'desc': {
        'zh-CN':
          '<p>当 <code>size</code> 为 <code>large</code> 时，通过 <code>title</code> 属性 或 <code>title</code> 插槽自定义标题。如不设置，默认标题根据对应的 <code>type</code> 显示。</p>',
        'en-US':
          '<p>When <code>size</code> is set to large, the title is displayed. You can set <code>title</code> or <code>slot</code> to customize the title. The default title is displayed according to the set <code>type</code> . </p>'
      },
      'codeFiles': ['title.vue']
    },
    {
      'demoId': 'center',
      'name': { 'zh-CN': '文字居中', 'en-US': 'Center text' },
      'desc': {
        'zh-CN': '<p>通过 <code>center</code> 设置文字显示居中。</p>',
        'en-US': '<p>You can use the <code>center</code> property to center the text. </p>'
      },
      'codeFiles': ['center.vue']
    },
    {
      'demoId': 'icon',
      'name': { 'zh-CN': '自定义警告图标', 'en-US': 'Customized warning icon' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>icon</code> 设置自定义图标，默认会根据不同的 <code>type</code> 的值自动使用对应图标。</p>',
        'en-US':
          '<p>By setting custom icons through <code>icon</code> , the corresponding icons will be automatically used by default based on different <code>type</code> values.</p>'
      },
      'codeFiles': ['icon.vue']
    },
    {
      'demoId': 'slot-default',
      'name': { 'zh-CN': '自定义交互操作', 'en-US': 'Customized Interaction' },
      'desc': {
        'zh-CN': '<p>当 <code>size</code> 为 <code>large</code> 时，通过默认插槽自定义交互操作。</p>',
        'en-US':
          '<p>When <code>size</code> is <code>large</code> , set the default slot custom interaction operation. </p>'
      },
      'codeFiles': ['slot-default.vue']
    },
    {
      'demoId': 'show-icon',
      'name': { 'zh-CN': '是否显示图标', 'en-US': 'Display icon' },
      'desc': {
        'zh-CN': '<p>通过 <code>show-icon</code> 设置左侧图标是否显示。</p>',
        'en-US': '<p>Set whether the left icon is displayed by <code>show icon</code> .</p>'
      },
      'codeFiles': ['show-icon.vue']
    },
    {
      'demoId': 'custom-close',
      'name': { 'zh-CN': '关闭按钮', 'en-US': 'custom close button' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>close-text</code> 设置关闭按钮文本，关闭告警后会触发 <code>close</code> 事件。<br />通过 <code>closable</code> 设置是否显示关闭按钮，没有关闭按钮，警告框将不可关闭。<br/>通过 <code>close</code> 插槽自定义关闭按钮，仅当 <code>closable</code> 为 <code>false</code> 时插槽有效，可自定义逻辑控制组件的显示、隐藏。</p>',
        'en-US':
          'Set the close button text through <code>close text</code> < Br/>Set whether to display the close button through <code>close</code> . If there is no close button, the warning box will not be able to be closed< By customizing the close button through the <code>close</code> slot, the slot is only valid when the <code>close</code> is <code>false</code> , and the display and hiding of logic control components can be customized.'
      },
      'codeFiles': ['custom-close.vue']
    }
  ],
  apis: [
    {
      'name': 'alert',
      'type': 'component',
      'props': [
        {
          'name': 'center',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '文字是否居中',
            'en-US': 'Whether the text is centered'
          },
          'demoId': 'center'
        },
        {
          'name': 'closable',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '设置警告是否可以关闭',
            'en-US': 'Set whether alarms can be disabled.'
          },
          'demoId': 'custom-close'
        },
        {
          'name': 'close-text',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '关闭按钮自定义文本',
            'en-US': 'Customized text of the close button'
          },
          'demoId': 'custom-close'
        },
        {
          'name': 'description',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置警告的提示内容',
            'en-US': 'Set the warning prompt content'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'icon',
          'type': 'Component',
          'defaultValue': '',
          'desc': {
            'zh-CN': '传入图标组件自定义警告的图标，默认会根据 type 值自动使用对应图标',
            'en-US':
              'The icon for the custom warning of the incoming icon component will be automatically used based on the type value by default'
          },
          'demoId': 'icon'
        },
        {
          'name': 'show-icon',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否显示图标',
            'en-US': 'Display icon'
          },
          'demoId': 'show-icon'
        },
        {
          'name': 'size',
          'type': 'normal | large',
          'defaultValue': 'normal',
          'desc': {
            'zh-CN': '设置警告的大小',
            'en-US': 'Set the size of the warning'
          },
          'demoId': 'size'
        },
        {
          'name': 'title',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置警告的标题，在 size 为 large 时有效，默认会根据 type 自动设置',
            'en-US':
              'Set the warning title. This parameter is valid only when size is set to large. By default, the alarm title is automatically set based on type.'
          },
          'demoId': 'title'
        },
        {
          'name': 'type',
          'type': 'success | warning | info | error',
          'defaultValue': 'success',
          'desc': {
            'zh-CN': '设置警告的类型',
            'en-US': 'Set the alarm type'
          },
          'demoId': 'basic-usage'
        }
      ],
      'events': [
        {
          'name': 'close',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '关闭 alert 时触发的事件',
            'en-US': 'Event triggered when the alert function is disabled'
          },
          'demoId': 'custom-close'
        }
      ],
      'slots': [
        {
          'name': 'close',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义关闭内容，当 closable 属性为 false 时有效',
            'en-US': ''
          },
          'demoId': 'custom-close'
        },
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '组件默认插槽，当 size 设置为 large 后有效',
            'en-US': 'The default slot for the component is valid when size is set to large'
          },
          'demoId': 'slot-default'
        },
        {
          'name': 'description',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '提示内容',
            'en-US': 'Prompt Content'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'title',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '标题的内容，当 size 设置为 large 后有效',
            'en-US': 'The content of the title is valid when size is set to large'
          },
          'demoId': 'title'
        }
      ]
    }
  ]
}
