export default {
  column: '2',
  owner: '',
  show: true,
  cloud: false,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'placeholder',
      name: {
        'zh-CN': '提示占位文本',
        'en-US': 'Prompt Placeholder Text'
      },
      desc: {
        'zh-CN': '<p><code>placeholder</code> 属性的值为 <code>string</code> 此属性会把值默认显示到输入框中。</p>\n',
        'en-US':
          'The value of the <p><code>placeholder</code> attribute is <code>string</code>. This attribute displays the value in the text box by default. </p>\n'
      },
      codeFiles: ['placeholder.vue']
    },
    {
      demoId: 'readonly',
      name: {
        'zh-CN': '只读',
        'en-US': 'Read-only'
      },
      desc: {
        'zh-CN': '<p>通过 <code>readonly</code> 设置是否只读。</p>\n',
        'en-US': '<p>You can use <code>readonly</code> to set whether to read only. </p>\n'
      },
      codeFiles: ['readonly.vue']
    },
    {
      demoId: 'separtor',
      name: {
        'zh-CN': '分隔符',
        'en-US': 'Separator'
      },
      desc: {
        'zh-CN': '<p>通过 <code>separtor</code> 设置分隔符，在文本框中输入回车就是分隔符的位置。</p>\n',
        'en-US':
          '<p>You can use <code>separtor</code> to set the separator. Enter the position of the separator in the text box and press Enter. </p>\n'
      },
      codeFiles: ['separtor.vue']
    },
    {
      demoId: 'modelValue',
      name: {
        'zh-CN': '绑定值',
        'en-US': 'Bound Value'
      },
      desc: {
        'zh-CN': '<p>通过 <code>modelValue</code> 或 <code>v-model</code> 设置绑定值。</p>\n',
        'en-US': '<p>You can set the binding value using <code>modelValue</code> or <code>v-model</code>. </p>\n'
      },
      codeFiles: ['modelValue.vue']
    },
    {
      demoId: 'clear-value',
      name: {
        'zh-CN': '清除 value 值',
        'en-US': 'Clear value'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['clear-modelValue.vue']
    },
    {
      demoId: 'width',
      name: {
        'zh-CN': '宽度',
        'en-US': 'Width'
      },
      desc: {
        'zh-CN': '<p>通过 <code>width</code> 设置宽度。</p>\n',
        'en-US': '<p>You can set the width through <code>width</code>. </p>\n'
      },
      codeFiles: ['width.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 modelValue 或 v-model 设置绑定值，通过 placeholder 设置提示占位文本。',
      cloud: {
        value: false
      },
      apis: ['modelValue', 'v-model', 'placeholder'],
      demos: ['basic-usage', 'modelValue', 'placeholder']
    },
    {
      id: 'readonly',
      name: '只读',
      support: {
        value: true
      },
      description: '通过 readonly 设置是否只读。',
      cloud: {
        value: false
      },
      apis: ['readonly'],
      demos: ['readonly']
    },
    {
      id: 'separator',
      name: '分隔符',
      support: {
        value: true
      },
      description: '通过 separator 设置分隔符，在文本框中输入回车就是分隔符的位置。',
      cloud: {
        value: false
      },
      apis: ['separator'],
      demos: ['separtor']
    },
    {
      id: 'width',
      name: '宽度',
      support: {
        value: true
      },
      description: '通过 width 设置宽度。',
      cloud: {
        value: false
      },
      apis: ['width'],
      demos: ['width']
    }
  ]
}
