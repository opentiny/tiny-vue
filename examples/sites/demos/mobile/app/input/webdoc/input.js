export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'input',
      type: 'component',
      props: [
        {
          name: 'autocomplete',
          type: 'string',
          defaultValue: "'off'",
          desc: {
            'zh-CN': '原生 autocomplete 属性',
            'en-US': 'Native autocomplete attribute'
          },
          demoId: 'native-attributes'
        },
        {
          name: 'autofocus',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '原生属性，页面加载时，自动获取焦点',
            'en-US': 'Native attribute. The focus is automatically obtained during page loading.'
          },
          demoId: 'native-attributes'
        },
        {
          name: 'autosize',
          type: 'boolean | { minRows: number, maxRows: number }',
          defaultValue: 'false',
          desc: {
            'zh-CN':
              '自适应内容高度，只对 <code>type="textarea"</code> 有效。可传入对象，如，{ minRows: 2, maxRows: 6 }',
            'en-US':
              'Adaptive content height. This parameter is valid only for <code>type="textarea"</code>. Objects can be transferred, for example, {minRows: 2, maxRows: 6}'
          },
          demoId: 'textarea-scalable'
        },
        {
          name: 'clearable',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否显示清除按钮，该属性不适用于 <code>type="textarea"</code>',
            'en-US':
              'Whether to display the clear button. This attribute is not applicable to <code>type="textarea"</code>.'
          },
          demoId: 'clearable'
        },
        {
          name: 'cols',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '原生属性，设置宽度，在 type ="textarea" 时有效',
            'en-US':
              'Native attribute, which is used to set the width. This parameter is valid only when type is "textarea"'
          },
          demoId: 'textarea-rows-cols'
        },
        {
          name: 'counter',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示字数统计，只在 type = "text" 或 type = "textarea" 时有效',
            'en-US':
              'Whether to display the word count statistics. This parameter is valid only when type is "text" or type is "textarea"'
          },
          demoId: 'counter'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Disable'
          },
          demoId: 'disabled'
        },
        {
          name: 'is-select',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否可下拉选择',
            'en-US': 'display different button'
          },
          demoId: 'type-select'
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '等价于原生 input aria-label 属性',
            'en-US': 'Equiphorus input aria-label attribute'
          },
          demoId: ''
        },
        {
          name: 'max',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '原生属性，设置最大值',
            'en-US': 'Native attribute, set the maximum value'
          },
          demoId: 'native-attributes'
        },
        {
          name: 'maxlength',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '原生属性，最大输入长度',
            'en-US': 'Native attribute, maximum input length'
          },
          demoId: 'counter'
        },
        {
          name: 'min',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '原生属性，设置最小值',
            'en-US': 'Native attribute, which sets the minimum value'
          },
          demoId: 'native-attributes'
        },
        {
          name: 'minlength',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '原生属性，最小输入长度',
            'en-US': 'Native attribute, minimum input length'
          },
          demoId: 'counter'
        },
        {
          name: 'name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '原生 input name 属性',
            'en-US': 'Native input name attribute'
          },
          demoId: 'native-attributes'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框占位文本',
            'en-US': 'Enter the place-holder text in the text box'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'prefix-icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框头部图标',
            'en-US': 'Icon at the head of the input box'
          },
          demoId: 'prefix-suffix-icon'
        },
        {
          name: 'readonly',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '原生属性，是否只读',
            'en-US': 'Native attribute, read-only'
          },
          demoId: 'native-attributes'
        },
        {
          name: 'rows',
          type: 'number',
          defaultValue: '2',
          desc: {
            'zh-CN': '输入框行数，只对 type="textarea" 有效',
            'en-US': 'Number of lines in the input box. This parameter is valid only for type="textarea"'
          },
          demoId: 'textarea-rows-cols'
        },
        {
          name: 'select-menu',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉选择的选项',
            'en-US': 'options of select'
          },
          demoId: 'type-select'
        },
        {
          name: 'show-password',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示切换密码图标',
            'en-US': 'Whether to display the switchover password icon'
          },
          demoId: 'show-password'
        },
        {
          name: 'show-word-limit',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效',
            'en-US':
              'Whether to display the number of input words. This parameter is valid only when type is "text" or type is "textarea"'
          },
          demoId: 'counter'
        },
        {
          name: 'step',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '原生属性，设置输入字段的合法数字间隔',
            'en-US': 'Native attribute, which is used to set the valid digit interval of the input field.'
          },
          demoId: 'native-attributes'
        },
        {
          name: 'suffix-icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框尾部图标',
            'en-US': 'Input box end icon'
          },
          demoId: 'prefix-suffix-icon'
        },
        {
          name: 'tips',
          type: 'String | Slot',
          defaultValue: '',
          desc: {
            'zh-CN': '提示信息',
            'en-US': 'tips under input'
          },
          demoId: 'slots'
        },
        {
          name: 'title',
          type: 'String | Slot',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义标题',
            'en-US': 'custom title'
          },
          demoId: ''
        },
        {
          name: 'type',
          type: "'text' | 'textarea' | 'password' | InputHTMLAttributes.type",
          defaultValue: "'text'",
          desc: {
            'zh-CN': '设置 input 框的 type 属性，默认为 "text",可选值 "text"，"textarea" 和其他 原生 input 的 type 值',
            'en-US':
              'Set the type attribute of the input box. The default value is "text". The options are "text", "textarea", and type values of other native inputs.'
          },
          demoId: 'type'
        },
        {
          name: 'v-model / modelValue',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'input value'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'validate-event',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '输入时是否触发表单的校验',
            'en-US': 'Trigger form verification upon input'
          },
          demoId: 'validate-event'
        },
        {
          name: 'width',
          type: 'Number | String',
          defaultValue: '',
          desc: {
            'zh-CN': '宽度，取值为数字或元素 width 属性有效值，如果是数字则以 px 为单位',
            'en-US':
              'width, accepts a numerical value or a valid value for the width property, and if it is a number, it is measured in pixels.'
          },
          demoId: ''
        }
      ],
      events: [
        {
          name: 'blur',
          type: '(event: FocusEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '在 Input 失去焦点时触发',
            'en-US': 'Trigger when Input loses focus'
          },
          demoId: 'events'
        },
        {
          name: 'change',
          type: '(value: string | number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '在 Input 值改变时触发',
            'en-US': 'triggered when the input value changes.'
          },
          demoId: 'events'
        },
        {
          name: 'clear',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '在点击由 clearable 属性生成的清空按钮时触发',
            'en-US': 'Trigger when the clear button generated by the clearable property is clicked'
          },
          demoId: 'events'
        },
        {
          name: 'focus',
          type: '(event: FocusEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '在 Input 获得焦点时触发',
            'en-US': 'Trigger when Input obtains focus'
          },
          demoId: 'events'
        },
        {
          name: 'input',
          type: '(event: InputEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '输入值时触发事件',
            'en-US': 'An event is triggered when a value is entered.'
          },
          demoId: 'events'
        }
      ],
      methods: [
        {
          name: 'blur',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '使 input 失去焦点',
            'en-US': 'The input loses focus.'
          },
          demoId: 'methods'
        },
        {
          name: 'focus',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '使 input 获取焦点',
            'en-US': 'To enable the input to obtain the focus'
          },
          demoId: 'methods'
        },
        {
          name: 'select',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '选中 input 中的文字',
            'en-US': 'Select the text in input.'
          },
          demoId: 'methods'
        }
      ],
      slots: [
        {
          name: 'append',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框后置内容，只对 type="text" 有效',
            'en-US': 'Content at the end of the text box. This field is valid only for type="text"'
          },
          demoId: 'slots'
        },
        {
          name: 'prefix',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框头部内容，只对 type="text" 有效',
            'en-US': 'Content in the header of the text box, which is valid only for type="text"'
          },
          demoId: 'slots'
        },
        {
          name: 'prepend',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框前置内容，只对 type="text" 有效',
            'en-US': 'Content before the text box, which is valid only for type="text"'
          },
          demoId: 'slots'
        },
        {
          name: 'suffix',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框尾部内容，只对 type="text" 有效',
            'en-US': 'The content at the end of the text box is valid only for type="text"'
          },
          demoId: 'slots'
        },
        {
          name: 'tips',
          desc: {
            'zh-CN': '提示信息插槽',
            'en-US': 'tips slot'
          },
          demoId: 'slots'
        },
        {
          name: 'title',
          desc: {
            'zh-CN': '标题插槽',
            'en-US': 'title slot'
          },
          demoId: 'slots'
        }
      ]
    }
  ],
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>v-model/modelValue</code> 属性绑定输入值，<code>placeholder</code> 属性显示提示文本；使用原生属性 <code>type</code> 指定输入框类型，如取值为 <code>textarea</code> 时用作文本框。</p>',
        'en-US':
          '<p>Bind the input value through the <code>v-model/modelValue</code> property, and use <code>placeholder</code> to bind placeholder.Specify the input box type with the native <code>type</code> attribute. When the value is set to <code>textarea</code>, it is used as a textarea.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'clearable',
      name: {
        'zh-CN': '一键清空',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>clearable</code> 属性设置输入框显示清空图标按钮。</p>',
        'en-US':
          '<p>You can set the <code>clearable</code> attribute to display the clear icon button in the input.</p>'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '类型',
        'en-US': 'type'
      },
      desc: {
        'zh-CN':
          '<p>通过对应的 <code>type</code> 属性，可以设置为对应的类型。默认为 text，可选值为 text，number 等其他 原生 input 的 type 值</p>',
        'en-US':
          '<p>You can set the corresponding type through the corresponding <code>type</code> attribute. The default value is text. The options are text, textarea, and other type values of the native input</p>'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'textarea-rows-cols',
      name: {
        'zh-CN': '文本框行数与列数',
        'en-US': 'Rows and Columns of Textarea'
      },
      desc: {
        'zh-CN': '<p>通过原生属性 <code>rows</code> 与 <code>cols</code> 分别指定文本框的行数与列字符数。</p>',
        'en-US':
          '<p>Specify the number of rows and columns of a text box using the native attributes <code>rows</code> and <code>cols</code> respectively.</p>'
      },
      codeFiles: ['textarea-rows-cols.vue']
    },
    {
      demoId: 'textarea-scalable',
      name: {
        'zh-CN': '文本框可缩放',
        'en-US': 'Scalable Textarea'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>resize</code> 属性设置文本框的缩放。可选值：<code>none | both | horizontal | vertical</code>。</p><p>可通过 <code>autosize</code> 属性设置文本框自适应内容高度。可传入对象，如 <code>{ minRows: 2, maxRows: 6 }</code>。',
        'en-US':
          '<p>You can use the <code>resize</code> property to set the zoom of the text field. The value can be <code>none | both | horizontal | vertical</code> . Note: This parameter is valid only when <code>type="textarea"</code> is used. </p>\n        <p>You can use the <code>autosize</code> attribute to set the text field to adapt to the content height. You can transfer an object, for example, <code>{minRows: 2, maxRows: 6}</code> . Note: This parameter is valid only for <code>type="textarea"</code> . </p>'
      },
      codeFiles: ['textarea-scalable.vue']
    },
    {
      demoId: 'show-password',
      name: {
        'zh-CN': '密码框明文展示',
        'en-US': 'Password Input Plaintext'
      },
      desc: {
        'zh-CN':
          '<p>当 <code>type</code> 为 <code>password</code> 时，可通过 <code>show-password</code> 属性设置输入框显示密码显示/隐藏切换图标按钮。</p>',
        'en-US':
          '<p>When <code>type</code> is set to <code>password</code>, you can set the <code>show-password</code> attribute to display or hide the password switch button in the text box.</p>'
      },
      codeFiles: ['show-password.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'disabled'
      },
      desc: {
        'zh-CN': '<p>通过 <code>code</code> 属性禁用输入框。</p>',
        'en-US': '<p>To disabled input through <code>code</code> props.</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'counter',
      name: {
        'zh-CN': '输入长度限制与计数',
        'en-US': 'Input Limitation and Counting'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>maxlength</code> 属性限制输入字符数； <code>counter</code> 属性显示当前输入字符数；<code>show-word-limit</code> 显示当前字符数与输入限制长度（仅限文本框）</p>',
        'en-US':
          '<p>Limit input character count with the <code>maxlength</code> attribute; display current input character count with the <code>counter</code> attribute; show current character count and input limit length with the <code>show-word-limit</code> attribute(for text boxes only)."</p>'
      },
      codeFiles: ['counter.vue']
    },
    {
      demoId: 'prefix-suffix-icon',
      name: {
        'zh-CN': '前置与后置图标',
        'en-US': 'Prefix and Suffix Icon'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>prefix-icon, suffix-icon</code> 属性分别设置输入框头部、尾部图标</p>',
        'en-US':
          '<p>You can set the header icon or the end icon of the text box through the <code>prefix-icon, suffix-icon</code> attribute respectively.</p>'
      },
      codeFiles: ['prefix-suffix-icon.vue']
    },
    {
      demoId: 'native-attributes',
      name: {
        'zh-CN': '原生属性',
        'en-US': 'Native Attributes'
      },
      desc: {
        'zh-CN': '<p>可设置 <code>autofocus</code>、<code>readonly</code>、<code>name</code> 等原生属性。</p>',
        'en-US': '<p>Set native attributes such as autofocus, readonly, name, etc.</p>'
      },
      codeFiles: ['native-attributes.vue']
    },
    {
      demoId: 'type-select',
      name: {
        'zh-CN': '下拉列表',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过使用 <code>is-select</code> 与 <code>select-menu</code> 搭配让输入框变为下拉列表。</p>',
        'en-US':
          '<p>By using <code>is-select</code> with <code>select-menu</code>, the input field can be turned into a dropdown list.</p>'
      },
      codeFiles: ['type-select.vue']
    },
    {
      demoId: 'validate-event',
      name: {
        'zh-CN': '表单校验',
        'en-US': 'form validation'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>validate-event</code> 属性设置输入时触发表单校验。通过 <code>trigger</code> 配置触发校验规则的方式，为 <code>change</code> 时，当输入框值改变即触发校验，为 <code>blur</code> 时则失焦后触发校验</p>',
        'en-US':
          '<p>You can set the <code>validate-event</code> attribute to trigger form validation upon input. Use <code>trigger</code> to configure the mode of triggering the validation rule. If <code>change</code> is used, the validation is triggered when the value in the text box changes. If <code>blur</code> is used, the validation is triggered after the focus is lost</p>'
      },
      codeFiles: ['validate-event.vue']
    },
    {
      demoId: 'methods',
      name: {
        'zh-CN': '实例方法',
        'en-US': 'Methods'
      },
      desc: {
        'zh-CN': '<p>可使用组件的实例方法：<code>focus | blur | select</code></p>',
        'en-US': '<p>Those instance methods available: <code>focus | blur | select</code></p>'
      },
      codeFiles: ['methods.vue']
    },
    {
      demoId: 'slots',
      name: {
        'zh-CN': '插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>Input 组件提供了丰富的插槽。</p>',
        'en-US': '<p>Input component provides a rich set of slots.</p>'
      },
      codeFiles: ['slots.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Events'
      },
      desc: {
        'zh-CN':
          '<p>输入框的事件，包括 <code>input</code>(输入值时触发), <code>blur</code>(失去焦点时触发), <code>focus</code>(获取焦点时触发), <code>change</code>(值改变时触发), <code>clear</code>(清除按钮时触发)。</p>',
        'en-US':
          '<p>Event of the text box, including: <code>input</code> (triggered when a value is entered) <code>blur</code> (triggered when the focus is lost)<code>focus</code> (triggered when the focus is obtained) <code>change</code> (triggered when the value changes) <code>clear</code> (triggered when the button is cleared).</p>'
      },
      codeFiles: ['events.vue']
    }
  ]
}
