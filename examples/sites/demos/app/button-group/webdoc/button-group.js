export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>v-model</code> 设置默认选中的按钮，并实现双向绑定。通过 <code>value</code> 也可设置默认选中按钮，但不能进行双向绑定。</p>\n',
        'en-US':
          '<p>Use <code>v-model</code> to set the default selected button and implement bidirectional binding. You can also set the default selected button through <code>value</code>, but bidirectional binding cannot be performed. </p>\n'
      },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'data',
      'name': { 'zh-CN': '按钮组数据', 'en-US': 'button group data' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>data</code> 属性设置按钮组数据，对象中的 text 为按钮显示文本，value 用于双向绑定时指定的值。</p>\n',
        'en-US':
          '<p>Sets the button group data through the <code>data</code> attribute. In the object, text is the button display text, and value is the value specified during bidirectional binding. </p>\n'
      },
      'codeFiles': ['data.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '设置组件大小', 'en-US': 'Set Component Size' },
      'desc': {
        'zh-CN': '<p>可以设置为：<code>medium</code>，<code>small</code>，<code>mini</code>。</p>\n',
        'en-US': '<p> can be set to <code>medium</code>, <code>small</code>, <code>mini</code></p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用状态', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>disabled</code> 属性为 true 可禁用整个按钮组，数据项属性设置 <code>disabled</code> 可以禁用单个按钮。</p>\n',
        'en-US': '<p>Set <code>disabled</code> to true to disable the entire button group. </p>\n'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'plain',
      'name': { 'zh-CN': '朴素按钮', 'en-US': 'Simple button' },
      'desc': {
        'zh-CN': '<p>设置 <code>plain</code> 属性为 true 可显示为朴素按钮样式。</p>\n',
        'en-US': '<p>Set <code>plain</code> to true to display the simple button style. </p>\n'
      },
      'codeFiles': ['plain.vue']
    },
    {
      'demoId': 'text-value-field',
      'name': { 'zh-CN': '数据字段映射', 'en-US': 'Data Field Mapping' },
      'desc': {
        'zh-CN':
          '<p>若按钮组数据对象中的字段不是默认的 text 和 value ，则可通过 <code>text-field</code>、<code>value-field</code> 属性进行映射。</p>\n',
        'en-US':
          '<p>If the fields in the button group data object are not the default text and value, the <code>text-field</code> and <code>value-field</code> attributes can be used for mapping. </p>\n'
      },
      'codeFiles': ['text-value-field.vue']
    },
    {
      'demoId': 'show-more',
      'name': { 'zh-CN': '是否显示更多按钮', 'en-US': 'Display More Buttons' },
      'desc': {
        'zh-CN': '<p>设置 <code>show-more</code> 属性值大于 0 且小于按钮组数据，可显示更多按钮。</p>\n',
        'en-US':
          '<p>Set the <code>show-more</code> attribute to a value greater than 0 and less than the button group data to display more buttons. </p>\n'
      },
      'codeFiles': ['show-more.vue']
    },
    {
      'demoId': 'show-edit',
      'name': { 'zh-CN': '是否显示编辑按钮', 'en-US': 'Display Edit Button' },
      'desc': {
        'zh-CN': '<p>设置 <code>show-edit</code> 属性值为 true ，可显示编辑按钮。</p>\n',
        'en-US': '<p>Set <code>show-edit</code> to true to display the edit button. </p>\n'
      },
      'codeFiles': ['show-edit.vue']
    },
    {
      'demoId': 'change-event',
      'name': { 'zh-CN': 'change事件', 'en-US': 'Change Event' },
      'desc': {
        'zh-CN': '<p>当选中按钮发生改变时将触发 <code>change</code> 事件。</p>\n',
        'en-US': '<p>The <code>change</code> event is triggered when the selected button is changed. </p>\n'
      },
      'codeFiles': ['change-event.vue']
    },
    {
      'demoId': 'event-edit',
      'name': { 'zh-CN': '编辑事件', 'en-US': 'Edit Event' },
      'desc': {
        'zh-CN': '<p>勾选值改变后将触发 <code>edit</code> 事件。</p>\n',
        'en-US': '<p>The <code>edit</code> event is triggered when the edit button is clicked. </p>\n'
      },
      'codeFiles': ['event-edit.vue']
    },
    {
      'demoId': 'slot-default',
      'name': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
      'desc': {
        'zh-CN':
          '<p>使用默认插槽的方式时，ButtonGroup 的 <code>data、text-field、value-field、value / v-model、size</code> 属性对插槽中的按钮将不再生效。\n但可根据使用场景在 Button 组件标签上对不同按钮设置不同的属性，具体参考 Button 组件属性。</p>\n',
        'en-US':
          '<p>When the default slot mode is used, the <code>data, text-field, value-field, value / v-model, and size</code> attributes of the ButtonGroup do not take effect for buttons in the slot. \n However, you can set different attributes for different buttons on the Button component tag based on the application scenario. For details, see Button Component Attributes. </p>\n'
      },
      'codeFiles': ['slot-default.vue']
    },
    {
      'demoId': 'button-group-multiple',
      'name': { 'zh-CN': '多行', 'en-US': 'Button Group Multiple' },
      'desc': {
        'zh-CN': '<p>多行按钮组，超出最大宽度后，换行显示。</p>\n',
        'en-US':
          '<p>Multi-line button group, after exceeding the maximum width, it will be displayed in a new line.</p>\n'
      },
      'codeFiles': ['button-group-multiple.vue']
    },
    {
      'demoId': 'border',
      'name': { 'zh-CN': '边框', 'en-US': 'Border' },
      'desc': {
        'zh-CN': '<p>设置有无边框，默认为true。</p>\n',
        'en-US': '<p>Set with or without border, the default is true.</p>\n'
      },
      'codeFiles': ['border.vue']
    },
    {
      'demoId': 'sup',
      'name': { 'zh-CN': '选块角标', 'en-US': '' },
      'desc': { 'zh-CN': '<p>通过配置项 <code>sup</code> 配置选块角标。</p>\n', 'en-US': '' },
      'codeFiles': ['sup.vue']
    }
  ],
  apis: [
    {
      'name': 'button-group',
      'type': 'component',
      'properties': [
        {
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '设置按钮组是否被禁用。', 'en-US': 'Sets whether the button group is disabled.' },
          'demoId': 'disabled'
        },
        {
          'name': 'size',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置组件大小', 'en-US': 'Set the component size' },
          'demoId': 'size'
        },
        {
          'name': 'data',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': "按钮组数据。例：[{text: '', value: ''}]。",
            'en-US': "button group data. Example: [{text: '', value: ''}]"
          },
          'demoId': 'data'
        },
        {
          'name': 'value-field',
          'type': 'String',
          'defaultValue': '该属性的默认值为 value',
          'desc': { 'zh-CN': '按钮值的字段值。', 'en-US': 'Field value of the button value.' },
          'demoId': 'text-value-field'
        },
        {
          'name': 'text-field',
          'type': 'String',
          'defaultValue': '该属性的默认值为 text',
          'desc': { 'zh-CN': '按钮显示文字的字段值。', 'en-US': 'Field value of the button displayed text.' },
          'demoId': 'text-value-field'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'Number , String',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认选中按钮的值。', 'en-US': 'Default value of the selected button.' },
          'demoId': 'base'
        },
        {
          'name': 'plain',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否朴素按钮。', 'en-US': 'Indicates whether the button is a simple button.' },
          'demoId': 'plain'
        },
        {
          'name': 'show-more',
          'type': 'Number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置超过多少个显示更多按钮。',
            'en-US': 'Set the number of more buttons to be displayed.'
          },
          'demoId': 'show-more'
        },
        {
          'name': 'show-edit',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否显示编辑按钮，只有在显示更多的情况下生效。',
            'en-US':
              'Whether to display the edit button. This parameter takes effect only when more buttons are displayed.'
          },
          'demoId': 'show-edit'
        },
        {
          'name': 'border',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否显示边框线。', 'en-US': 'Remove button border.' },
          'demoId': 'border'
        }
      ],
      'events': [
        {
          'name': 'edit',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置当编辑按钮被点击时触发的回调函数。',
            'en-US': 'Set the callback function triggered when the edit button is clicked.'
          },
          'demoId': 'event-edit'
        },
        {
          'name': 'change',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当选中按钮发生改变时触发的回调函数。',
            'en-US': 'Set the callback function triggered when the selected button is changed.'
          },
          'demoId': 'change-event'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '按钮组内容。', 'en-US': 'button group content.' },
          'demoId': 'slot-default'
        }
      ]
    }
  ]
}
