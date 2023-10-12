export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基础用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p><code>v-modal：</code> 绑定值 <br/><code>type：</code> 类型，可选值为 <code>IPv4</code>, <code>IPv6</code> ，默认为 <code>IPv6</code>。</p>\n',
        'en-US':
          '<p><code>v-modal: </code>Binding value <br/><code>type: </code>Type: </code>Type. The options are IPv4 or IPv6. The default value is <code>IPv6</code>. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'delimiter',
      'name': { 'zh-CN': '分隔符', 'en-US': 'Delimiter' },
      'desc': {
        'zh-CN': '<p>可通过 <code>delimiter</code> 属性设置分隔符(图标类)或通过默认插槽设置分隔符。</p>\n',
        'en-US':
          '<p>The delimiter can be set through the <code>delimiter</code> property (icon class) or through the default slot. </p>\n'
      },
      'codeFiles': ['delimiter.vue']
    },
    {
      'demoId': 'readonly',
      'name': { 'zh-CN': '文本只读', 'en-US': 'Read-only text' },
      'desc': {
        'zh-CN': '<p>通过 <code>readonly</code> 属性设置文本的只读行，默认为 false 。</p>\n',
        'en-US':
          '<p>Use the <code>readonly</code> attribute to set the read-only line of the text. The default value is false. </p>\n'
      },
      'codeFiles': ['readonly.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 属性设置文本是否禁用，默认为 false。</p>\n',
        'en-US':
          '<p>The <code>disabled</code> attribute is used to set whether to disable text. The default value is false. </p>\n'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Text box size' },
      'desc': {
        'zh-CN': '<p>可设置为<code>medium</code>，<code>small</code>，<code>mini</code></p>\n',
        'en-US': '<p> can be set to <code>medium</code>, <code>small</code>, <code>mini</code></p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'focus',
      'name': { 'zh-CN': 'focus 事件', 'en-US': 'focus event' },
      'desc': {
        'zh-CN': '<p>文本框获取焦点时触发 <code>focus</code> 事件。</p>\n',
        'en-US': 'The <code>focus</code> event is triggered when the text box obtains the focus. </p>\n'
      },
      'codeFiles': ['focus.vue']
    },
    {
      'demoId': 'blur',
      'name': { 'zh-CN': 'blur 事件', 'en-US': 'blur event' },
      'desc': {
        'zh-CN': '<p>文本框失去焦点时触发 <code>blur</code> 事件。</p>\n',
        'en-US': 'The <code>blur</code> event is triggered when the text box loses focus. </p>\n'
      },
      'codeFiles': ['blur.vue']
    },
    {
      'demoId': 'change',
      'name': { 'zh-CN': 'change 事件', 'en-US': 'change event' },
      'desc': {
        'zh-CN': '<p>文本框内容改变后触发 <code>change</code> 事件。</p>\n',
        'en-US': 'The <code>change</code> event is triggered when the text box content changes. </p>\n'
      },
      'codeFiles': ['change.vue']
    },
    {
      'demoId': 'select',
      'name': { 'zh-CN': 'select 事件', 'en-US': 'select event' },
      'desc': {
        'zh-CN': '<p>文本框内容选中时触发 <code>select</code> 事件。</p>\n',
        'en-US': 'The <code>select</code> event is triggered when the text box content is selected. </p>\n'
      },
      'codeFiles': ['select.vue']
    },
    {
      'demoId': 'input',
      'name': { 'zh-CN': 'input 事件', 'en-US': 'input event' },
      'desc': {
        'zh-CN': '<p>文本框输入时触发 <code>input</code> 事件。</p>\n',
        'en-US': 'The <code>input</code> event is triggered when a user enters a text box. '
      },
      'codeFiles': ['input.vue']
    }
  ],
  apis: [
    {
      'name': 'ip-address',
      'type': 'component',
      'properties': [
        {
          'name': 'delimiter',
          'type': 'string,object',
          'defaultValue': '该属性的默认值为 icon-dot-ipv4',
          'desc': {
            'zh-CN': "设置IP段之间的分隔符，默认为 '.' 。设置IP段之间的分隔符类名，默认为 'icon-dot-ipv4' 。",
            'en-US':
              "Set the separator between IP address segments. The default value is '. '. Set the class name of the separator between IP segments. The default value is'icon-dot-ipv4'."
          },
          'demoId': 'delimiter'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '设置文本的禁用属性，默认为 false 。',
            'en-US': 'Set the disabled attribute of the text. The default value is false.'
          },
          'demoId': 'disabled'
        },
        {
          'name': 'readonly',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '设置文本的只读属性，默认为 false 。',
            'en-US': 'Set the read-only attribute of the text. The default value is false.'
          },
          'demoId': 'readonly'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置组件大小;该属性的可选值为 medium / small / mini',
            'en-US': 'Set the component size. The optional values of this attribute are medium / small / mini'
          },
          'demoId': 'size'
        },
        {
          'name': 'type',
          'type': 'string',
          'defaultValue': '该属性的默认值为 IPv4',
          'desc': {
            'zh-CN': '设置 IpAddress 框的 类型，可选值为 IPv4 / IPv6，默认为 IPv4,',
            'en-US':
              'Sets the type attribute in the IpAddress box. The default value is IPv4 and the value can be IPv6. ;The value of this attribute can be IPv4 or IPv6'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'v-modal',
          'type': 'string',
          'defaultValue': '--',
          'desc': { 'zh-CN': '设置文本显示的默认值 。', 'en-US': 'Set the default text display value.' },
          'demoId': 'basic-usage'
        }
      ],
      'events': [
        {
          'name': 'blur',
          'type': 'Function()',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '文本框失去焦点时触发事件',
            'en-US': 'The event is triggered when the text box loses the focus;'
          },
          'demoId': 'blur'
        },
        {
          'name': 'change',
          'type': 'Function(arg1)',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '文本框内容改变后事件 ;onChange(arg1){// arg1 = value IP值}',
            'en-US': 'Value of the ;onChange(arg1){// arg1 = value IP event after the text box content is changed.}'
          },
          'demoId': 'change'
        },
        {
          'name': 'focus',
          'type': 'Function()',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '文本框获取焦点时触发事件',
            'en-US': 'This event is triggered when a text box obtains the focus. '
          },
          'demoId': 'focus'
        },
        {
          'name': 'input',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '文本框内容输入时触发事件 ;onInput(arg1, arg2){// arg1 =  value  IP地址输入框改变的值 // arg2 =  index   更改值所在IP输入框的索引}',
            'en-US':
              'When the text box content is entered, the event is triggered. The value of the ;onInput(arg1, arg2){// arg1 = value IP address text box is changed. // arg2 = index Index of the IP address text box where the value is changed. }'
          },
          'demoId': 'input'
        },
        {
          'name': 'select',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文本框内容选中时触发事件;onSelect(arg1){// arg1 =  target.value  选中框所在位置的值}',
            'en-US':
              'The event is triggered when the text box content is selected. onSelect(arg1){// arg1 = target.value Value of the check box.}'
          },
          'demoId': 'select'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': 'IP段之间的分隔符', 'en-US': 'Separator between IP address segments' },
          'demoId': 'delimiter'
        }
      ]
    }
  ]
}
