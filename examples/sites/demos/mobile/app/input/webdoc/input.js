export default {
  column: '2',
  owner: '',
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
          '<p>通过对应的 <code>type</code> 属性，可以设置为对应的类型。默认为 text，可选值为 text，textarea 和其他 原生 input 的 type 值</p>',
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
        'zh-CN': '密码框',
        'en-US': 'Password Input'
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
        'zh-CN': '图标',
        'en-US': 'Icon'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>prefix-icon, suffix-icon</code> 属性设置输入框头部、尾部图标</p>',
        'en-US':
          '<p>You can set the header icon or the end icon of the text box through the <code>prefix-icon, suffix-icon</code> attribute </p>'
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
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Events'
      },
      desc: {
        'zh-CN':
          '\n          <p>输入框的事件，包括\n            <code>input</code>(输入值时触发), \n            <code>blur</code>(失去焦点时触发), \n            <code>focus</code>(获取焦点时触发), \n            <code>change</code>(值改变时触发), \n            <code>clear</code>(清除按钮时触发)\n          </p>\n        ',
        'en-US':
          '\n          <p>Event of the text box, including:\n            <code>input</code> (triggered when a value is entered)\n            <code>blur</code> (triggered when the focus is lost)\n            <code>focus</code> (triggered when the focus is obtained)\n            <code>change</code> (triggered when the value changes)\n            <code>clear</code> (triggered when the button is cleared)\n          </p>\n        '
      },
      codeFiles: ['events.vue']
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
    }
  ]
}
