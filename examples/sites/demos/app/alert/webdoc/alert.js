export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '通过 <code>type</code> 设置不同的类型 可选值：success、warning、info、error，默认值：success。<br> 通过 <code>description</code> 属性或插槽设置自定义提示内容。',
        'en-US':
          'Set different types through <code>type</code>. The options are success, warning, info, and error. The default value is success. <br/> You can customize the prompt content through the <code>description</code> attribute or slot. '
      },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Size' },
      'desc': {
        'zh-CN': '<p>通过 <code>size</code> 属性设置不同的尺寸，可选值：nomal、large，默认值：nomal 。</p>\n',
        'en-US':
          '<p>Set different sizes through the <code>size</code> attribute. The options are nomal and large. The default value is nomal. </p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'title',
      'name': { 'zh-CN': '自定义标题', 'en-US': 'Custom Title' },
      'desc': {
        'zh-CN':
          '<p>当 <code>size</code> 为 large 时显示标题，可设置 <code>title</code> 或 <code>title</code> 插槽自定义标题。默认标题根据设置的 <code>type</code> 显示。</p>\n',
        'en-US':
          '<p>When <code>size</code> is set to large, the title is displayed. You can set <code>title</code> or <code>slot</code> to customize the title. The default title is displayed according to the set <code>type</code>. </p>\n'
      },
      'codeFiles': ['title.vue']
    },
    {
      'demoId': 'center',
      'name': { 'zh-CN': '文字居中', 'en-US': 'Center text' },
      'desc': {
        'zh-CN': '<p>通过 <code>center</code> 属性可使文字显示居中。</p>\n',
        'en-US': '<p>You can use the <code>center</code> property to center the text. </p>\n'
      },
      'codeFiles': ['center.vue']
    },
    {
      'demoId': 'icon',
      'name': { 'zh-CN': '自定义警告图标', 'en-US': 'Customized warning icon' },
      'desc': {
        'zh-CN': '<p>通过 <code>icon</code> 属性自定义图标。</p>\n',
        'en-US': '<p>Customize the icon through the <code>icon</code> attribute. </p>\n'
      },
      'codeFiles': ['icon.vue']
    },
    {
      'demoId': 'slot-default',
      'name': { 'zh-CN': '自定义交互操作', 'en-US': 'Customized Interaction' },
      'desc': {
        'zh-CN': '<p>当 <code>size</code> 为 large 时，设置默认插槽自定义交互操作。</p>\n',
        'en-US': '<p>When <code>size</code> is large, set the default slot custom interaction operation. </p>\n'
      },
      'codeFiles': ['slot-default.vue']
    },
    {
      'demoId': 'show-icon',
      'name': { 'zh-CN': '是否显示图标', 'en-US': 'Display icon' },
      'desc': {
        'zh-CN': '<p>通过配置 <code>show-icon</code> 属性，控制图标是否显示。</p>\n',
        'en-US': '<p>You can set the <code>show-icon</code> attribute to control whether to display the icon. </p>\n'
      },
      'codeFiles': ['show-icon.vue']
    },
    {
      'demoId': 'custom-close',
      'name': { 'zh-CN': '关闭按钮', 'en-US': 'custom close button' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>closable</code> 属性可设置是否显示关闭按钮，没有关闭按钮，警告框将不可关闭。<br/>通过配置 <code>close</code> 插槽自定义关闭按钮,当 <code>closable</code> 属性为false时有效 <br/> 通过属性 <code>close-text</code> 自定义关闭按钮文本。</p>\n',
        'en-US':
          'You can set whether to display the close button through the <code>closable</code> attribute. If there is no close button, the warning box cannot be closed. <br/> Customize the close button by configuring the <code>close</code> slot. This parameter is valid when the <code>closable</code> attribute is false.<br/> Customize the close button text through the <code>close-text</code> attribute.'
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
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '文字是否居中', 'en-US': 'Whether the text is centered' },
          'demoId': 'center'
        },
        {
          'name': 'closable',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '设置警告是否可以关闭', 'en-US': 'Set whether alarms can be disabled.' },
          'demoId': 'custom-close'
        },
        {
          'name': 'close-text',
          'type': 'string',
          'defaultValue': '--',
          'desc': { 'zh-CN': '关闭按钮自定义文本', 'en-US': 'Customized text of the close button' },
          'demoId': 'custom-close'
        },
        {
          'name': 'description',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置警告的提示内容，默认为空;',
            'en-US': 'Set the warning prompt content. The default value is null.'
          },
          'demoId': 'base'
        },
        {
          'name': 'icon',
          'type': 'string , object',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置警告的图标，默认会根据 type 值自动使用对应图标',
            'en-US':
              'Set the alarm icon. By default, the corresponding icon is automatically used based on the value of type.'
          },
          'demoId': 'icon'
        },
        {
          'name': 'show-icon',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否显示图标', 'en-US': 'Display icon' },
          'demoId': 'show-icon'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '该属性的默认值为 normal',
          'desc': {
            'zh-CN': '设置警告的大小 nomal/large， 缺省为 nomal。;该属性的可选值为 nomal / large',
            'en-US':
              'Set the warning size to nomal or large. The default value is nomal. ;The value of this attribute can be nomal or large'
          },
          'demoId': 'size'
        },
        {
          'name': 'title',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置警告的标题，在 size 为 large 时有效，默认根据 type 自动设置',
            'en-US':
              'Set the warning title. This parameter is valid only when size is set to large. By default, the alarm title is automatically set based on type.'
          },
          'demoId': 'title'
        },
        {
          'name': 'type',
          'type': 'string',
          'defaultValue': '该属性的默认值为 success',
          'desc': {
            'zh-CN': '设置警告的类型;该属性的可选值为 success/warning/info/error',
            'en-US': 'Set the alarm type. The value of this attribute can be success / warning / info / error'
          },
          'demoId': 'base'
        }
      ],
      'events': [
        {
          'name': 'close',
          'type': 'Function()',
          'defaultValue': '--',
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
          'desc': { 'zh-CN': '自定义关闭按钮，当 closable 属性为 false 时有效', 'en-US': '' },
          'demoId': 'custom-close'
        },
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '组件默认插槽', 'en-US': 'Default slot of the component' },
          'demoId': 'slot-default'
        },
        {
          'name': 'description',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '提示内容', 'en-US': 'Prompt Content' },
          'demoId': 'base'
        },
        {
          'name': 'title',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '标题的内容', 'en-US': 'Title content' },
          'demoId': 'title'
        }
      ]
    }
  ]
}
