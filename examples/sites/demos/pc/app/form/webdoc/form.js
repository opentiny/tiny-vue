export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: { 'zh-CN': '常用表单', 'en-US': 'Common Form' },
      desc: {
        'zh-CN':
          '<p>在 <code>Form</code> 组件中，每一个表单域由一个 <code>form-item</code> 组件构成，表单域中可以放置各种类型的表单控件，包括 <code>Input</code> 、 <code>Select</code> 、 <code>Checkbox</code> 、 <code>Radio</code> 、 <code>Switch</code> 、 <code>DatePicker</code> 、 <code>TimePicker</code> 等。</p>',
        'en-US':
          '<p>In the <code>Form</code> component, each form field is composed of a <code>form-item</code> component, and various types of form controls can be placed in the form field, including <code>Input</code> , <code>Select</code> , <code>Checkbox</code> , <code>Radio</code> , <code>Switch</code> , <code>DatePicker</code> , <code>TimePicker</code> , etc. </p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'form-in-row',
      name: { 'zh-CN': '行内表单', 'en-US': 'Inline Form' },
      desc: {
        'zh-CN':
          '<p>通过 <code>inline</code> 设置行内表单，当垂直方向空间受限且表单较简单时，可以在一行内放置表单项。 <code>label-suffix</code> 设置表单标签后缀。</p>',
        'en-US':
          '<p>By <code>inline</code> setting up inline forms, when vertical space is limited and the form is relatively simple, form items can be placed within one line.Set the form label suffix by <code>label-suffix</code> .</p>'
      },
      codeFiles: ['form-in-row.vue']
    },
    {
      demoId: 'label-position',
      name: { 'zh-CN': '标签宽度与标签位置', 'en-US': 'Label width and position' },
      desc: {
        'zh-CN': '<p>通过 <code>label-width</code> 设置标签宽度，<code>label-position</code> 设置文本标签的位置。</p>',
        'en-US':
          '<p>Set the label width by <code>label width</code> , and set the position of the text label by <code>label position</code> .</p>'
      },
      codeFiles: ['label-position.vue']
    },
    {
      demoId: 'label-align',
      name: { 'zh-CN': '必填星号文本对齐', 'en-US': 'Required asterisk alignment' },
      desc: {
        'zh-CN':
          '<p>当 <code>label-position</code> 为 <code>left</code> 时， 通过 <code>label-align</code> 设置必填星号出现时标签文本是否对齐。</p>',
        'en-US':
          '<p>When <code>label-position</code> is <code>left</code> , Set whether the label text is aligned when a mandatory asterisk appears by<code>label align</code>.</p>'
      },
      codeFiles: ['label-align.vue']
    },
    {
      demoId: 'overflow-title',
      name: { 'zh-CN': '标签超长显示提示', 'en-US': 'Label too long display tip' },
      desc: {
        'zh-CN':
          '<p>通过 <code>overflow-title</code> 设置标签超长时鼠标移动到标签上可显示 <code>tooltip</code> 提示，若使用 <code>label</code> 插槽，需自行实现。</p>',
        'en-US':
          '<p>By using <code>overflow title</code> to set the label to be too long, moving the mouse over the label can display a <code>tooltip</code> prompt. If using a <code>label</code> slot, you need to implement it yourself.</p>'
      },
      codeFiles: ['overflow-title.vue']
    },
    {
      demoId: 'form-validation',
      name: { 'zh-CN': '表单校验、移除校验', 'en-US': 'Form Validation/Clear Validation' },
      desc: {
        'zh-CN': `<p>通过 <code>rules</code> 设置校验规则， <code>rules</code> 的详情见 <a href="#IFormRules">IFormRules</a>
          <br />
          调用 <code>clearValidate</code> 方法移除表单项的校验结果。传入待移除的表单项的 <code>prop</code> 属性或者 <code>prop</code> 组成的数组，如不传则移除整个表单的校验结果。</p>`,
        'en-US': `<p>Includes common verification rules such as mandatory fields, date, time, URL, and email. Use <code>trigger</code> to configure the mode of triggering the validation rule. If <code>change</code> is used, the validation is triggered when the value in the text box changes. If <code>blur</code> is used, the validation is triggered after the focus is lost. 
          <br />
          Use <code>clearValidate</code> method to clear the validation result. 
          </p>
          `
      },
      codeFiles: ['form-validation.vue']
    },
    {
      'demoId': 'form-validate-field',
      'name': { 'zh-CN': '特定表单项校验', 'en-US': 'Form field Validation' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>validateField</code> 方法对特定表单项进行校验， <code>clearValidate</code> 方法移除特定表单项校验。</p>',
        'en-US':
          '<p>Verify specific form items using the <code>validateField</code> method, and remove specific form item validation using the <code>clearValidate</code> method.</p>'
      },
      'codeFiles': ['form-validate-field.vue']
    },
    {
      demoId: 'custom-validation-rule',
      name: { 'zh-CN': '自定义校验规则', 'en-US': 'Customized Verification Rule' },
      desc: {
        'zh-CN':
          '<p>通过 <code>rules</code> 的 <code>validator</code> 选项进行自定义校验，校验方法中 <code>callback</code> 必须被调用。通过 <code>validate-on-rule-change</code> 设置是否在 <code>rules</code> 属性改变后立即触发一次验证。</p>',
        'en-US':
          '<p>Use the <code>validator</code> option to perform customized validation. In the validation method, <code>callback</code> must be invoked. Configure the <code>validate-on-rule-change</code> attribute to determine whether to trigger a verification immediately after the <code>rules</code> attribute is changed.</p>'
      },
      codeFiles: ['custom-validation-rule.vue']
    },
    {
      demoId: 'validation-position',
      name: { 'zh-CN': '校验提示位置', 'en-US': 'Verification prompt position' },
      desc: {
        'zh-CN':
          '<p>通过 <code>validate-position</code> 可自定义错误提示出现的位置，在 <code>form</code> 组件上设置后，子组件 <code>form-item</code> 会继承父组件设置。单独在 <code>form-item</code> 组件上进行设置优先级高于在 <code>from</code> 上的设置。</p>',
        'en-US':
          '<p>You can use <code>validate-position</code> to customize the position where the error message appears. After this parameter is set on the <code>form</code> component, the subcomponent <code>form-item</code> inherits the setting of the parent component. The setting on the <code>form-item</code> component takes precedence over the setting on the <code>From</code> component. </p>'
      },
      codeFiles: ['validation-position.vue']
    },
    {
      demoId: 'novalid-tip',
      name: { 'zh-CN': '隐藏表单项校验提示', 'en-US': 'Verification prompt format' },
      desc: {
        'zh-CN': '<p>通过 <code>show-message</code> 设置是否显示校错误提示信息。</p>',
        'en-US': '<p>Set whether to display error correction prompts through<code>show message</code>. </p>'
      },
      codeFiles: ['novalid-tip.vue']
    },
    {
      demoId: 'validate-type',
      name: { 'zh-CN': '校验提示的形式', 'en-US': 'Disable form' },
      desc: {
        'zh-CN':
          '<p>通过 <code>validate-type</code> 设置校验提示信息是以 <code>text</code> 文本显示还是以 <code>tip</code> 提示框的形式显示，也可直接配置在某一个 <code>form-item</code> 上控制某一项的校验提示形式。</p>',
        'en-US':
          '<p>By setting whether the verification prompt information is displayed as<code>text</code>text or as a<code>tip</code>prompt box, it can also be directly configured to control the verification prompt form of a certain item on a certain<code>form item</code>. </p>'
      },
      codeFiles: ['validate-type.vue']
    },
    {
      demoId: 'message-type',
      name: { 'zh-CN': '文本类型错误提示位置', 'en-US': 'Text type error prompt location' },
      desc: {
        'zh-CN':
          '<p>当 <code>validate-type</code> 为 <code>text</code> 时，通过 <code>message-type</code> 设置文本类型错误提示位置，不设置则为 <code>absolute</code> 定位。</p>',
        'en-US':
          '<p>当 <code>验证类型</code>为 <code>text</code>时，通过 <code>消息类型</code>设置文本类型错误提示位置，不设置则为 <code>绝对</code>定位。</p>'
      },
      codeFiles: ['message-type.vue']
    },
    {
      demoId: 'validate-debounce',
      name: { 'zh-CN': '校验防抖处理', 'en-US': 'Validate debounce' },
      desc: {
        'zh-CN':
          '<p>通过 <code>validate-debounce</code> 设置校验防抖，在连续输入的情况下，会在最后一次输入结束时才开始校验。</p>',
        'en-US':
          '<p>You can change the size of a component in a form by setting the <code>size</code> attribute on the <code>tiny-form</code> tab. You can set the <code>disabled</code> attribute to change the disabled status of components in the form.</p>'
      },
      codeFiles: ['validate-debounce.vue']
    },
    {
      demoId: 'size',
      name: { 'zh-CN': '表单尺寸', 'en-US': 'Remove the verification result of a form item.' },
      desc: {
        'zh-CN':
          '<p>通过 <code>size</code> 设置表单内组件尺寸。注意：表单中设置的size优先级高于数据录入组件（ <code>input</code> 、<code>select</code> 等）设置的 <code>size</code> 。</p>',
        'en-US':
          '<p>Invoke the <code>clearValidate</code> method to remove the verification result of a form item. Transfer the <code>prop</code> attribute of the form item to be removed or the array consisting of <code>prop</code> . If this parameter is not transferred, the verification result of the entire form is removed. </p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'slot-label',
      name: { 'zh-CN': '标签文本插槽', 'en-US': 'Hide Form Item Verification Prompt' },
      desc: {
        'zh-CN': '<p>通过 <code>label</code> 插槽，自定义标签文本的内容。</p>',
        'en-US': '<p>Customize the content of label text through the <code>label</code> slot.</p>'
      },
      codeFiles: ['slot-label.vue']
    },
    {
      demoId: 'form-disabled',
      name: { 'zh-CN': '表单禁用', 'en-US': 'Complex Layout' },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 设置表单是否禁用，默认为 <code>false</code> 。</p>',
        'en-US':
          '<p>Set whether the form is disabled through <code>disabled</code> , and the default is <code>false</code> .</p>'
      },
      codeFiles: ['form-disabled.vue']
    },
    {
      demoId: 'display-only',
      name: { 'zh-CN': '表单仅展示', 'en-US': 'Group Form' },
      desc: {
        'zh-CN': '<p>通过 <code>display-only</code> 配置表单是否开启仅展示模式。</p>',
        'en-US': '<p>Configure whether the form is in read-only mode by <code>display only</code> .</p>'
      },
      codeFiles: ['display-only.vue']
    },
    {
      demoId: 'form-row-col',
      name: { 'zh-CN': '复杂布局', 'en-US': '' },
      desc: {
        'zh-CN': '<p>通过配合 <code>row</code> 和 <code>col</code> 组件来实现复杂布局。</p>',
        'en-US': 'By collaborating with<code>row</code>and<code>col</code>components to achieve complex layouts.'
      },
      codeFiles: ['form-row-col.vue']
    },
    {
      demoId: 'group-form',
      name: { 'zh-CN': '分组表单', 'en-US': '' },
      desc: { 'zh-CN': '<p>将多个表单组合在一起。</p>', 'en-US': '' },
      codeFiles: ['group-form.vue']
    },
    {
      demoId: 'smb-required',
      name: { 'zh-CN': '必填项红色星号', 'en-US': 'Required items with a red asterisk' },
      desc: {
        'zh-CN':
          '<p>通过 <code>hide-required-asterisk</code> 设置是否隐藏标签前的红色星号，默认为 <code>false</code> ，但SMB主题下，默认为 <code>true</code> 。</p>',
        'en-US':
          'By setting whether to hide the red asterisk in front of the label through <code>hide required asterisk</code> , it defaults to <code>false</code> , but under the SMB theme, it defaults to <code>true</code> .'
      },
      codeFiles: ['smb-required.vue']
    },
    {
      demoId: 'popper-options',
      name: { 'zh-CN': '错误提示配置', 'en-US': 'Error tip options' },
      desc: {
        'zh-CN':
          '<p>通过 <code>popper-options</code> 设置<code>tip</code>类型错误提示，例如：当表单父元素是滚动元素，切页面滚动后，提示会错位，将 <code>bubbling</code> 属性设置为 <code>true</code>可解决此问题。</p>',
        'en-US':
          'Set the <code>tip</code> type error prompt through <code>popper-options</code>. For example, when the parent element of the form is a scrolling element and the page scrolls, the prompt will be misaligned. Change the <code>bubbling</code> attribute Set to <code>true</code> to resolve this issue.'
      },
      codeFiles: ['popper-options.vue']
    }
  ],
  apis: [
    {
      name: 'form',
      type: 'component',
      'props': [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用该表单内的所有表单组件，若设置为 true，则表单内组件上的 disabled 属性不再生效',
            'en-US':
              'Whether to disable all components in the form. If this parameter is set to true, the disabled attribute of components in the form does not take effect.'
          },
          demoId: 'form-disabled'
        },
        {
          name: 'display-only',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启仅展示模式',
            'en-US': 'Enable read-only mode through the display only attribute'
          },
          demoId: 'display-only'
        },
        {
          name: 'hide-required-asterisk',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否隐藏必填字段的标签旁边的红色星号，SMB 主题下默认值为true',
            'en-US':
              'Whether to hide the red asterisk next to the label of mandatory fields, The default value for SMB theme is true'
          },
          demoId: 'smb-required'
        },
        {
          name: 'inline',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '行内布局模式',
            'en-US': 'In-line layout mode'
          },
          demoId: 'form-in-row'
        },
        {
          name: 'inline-message',
          type: 'boolean',
          'defaultValue': '--',
          desc: {
            'zh-CN': '当 validate-type 设置为text时，是否以行内形式展示校验信息(推荐使用 message-type 设置)',
            'en-US':
              ' Whether to display the verification information inline form when validate-type is set to text,(It is recommended to use message-type setting)'
          },
          demoId: ''
        },
        {
          name: 'message-type',
          type: "'inline' | 'block'",
          'defaultValue': '--',
          desc: {
            'zh-CN':
              '当 validate-type 设置为text时，配置文本类型错误类型，可配置行内或者块级，不设置则为 absolute 定位',
            'en-US':
              'Configure the text type error type, which can be configured at the inline or block level when validate-type is set to text. The default is absolute positioning'
          },
          demoId: 'message-type'
        },
        {
          name: 'label-align',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': "当出现必填星号时，标签文本是否对齐，当 label-position 为 'right'时有效",
            'en-US': 'When a mandatory asterisk appears, is it aligned with the text'
          },
          demoId: 'label-align'
        },
        {
          name: 'label-position',
          type: "'right' | 'left' | 'top'",
          defaultValue: "'right'",
          desc: {
            'zh-CN': '表单中标签的布局位置',
            'en-US': 'Layout position of the label in the form'
          },
          demoId: 'label-position'
        },
        {
          name: 'label-suffix',
          type: 'string',
          'defaultValue': '--',
          desc: {
            'zh-CN': '表单中标签后缀',
            'en-US': 'Label suffix in the form'
          },
          demoId: 'form-in-row'
        },
        {
          name: 'label-width',
          type: 'string',
          defaultValue: "'80px'",
          desc: {
            'zh-CN': '表单中标签占位宽度',
            'en-US': 'Label placeholder width in the form'
          },
          demoId: 'label-position'
        },
        {
          name: 'model',
          type: '{ [prop: string]: any }',
          'defaultValue': '--',
          desc: {
            'zh-CN': '表单数据对象',
            'en-US': 'Form data object'
          },
          demoId: 'form-validation'
        },
        {
          name: 'overflow-title',
          type: 'boolean',
          'defaultValue': 'false',
          desc: {
            'zh-CN': '标签超长是否显示提示',
            'en-US': 'Does the label display a prompt if it is too long'
          },
          demoId: 'overflow-title'
        },
        {
          name: 'rules',
          type: '{ [prop: string]: IFormRules | IFormRules[]  }',
          typeAnchorName: 'IFormRules',
          'defaultValue': '--',
          desc: {
            'zh-CN': '表单验证规则',
            'en-US': 'Form validation rule'
          },
          demoId: 'form-validation'
        },
        {
          name: 'show-message',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示校验错误信息',
            'en-US': 'Display verification error information.'
          },
          demoId: 'novalid-tip'
        },
        {
          name: 'size',
          type: "'medium' | 'small' | 'mini'",
          'defaultValue': '--',
          desc: {
            'zh-CN': '表单内组件的尺寸，不设置则为默认尺寸',
            'en-US': 'Controls the size of components in the form'
          },
          demoId: 'size'
        },
        {
          name: 'validate-on-rule-change',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否在 rules 属性改变后立即触发一次验证',
            'en-US': 'Whether to trigger a verification immediately after the rules attribute is changed'
          },
          demoId: 'custom-validation-rule'
        },
        {
          name: 'validate-position',
          type: 'IFormPosition',
          typeAnchorName: 'IFormPosition',
          defaultValue: "'right'",
          desc: {
            'zh-CN': '指定校验提示框显示的位置',
            'en-US': 'Specify the position where the verification dialog box is displayed'
          },
          demoId: 'validation-position'
        },
        {
          name: 'validate-type',
          type: "'tip' | 'text'",
          defaultValue: "'tip'",
          desc: {
            'zh-CN': '校验类型',
            'en-US': 'Verification type'
          },
          demoId: 'validate-type'
        }
      ],
      'slots': [
        {
          name: 'default',
          type: '',
          'defaultValue': '--',
          desc: {
            'zh-CN': '默认插槽，自定义表单内容',
            'en-US': 'Default slot'
          },
          demoId: 'basic-usage'
        }
      ],
      'methods': [
        {
          name: 'clearValidate',
          type: '(prop: string | string[]) => void',
          'defaultValue': '--',
          desc: {
            'zh-CN':
              '移除表单项的校验结果，可传入待移除的表单项的prop，或者 prop 组成的数组，如不传则移除整个表单的校验结果',
            'en-US':
              'The verification result of removing a form item is transferred to the prop attribute of the form item to be removed or an array consisting of prop. If this parameter is not transferred, the verification result of the entire form is removed.'
          },
          demoId: 'form-validate-field'
        },
        {
          name: 'resetFields',
          type: '() => void',
          'defaultValue': '--',
          desc: {
            'zh-CN': '对整个表单进行重置，将所有字段值重置为初始值并移除校验结果',
            'en-US': 'Reset all field values to the initial values and remove the verification result.'
          },
          demoId: 'form-validation'
        },
        {
          name: 'validate',
          typeAnchorName: 'IFormValidateMethod',
          type: 'IFormValidateMethod',
          'defaultValue': '--',
          desc: {
            'zh-CN':
              '对整个表单进行校验的方法，参数为一个回调函数（该回调函数会在校验结束后被调用，并传入两个参数：1、是否校验成功 2、未通过校验的字段）返回一个 promise',
            'en-US':
              'Method for verifying the entire form. The parameter is a callback function. The callback function will be invoked after the verification is complete and two parameters are transferred: whether the verification is successful and whether the verification fails. If the callback function is not transferred, a promise is returned.'
          },
          demoId: 'form-validation'
        },
        {
          name: 'validateField',
          typeAnchorName: 'IFormValidateFieldMethod',
          type: 'IFormValidateFieldMethod',
          'defaultValue': '--',
          desc: {
            'zh-CN':
              '对部分表单字段进行校验的方法, 第一个参数为单个prop或者prop数组，第二个参数是回调函数，每个表单项检验完后会依次调用该回调',
            'en-US':
              'A method for verifying some form fields. The first parameter is a single prop or a prop array, and the second parameter is a callback function. After each form item is verified, the callback will be called in sequence'
          },
          demoId: 'form-validate-field'
        }
      ],
      'events': [
        {
          name: 'validate',
          type: '(prop: string, isValid: boolean, message: string) => void',
          'defaultValue': '--',
          desc: {
            'zh-CN': '任一表单项被校验后触发',
            'en-US': 'Triggered after any form item is verified'
          },
          demoId: 'form-validation'
        }
      ]
    },
    {
      name: 'form-item',
      type: 'component',
      'props': [
        {
          name: 'error',
          type: 'string',
          'defaultValue': '--',
          desc: {
            'zh-CN': '表单项错误文本，设置该值会使表单验证状态变为 error',
            'en-US': 'Form item error text,Setting this value will change the form validation status to error'
          },
          demoId: ''
        },
        {
          name: 'inline-message',
          type: 'boolean',
          'defaultValue': '--',
          desc: {
            'zh-CN': '是否以行内形式展示校验信息(推荐使用 message-type 设置)',
            'en-US':
              'Whether to display the verification information inline form(It is recommended to use message-type setting) '
          },
          demoId: ''
        },
        {
          name: 'message-type',
          type: "'inline' | 'block'",
          'defaultValue': '--',
          desc: {
            'zh-CN': '配置文本类型错误类型，可配置行内或者块级，不配置则为 absolute 定位',
            'en-US':
              'Configure the text type error type, which can be configured at the inline or block level. The default is absolute positioning'
          },
          demoId: 'message-type'
        },
        {
          name: 'label',
          type: 'string',
          'defaultValue': '--',
          desc: {
            'zh-CN': '标签文本',
            'en-US': 'Label text'
          },
          demoId: 'form-validation'
        },
        {
          name: 'label-width',
          type: 'string',
          defaultValue: "'80px'",
          desc: {
            'zh-CN': '表单域标签的的宽度',
            'en-US': 'Width of the form field label'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'prop',
          type: 'string',
          'defaultValue': '--',
          desc: {
            'zh-CN': '对应表单域 model 字段，如需使用表单校验，该属性是必填的',
            'en-US':
              'Is it mandatory? If not set, it will be automatically generated according to the verification rules'
          },
          demoId: 'form-validation'
        },
        {
          name: 'required',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否必填，如不设置，则会根据校验规则自动生成',
            'en-US':
              'Is it mandatory? If not set, it will be automatically generated according to the verification rules'
          },
          demoId: 'form-validation'
        },
        {
          name: 'rules',
          type: 'IFormRules',
          typeAnchorName: 'IFormRules',
          'defaultValue': '--',
          desc: {
            'zh-CN': '表单项验证规则',
            'en-US': 'Form validation rule'
          },
          demoId: 'form-validation'
        },
        {
          name: 'show-message',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示校验错误信息',
            'en-US': 'Whether to display verification error information'
          },
          demoId: 'form-validation'
        },
        {
          name: 'size',
          type: "'medium' | 'small' | 'mini'",
          'defaultValue': '--',
          desc: {
            'zh-CN': '用于控制该表单域下组件的尺寸，不设置则为默认尺寸',
            'en-US': 'Controls the size of the component in the form field'
          },
          demoId: 'size'
        },
        {
          name: 'validate-debounce',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启校验防抖，在连续输入的情况下，会在最后一次输入结束时才开始校验',
            'en-US':
              'Enable verification anti shake. In the case of continuous input, verification will only begin at the end of the last input'
          },
          demoId: 'validate-debounce'
        },
        {
          name: 'validate-icon',
          type: 'VueComponent',
          'defaultValue': '--',
          desc: {
            'zh-CN': '校验提示框的图标，类型为组件',
            'en-US': 'Icon for verification prompt box, type is component'
          },
          demoId: 'form-validation'
        },
        {
          name: 'validate-position',
          type: 'IFormPosition',
          typeAnchorName: 'IFormPosition',
          defaultValue: "'top-end'",
          desc: {
            'zh-CN': '指定校验提示框显示的位置',
            'en-US': 'Specify the position where the verification dialog box is displayed'
          },
          demoId: 'form-validation'
        },
        {
          name: 'validate-type',
          type: "'text' | 'tip'",
          defaultValue: "'tip'",
          desc: {
            'zh-CN': '校验提示显示类型',
            'en-US': 'Verification prompt display type'
          },
          demoId: 'validate-type'
        }
      ],
      'slots': [
        {
          name: 'default',
          type: '',
          'defaultValue': '--',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          demoId: 'size'
        },
        {
          name: 'label',
          type: '',
          'defaultValue': '--',
          desc: {
            'zh-CN': '标签文本的内容',
            'en-US': 'Label text content'
          },
          demoId: 'slot-label'
        }
      ],
      'methods': [
        {
          name: 'clearValidate',
          type: '() => void',
          'defaultValue': '--',
          desc: {
            'zh-CN': '移除该表单项的校验结果',
            'en-US': 'Remove the verification result of the table item.'
          },
          demoId: 'form-validation'
        },
        {
          name: 'resetField',
          type: '() => void',
          'defaultValue': '--',
          desc: {
            'zh-CN': '对该表单项进行重置，将其值重置为初始值并移除校验结果',
            'en-US': 'Reset the table item to the initial value and remove the verification result.'
          },
          demoId: 'form-validation'
        }
      ],
      'events': []
    }
  ],
  types: [
    {
      name: 'IFormPosition',
      type: 'type',
      code: `
type IFormPosition = 'top-start' | 'top' | 'top-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end'`
    },
    {
      name: 'IFormRules',
      type: 'interface',
      code: `
// 表单项检验触发时机
type IFormTrigger = 'change' | 'blur'

interface IFormRules {
  required?: boolean // 是否必填
  message?: number // 校验错误的提示
  // 内置的类型校验
  type?: 'date' | 'dateTime' | 'float' | 'array' | 'string' | 'number' | 'url' | 'time' | 'email' | 'object' | 'boolean' | 'enum'
  trigger?: IFormTrigger | IFormTrigger[] // 校验触发时机， 可设置成数组 ['change', 'blur'] 两种场景都触发
  // 同步检验函数，调用回调传递错误信息。
  validator?: (
    rule: IFormInnerRule, // from内部处理后的rule
    value: any, // 表单model对应的值，根据表单项prop获取
    callback: (e: Error) => void
    data: object, // prop和value构造的对象
    options: object // 检验配置，一般不需要用到
  ) => void
  // 异步校验函数，resolve则表示校验成功，reject表示校验失败。
  asyncValidator?: (
    rule: IFormInnerRule,
    value: any,
    callback: (e: Error) => void
    data: object,
    options: object
  ) => Promise<any>
}

interface IFormInnerRule {
  field: string // 表单项prop
  fullField: string // 表单项完整prop（嵌套检验时有用）
  type: string // 内部使用
}
`
    },
    {
      name: 'IFormError',
      type: 'interface',
      code: `
// 校验错误返回对象
interface IFormError {
  [prop: string]: IFormErrorField[]
}
interface IFormErrorField {
  message: string // 校验错误提示
  field: string // 校验失败的prop
}
`
    },
    {
      name: 'IFormValidateMethod',
      type: 'function',
      code: `
function IFormValidateMethod(callback: (isValid: boolean, fields: IFormError) => void ): Promise<boolean>
`
    },
    {
      name: 'IFormValidateFieldMethod',
      type: 'function',
      code: `
function IFormValidateFieldMethod(
  prop: string | string[],
  callback: (msg: string, field: IFormError) => void
): void
`
    }
  ]
}
