export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'frequently-used-form',
      name: { 'zh-CN': '常用表单', 'en-US': 'Common Forms' },
      desc: {
        'zh-CN':
          '<p>在 Form 组件中，每一个表单域由一个 FormItem 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker。</p>\n',
        'en-US':
          '<p>In the Form component, each form field consists of a FormItem component. Various types of form controls can be placed in the form field, including Input, Select, Checkbox, Radio, Switch, DatePicker, and TimePicker. </p>\n'
      },
      codeFiles: ['frequently-used-form.vue']
    },
    {
      demoId: 'form-in-row',
      name: { 'zh-CN': '行内表单', 'en-US': 'Inline Form' },
      desc: {
        'zh-CN':
          '<p>当垂直方向空间受限且表单较简单时，可以在一行内放置表单，设置 <code>inline</code> 属性可以让表单域变为行内的表单域。</p>\n',
        'en-US':
          '<p>When the vertical space is limited and the form is simple, you can place the form in a line. You can set the <code>inline</code> property to change the form field to the form field in the line. </p>\n'
      },
      codeFiles: ['form-in-row.vue']
    },
    {
      demoId: 'label-align',
      name: { 'zh-CN': '文本对齐', 'en-US': 'Text Alignment' },
      desc: {
        'zh-CN':
          '<p>通过配置 <code>label-align</code> 属性, 设置是否文本对齐,通过配置 <code>label-position</code> 属性, 设置文本标签的位置。</p>\n',
        'en-US': '<p>Set the <code>label-align</code> attribute to determine whether to align text</p>\n'
      },
      codeFiles: ['label-align.vue']
    },
    {
      demoId: 'overflow-title',
      name: { 'zh-CN': '标签超长显示 tip', 'en-US': 'label too long display tip' },
      desc: {
        'zh-CN':
          '<p>在 form 表单组件上添加<code>overflow-title</code>属性，label 标签超长时鼠标移动到 label 上可显示 tooltip 提示，不支持 label 插槽。</p>\n',
        'en-US':
          '<p>Add the <code>overflow-title</code> attribute to the form component. When the label is too long, the tooltip will be displayed by moving the mouse over the label. Label slots are not supported.</p>\n'
      },
      codeFiles: ['overflow-title.vue']
    },
    {
      demoId: 'form-validation',
      name: { 'zh-CN': '表单校验、移除校验', 'en-US': 'Form Validation/Clear Validation' },
      desc: {
        'zh-CN': `<p>包括常用的必填、日期、时间、URL、邮件等校验规则。通过 <code>trigger</code> 配置触发校验规则的方式，为 <code>change</code> 时，当输入框值改变即触发校验，为 <code>blur</code> 时则失焦后触发校验，可设置成数组 <code>['change', 'blur']</code> 两种场景都触发。
          <br />
          调用 <code>clearValidate</code> 方法移除表单项的校验结果。传入待移除的表单项的 <code>prop</code> 属性或者 <code>prop</code> 组成的数组，如不传则移除整个表单的校验结果。</p>\n`,
        'en-US': `<p>Includes common verification rules such as mandatory fields, date, time, URL, and email. Use <code>trigger</code> to configure the mode of triggering the validation rule. If <code>change</code> is used, the validation is triggered when the value in the text box changes. If <code>blur</code> is used, the validation is triggered after the focus is lost. 
          <br />
          Use <code>clearValidate</code> method to clear the validation result. 
          </p>\n
          `
      },
      codeFiles: ['form-validation.vue']
    },
    {
      demoId: 'custom-validation-rule',
      name: { 'zh-CN': '自定义校验规则', 'en-US': 'Customized Verification Rule' },
      desc: {
        'zh-CN':
          '<p>通过 <code>validator</code> 选项进行自定义校验，校验方法中 <code>callback</code> 必须被调用。通过配置 <code>validate-on-rule-change</code> 属性,设置是否在 <code>rules</code> 属性改变后立即触发一次验证。</p>\n',
        'en-US':
          '<p>Use the <code>validator</code> option to perform customized validation. In the validation method, <code>callback</code> must be invoked. Configure the <code>validate-on-rule-change</code> attribute to determine whether to trigger a verification immediately after the <code>rules</code> attribute is changed.</p>\n'
      },
      codeFiles: ['custom-validation-rule.vue']
    },
    {
      demoId: 'validation-position',
      name: { 'zh-CN': '校验提示位置', 'en-US': 'Verification prompt position' },
      desc: {
        'zh-CN':
          '<p>通过 <code>validate-position</code> 可自定义错误提示出现的位置，在 <code>Form</code> 组件上设置后，子组件<code>FormItem</code>会继承父组件设置。单独在 <code>FormItem</code> 组件上进行设置优先级高于在 <code>From</code>上的设置。</p>\n',
        'en-US':
          '<p>You can use <code>validate-position</code> to customize the position where the error message appears. After this parameter is set on the <code>Form</code> component, the subcomponent <code>FormItem</code> inherits the setting of the parent component. The setting on the <code>FormItem</code> component takes precedence over the setting on the <code>From</code> component. </p>\n'
      },
      codeFiles: ['validation-position.vue']
    },
    {
      demoId: 'novalid-tip',
      name: { 'zh-CN': '隐藏表单项校验提示', 'en-US': 'Verification prompt format' },
      desc: {
        'zh-CN': '<p>通过 <code>show-message</code> 设置是否显示校验提示框的tip内容提示。</p>\n',
        'en-US':
          '<p>You can use <code>validate-type</code> to set whether the verification prompt information is displayed in <code>text</code> or <code>tip</code> format. The default value is <code>tip</code>. You can also configure the verification prompt mode of a certain item on a certain <code>&lt;form-item&gt;</code> . </p>\n'
      },
      codeFiles: ['novalid-tip.vue']
    },
    {
      demoId: 'validate-type',
      name: { 'zh-CN': '校验提示的形式', 'en-US': 'Disable form' },
      desc: {
        'zh-CN':
          '<p>通过 <code>validate-type</code> 可设置校验提示信息是以 <code>text</code> 文本显示还是以 <code>tip</code> 提示框的形式显示，默认为 <code>tip</code> 。通过<code>message-type</code>可以控制文本显示时是否以行内形式展示校验信息。也可直接配置在某一个 <code>&lt;form-item&gt;</code> 上控制某一项的校验提示形式。</p>\n',
        'en-US':
          '<p>You can set whether to disable the form by <code>disabled</code>. The default value is <code>false</code>. </p>\n'
      },
      codeFiles: ['validate-type.vue']
    },
    {
      demoId: 'validate-debounce',
      name: { 'zh-CN': '校验防抖处理', 'en-US': 'Validate debounce' },
      desc: {
        'zh-CN': '可以开启校验防抖，在连续输入的情况下，会在最后一次输入结束时才开始校验。',
        'en-US':
          '<p>You can change the size of a component in a form by setting the <code>size</code> attribute on the <code>tiny-form</code> tab. You can set the <code>disabled</code> attribute to change the disabled status of components in the form.</p>\n'
      },
      codeFiles: ['validate-debounce.vue']
    },
    {
      demoId: 'size',
      name: { 'zh-CN': '表单尺寸', 'en-US': 'Remove the verification result of a form item.' },
      desc: {
        'zh-CN':
          '<p>通过在 <code>tiny-form</code> 标签上设置 <code>size</code> 属性可以改变表单内组件尺寸。注意：表单中设置的size优先级高于数据录入组件(<code>input、select</code>等)设置的size。</p>\n',
        'en-US':
          '<p>Invoke the <code>clearValidate</code> method to remove the verification result of a form item. Transfer the <code>prop</code> attribute of the form item to be removed or the array consisting of <code>prop</code>. If this parameter is not transferred, the verification result of the entire form is removed. </p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'slot-label',
      name: { 'zh-CN': '标签文本插槽', 'en-US': 'Hide Form Item Verification Prompt' },
      desc: {
        'zh-CN': '<p>通过在 <code>label</code> 插槽，自定义标签文本的内容</p>\n',
        'en-US':
          '<p>You can configure <code>novalid-tip</code> to determine whether to display the tip in the verification dialog box. </p>\n'
      },
      codeFiles: ['slot-label.vue']
    },
    {
      demoId: 'form-disabled',
      name: { 'zh-CN': '表单禁用', 'en-US': 'Complex Layout' },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 可设置表单是否禁用，默认为 <code>false</code>。</p>\n',
        'en-US':
          '<p>Complex layouts are implemented by working with the <code>Row</code> and <code>Col</code> component.</p>\n'
      },
      codeFiles: ['form-disabled.vue']
    },
    {
      demoId: 'display-only',
      name: { 'zh-CN': '表单只读', 'en-US': 'Group Form' },
      desc: {
        'zh-CN': '<p>通过 <code>display-only</code> 属性，开启只读模式。</p>\n',
        'en-US': '<p>Grouping multiple forms together</p>\n'
      },
      codeFiles: ['display-only.vue']
    },
    {
      demoId: 'form-row-col',
      name: { 'zh-CN': '复杂布局', 'en-US': '' },
      desc: { 'zh-CN': '<p>通过配合 <code>Row</code> 和 <code>Col</code> 组件来实现复杂布局。</p>\n', 'en-US': '' },
      codeFiles: ['form-row-col.vue']
    },
    {
      demoId: 'group-form',
      name: { 'zh-CN': '分组表单', 'en-US': '' },
      desc: { 'zh-CN': '<p>将多个表单组合在一起。</p>\n', 'en-US': '' },
      codeFiles: ['group-form.vue']
    },
    {
      demoId: 'smb-required',
      name: { 'zh-CN': 'SMB必填表单项', 'en-US': '' },
      desc: {
        'zh-CN':
          '<p>SMB设计规范，必填表单项前不会带有红色星号，需要自行区分必填项与可选项目。也可以设置<code>hide-required-asterisk</code>为false指定显示必填星号。</p>\n',
        'en-US': ''
      },
      codeFiles: ['smb-required.vue']
    }
  ],
  apis: [
    {
      name: 'form',
      type: 'component',
      properties: [],
      events: [],
      slots: [],
      'form attrs': [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用该表单内的所有组件若设置为 true，则表单内组件上的 disabled 属性不再生效',
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
            'zh-CN': '通过 display-only 属性，开启只读模式',
            'en-US': ''
          },
          demoId: 'display-only'
        },
        {
          name: 'hide-required-asterisk',
          type: 'boolean | null',
          defaultValue: 'null',
          desc: {
            'zh-CN': '是否显示必填字段的标签旁边的红色星号',
            'en-US': 'Whether to display the red asterisk next to the label of mandatory fields'
          },
          demoId: 'form-validation'
        },
        {
          name: 'inline',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '行内布局模式，默认为 false ',
            'en-US': 'In-line layout mode. The default value is false.'
          },
          demoId: 'form-in-row'
        },
        {
          name: 'inline-message',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '(推荐使用message-type设置)是否以行内形式展示校验信息',
            'en-US':
              '(It is recommended to use message-type setting) Whether to display the verification information inline form'
          },
          demoId: 'validate-type'
        },
        {
          name: 'message-type',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '配置文本类型错误类型，可配置行内或者块级，默认为absolute定位;该属性的可选值为 inline | block',
            'en-US':
              'Configure the text type error type, which can be configured at the inline or block level. The default is absolute positioning; the optional value of this attribute is inline | block'
          },
          demoId: 'validate-type'
        },
        {
          name: 'label-align',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '表单中在配件显示必填字段的标签旁边的红色星号时，文本是否对齐 ',
            'en-US':
              'Check whether the text is aligned when the red asterisk next to the label of mandatory fields is displayed in the form.'
          },
          demoId: 'label-align'
        },
        {
          name: 'label-position',
          type: 'string',
          defaultValue: 'right',
          desc: {
            'zh-CN': '表单中标签的布局位置;该属性的可选值为 right / left / top',
            'en-US':
              'Layout position of the label in the form; The optional values of this attribute are right / left / top'
          },
          demoId: 'size'
        },
        {
          name: 'label-suffix',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '表单中标签后缀',
            'en-US': 'Label suffix in the form'
          },
          demoId: 'form-in-row'
        },
        {
          name: 'label-width',
          type: 'string',
          defaultValue: '80px',
          desc: {
            'zh-CN': '表单中标签占位宽度，默认为 80px ',
            'en-US': 'Label placeholder width in the form. The default value is 80px.'
          },
          demoId: 'frequently-used-form'
        },
        {
          name: 'model',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '表单数据对象',
            'en-US': 'Form data object'
          },
          demoId: 'form-validation'
        },
        {
          name: 'rules',
          type: 'object',
          defaultValue: '',
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
          type: 'string',
          defaultValue: '该属性的默认值为空',
          desc: {
            'zh-CN': '用于控制该表单内组件的尺寸;该属性的可选值为 medium / small / mini',
            'en-US':
              'Controls the size of components in the form. The optional values of this attribute are medium / small / mini'
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
          type: 'string',
          defaultValue: 'right',
          desc: {
            'zh-CN':
              '指定校验提示框显示的位置;该属性的可选值有 top-start / top / top-end / left-start / left / left-end / right-start / right / right-end / bottom-start / bottom / bottom-end',
            'en-US':
              'Specify the position where the verification dialog box is displayed. The value of this attribute can be top-start / top / top-end / left-start / left / left-end / right-start / right / right-end / bottom-start / bottom / bottom-end'
          },
          demoId: 'validation-position'
        },
        {
          name: 'validate-type',
          type: 'string',
          defaultValue: 'tip',
          desc: {
            'zh-CN': '校验类型;该属性的可选值有 tip / text',
            'en-US': 'Verification type; The optional values of this attribute are tip / text'
          },
          demoId: 'validate-type'
        }
      ],
      'form slots': [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          demoId: 'form-validation'
        },
        {
          name: 'label',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '标签文本插槽',
            'en-US': 'Label text slot'
          },
          demoId: 'slot-label'
        }
      ],
      'form methods': [
        {
          name: 'clearValidate',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN':
              '移除表单项的校验结果传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果',
            'en-US':
              'The verification result of removing a form item is transferred to the prop attribute of the form item to be removed or an array consisting of prop. If this parameter is not transferred, the verification result of the entire form is removed.'
          },
          demoId: 'form-validation'
        },
        {
          name: 'resetFields',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '对整个表单进行重置，将所有字段值重置为初始值并移除校验结果',
            'en-US': 'Reset all field values to the initial values and remove the verification result.'
          },
          demoId: 'form-validation'
        },
        {
          name: 'validate',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN':
              '对整个表单进行校验的方法，参数为一个回调函数该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段若不传入回调函数，则会返回一个 promise',
            'en-US':
              'Method for verifying the entire form. The parameter is a callback function. The callback function will be invoked after the verification is complete and two parameters are transferred: whether the verification is successful and whether the verification fails. If the callback function is not transferred, a promise is returned.'
          },
          demoId: 'form-validation'
        },
        {
          name: 'validateField',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '对部分表单字段进行校验的方法',
            'en-US': 'Method for verifying some fields in a form'
          },
          demoId: 'form-validation'
        }
      ],
      'form events': [
        {
          name: 'validate',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '任一表单项被校验后触发',
            'en-US': 'Triggered after any form item is verified'
          },
          demoId: 'form-validation'
        }
      ],
      'form-item attrs': [
        {
          name: 'error',
          type: 'string',
          defaultValue: '-',
          desc: {
            'zh-CN': '表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息;该属性的可选值为 -',
            'en-US':
              'Form field verification error. If this parameter is set, the form verification status changes to error and the error information is displayed. The optional value of this attribute is -'
          },
          demoId: ''
        },
        {
          name: 'inline-message',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '(推荐使用message-type设置)是否以行内形式展示校验信息',
            'en-US':
              '(It is recommended to use message-type setting) Whether to display the verification information inline form'
          },
          demoId: 'validate-type'
        },
        {
          name: 'message-type',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '配置文本类型错误类型，可配置行内或者块级，默认为absolute定位;该属性的可选值为 inline | block',
            'en-US':
              'Configure the text type error type, which can be configured at the inline or block level. The default is absolute positioning; the optional value of this attribute is inline | block'
          },
          demoId: 'validate-type'
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: '-',
          desc: {
            'zh-CN': '标签文本;该属性的可选值为 -',
            'en-US': 'Label text; The optional value of this attribute is -'
          },
          demoId: 'form-validation'
        },
        {
          name: 'label-width',
          type: 'string',
          defaultValue: '-',
          desc: {
            'zh-CN': "表单域标签的的宽度，例如 '50px'。支持 auto。;该属性的可选值为 -",
            'en-US':
              "Width of the form field label, for example, '50px'. Auto is supported. The optional value of this attribute is -"
          },
          demoId: 'frequently-used-form'
        },
        {
          name: 'prop',
          type: 'string',
          defaultValue: '传入 Form 组件的 model 中的字段',
          desc: {
            'zh-CN': '表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的;该属性的可选值为 -',
            'en-US':
              'Form field model. This attribute is mandatory when the validate and resetFields methods are used. The optional value of this attribute is -'
          },
          demoId: 'form-validation'
        },
        {
          name: 'required',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否必填，如不设置，则会根据校验规则自动生成;该属性的可选值为 -',
            'en-US':
              'Indicates whether this parameter is mandatory. If this parameter is not set, the parameter is automatically generated based on the verification rule. The optional value of this attribute is -'
          },
          demoId: 'form-validation'
        },
        {
          name: 'rules',
          type: 'object',
          defaultValue: '-',
          desc: {
            'zh-CN': '表单验证规则;该属性的可选值为 -',
            'en-US': 'Form validation rule; The optional value of this attribute is -'
          },
          demoId: 'form-validation'
        },
        {
          name: 'show-message',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示校验错误信息;该属性的可选值为 -',
            'en-US': 'Whether to display verification error information; The optional value of this attribute is -'
          },
          demoId: 'form-validation'
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: '该属性的默认值为空',
          desc: {
            'zh-CN': '用于控制该表单域下组件的尺寸;该属性的可选值为 medium / small / mini',
            'en-US':
              'Controls the size of the component in the form field. The optional values of this attribute are medium / small / mini'
          },
          demoId: 'size'
        },
        {
          name: 'validate-debounce',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN':
              '设置 FormItem 的属性 validate-debounce 为 true，可以开启校验防抖，在连续输入的情况下，会在最后一次输入结束时才开始校验。默认为 false 不开启。',
            'en-US': ''
          },
          demoId: 'validate-debounce'
        },
        {
          name: 'validate-icon',
          type: 'object',
          defaultValue: 'null',
          desc: {
            'zh-CN': '校验提示框的图标 ;该属性的可传入任意图标',
            'en-US': ''
          },
          demoId: 'form-validation'
        },
        {
          name: 'validate-position',
          type: 'string',
          defaultValue: 'top-end',
          desc: {
            'zh-CN':
              '指定校验提示框显示的位置;该属性的可选值有 top-start / top / top-end / left-start / left / left-end / right-start / right / right-end / bottom-start / bottom / bottom-end',
            'en-US':
              'Specify the position where the verification dialog box is displayed. The value of this attribute can be top-start / top / top-end / left-start / left / left-end / right-start / right / right-end / bottom-start / bottom / bottom-end'
          },
          demoId: 'form-validation'
        },
        {
          name: 'validate-type',
          type: 'string',
          defaultValue: 'tip',
          desc: {
            'zh-CN': '校验类型;该属性的可选值有 tip / text',
            'en-US': 'Verification type; The optional values of this attribute are tip / text'
          },
          demoId: 'validate-type'
        }
      ],
      'form-item slots': [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          demoId: 'size'
        },
        {
          name: 'label',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '标签文本的内容',
            'en-US': 'Label text content'
          },
          demoId: 'slot-label'
        }
      ],
      'form-item methods': [
        {
          name: 'clearValidate',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '移除该表单项的校验结果',
            'en-US': 'Remove the verification result of the table item.'
          },
          demoId: 'form-validation'
        },
        {
          name: 'resetField',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '对该表单项进行重置，将其值重置为初始值并移除校验结果',
            'en-US': 'Reset the table item to the initial value and remove the verification result.'
          },
          demoId: 'form-validation'
        }
      ],
      'form-item events': [
        {
          name: 'validate',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '任一表单项被校验后触发。',
            'en-US': 'This event is triggered after any form item is verified.'
          },
          demoId: 'form-validation'
        }
      ]
    }
  ]
}
