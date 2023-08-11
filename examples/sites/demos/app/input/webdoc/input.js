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
      'demoId': 'clearable',
      'name': { 'zh-CN': '可清空', 'en-US': 'Can be cleared' },
      'desc': {
        'zh-CN': '<p>可通过 <code>clearable</code> 属性设置输入框显示清空图标按钮。</p>\n',
        'en-US':
          '<p>You can set the <code>clearable</code> attribute to display the clear icon button in the text box. </p>\n'
      },
      'codeFiles': ['clearable.vue']
    },
    {
      'demoId': 'show-password',
      'name': { 'zh-CN': '密码显示', 'en-US': 'Password Display' },
      'desc': {
        'zh-CN':
          '<p>当 <code>type</code> 为 <code>password</code> 时，可通过 <code>show-password</code> 属性设置输入框显示密码显示/隐藏切换图标按钮。</p>\n',
        'en-US':
          '<p>When <code>type</code> is set to <code>password</code>, you can set the <code>show-password</code> attribute to display or hide the password switch button in the text box. </p>\n'
      },
      'codeFiles': ['show-password.vue']
    },
    {
      'demoId': 'type',
      'name': { 'zh-CN': 'type 属性', 'en-US': 'type attribute' },
      'desc': {
        'zh-CN':
          '<p>通过对应的 <code>type</code> 属性，可以设置为对应的类型。默认为 text，可选值为 text，textarea 和其他 原生 input 的 type 值</p>\n',
        'en-US':
          '<p>You can set the corresponding type through the corresponding <code>type</code> attribute. The default value is text. The options are text, textarea, and other type values of the native input</p>\n'
      },
      'codeFiles': ['type.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Dimension' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>size</code> 属性设置尺寸大小，可选值：<code>medium / small / mini</code>。注意：只在 <code>type!=&quot;textarea&quot;</code> 时有效。</p>\n',
        'en-US':
          '<p>You can set the size through the <code>size</code> attribute. The options are as follows: <code>medium, small, and mini</code>. Note: This parameter is valid only when <code>type!=&quot;textarea&quot;</code> is used. </p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'form',
      'name': { 'zh-CN': 'form', 'en-US': 'form' },
      'desc': {
        'zh-CN': '<p>可通过 <code>form</code> 属性设置原生属性 form 。</p>\n',
        'en-US': '<p>You can set the native attribute form through the <code>form</code> attribute. </p>\n'
      },
      'codeFiles': ['form.vue']
    },
    {
      'demoId': 'name',
      'name': { 'zh-CN': '原生属性', 'en-US': 'Native Attribute' },
      'desc': {
        'zh-CN': '<p>可设置 <code>name</code>  <code>disabled</code> <code>readonly</code>等原生属性。</p>\n',
        'en-US':
          '<p>You can set native attributes such as <code>name</code> <code>disabled</code> <code>readonly</code> . </p>\n'
      },
      'codeFiles': ['name.vue']
    },
    {
      'demoId': 'label',
      'name': { 'zh-CN': '输入框关联文字', 'en-US': 'Text associated with the text box' },
      'desc': {
        'zh-CN': '<p>可通过 <code>label</code> 属性设置输入框关联的 label 文字。</p>\n',
        'en-US':
          '<p>You can set the label text associated with the text box through the <code>label</code> attribute. </p>\n'
      },
      'codeFiles': ['label.vue']
    },
    {
      'demoId': 'prefix-icon',
      'name': { 'zh-CN': '头部图标', 'en-US': 'Head icon' },
      'desc': {
        'zh-CN': '<p>可通过 <code>prefix-icon</code> 属性设置输入框头部图标。</p>\n',
        'en-US': '<p>You can set the header icon of the text box through the <code>prefix-icon</code> attribute. </p>\n'
      },
      'codeFiles': ['prefix-icon.vue']
    },
    {
      'demoId': 'suffix-icon',
      'name': { 'zh-CN': '尾部图标', 'en-US': 'Fall icon' },
      'desc': {
        'zh-CN': '<p>可通过 <code>suffix-icon</code> 属性设置输入框尾部图标。</p>\n',
        'en-US':
          '<p>You can set the icon at the end of the text box through the <code>suffix-icon</code> attribute. </p>\n'
      },
      'codeFiles': ['suffix-icon.vue']
    },
    {
      'demoId': 'resize',
      'name': { 'zh-CN': '可缩放文本域', 'en-US': 'Scalable Text Field' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>resize</code> 属性设置文本域的缩放。可选值：<code>none / both / horizontal / vertical</code>。注意：只在 <code>type=&quot;textarea&quot;</code> 时有效。</p>\n',
        'en-US':
          '<p>You can use the <code>resize</code> property to set the zoom of the text field. The value can be <code>none / both / horizontal / vertical</code> . Note: This parameter is valid only when <code>type=&quot;textarea&quot;</code> is used. </p>\n'
      },
      'codeFiles': ['resize.vue']
    },
    {
      'demoId': 'rows',
      'name': { 'zh-CN': '文本域行数', 'en-US': 'Lines of the text field' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>rows</code> 属性设置文本域显示行数。注意：只在 <code>text=&quot;textarea&quot;</code> 时有效。</p>\n',
        'en-US':
          '<p>You can set the number of lines displayed in the text field through the <code>rows</code> property. Note: This parameter is valid only when <code>text=&quot;textarea&quot;</code> is used. </p>\n'
      },
      'codeFiles': ['rows.vue']
    },
    {
      'demoId': 'cols',
      'name': { 'zh-CN': '文本域宽度', 'en-US': 'Text Field Width' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>cols</code> 属性设置文本域显示宽度。注意：只在 <code>text=&quot;textarea&quot;</code> 时有效。</p>\n',
        'en-US':
          '<p>You can set the width of the text field through the <code>cols</code> attribute. Note: This parameter is valid only when <code>text=&quot;textarea&quot;</code> is used. </p>\n'
      },
      'codeFiles': ['cols.vue']
    },
    {
      'demoId': 'autosize',
      'name': { 'zh-CN': '可自适应文本高度的文本域', 'en-US': 'Text field that can adapt to the text height' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>autosize</code> 属性设置文本域自适应内容高度。可传入对象，如<code>{ minRows: 2, maxRows: 6 }</code>。注意：只对 <code>type=&quot;textarea&quot;</code> 有效。</p>\n',
        'en-US':
          '<p>You can use the <code>autosize</code> attribute to set the text field to adapt to the content height. You can transfer an object, for example, <code>{minRows: 2, maxRows: 6}</code> . Note: This parameter is valid only for <code>type=&quot;textarea&quot;</code> . </p>\n'
      },
      'codeFiles': ['autosize.vue']
    },
    {
      'demoId': 'tabindex',
      'name': { 'zh-CN': '输入框的 tabindex', 'en-US': 'tabindex of the text box' },
      'desc': {
        'zh-CN': '<p>可通过 <code>tabindex</code> 属性设置输入框的 tabindex</p>\n',
        'en-US': '<p>You can use the <code>tabindex</code> attribute to set the tabindex</p>\n'
      },
      'codeFiles': ['tabindex.vue']
    },
    {
      'demoId': 'slot-prepend',
      'name': { 'zh-CN': '前置内容', 'en-US': 'Pre-content' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>prepend</code> slot，设置输入框前置内容，注意：只对 <code>type=&quot;text&quot;</code> 有效。</p>\n',
        'en-US':
          '<p>Configure <code>prepend</code> slot to set the front content of the text box. Note: This parameter is valid only for <code>type=&quot;text&quot;</code> . </p>\n'
      },
      'codeFiles': ['slot-prepend.vue']
    },
    {
      'demoId': 'slot-append',
      'name': { 'zh-CN': '后置内容', 'en-US': 'Post Content' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>append</code> slot，设置输入框后置内容，注意：只对 <code>type=&quot;text&quot;</code> 有效。</p>\n',
        'en-US':
          '<p>Configure <code>append</code> slot and set the content after the text box. Note: This parameter is valid only for <code>type=&quot;text&quot;</code> . </p>\n'
      },
      'codeFiles': ['slot-append.vue']
    },
    {
      'demoId': 'slot-prefix',
      'name': { 'zh-CN': '头部内容', 'en-US': 'Header Content' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>prefix</code> slot，设置输入框头部内容，注意：只对 <code>type=&quot;text&quot;</code> 有效。</p>\n',
        'en-US':
          '<p>Configure <code>prefix</code> slot to set the text box header content. Note: This parameter is valid only for <code>type=&quot;text&quot;</code> . </p>\n'
      },
      'codeFiles': ['slot-prefix.vue']
    },
    {
      'demoId': 'slot-suffix',
      'name': { 'zh-CN': '尾部内容', 'en-US': 'Follow Content' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>suffix</code> slot，设置输入框尾部内容，注意：只对 <code>type=&quot;text&quot;</code> 有效。</p>\n',
        'en-US':
          '<p>Configure the <code>suffix</code> slot and set the content at the end of the text box. Note: This parameter is valid only for <code>type=&quot;text&quot;</code> . </p>\n'
      },
      'codeFiles': ['slot-suffix.vue']
    },
    {
      'demoId': 'max',
      'name': { 'zh-CN': '最大值', 'en-US': 'Maximum value' },
      'desc': {
        'zh-CN': '<p>可通过 <code>max</code> 属性设置输入框最大值。<code>max</code> 是原生属性。</p>\n',
        'en-US':
          '<p>You can set the maximum value of the text box through the <code>max</code> attribute. <code>max</code> is a native attribute. </p>\n'
      },
      'codeFiles': ['max.vue']
    },
    {
      'demoId': 'min',
      'name': { 'zh-CN': '最小值', 'en-US': 'Minimum value' },
      'desc': {
        'zh-CN': '<p>可通过 <code>min</code> 属性设置输入框最小值。<code>min</code> 是原生属性。</p>\n',
        'en-US':
          '<p>You can set the minimum value of the text box through the <code>min</code> attribute. <code>min</code> is a native attribute. </p>\n'
      },
      'codeFiles': ['min.vue']
    },
    {
      'demoId': 'maxlength',
      'name': { 'zh-CN': '最大输入长度', 'en-US': 'Maximum input length' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>maxlength</code> 属性设置输入框最大输入长度。<code>maxlength</code> 是原生属性。</p>\n',
        'en-US':
          '<p>You can set the maximum length of the text box through the <code>maxlength</code> attribute. <code>maxlength</code> is a native attribute. </p>\n'
      },
      'codeFiles': ['maxlength.vue']
    },
    {
      'demoId': 'show-word-limit',
      'name': { 'zh-CN': '输入字数统计', 'en-US': 'Input word count' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>show-word-limit</code> 属性设置是否显示输入字数统计，只在 type = &quot;text&quot; 或 type = &quot;textarea&quot; 时有效</p>\n',
        'en-US':
          '<p>The <code>show-word-limit</code> attribute can be used to set whether to display the input word statistics, only when type = &quot;text&quot; or type = &quot;textarea&quot; is valid</p>\n'
      },
      'codeFiles': ['show-word-limit.vue']
    },
    {
      'demoId': 'counter',
      'name': { 'zh-CN': '计数器', 'en-US': 'Counter' },
      'desc': {
        'zh-CN': '<p>可通过 <code>counter</code> 属性设置显示输入框字符计数器。</p>\n',
        'en-US':
          '<p>You can use the <code>counter</code> attribute to set the character counter for displaying the text box. </p>\n'
      },
      'codeFiles': ['counter.vue']
    },
    {
      'demoId': 'step',
      'name': { 'zh-CN': '输入字段的合法数字间隔', 'en-US': 'Valid interval between digits in the input field' },
      'desc': {
        'zh-CN': '<p>可通过 <code>step</code> 属性设置输入字段的合法数字间隔。<code>step</code> 是原生属性。</p>\n',
        'en-US':
          '<p>You can use the <code>step</code> attribute to set the valid digit interval of the input field. <code>step</code> is a native attribute. </p>\n'
      },
      'codeFiles': ['step.vue']
    },
    {
      'demoId': 'validate-event',
      'name': { 'zh-CN': '输入时触发表单校验', 'en-US': 'Form validation triggered upon input' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>validate-event</code> 属性设置输入时触发表单校验。通过 <code>trigger</code> 配置触发校验规则的方式，为 <code>change</code> 时，当输入框值改变即触发校验，为 <code>blur</code> 时则失焦后触发校验。</p>\n',
        'en-US':
          '<p>You can set the <code>validate-event</code> attribute to trigger form validation upon input. Use <code>trigger</code> to configure the mode of triggering the validation rule. If <code>change</code> is used, the validation is triggered when the value in the text box changes. If <code>blur</code> is used, the validation is triggered after the focus is lost. </p>\n'
      },
      'codeFiles': ['validate-event.vue']
    },
    {
      'demoId': 'autofocus',
      'name': { 'zh-CN': '自动获取焦点', 'en-US': 'Obtain focus automatically' },
      'desc': {
        'zh-CN': '<p>可通过 <code>autofocus</code> 属性设置自动获取焦点。<code>autofocus</code> 是原生属性。</p>\n',
        'en-US':
          '<p>You can set the <code>autofocus</code> attribute to automatically obtain the focus. <code>autofocus</code> is a native attribute. </p>\n'
      },
      'codeFiles': ['autofocus.vue']
    },
    {
      'demoId': 'autocomplete',
      'name': { 'zh-CN': '自动补全', 'en-US': 'Auto Complete' },
      'desc': {
        'zh-CN': '<p>可通过 <code>autocomplete</code> 属性设置自动补全，默认值为 off ，可选 on 。</p>\n',
        'en-US':
          '<p>The <code>autocomplete</code> attribute can be used to set automatic completion. The default value is off, and the option is on. </p>\n'
      },
      'codeFiles': ['autocomplete.vue']
    },
    {
      'demoId': 'event-blur',
      'name': { 'zh-CN': '失焦事件', 'en-US': 'Out of Focus Event' },
      'desc': {
        'zh-CN': '<p>输入框失去焦点时触发 <code>blur</code> 事件。</p>\n',
        'en-US': 'The <code>blur</code> event is triggered when the text box loses focus. </p>\n'
      },
      'codeFiles': ['event-blur.vue']
    },
    {
      'demoId': 'event-change',
      'name': { 'zh-CN': '值改变事件', 'en-US': 'Value change event' },
      'desc': {
        'zh-CN': '<p>输入框值改变时触发 <code>change</code> 事件。</p>\n',
        'en-US': 'The <code>change</code> event is triggered when the value of the text box changes. </p>\n'
      },
      'codeFiles': ['event-change.vue']
    },
    {
      'demoId': 'event-clear',
      'name': { 'zh-CN': '清除事件', 'en-US': 'Clear Event' },
      'desc': {
        'zh-CN': '<p>点击输入框清除按钮时触发 <code>clear</code> 事件。</p>\n',
        'en-US': '<p>The <code>clear</code> event is triggered when the clear button in the text box is clicked. </p>\n'
      },
      'codeFiles': ['event-clear.vue']
    },
    {
      'demoId': 'event-focus',
      'name': { 'zh-CN': '聚焦事件', 'en-US': 'Focus Event' },
      'desc': {
        'zh-CN': '<p>输入框获取焦点时触发 <code>focus</code> 事件。</p>\n',
        'en-US': 'The <code>focus</code> event is triggered when the text box obtains the focus. </p>\n'
      },
      'codeFiles': ['event-focus.vue']
    },
    {
      'demoId': 'method-addMemory',
      'name': { 'zh-CN': '记忆历史输入', 'en-US': 'Memory History Input' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['method-addMemory.vue']
    },
    {
      'demoId': 'method-blur',
      'name': { 'zh-CN': '失去焦点', 'en-US': 'Lost Focus' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['method-blur.vue']
    },
    {
      'demoId': 'method-focus',
      'name': { 'zh-CN': '获取焦点', 'en-US': 'Focus' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['method-focus.vue']
    },
    {
      'demoId': 'method-select',
      'name': { 'zh-CN': '选中输入框文本', 'en-US': 'Select text in the text box' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['method-select.vue']
    }
  ],
  apis: [
    {
      'name': 'input',
      'type': 'component',
      'properties': [
        {
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Disable' },
          'demoId': ''
        },
        {
          'name': 'suffix-icon',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'input输入框后置图标html。;输入框尾部图标',
            'en-US': 'The html icon is placed behind the input text box.; Input box end icon'
          },
          'demoId': 'prefix-icon'
        },
        {
          'name': 'maxlength',
          'type': 'Number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置input框的maxLength属性，最大输入长度。;原生属性，最大输入长度',
            'en-US':
              'Set the maxLength attribute of the input box and the maximum input length.; Native attribute, maximum input length'
          },
          'demoId': 'maxlength'
        },
        {
          'name': 'prefix-icon',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'input输入框前置图标html。;输入框头部图标',
            'en-US': 'html icon in the front of the input text box. ;Icon at the head of the input box'
          },
          'demoId': 'prefix-icon'
        },
        {
          'name': 'readonly',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '设置文本的只读属性，默认为 false。;原生属性，是否只读',
            'en-US':
              'Sets the read-only attribute of the text. The default value is false. ;Native attribute, read-only'
          },
          'demoId': ''
        },
        {
          'name': 'clearable',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否显示清除按钮，该属性不适用于 type="textarea" ;是否可清空',
            'en-US': 'Whether to display the clear button. This attribute is not applicable to type="textarea". Cleared'
          },
          'demoId': 'clearable'
        },
        {
          'name': 'type',
          'type': 'String',
          'defaultValue': '该属性的默认值为 text',
          'desc': {
            'zh-CN':
              '设置input框的type属性，默认为 text,可选值 password, text。;该属性的可选值为 text，textarea 和其他 原生 input 的 type 值',
            'en-US':
              'Set the type attribute of the input box. The default value is text. The options are password and text.; The optional values of this attribute are text, textarea, and type values of other native inputs'
          },
          'demoId': 'show-password'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'String , Number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置文本显示的默认值。;绑定值',
            'en-US': 'Sets the default value of text display. ;Bound value'
          },
          'demoId': 'clearable'
        },
        {
          'name': 'show-word-limit',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效',
            'en-US':
              'Whether to display the number of input words. This parameter is valid only when type is "text" or type is "textarea"'
          },
          'demoId': 'show-word-limit'
        },
        {
          'name': 'placeholder',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框占位文本', 'en-US': 'Enter the place-holder text in the text box' },
          'demoId': 'event-blur'
        },
        {
          'name': 'show-password',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否显示切换密码图标', 'en-US': 'Whether to display the switchover password icon' },
          'demoId': 'show-password'
        },
        {
          'name': 'size',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框尺寸，只在 type!="textarea" 时有效;该属性的可选值为 medium / small / mini',
            'en-US':
              'Size of the text box. This parameter is valid only when type!="textarea". The options of this attribute are medium, small, and mini'
          },
          'demoId': 'size'
        },
        {
          'name': 'cols',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '原生属性，设置宽度，在 type ="textarea" 时有效',
            'en-US':
              'Native attribute, which is used to set the width. This parameter is valid only when type is "textarea"'
          },
          'demoId': 'rows'
        },
        {
          'name': 'rows',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 2',
          'desc': {
            'zh-CN': '输入框行数，只对 type="textarea" 有效',
            'en-US': 'Number of lines in the input box. This parameter is valid only for type="textarea"'
          },
          'demoId': 'rows'
        },
        {
          'name': 'autosize',
          'type': 'Boolean , Object',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }',
            'en-US':
              'Adaptive content height. This parameter is valid only for type="textarea". Objects can be transferred, for example, {minRows: 2, maxRows: 6}'
          },
          'demoId': 'autosize'
        },
        {
          'name': 'autocomplete',
          'type': 'String',
          'defaultValue': '该属性的默认值为 off',
          'desc': {
            'zh-CN': '原生属性，自动补全;该属性的可选值为 on, off',
            'en-US':
              'The original attribute is automatically supplemented. The options of this attribute are on and off'
          },
          'demoId': 'autocomplete'
        },
        {
          'name': 'name',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '原生属性', 'en-US': 'Native attribute' },
          'demoId': 'name'
        },
        {
          'name': 'max',
          'type': 'Number',
          'defaultValue': '',
          'desc': { 'zh-CN': '原生属性，设置最大值', 'en-US': 'Native attribute, set the maximum value.' },
          'demoId': 'max'
        },
        {
          'name': 'min',
          'type': 'Number',
          'defaultValue': '',
          'desc': { 'zh-CN': '原生属性，设置最小值', 'en-US': 'Native attribute, which sets the minimum value.' },
          'demoId': 'min'
        },
        {
          'name': 'step',
          'type': 'Number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '原生属性，设置输入字段的合法数字间隔',
            'en-US': 'Native attribute, which is used to set the valid digit interval of the input field.'
          },
          'demoId': 'step'
        },
        {
          'name': 'resize',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '控制是否能被用户缩放;该属性的可选值为 none, both, horizontal, vertical',
            'en-US':
              'Whether the user can zoom in or out. The options of this attribute are none, both, horizontal, and vertical'
          },
          'demoId': 'resize'
        },
        {
          'name': 'autofocus',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '原生属性，自动获取焦点',
            'en-US': 'Native attribute, which automatically obtains the focus.'
          },
          'demoId': 'autofocus'
        },
        {
          'name': 'form',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '原生属性', 'en-US': 'Native attribute' },
          'demoId': 'form'
        },
        {
          'name': 'label',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框关联的label文字', 'en-US': 'label text associated with the text box' },
          'demoId': 'label'
        },
        {
          'name': 'tabindex',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框的tabindex', 'en-US': 'tabindex in the text box' },
          'demoId': 'tabindex'
        },
        {
          'name': 'validate-event',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '输入时是否触发表单的校验', 'en-US': 'Trigger form verification upon input' },
          'demoId': 'validate-event'
        },
        {
          'name': 'counter',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否显示字数统计，只在 type = "text" 或 type = "textarea" 时有效',
            'en-US':
              'Whether to display the word count statistics. This parameter is valid only when type is "text" or type is "textarea"'
          },
          'demoId': 'counter'
        }
      ],
      'events': [
        {
          'name': 'input',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '输入值时触发事件;onInput(arg1){\n// arg1 =  event.target.value 输入框的值 \n// do something you want...}',
            'en-US':
              'An event is triggered when a value is entered. onInput(arg1){\n// arg1 =  event.target.value Value in the text box \n// do something you want...}'
          },
          'demoId': 'event-input'
        },
        {
          'name': 'blur',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在 Input 失去焦点时触发;onBlur(arg1){ \n// arg1 =  event\n// do something you want...}',
            'en-US': 'Trigger when Input loses focus; onBlur(arg1){\n// arg1 =  event\n// do something you want...}'
          },
          'demoId': 'event-blur'
        },
        {
          'name': 'focus',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在 Input 获得焦点时触发;onFocus(arg1){\n// arg1 =  event} \n// do something you want...}',
            'en-US':
              'Trigger when Input obtains focus; onFocus(arg1){\n// arg1 =  event} \n// do something you want...}'
          },
          'demoId': 'event-focus'
        },
        {
          'name': 'change',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '在 Input 值改变时触发;onChange(arg1){\n// arg1 =  event.target.value 输入框改变后的值 }\n// do something you want...}',
            'en-US':
              'triggered when the input value changes. onChange(arg1){\n// arg1 =  event.target.value Value after the change}\n// do something you want...}'
          },
          'demoId': 'event-change'
        },
        {
          'name': 'clear',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在点击由 clearable 属性生成的清空按钮时触发;onClear（）{ // do something you want...}',
            'en-US':
              'Trigger when the clear button generated by the clearable property is clicked; onClear () {// do something you want...}'
          },
          'demoId': 'event-clear'
        }
      ],
      'slots': [
        {
          'name': 'prefix',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框头部内容，只对 type="text" 有效',
            'en-US': 'Content in the header of the text box, which is valid only for type="text"'
          },
          'demoId': 'slot-prepend'
        },
        {
          'name': 'suffix',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框尾部内容，只对 type="text" 有效',
            'en-US': 'The content at the end of the text box is valid only for type="text"'
          },
          'demoId': 'slot-suffix'
        },
        {
          'name': 'prepend',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框前置内容，只对 type="text" 有效',
            'en-US': 'Content before the text box, which is valid only for type="text"'
          },
          'demoId': 'slot-prepend'
        },
        {
          'name': 'append',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框后置内容，只对 type="text" 有效',
            'en-US': 'Content at the end of the text box. This field is valid only for type="text"'
          },
          'demoId': 'slot-append'
        }
      ],
      'methods': [
        {
          'name': 'focus',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '使 input 获取焦点', 'en-US': 'To enable the input to obtain the focus' },
          'demoId': 'method-focus'
        },
        {
          'name': 'blur',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '使 input 失去焦点', 'en-US': 'The input loses focus.' },
          'demoId': 'method-blur'
        },
        {
          'name': 'select',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '选中 input 中的文字', 'en-US': 'Select the text in input.' },
          'demoId': 'method-select'
        },
        {
          'name': 'addMemory',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '历史输入内容的记忆方法', 'en-US': 'Memorization method of historical input content' },
          'demoId': 'method-addMemory'
        }
      ]
    }
  ]
}
