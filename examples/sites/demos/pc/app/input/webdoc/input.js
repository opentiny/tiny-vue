export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '<p>详细用法参考如下示例</p>', 'en-US': '<p>For details, see the following example.</p>' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'clearable',
      'name': { 'zh-CN': '一键清空', 'en-US': 'Clearable' },
      'desc': {
        'zh-CN': '<p>可通过 <code>clearable</code> 属性设置输入框显示清空图标按钮</p>',
        'en-US':
          '<p>You can set the <code>clearable</code> attribute to display the clear icon button in the text box </p>'
      },
      'codeFiles': ['clearable.vue']
    },
    {
      'demoId': 'show-password',
      'name': { 'zh-CN': '密码框', 'en-US': 'Password Box' },
      'desc': {
        'zh-CN':
          '<p>当 <code>type</code> 为 <code>password</code> 时，可通过 <code>show-password</code> 属性设置输入框显示密码显示/隐藏切换图标按钮</p>\n',
        'en-US':
          '<p>When <code>type</code> is set to <code>password</code>, you can set the <code>show-password</code> attribute to display or hide the password switch button in the text box</p>\n'
      },
      'codeFiles': ['show-password.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Size' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>size</code> 属性设置尺寸大小，可选值：<code>medium / small / mini</code>。注意：只在 <code>type!="textarea"</code> 时有效</p>\n',
        'en-US':
          '<p>You can set the size through the <code>size</code> attribute. The options are as follows: <code>medium, small, and mini</code>. Note: This parameter is valid only when <code>type!="textarea"</code> is used</p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'methods',
      'name': { 'zh-CN': '实例方法', 'en-US': 'Instance Method' },
      'desc': { 'zh-CN': '可使用组件的实例方法', 'en-US': 'Instance methods for components that can be used' },
      'codeFiles': ['methods.vue']
    },
    {
      'demoId': 'input-icon',
      'name': { 'zh-CN': '图标', 'en-US': 'Icon' },
      'desc': {
        'zh-CN': '<p>可通过 <code>prefix-icon, suffix-icon</code> 属性设置输入框头部、尾部图标</p>\n',
        'en-US':
          '<p>You can set the header icon or the end icon of the text box through the <code>prefix-icon, suffix-icon</code> attribute </p>\n'
      },
      'codeFiles': ['input-icon.vue']
    },
    {
      'demoId': 'slot',
      'name': { 'zh-CN': '插槽', 'en-US': 'Slot' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>prepend, append, prefix, suffix</code> slot，设置输入框前置、后置、头部、尾部内容，注意：只对 <code>type=text</code> 有效</p>',
        'en-US':
          '<p>Configure the <code>prepend, append, prefix, suffix</code> slot. Set the front, back, header, and tail contents of the text box. Note: This parameter is valid only for <code>type=text</code></p>'
      },
      'codeFiles': ['slot.vue']
    },
    {
      'demoId': 'event',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN': `
          <p>输入框的事件，包括
            <code>input</code>(输入值时触发), 
            <code>blur</code>(失去焦点时触发), 
            <code>focus</code>(获取焦点时触发), 
            <code>change</code>(值改变时触发), 
            <code>clear</code>(清除按钮时触发)
          </p>
        `,
        'en-US': `
          <p>Event of the text box, including:
            <code>input</code> (triggered when a value is entered)
            <code>blur</code> (triggered when the focus is lost)
            <code>focus</code> (triggered when the focus is obtained)
            <code>change</code> (triggered when the value changes)
            <code>clear</code> (triggered when the button is cleared)
          </p>
        `
      },
      'codeFiles': ['event.vue']
    },
    {
      'demoId': 'rows',
      'name': { 'zh-CN': '文本域行数与宽', 'en-US': 'Lines and Width Of Textarea' },
      'desc': {
        'zh-CN': `
          <p>可通过 <code>rows</code> 属性设置文本域显示行数。注意：只在 <code>type="textarea"</code> 时有效</p>
          <p>可通过 <code>cols</code> 属性设置文本域显示宽度。注意：只在 <code>type="textarea"</code> 时有效</p>
        `,
        'en-US': `
          <p>You can set the number of lines displayed in the text field through the <code>rows</code> property. Note: This parameter is valid only when <code>text="textarea"</code> is used. </p>
          <p>You can set the width of the text field through the <code>cols</code> attribute. Note: This parameter is valid only when <code>text="textarea"</code> is used. </p>
        `
      },
      'codeFiles': ['rows.vue']
    },
    {
      'demoId': 'resize',
      'name': { 'zh-CN': '可缩放文本域', 'en-US': 'Scalable Text Field' },
      'desc': {
        'zh-CN': `
          <p>可通过 <code>resize</code> 属性设置文本域的缩放。可选值：<code>none / both / horizontal / vertical</code>。注意：只在 <code>type="textarea"</code> 时有效</p>
          <p>可通过 <code>autosize</code> 属性设置文本域自适应内容高度。可传入对象，如<code>{ minRows: 2, maxRows: 6 }</code>。注意：只对 <code>type="textarea"</code> 有效</p>
        `,
        'en-US': `
          <p>You can use the <code>resize</code> property to set the zoom of the text field. The value can be <code>none / both / horizontal / vertical</code> . Note: This parameter is valid only when <code>type="textarea"</code> is used. </p>
          <p>You can use the <code>autosize</code> attribute to set the text field to adapt to the content height. You can transfer an object, for example, <code>{minRows: 2, maxRows: 6}</code> . Note: This parameter is valid only for <code>type="textarea"</code> . </p>
        `
      },
      'codeFiles': ['resize.vue']
    },
    {
      'demoId': 'show-word-limit',
      'name': { 'zh-CN': '输入字数统计', 'en-US': 'Input Word Count' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>show-word-limit</code> 属性设置是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效</p>',
        'en-US':
          '<p>The <code>show-word-limit</code> attribute can be used to set whether to display the input word statistics, only when type = "text" or type = "textarea" is valid</p>\n'
      },
      'codeFiles': ['show-word-limit.vue']
    },
    {
      'demoId': 'counter',
      'name': { 'zh-CN': '计数器', 'en-US': 'Counter' },
      'desc': {
        'zh-CN': '<p>可通过 <code>counter</code> 属性设置显示输入框字符计数器</p>\n',
        'en-US':
          '<p>You can use the <code>counter</code> attribute to set the character counter for displaying the text box. </p>\n'
      },
      'codeFiles': ['counter.vue']
    },
    {
      'demoId': 'validate-event',
      'name': { 'zh-CN': '表单校验', 'en-US': 'Form validation triggered upon input' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>validate-event</code> 属性设置输入时触发表单校验。通过 <code>trigger</code> 配置触发校验规则的方式，为 <code>change</code> 时，当输入框值改变即触发校验，为 <code>blur</code> 时则失焦后触发校验</p>\n',
        'en-US':
          '<p>You can set the <code>validate-event</code> attribute to trigger form validation upon input. Use <code>trigger</code> to configure the mode of triggering the validation rule. If <code>change</code> is used, the validation is triggered when the value in the text box changes. If <code>blur</code> is used, the validation is triggered after the focus is lost</p>\n'
      },
      'codeFiles': ['validate-event.vue']
    },
    {
      'demoId': 'method-addMemory',
      'name': { 'zh-CN': '记忆历史输入', 'en-US': 'Memory History Input' },
      'desc': {
        'zh-CN': '<p>参考以下例子，输入完成后，输入会被记住</p>',
        'en-US': '<p>Refer to the following example. After the input is complete, the input will be remembered</p>'
      },
      'codeFiles': ['method-addMemory.vue']
    },
    {
      'demoId': 'type',
      'name': { 'zh-CN': '类型', 'en-US': 'Type' },
      'desc': {
        'zh-CN':
          '<p>通过对应的 <code>type</code> 属性，可以设置为对应的类型。默认为 text，可选值为 text，textarea 和其他 原生 input 的 type 值</p>\n',
        'en-US':
          '<p>You can set the corresponding type through the corresponding <code>type</code> attribute. The default value is text. The options are text, textarea, and other type values of the native input</p>\n'
      },
      'codeFiles': ['type.vue']
    },
    {
      'demoId': 'native',
      'name': { 'zh-CN': '原生属性', 'en-US': 'Native Attribute' },
      'desc': {
        'zh-CN': '<p>可设置 <code>name</code>  <code>disabled</code> <code>readonly</code>等原生属性</p>\n',
        'en-US':
          '<p>You can set native attributes such as <code>name</code> <code>disabled</code> <code>readonly</code> . </p>\n'
      },
      'codeFiles': ['native.vue']
    }
  ],
  apis: [
    {
      'name': 'input',
      'type': 'component',
      'properties': [
        {
          'name': 'autocomplete',
          'type': 'string',
          'defaultValue': 'off',
          'desc': {
            'zh-CN': '原生 autocomplete 属性',
            'en-US': 'Native autocomplete attribute'
          },
          'demoId': 'native'
        },
        {
          'name': 'autofocus',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '原生属性，页面加载时，自动获取焦点',
            'en-US': 'Native attribute. The focus is automatically obtained during page loading.'
          },
          'demoId': ''
        },
        {
          'name': 'autosize',
          'type': 'boolean | { minRows: number, maxRows: number }',
          'defaultValue': 'false',
          'desc': {
            'zh-CN':
              '自适应内容高度，只对 <code>type="textarea"</code> 有效。可传入对象，如，{ minRows: 2, maxRows: 6 }',
            'en-US':
              'Adaptive content height. This parameter is valid only for <code>type="textarea"</code>. Objects can be transferred, for example, {minRows: 2, maxRows: 6}'
          },
          'demoId': 'resize'
        },
        {
          'name': 'clearable',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否显示清除按钮，该属性不适用于 <code>type="textarea"</code>',
            'en-US':
              'Whether to display the clear button. This attribute is not applicable to <code>type="textarea"</code>.'
          },
          'demoId': 'clearable'
        },
        {
          'name': 'cols',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '原生属性，设置宽度，在 type ="textarea" 时有效',
            'en-US':
              'Native attribute, which is used to set the width. This parameter is valid only when type is "textarea"'
          },
          'demoId': 'rows'
        },
        {
          'name': 'counter',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示字数统计，只在 type = "text" 或 type = "textarea" 时有效',
            'en-US':
              'Whether to display the word count statistics. This parameter is valid only when type is "text" or type is "textarea"'
          },
          'demoId': 'counter'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否禁用',
            'en-US': 'Disable'
          },
          'demoId': 'native'
        },
        {
          'name': 'form',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '原生属性',
            'en-US': 'Native attribute'
          },
          'demoId': ''
        },
        {
          'name': 'label',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '等价于原生 input aria-label 属性',
            'en-US': 'Equiphorus input aria-label attribute'
          },
          'demoId': ''
        },
        {
          'name': 'max',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '原生属性，设置最大值',
            'en-US': 'Native attribute, set the maximum value'
          },
          'demoId': 'native'
        },
        {
          'name': 'maxlength',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '原生属性，最大输入长度',
            'en-US': 'Native attribute, maximum input length'
          },
          'demoId': 'native'
        },
        {
          'name': 'min',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '原生属性，设置最小值',
            'en-US': 'Native attribute, which sets the minimum value'
          },
          'demoId': 'native'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'string , number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置文本的绑定值',
            'en-US': 'Sets the binding value of the text'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'name',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '原生 input name 属性',
            'en-US': 'Native input name attribute'
          },
          'demoId': ''
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框占位文本',
            'en-US': 'Enter the place-holder text in the text box'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'prefix-icon',
          'type': 'Component',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框头部图标',
            'en-US': 'Icon at the head of the input box'
          },
          'demoId': 'input-icon'
        },
        {
          'name': 'readonly',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '原生属性，是否只读',
            'en-US': 'Native attribute, read-only'
          },
          'demoId': 'native'
        },
        {
          'name': 'resize',
          'type': '"both" | "horizontal" | "vertical" | "none"',
          'defaultValue': '',
          'desc': {
            'zh-CN': '控制是否能被用户缩放',
            'en-US': 'Whether the user can zoom in or out'
          },
          'demoId': 'resize'
        },
        {
          'name': 'rows',
          'type': 'number',
          'defaultValue': '2',
          'desc': {
            'zh-CN': '输入框行数，只对 type="textarea" 有效',
            'en-US': 'Number of lines in the input box. This parameter is valid only for type="textarea"'
          },
          'demoId': 'rows'
        },
        {
          'name': 'show-password',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示切换密码图标',
            'en-US': 'Whether to display the switchover password icon'
          },
          'demoId': 'show-password'
        },
        {
          'name': 'show-word-limit',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效',
            'en-US':
              'Whether to display the number of input words. This parameter is valid only when type is "text" or type is "textarea"'
          },
          'demoId': 'show-word-limit'
        },
        {
          'name': 'size',
          'type': '"medium" | "small" | "mini"',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框尺寸，只在 type!="textarea" 时有效',
            'en-US': 'Size of the text box. This parameter is valid only when type!="textarea". '
          },
          'demoId': 'size'
        },
        {
          'name': 'step',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '原生属性，设置输入字段的合法数字间隔',
            'en-US': 'Native attribute, which is used to set the valid digit interval of the input field.'
          },
          'demoId': 'native'
        },
        {
          'name': 'suffix-icon',
          'type': 'Component',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框尾部图标',
            'en-US': 'Input box end icon'
          },
          'demoId': 'input-icon'
        },
        {
          'name': 'tabindex',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '原生属性，输入框的tabindex',
            'en-US': 'Native attribute, tabindex in the text box'
          },
          'demoId': ''
        },
        {
          'name': 'type',
          'type': '"text" | "textarea" | "password" | InputHTMLAttributes.type',
          'defaultValue': 'text',
          'desc': {
            'zh-CN': '设置input框的type属性，默认为 text,可选值 text，textarea 和其他 原生 input 的 type 值',
            'en-US':
              'Set the type attribute of the input box. The default value is text. The options are text, textarea, and type values of other native inputs.'
          },
          'demoId': 'type'
        },
        {
          'name': 'validate-event',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '输入时是否触发表单的校验',
            'en-US': 'Trigger form verification upon input'
          },
          'demoId': 'validate-event'
        }
      ],
      'events': [
        {
          'name': 'blur',
          'type': '(event: FocusEvent) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在 Input 失去焦点时触发',
            'en-US': 'Trigger when Input loses focus'
          },
          'demoId': 'event'
        },
        {
          'name': 'change',
          'type': '(value: string | number) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在 Input 值改变时触发',
            'en-US': 'triggered when the input value changes.'
          },
          'demoId': 'event'
        },
        {
          'name': 'clear',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在点击由 clearable 属性生成的清空按钮时触发',
            'en-US': 'Trigger when the clear button generated by the clearable property is clicked'
          },
          'demoId': 'event'
        },
        {
          'name': 'focus',
          'type': '(event: FocusEvent) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在 Input 获得焦点时触发',
            'en-US': 'Trigger when Input obtains focus'
          },
          'demoId': 'event'
        },
        {
          'name': 'input',
          'type': '(event: InputEvent) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入值时触发事件',
            'en-US': 'An event is triggered when a value is entered.'
          },
          'demoId': 'event'
        }
      ],
      'slots': [
        {
          'name': 'append',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框后置内容，只对 type="text" 有效',
            'en-US': 'Content at the end of the text box. This field is valid only for type="text"'
          },
          'demoId': 'slot'
        },
        {
          'name': 'prefix',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框头部内容，只对 type="text" 有效',
            'en-US': 'Content in the header of the text box, which is valid only for type="text"'
          },
          'demoId': 'slot'
        },
        {
          'name': 'suffix',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框尾部内容，只对 type="text" 有效',
            'en-US': 'The content at the end of the text box is valid only for type="text"'
          },
          'demoId': 'slot'
        },
        {
          'name': 'prepend',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框前置内容，只对 type="text" 有效',
            'en-US': 'Content before the text box, which is valid only for type="text"'
          },
          'demoId': 'slot'
        }
      ],
      'methods': [
        {
          'name': 'addMemory',
          'type': '(value: string) => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '历史输入内容的记忆方法', 'en-US': 'Memorization method of historical input content' },
          'demoId': 'method-addMemory'
        },
        {
          'name': 'blur',
          'type': '() => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '使 input 失去焦点', 'en-US': 'The input loses focus.' },
          'demoId': 'methods'
        },
        {
          'name': 'focus',
          'type': '() => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '使 input 获取焦点', 'en-US': 'To enable the input to obtain the focus' },
          'demoId': 'methods'
        },
        {
          'name': 'select',
          'type': '() => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '选中 input 中的文字', 'en-US': 'Select the text in input.' },
          'demoId': 'methods'
        }
      ]
    }
  ]
}
