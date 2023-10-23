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
      'demoId': 'placeholder',
      'name': { 'zh-CN': '提示占位文本', 'en-US': 'Prompt Placeholder Text' },
      'desc': {
        'zh-CN': '<p><code>placeholder</code> 属性的值为 <code>string</code> 此属性会把值默认显示到输入框中。</p>\n',
        'en-US':
          'The value of the <p><code>placeholder</code> attribute is <code>string</code>. This attribute displays the value in the text box by default. </p>\n'
      },
      'codeFiles': ['placeholder.vue']
    },
    {
      'demoId': 'readonly',
      'name': { 'zh-CN': '只读', 'en-US': 'Read-only' },
      'desc': {
        'zh-CN': '<p>可通过 <code>readonly</code> 设置是否只读。</p>\n',
        'en-US': '<p>You can use <code>readonly</code> to set whether to read only. </p>\n'
      },
      'codeFiles': ['readonly.vue']
    },
    {
      'demoId': 'separtor',
      'name': { 'zh-CN': '分隔符', 'en-US': 'Separator' },
      'desc': {
        'zh-CN': '<p>可通过 <code>separtor</code> 设置分隔符,在文本框中输入回车就是分隔符的位置。</p>\n',
        'en-US':
          '<p>You can use <code>separtor</code> to set the separator. Enter the position of the separator in the text box and press Enter. </p>\n'
      },
      'codeFiles': ['separtor.vue']
    },
    {
      'demoId': 'value',
      'name': { 'zh-CN': '绑定值', 'en-US': 'Bound Value' },
      'desc': {
        'zh-CN': '<p>可通过 <code>value</code> 或 <code>v-model</code> 设置绑定值。</p>\n',
        'en-US': '<p>You can set the binding value using <code>value</code> or <code>v-model</code>. </p>\n'
      },
      'codeFiles': ['value.vue']
    },
    {
      'demoId': 'clear-value',
      'name': { 'zh-CN': '清除 value 值', 'en-US': 'Clear value' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['clear-value.vue']
    },
    {
      'demoId': 'width',
      'name': { 'zh-CN': '宽度', 'en-US': 'Width' },
      'desc': {
        'zh-CN': '<p>可通过 <code>width</code> 设置宽度。</p>\n',
        'en-US': '<p>You can set the width through <code>width</code>. </p>\n'
      },
      'codeFiles': ['width.vue']
    }
  ],
  apis: [
    {
      'name': 'text-popup',
      'type': 'component',
      'properties': [
        {
          'name': 'value',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '绑定值', 'en-US': 'Bound Value' },
          'demoId': 'value'
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置输入框内的提示占位文本',
            'en-US': 'Set the prompt placeholder text in the text box.'
          },
          'demoId': 'placeholder'
        },
        {
          'name': 'readonly',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '设置是否只读', 'en-US': 'Set whether to read only' },
          'demoId': 'readonly'
        },
        {
          'name': 'width',
          'type': 'number , string',
          'defaultValue': '该属性的默认值为 150',
          'desc': { 'zh-CN': '设置宽度', 'en-US': 'Set width' },
          'demoId': 'width'
        },
        {
          'name': 'separtor',
          'type': 'string',
          'defaultValue': '该属性的默认值为 ,',
          'desc': { 'zh-CN': '分隔符', 'en-US': 'Separator' },
          'demoId': 'separtor'
        }
      ],
      'events': [],
      'slots': []
    }
  ]
}
