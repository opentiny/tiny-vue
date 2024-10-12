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
        'zh-CN': '<p>通过 <code>data</code> 设置按钮组数据，<code>v-model</code> 设置绑定值。</p>',
        'en-US':
          '<p>Set the button group data through <code>data</code> , and set the binding value through <code>v model</code> .</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '组件尺寸大小',
        'en-US': 'Set Component Size'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>size</code> 设置尺寸大小，可选值有 <code>medium</code> 、<code>small</code> 、<code>mini</code> 。</p>',
        'en-US':
          '<p>Set the size through <code>size</code> . The optional values are: <code>medium</code> , <code>small</code> , <code>mini</code> .</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用状态',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>disabled</code> 设置按钮组是否禁用，数据项设置 <code>disabled</code> 属性可以禁用单个按钮，数据项设置 <code>tip</code> 属性(v3.17.0版本增加此功能)增加按钮悬浮提示功能。</p>',
        'en-US':
          '<p>You can set whether to disable the button group through <code>disabled</code>. You can set the <code>disabled</code> attribute to disable a single button. You can set the <code>tip</code> attribute to add the reason for disabling the button. </p></p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'plain',
      name: {
        'zh-CN': '朴素按钮',
        'en-US': 'Simple button'
      },
      desc: {
        'zh-CN': '<p>通过 <code>plain</code> 设置是否为朴素按钮。</p>',
        'en-US': '<p>Set whether it is a plain button through <code>plain</code> .</p>'
      },
      codeFiles: ['plain.vue']
    },
    {
      demoId: 'text-value-field',
      name: {
        'zh-CN': '数据字段映射',
        'en-US': 'Data Field Mapping'
      },
      desc: {
        'zh-CN':
          '<p>若按钮组数据对象中的字段不是默认的 <code>text</code> 和 <code>value</code> ，则可通过 <code>text-field</code> 、<code>value-field</code> 属性进行映射。</p>',
        'en-US':
          '<p>If the fields in the button group data object are not the default text and value, the <code>text-field</code> and <code>value-field</code> attributes can be used for mapping. </p>'
      },
      codeFiles: ['text-value-field.vue']
    },
    {
      demoId: 'show-more',
      name: {
        'zh-CN': '显示更多按钮',
        'en-US': 'Display More Buttons'
      },
      desc: {
        'zh-CN': '<p>通过 <code>show-more</code> 设置显示更多按钮，当按钮数量大于设置值时，将显示更多按钮。</p>',
        'en-US':
          '<p>By setting <code>show more</code> to display more buttons, when the number of buttons exceeds the set value, more buttons will be displayed. </p>'
      },
      codeFiles: ['show-more.vue']
    },
    {
      demoId: 'show-edit',
      name: {
        'zh-CN': '编辑按钮',
        'en-US': 'Display Edit Button'
      },
      desc: {
        'zh-CN':
          '<p>设置了显示更多按钮后，可以通过 <code>show-edit</code> 设置是否显示编辑按钮。点击编辑按钮后触发 <code>edit</code> 事件。</p>',
        'en-US':
          '<p>After setting up to display more buttons, You can set whether to display the edit button through <code>show edit</code> . After clicking the edit button, the <code>edit</code> event is triggered.</p>'
      },
      codeFiles: ['show-edit.vue']
    },
    {
      demoId: 'slot-default',
      name: {
        'zh-CN': '默认插槽',
        'en-US': 'Default slot'
      },
      desc: {
        'zh-CN':
          '<p>使用默认插槽自定义按钮组，使用默认插槽后， <code>button-group</code> 的 <code>data</code> 、<code>text-field</code> 、<code>value-field</code> 、<code>value / v-model</code> 、<code>size</code> 属性对插槽中的按钮将不再生效。</p>',
        'en-US':
          '<p>When the default slot mode is used, the <code>data, text-field, value-field, v-model, and size</code> attributes of the ButtonGroup do not take effect for buttons in the slot. </p>'
      },
      codeFiles: ['slot-default.vue']
    },
    {
      demoId: 'slot-empty',
      name: {
        'zh-CN': '空数据',
        'en-US': 'No data'
      },
      meta: {
        mark: '3.17.1'
      },
      desc: {
        'zh-CN': '<p>当数据为空时，默认会显示"暂无数据"，通过 <code>empty</code> 插槽自定义内容。</p>',
        'en-US': '<p>Show "No data" when the data is empty, customize the content via the <code>empty</code> slot.</p>'
      },
      codeFiles: ['slot-empty.vue']
    },
    {
      demoId: 'button-group-multiple',
      name: {
        'zh-CN': '多行按钮组',
        'en-US': 'Button Group Multiple'
      },
      desc: {
        'zh-CN': '<p>多行按钮组，当超出最大宽度后，换行显示。</p>',
        'en-US':
          '<p>Multi-line button group, after exceeding the maximum width, it will be displayed in a new line.</p>'
      },
      codeFiles: ['button-group-multiple.vue']
    },
    {
      demoId: 'sup',
      name: {
        'zh-CN': '选块角标',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>data</code> 的 <code>sup</code> 属性配置选块角标，详见 <a href="IButtonGroupData">IButtonGroupData</a> 。</p>',
        'en-US': ''
      },
      codeFiles: ['sup.vue']
    },
    {
      demoId: 'change-event',
      name: {
        'zh-CN': '事件',
        'en-US': 'Change Event'
      },
      desc: {
        'zh-CN': '<p>当选中按钮发生改变时触发 <code>change</code> 事件。</p>',
        'en-US': '<p>The <code>change</code> event is triggered when the selected button is changed. </p>'
      },
      codeFiles: ['change-event.vue']
    }
  ]
}
