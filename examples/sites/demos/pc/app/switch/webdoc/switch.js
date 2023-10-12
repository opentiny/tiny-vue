export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'mini-mode',
      'name': { 'zh-CN': '迷你尺寸', 'en-US': 'Mini Size' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['mini-mode.vue']
    },
    {
      'demoId': 'custom-open-close',
      'name': { 'zh-CN': '自定义开关显示', 'en-US': 'Customized switch display' },
      'desc': {
        'zh-CN': '通过具名插槽 open 和 close 自定义 Switch 显示。前提是配置<code>show-text</code>为<code>true</code>',
        'en-US':
          'Customize the switch display by opening and closing named slots. The prerequisite is that <code>show-text</code> is set to <code>true</code>'
      },
      'codeFiles': ['custom-open-close.vue']
    },
    {
      'demoId': 'custom-true-false-value',
      'name': { 'zh-CN': '自定义开关取值', 'en-US': 'User-defined switch value' },
      'desc': {
        'zh-CN':
          '<p><code>false-value</code> 属性表示的是关闭时取付给 <code>false-value</code> 的值。\n<code>true-value</code> 属性表示的是开启时取付给 <code>true-value</code> 的值,v-model里定义的属性名是 <code>value</code> 时就能拿的到 <code>true-value</code> 或<code>false-value</code> 里的值。</p>\n',
        'en-US':
          'The <p><code>false-value</code> property represents the value that is paid to <code>false-value</code> when closed. \n<code>true-value</code> The attribute represents the value paid to <code>true-value</code> when enabled. If the attribute name defined in v-model is <code>value</code>, the value in <code>true-value</code> or <code>false-value</code> can be obtained. </p>\n'
      },
      'codeFiles': ['custom-true-false-value.vue']
    },
    {
      'demoId': 'dynamic-disable',
      'name': { 'zh-CN': '禁用状态', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p><code>disable</code> 属性表示的是当前状态是无法被使用的，默认值为false(true/false)。</p>\n',
        'en-US':
          'The <p><code>disable</code> attribute indicates that the current state cannot be used. The default value is false (true/false). </p>\n'
      },
      'codeFiles': ['dynamic-disable.vue']
    }
  ],
  apis: [
    {
      'name': 'switch',
      'type': 'component',
      'properties': [
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Disable' },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'false-value',
          'type': 'boolean , string , number',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': 'switch 关闭时的值', 'en-US': 'Value when switch is disabled' },
          'demoId': 'custom-true-false-value'
        },
        {
          'name': 'true-value',
          'type': 'boolean , string , number',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': 'switch 打开时的值', 'en-US': 'Value when switch is enabled' },
          'demoId': 'custom-true-false-value'
        },
        {
          'name': 'show-text',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': 'switch 是否显示内容里面的文字',
            'en-US': 'Switch whether to display the text in the content.'
          },
          'demoId': 'custom-open-close'
        },
        {
          'name': 'mini',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '设置是否显示为 mini 模式。mini 模式下不会显示 slot 的内容。',
            'en-US': 'Sets whether to display in mini mode. In mini mode, the content of the slot is not displayed.'
          },
          'demoId': 'mini-mode'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'boolean , string , number',
          'defaultValue': '',
          'desc': { 'zh-CN': '绑定值', 'en-US': 'Bound Value' },
          'demoId': 'basic-usage'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': 'switch发生变化的回调函数', 'en-US': 'Callback function for switch changes' },
          'demoId': 'enent'
        }
      ],
      'slots': [
        {
          'name': 'open',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '开启内容', 'en-US': 'Enable Content' },
          'demoId': 'custom-open-close'
        },
        {
          'name': 'close',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '关闭内容', 'en-US': 'Close Content' },
          'demoId': 'custom-open-close'
        }
      ]
    }
  ]
}
