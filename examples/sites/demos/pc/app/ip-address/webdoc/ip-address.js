export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基础用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>v-model</code> 设置绑定值， <code>type</code> 设置类型，可选值为 <code>IPv4</code> ， <code>IPv6</code> ，默认为 <code>ipv4</code> 。</p>',
        'en-US':
          '<p>Set the binding value through <code>v-model</code> , and set the type through <code>type</code> . The optional values are <code>IPv4</code> , <code>IPv6</code> , and the default is <code>ipv4</code> .</p>'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'delimiter',
      'name': { 'zh-CN': '分隔符', 'en-US': 'Delimiter' },
      'desc': {
        'zh-CN': '<p>通过 <code>delimiter</code> 设置分隔符(图标类)，或通过默认插槽设置分隔符。</p>',
        'en-US':
          '<p>The delimiter can be set through the <code>delimiter</code> property (icon class) or through the default slot. </p>'
      },
      'codeFiles': ['delimiter.vue']
    },
    {
      'demoId': 'readonly',
      'name': { 'zh-CN': '文本只读', 'en-US': 'Read-only text' },
      'desc': {
        'zh-CN': '<p>通过 <code>readonly</code> 设置文本的只读行，默认为 false 。</p>',
        'en-US': '<p>Use the <code>readonly</code> attribute to set the read-only line of the text </p>'
      },
      'codeFiles': ['readonly.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 设置文本是否禁用，默认为 false。</p>',
        'en-US': '<p>The <code>disabled</code> attribute is used to set whether to disable text </p>'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Text box size' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>size</code> 设置尺寸，可选值有 <code>medium</code> ， <code>small</code> ， <code>mini</code> 。</p>',
        'en-US':
          '<p>Set the size through <code>size</code> , and the optional values are <code>medium</code> , <code>small</code> , <code>mini</code> .</p>'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'focus',
      'name': { 'zh-CN': 'focus 事件', 'en-US': 'focus event' },
      'desc': {
        'zh-CN': '<p>文本框获取焦点时触发 <code>focus</code> 事件。</p>',
        'en-US': 'The <code>focus</code> event is triggered when the text box obtains the focus. </p>'
      },
      'codeFiles': ['focus.vue']
    },
    {
      'demoId': 'blur',
      'name': { 'zh-CN': 'blur 事件', 'en-US': 'blur event' },
      'desc': {
        'zh-CN': '<p>文本框失去焦点时触发 <code>blur</code> 事件。</p>',
        'en-US': 'The <code>blur</code> event is triggered when the text box loses focus. </p>'
      },
      'codeFiles': ['blur.vue']
    },
    {
      'demoId': 'change',
      'name': { 'zh-CN': 'change 事件', 'en-US': 'change event' },
      'desc': {
        'zh-CN': '<p>文本框内容改变后触发 <code>change</code> 事件。</p>',
        'en-US': 'The <code>change</code> event is triggered when the text box content changes. </p>'
      },
      'codeFiles': ['change.vue']
    },
    {
      'demoId': 'select',
      'name': { 'zh-CN': 'select 事件', 'en-US': 'select event' },
      'desc': {
        'zh-CN': '<p>文本框内容选中时触发 <code>select</code> 事件。</p>',
        'en-US': 'The <code>select</code> event is triggered when the text box content is selected. </p>'
      },
      'codeFiles': ['select.vue']
    },
    {
      'demoId': 'input',
      'name': { 'zh-CN': 'input 事件', 'en-US': 'input event' },
      'desc': {
        'zh-CN': '<p>文本框输入时触发 <code>input</code> 事件。</p>',
        'en-US': 'The <code>input</code> event is triggered when a user enters a text box. '
      },
      'codeFiles': ['input.vue']
    }
  ],
  apis: [
    {
      'name': 'ip-address',
      'type': 'component',
      'props': [
        {
          'name': 'delimiter',
          'type': 'string | Component',
          'defaultValue': 'icon-dot-ipv4',
          'desc': {
            'zh-CN': '设置IP段之间的分隔符，默认图标icon-dot-ipv4',
            'en-US': 'Set the separator between IP segments, default icon is icon-dot-ipv4'
          },
          'demoId': 'delimiter'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置文本的禁用属性',
            'en-US': 'Set the disabled attribute of the text'
          },
          'demoId': 'disabled'
        },
        {
          'name': 'readonly',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置文本的只读属性',
            'en-US': 'Set the read-only attribute of the text'
          },
          'demoId': 'readonly'
        },
        {
          'name': 'size',
          'type': 'medium | small | mini',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置组件大小',
            'en-US': 'Set the component size'
          },
          'demoId': 'size'
        },
        {
          'name': 'type',
          'type': 'IPv4 | IPv6',
          'defaultValue': 'IPv4',
          'desc': {
            'zh-CN': '设置 IpAddress 框的 类型',
            'en-US': 'Sets the type attribute in the IpAddress box'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'v-model',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置地址输入框的绑定值',
            'en-US': 'Set the binding value of the address input box'
          },
          'demoId': 'basic-usage'
        }
      ],
      'events': [
        {
          'name': 'blur',
          'type': '(value: string, index: number) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文本框失去焦点时触发事件',
            'en-US': 'The event is triggered when the text box loses the focus'
          },
          'demoId': 'blur'
        },
        {
          'name': 'change',
          'type': '(value: string) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文本框内容改变后事件',
            'en-US': 'Event after changing the content of the text box'
          },
          'demoId': 'change'
        },
        {
          'name': 'focus',
          'type': '(value: string, index: number) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文本框获取焦点时触发事件',
            'en-US': 'This event is triggered when a text box obtains the focus'
          },
          'demoId': 'focus'
        },
        {
          'name': 'input',
          'type': '(event: InputEvent) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文本框内容输入时触发事件',
            'en-US': 'Trigger event when entering text box content'
          },
          'demoId': 'input'
        },
        {
          'name': 'select',
          'type': '(value: string, index: number) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文本框内容选中时触发事件',
            'en-US': 'Trigger event when text box content is selected'
          },
          'demoId': 'select'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '默认插槽，自定义IP段之间的分隔符',
            'en-US': 'Separator between IP address segments'
          },
          'demoId': 'delimiter'
        }
      ]
    }
  ]
}
