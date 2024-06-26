export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p>详细用法参考如下示例。</p>',
        'en-US': '<p>For details, see the following example.</p>'
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
          '<p>You can set the <code>clearable</code> attribute to display the clear icon button in the text box </p>'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'show-password',
      name: {
        'zh-CN': '密码框',
        'en-US': 'Password Box'
      },
      desc: {
        'zh-CN':
          '<p>当 <code>type</code> 为 <code>password</code> 时，可通过 <code>show-password</code> 属性设置输入框显示密码显示/隐藏切换图标按钮。</p>\n',
        'en-US':
          '<p>When <code>type</code> is set to <code>password</code>, you can set the <code>show-password</code> attribute to display or hide the password switch button in the text box</p>\n'
      },
      codeFiles: ['show-password.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Size'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>size</code> 属性设置尺寸大小，可选值：<code>medium / small / mini</code>。注意：只在 <code>type!="textarea"</code> 时有效。</p>\n',
        'en-US':
          '<p>You can set the size through the <code>size</code> attribute. The options are as follows: <code>medium, small, and mini</code>. Note: This parameter is valid only when <code>type!="textarea"</code> is used</p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'methods',
      name: {
        'zh-CN': '实例方法',
        'en-US': 'Instance Method'
      },
      desc: {
        'zh-CN': '可使用组件的实例方法。',
        'en-US': 'Instance methods for components that can be used'
      },
      codeFiles: ['methods.vue']
    },
    {
      demoId: 'input-icon',
      name: {
        'zh-CN': '图标',
        'en-US': 'Icon'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>prefix-icon, suffix-icon</code> 属性设置输入框头部、尾部图标。</p>\n',
        'en-US':
          '<p>You can set the header icon or the end icon of the text box through the <code>prefix-icon, suffix-icon</code> attribute </p>\n'
      },
      codeFiles: ['input-icon.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'Slot'
      },
      desc: {
        'zh-CN':
          '<p>配置 <code>prepend, append, prefix, suffix</code> slot，设置输入框前置、后置、头部、尾部内容，注意：只对 <code>type=text</code> 有效。</p>',
        'en-US':
          '<p>Configure the <code>prepend, append, prefix, suffix</code> slot. Set the front, back, header, and tail contents of the text box. Note: This parameter is valid only for <code>type=text</code></p>'
      },
      codeFiles: ['slot.vue']
    },
    {
      demoId: 'mask',
      name: {
        'zh-CN': '掩码',
        'en-US': 'Mask'
      },
      desc: {
        'zh-CN':
          '<p>\n          <p>可通过 mask 属性启用掩码功能，只在 disabled 和 display-only 状态下生效。</p>\n          <p>注意：不要与 type="password" 和 show-password 一同使用</p>\n        </p>',
        'en-US':
          '<p>\n          <p> The mask attribute can be used to enable the mask function, which takes effect only in the disabled and display-only states. </p>\n          <p> Note: Do not use </p> with type="password" and show-password\n        </p>'
      },
      codeFiles: ['mask.vue']
    },
    {
      demoId: 'rows',
      name: {
        'zh-CN': '文本域行数与宽',
        'en-US': 'Lines and Width Of Textarea'
      },
      desc: {
        'zh-CN':
          '\n          <p>可通过 <code>rows</code> 属性设置文本域显示行数。注意：只在 <code>type="textarea"</code> 时有效。</p>\n          <p>可通过 <code>cols</code> 属性设置文本域显示宽度。注意：只在 <code>type="textarea"</code> 时有效。</p>\n        ',
        'en-US':
          '\n          <p>You can set the number of lines displayed in the text field through the <code>rows</code> property. Note: This parameter is valid only when <code>text="textarea"</code> is used. </p>\n          <p>You can set the width of the text field through the <code>cols</code> attribute. Note: This parameter is valid only when <code>text="textarea"</code> is used. </p>\n        '
      },
      codeFiles: ['rows.vue']
    },
    {
      demoId: 'resize',
      name: {
        'zh-CN': '可缩放文本域',
        'en-US': 'Scalable Text Field'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>resize</code> 属性设置文本域的缩放。可选值：<code>none / both / horizontal / vertical</code>。注意：只在 <code>type="textarea"</code> 时有效。</p>\n ' +
          '<p>可通过 <code>autosize</code> 属性设置文本域自适应内容高度。可传入对象，如<code>{ minRows: 2, maxRows: 6 }</code>。注意：只对 <code>type="textarea"</code> 有效。</p>\n' +
          '<p>可通过 <code>hover-expand</code> 属性设置文本域鼠标悬浮展开/收起，只对 <code>type=textarea</code> 有效，最好搭配 <code>autosize</code> 一起使用<p>',
        'en-US':
          '<p>You can use the <code>resize</code> property to set the scaling of the text field. The value can be <code>none / both / horizontal / vertical</code>. Note: This parameter is valid only when <code>type="textarea"</code>.</p>' +
          '<p>The <code>autosize</code> property allows you to set the text field to adapt to the content height. You can transfer an object, for example, <code>{minRows: 2, maxRows: 6}</code>.</p>' +
          '<p>You can use the <code>hover-expand</code> attribute to set the text field to be expanded or collapsed by hovering the mouse. This parameter is valid only for <code>type=textarea</code>. It is recommended that you use it together with <code>autosize</code></p>'
      },
      codeFiles: ['resize.vue']
    },
    {
      demoId: 'show-word-limit',
      name: {
        'zh-CN': '输入字数统计',
        'en-US': 'Input Word Count'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>show-word-limit</code> 属性设置是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效。</p>',
        'en-US':
          '<p>The <code>show-word-limit</code> attribute can be used to set whether to display the input word statistics, only when type = "text" or type = "textarea" is valid</p>\n'
      },
      codeFiles: ['show-word-limit.vue']
    },
    {
      demoId: 'counter',
      name: {
        'zh-CN': '计数器',
        'en-US': 'Counter'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>counter</code> 属性设置显示输入框字符计数器。</p>\n',
        'en-US':
          '<p>You can use the <code>counter</code> attribute to set the character counter for displaying the text box. </p>\n'
      },
      codeFiles: ['counter.vue']
    },
    {
      demoId: 'validate-event',
      name: {
        'zh-CN': '表单校验',
        'en-US': 'Form validation triggered upon input'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>validate-event</code> 属性设置输入时触发表单校验。通过 <code>trigger</code> 配置触发校验规则的方式，为 <code>change</code> 时，当输入框值改变即触发校验，为 <code>blur</code> 时则失焦后触发校验。</p>\n',
        'en-US':
          '<p>You can set the <code>validate-event</code> attribute to trigger form validation upon input. Use <code>trigger</code> to configure the mode of triggering the validation rule. If <code>change</code> is used, the validation is triggered when the value in the text box changes. If <code>blur</code> is used, the validation is triggered after the focus is lost</p>\n'
      },
      codeFiles: ['validate-event.vue']
    },
    {
      demoId: 'display-only',
      name: {
        'zh-CN': '内容只读',
        'en-US': 'Display Only'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>display-only</code> 或<code>display-only-content</code> 属性设置只读态。</p>',
        'en-US':
          '<p> The read-only state can be set using the <code>display-only</code> or <code>display-only content</code> property. </p>'
      },
      codeFiles: ['display-only.vue']
    },
    {
      demoId: 'method-addMemory',
      name: {
        'zh-CN': '记忆历史输入',
        'en-US': 'Memory History Input'
      },
      desc: {
        'zh-CN': '<p>参考以下例子，输入完成后，输入会被记住。</p>',
        'en-US': '<p>Refer to the following example. After the input is complete, the input will be remembered</p>'
      },
      codeFiles: ['method-addMemory.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '类型',
        'en-US': 'Type'
      },
      desc: {
        'zh-CN':
          '<p>通过对应的 <code>type</code> 属性，可以设置为对应的类型。默认为 text，可选值为 text，textarea 和其他 原生 input 的 type 值。</p>\n',
        'en-US':
          '<p>You can set the corresponding type through the corresponding <code>type</code> attribute. The default value is text. The options are text, textarea, and other type values of the native input</p>\n'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'native',
      name: {
        'zh-CN': '原生属性',
        'en-US': 'Native Attribute'
      },
      desc: {
        'zh-CN': '<p>可设置 <code>name</code>  <code>disabled</code> <code>readonly</code>等原生属性。</p>\n',
        'en-US':
          '<p>You can set native attributes such as <code>name</code> <code>disabled</code> <code>readonly</code> . </p>\n'
      },
      codeFiles: ['native.vue']
    },
    {
      demoId: 'display-only-popup-more',
      name: {
        'zh-CN': '文本域只读超出显示更多按钮',
        'en-US': 'Text field read-only beyond Show more button'
      },
      desc: {
        'zh-CN':
          '在只读的基础上增加<code>popup-more</code>属性，可使文本域超出显示更多按钮，点击更多按钮可以查看详细信息。',
        'en-US':
          'The <code>popup-more</code> attribute is added to enable the text field to exceed the display of more buttons. You can click more buttons to view details.'
      },
      codeFiles: ['display-only-popup-more.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN': `
          输入框的事件，包括:<br>
            <code>input</code>(输入值时触发), <br>
            <code>blur</code>(失去焦点时触发), <br>
            <code>focus</code>(获取焦点时触发), <br>
            <code>change</code>(值改变时触发), <br>
            <code>clear</code>(清除按钮时触发)。`,
        'en-US': `
          Event of the text box, including: <br>
            <code>input</code> (triggered when a value is entered), <br>
            <code>blur</code> (triggered when the focus is lost), <br>
            <code>focus</code> (triggered when the focus is obtained), <br>
            <code>change</code> (triggered when the value changes), <br>
            <code>clear</code> (triggered when the button is cleared)
            `
      },
      codeFiles: ['event.vue']
    }
  ]
}
