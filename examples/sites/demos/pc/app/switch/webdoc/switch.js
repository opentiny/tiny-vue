export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>通过 <code>v-model</code> 绑定开关值。</p>',
        'en-US': '<p>Bind switch values through <code>v model</code> .</p>'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'mini-mode',
      'name': { 'zh-CN': '迷你尺寸', 'en-US': 'Mini Size' },
      'desc': {
        'zh-CN': '<p>通过 <code>mini</code> 设置小尺寸开关。</p>',
        'en-US': '<p>Set small size switches through <code>mini</code> .'
      },
      'codeFiles': ['mini-mode.vue']
    },
    {
      'demoId': 'custom-open-close',
      'name': { 'zh-CN': '自定义开关显示', 'en-US': 'Customized switch display' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>show-text</code> 配置是否显示开关文本，默认文本为 <code>ON</code> 和 <code>OFF</code> 。开启配置后，可以使用具名插槽 <code>open</code> 和 <code>close</code> 自定义开关内容。</p>',
        'en-US':
          '<p>Configure whether to display switch text through <code>show text</code> . The default text is <code>ON</code> and <code>OFF</code> . After enabling the configuration, you can customize the switch content using named slots <code>open</code> and <code>close</code> .</p>'
      },
      'codeFiles': ['custom-open-close.vue']
    },
    {
      'demoId': 'before-change',
      'name': { 'zh-CN': '变更前置处理', 'en-US': 'Before change' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>before-change</code> 设置开关变化前置处理逻辑，参数为一个回调函数，调用后完成变更。</p>',
        'en-US':
          '<p>By setting the pre processing logic for switch changes through <code>before change</code> , the parameter is a callback function that completes the change after being called. </p>'
      },
      'codeFiles': ['before-change.vue']
    },
    {
      'demoId': 'event-change',
      'name': { 'zh-CN': '变更事件', 'en-US': 'Event change' },
      'desc': {
        'zh-CN': '<p>当开关值变化后，会触发 <code>change</code> 事件。</p>',
        'en-US': '<p>When the switch value changes, the <code>change</code> event will be triggered.</p>'
      },
      'codeFiles': ['event-change.vue']
    },
    {
      'demoId': 'custom-true-false-value',
      'name': { 'zh-CN': '自定义开关取值', 'en-US': 'User-defined switch value' },
      'desc': {
        'zh-CN': '<p>通过 <code>true-label</code> 设置开关开启时的值， <code>false-label</code> 设置关闭时的值。</p>',
        'en-US':
          '<p>Set the value when the switch is turned on by <code>true label</code> , and set the value when it is turned off by <code>false label</code> . </p>'
      },
      'codeFiles': ['custom-true-false-value.vue']
    },
    {
      'demoId': 'dynamic-disable',
      'name': { 'zh-CN': '禁用状态', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 设置开关禁用状态。</p>',
        'en-US': '<p>Set the switch disable status through <code>disabled</code> . </p>'
      },
      'codeFiles': ['dynamic-disable.vue']
    }
  ],
  apis: [
    {
      'name': 'switch',
      'type': 'component',
      'props': [
        {
          'name': 'before-change',
          'type': '(done: () => void) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '开关值变化前置处理，详见demo',
            'en-US': 'Pre processing of switch value changes, See demo for details'
          },
          'demoId': 'before-change'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否禁用',
            'en-US': 'Disable'
          },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'false-value',
          'type': 'boolean | string | number',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': 'switch 关闭时的值',
            'en-US': 'Value when switch is disabled'
          },
          'demoId': 'custom-true-false-value'
        },
        {
          'name': 'mini',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置是否显示为 mini 模式，mini 模式下不会显示 slot 的内容',
            'en-US': 'Sets whether to display in mini mode. In mini mode, the content of the slot is not displayed'
          },
          'demoId': 'mini-mode'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'boolean | string | number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '开关绑定值',
            'en-US': 'Switch bind value'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'show-text',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': 'switch 是否显示内容里面的文字',
            'en-US': 'Switch whether to display the text in the content'
          },
          'demoId': 'custom-open-close'
        },
        {
          'name': 'true-value',
          'type': 'boolean | string | number',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': 'switch 打开时的值',
            'en-US': 'Value when switch is enabled'
          },
          'demoId': 'custom-true-false-value'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '(value: boolean | string | number) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'switch发生变化的回调函数',
            'en-US': 'Callback function for switch changes'
          },
          'demoId': 'event-change'
        }
      ],
      'slots': [
        {
          'name': 'close',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '关闭内容',
            'en-US': 'Close Content'
          },
          'demoId': 'custom-open-close'
        },
        {
          'name': 'open',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '开启内容',
            'en-US': 'Enable Content'
          },
          'demoId': 'custom-open-close'
        }
      ]
    }
  ]
}
