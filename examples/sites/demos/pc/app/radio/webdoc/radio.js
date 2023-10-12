export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>v-model</code> 绑定变量，设置的变量值为默认选中的 Radio，变量值对应 <code>label</code> 属性的值。通过 <code>text</code> 也可以配置显示文本，与默认插槽配置纯文本的结果一致\n\n<code>label</code> 可以是 <code>string</code>、<code>number</code> 或 <code>boolean</code>。</p>\n',
        'en-US':
          '<p> uses <code>v-model</code> to bind a variable. The variable value is the default radio selected. The variable value corresponds to the value of <code>label</code>. You can also use <code>text</code> to configure the display text, which is the same as the result of the default slot configuration plain text.\n\n<code>label</code> can be <code>string</code>, <code>number</code>, or <code> boolean</code>. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'group-options',
      'name': { 'zh-CN': '配置式单选组', 'en-US': 'Profile Radio Group' },
      'desc': {
        'zh-CN':
          '<p>提供 <code>options</code> 属性，支持通过配置对象数组数据的形式来渲染单选组。使用该属性后，可以不用再在标签中以插槽的形式插入 <code>&lt;radio&gt;</code> 或 <code>&lt;radio-button&gt;</code> 标签。\n\n<code>options</code> 对象数组中包括三个字段：<code>label</code>、<code>text</code>、<code>events</code>。\n\n另外还提供 <code>type</code> 属性，配合 <code>options</code> 属性一起使用，默认值为 <code>radio</code>。还可以配置为 <code>button</code>，配置后单选组将以按钮的形式展示。</p>\n',
        'en-US':
          '<p>Provides the <code>options</code> attribute to render radio groups by configuring object array data. This property eliminates the need to insert a <code>&lt;radio&gt;</code> or <code>&lt;radio-button&gt;</code> tag as a slot in the tag. \n\nThe <code>options</code> object array contains three fields: <code>label</code>, <code>text</code>, and <code>events</code>. \n\n The <code>type</code> attribute is also provided, which is used together with the <code>options</code> attribute. The default value is <code>radio</code>. You can also set this parameter to <code>button</code>. After the configuration, the radio group is displayed as a button. </p>\n'
      },
      'codeFiles': ['group-options.vue']
    },
    {
      'demoId': 'with-border',
      'name': { 'zh-CN': '带有边框', 'en-US': 'With borders' },
      'desc': {
        'zh-CN': '<p>可通过设置 <code>border</code> 属性，给单选框增加边框。</p>\n',
        'en-US': '<p>You can set the <code>border</code> attribute to add a border to an option button. </p>\n'
      },
      'codeFiles': ['with-border.vue']
    },
    {
      'demoId': 'dynamic-disable',
      'name': { 'zh-CN': '禁用状态', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>设置 <code>disabled</code> 属性即可启动禁用状态，默认为 false 。</p>\n',
        'en-US':
          '<p>Set the <code>disabled</code> attribute to enable the disabled state. The default value is false. </p>\n'
      },
      'codeFiles': ['dynamic-disable.vue']
    },
    {
      'demoId': 'vertical',
      'name': { 'zh-CN': '垂直布局', 'en-US': 'vertical layout' },
      'desc': {
        'zh-CN': '<p>可在 RadioGroup 组件上设置 <code>vertical</code> 属性，使单选框垂直布局。</p>\n',
        'en-US':
          '<p>You can set the <code>vertical</code> attribute on the RadioGroup component to enable the vertical layout of the option buttons. </p>\n'
      },
      'codeFiles': ['vertical.vue']
    },
    {
      'demoId': 'active-color',
      'name': { 'zh-CN': '颜色设置', 'en-US': 'Color Settings' },
      'desc': {
        'zh-CN':
          '<p>按钮形式的 Radio 激活时可通过 <code>text-color</code> 属性设置文本颜色，通过 <code>fill</code> 属性设置填充色和边框色。</p>\n',
        'en-US':
          'When a radio in the <p> format is activated, you can set the text color through the <code>text-color</code> attribute, and set the fill color and border color through the <code>fill</code> attribute. </p>\n'
      },
      'codeFiles': ['active-color.vue']
    },
    {
      'demoId': 'radio-text',
      'name': { 'zh-CN': '文字内容', 'en-US': 'Text Content' },
      'desc': {
        'zh-CN': '<p>可在 Radio 组件上设置 <code>text</code> 属性，设置内容。</p>\n',
        'en-US': '<p>You can set the <code>text</code> attribute on the Radio component to set the content. </p>\n'
      },
      'codeFiles': ['radio-text.vue']
    },
    {
      'demoId': 'radio-button',
      'name': { 'zh-CN': '按钮内容', 'en-US': 'Button Content' },
      'desc': {
        'zh-CN': '<p>通过 <code>label</code> 属性可以设置 Radio 的内容</p>\n',
        'en-US': '<p>You can set the radio content through the <code>label</code> attribute.</p>\n'
      },
      'codeFiles': ['radio-button.vue']
    },
    {
      'demoId': 'radio-button1',
      'name': { 'zh-CN': 'name', 'en-US': 'name' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['radio-button.vue']
    },
    {
      'demoId': 'radio-size',
      'name': { 'zh-CN': '尺寸设置', 'en-US': 'Size Settings' },
      'desc': {
        'zh-CN':
          '<p>可对按钮形式的 Radio 或带有边框的 Radio 设置 <code>size</code> 属性，以改变其尺寸，包括 medium、small、mini 三个选项。</p>\n',
        'en-US':
          '<p>You can set the <code>size</code> attribute for a radio with a button or a radio with a border to change its size. The options include medium, small, and mini. </p>\n'
      },
      'codeFiles': ['radio-size.vue']
    },
    {
      'demoId': 'radio-events',
      'name': { 'zh-CN': '单选框事件', 'en-US': 'Option button event' },
      'desc': {
        'zh-CN':
          '<p>可在 Radio、RadioGroup 组件上设置 <code>change</code> 事件，当绑定值变化时触发，回调函数为选中的 Radio label 值。</p>\n',
        'en-US':
          '<p>You can set the <code>change</code> event on the Radio and RadioGroup components. The event is triggered when the bound value changes. The callback function is the selected radio label value. </p>\n'
      },
      'codeFiles': ['radio-events.vue']
    },
    {
      'demoId': 'group-options1',
      'name': { 'zh-CN': '循环配置 Radio', 'en-US': 'Configure radio cyclically' },
      'desc': {
        'zh-CN': '<p>可在 RadioGroup 组件上设置 <code>options</code> 属性，可循环配置 Radio。</p>\n',
        'en-US':
          '<p>You can set the <code>options</code> attribute on the RadioGroup component to configure radio cyclically. </p>\n'
      },
      'codeFiles': ['group-options.vue']
    },
    {
      'demoId': 'radio-default',
      'name': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
      'desc': {
        'zh-CN': '<p>通过 <code>default</code> 默认插槽列表。</p>\n',
        'en-US': '<p>by <code>default</code>default slot list. </p>\n'
      },
      'codeFiles': ['radio-default.vue']
    }
  ],
  apis: [
    {
      'name': 'radio',
      'type': 'component',
      'properties': [
        {
          'name': 'label',
          'type': 'boolean|number|string',
          'defaultValue': '',
          'desc': { 'zh-CN': 'Radio 的 value', 'en-US': 'Radio value' },
          'demoId': 'with-border'
        },
        {
          'name': 'modelValue / v-model',
          'type': '—',
          'defaultValue': '',
          'desc': { 'zh-CN': '绑定值', 'en-US': 'Bound Value' },
          'demoId': 'with-border'
        },
        {
          'name': 'text',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '文本', 'en-US': 'Text' },
          'demoId': 'radio-text'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Disable' },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'border',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否显示边框', 'en-US': 'Display Border' },
          'demoId': 'with-border'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Radio 的尺寸，仅在 border 为真时有效;该属性的可选值为 medium / small / mini',
            'en-US':
              'Radio size. This parameter is valid only when border is set to true. The optional values of this attribute are medium / small / mini'
          },
          'demoId': 'radio-size'
        },
        {
          'name': 'name',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '原生 name 属性', 'en-US': 'Native name attribute' },
          'demoId': 'radio-button1'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '绑定值变化时触发的事件', 'en-US': 'Event triggered when the binding value changes' },
          'demoId': 'radio-events'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': 'Radio的默认插槽', 'en-US': 'Radio default slot' },
          'demoId': 'radio-default'
        }
      ]
    }
  ]
}
