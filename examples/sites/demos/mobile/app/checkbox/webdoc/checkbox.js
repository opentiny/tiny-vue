export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'checkbox',
      type: 'component',
      props: [
        {
          name: 'checked',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否默认勾选',
            'en-US': 'Currently selected'
          },
          demoId: ''
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
          name: 'false-label',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '没有选中时的值',
            'en-US': 'Value when no option is selected'
          },
          demoId: 'custom-value'
        },
        {
          name: 'icon-position',
          type: 'string',
          defaultValue: 'center',
          desc: {
            'zh-CN': "<p>图标与文本的对齐方式，可选值：'center' | 'top'</p>",
            'en-US': "<p>Alignment of icon and text, optional value: 'center' | 'top'</p>"
          },
          demoId: 'icon-position'
        },
        {
          name: 'indeterminate',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置 indeterminate 状态，只负责样式控制',
            'en-US': 'Sets the indeterminate state and controls only the style.'
          },
          demoId: 'indeterminate'
        },
        {
          name: 'label',
          type: 'string | number | boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '选中状态的值（只有在 checkbox-group 中或者绑定对象类型为 array 时有效）',
            'en-US':
              'Selected value (This parameter is valid only when checkbox-group or the bound object type is array)'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '原生 name 属性',
            'en-US': 'Native name attribute'
          },
          demoId: ''
        },
        {
          name: 'true-label',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '选中时的值',
            'en-US': 'Value when selected'
          },
          demoId: 'custom-value'
        },
        {
          name: 'v-model / modelValue',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>绑定值</p>',
            'en-US': '<p>value</p>'
          },
          demoId: 'basic-usage'
        }
      ],
      events: [
        {
          name: 'change',
          type: '(value: string | number | boolean) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当绑定值变化时触发的事件',
            'en-US': 'This event is triggered when the binding value changes'
          },
          demoId: 'event-change'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': 'checkbox的内容',
            'en-US': 'Checkbox content'
          },
          demoId: ''
        }
      ]
    },
    {
      name: 'checkbox-group',
      type: 'component',
      props: [],
      events: [],
      methods: [],
      slots: []
    },
    {
      name: 'checkbox-button',
      type: 'component',
      props: [],
      events: [],
      methods: [],
      slots: []
    }
  ],
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本使用',
        'en-US': 'basic-usage'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>v-model/modelValue</code> 属性绑定勾选值，<code>label</code> 或 <code>default</code> 插槽绑定标签文本。</p>',
        'en-US':
          '<p>Bind the checked value through the <code>v-model/modelValue/code> attribute and the <code>label/code> props or <code>default/code> slot to bind the label text.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'checkbox-group',
      name: {
        'zh-CN': '复选框组',
        'en-US': 'checkbox group'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>checkbox-group</code> 可以将多个 <code>checkbox</code> 元素管理为一组，在 <code>checkbox-group</code> 中使用 <code>v-model</code> 绑定 Array 类型的变量即可实现双向绑定。 <code>checkbox</code> 的 <code>label</code> 属性是其对应的值，若该标签中无内容，则该属性也充当 <code>checkbox</code> 的描述文本。 <code>label</code> 与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>',
        'en-US':
          '<p>Manages multiple <code>checkbox</code> elements into a group through the <code>checkbox-group</code> element. In <code>checkbox-group</code> , use <code>v-model</code> to bind variables of the Array type to implement bidirectional binding. The <code>label</code> attribute of the <code>checkbox</code> is its corresponding value. If there is no content in the tag, the attribute also serves as the introduction after the checkbox. <code>label</code> corresponds to the element value in the array. If the specified value exists, the value is selected. Otherwise, the value is not selected. </p>'
      },
      codeFiles: ['checkbox-group.vue']
    },
    {
      demoId: 'indeterminate',
      name: {
        'zh-CN': '全选与半选',
        'en-US': 'Set the all-selected and indeterminate state'
      },
      desc: {
        'zh-CN': '<p>全选与半选</p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['indeterminate.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'disabled'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 设置禁用。</p>',
        'en-US': '<p>The demo of <code>disabled<code> attribute.</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'custom-value',
      name: {
        'zh-CN': '自定义取值',
        'en-US': 'custom value'
      },
      desc: {
        'zh-CN': '<p>通过 <code>true-label</code> 自定义选中值，<code>false-label</code> 自定义未选中值。</p>',
        'en-US':
          '<p>Customize the selected value with <code>true-label</code> and the unselected value with <code>false-label</code>.</p>'
      },
      codeFiles: ['true-false-label.vue']
    },
    {
      demoId: 'icon-position',
      name: {
        'zh-CN': 'icon对齐方式',
        'en-US': 'Icon Alignment'
      },
      desc: {
        'zh-CN': '<p>通过 <code>icon-position</code> 属性设置图标与文本的对齐方式。</p>',
        'en-US': '<p>Set the alignment of icons and text using the <code>icon-position</code> property.k</p>'
      },
      codeFiles: ['icon-position.vue']
    },
    {
      demoId: 'event-change',
      name: {
        'zh-CN': '事件',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>勾选值改变后将触发 <code>change</code> 事件。</p>',
        'en-US': '<p>The <code>change</code> event is triggered when the value of the check box is changed. </p>'
      },
      codeFiles: ['event-change.vue']
    }
  ]
}
