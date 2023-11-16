export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '<p>详细用法参考如下示例。</p>', 'en-US': '<p>For details, see the following example.</p>' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'checkbox-group',
      'name': { 'zh-CN': '复选框组', 'en-US': 'Checkbox group' },
      'desc': {
        'zh-CN':
          '<p> <code>checkbox-group</code> 可以将多个 <code>checkbox</code> 元素管理为一组，在 <code>checkbox-group</code> 中使用 <code>v-model</code> 绑定 Array 类型的变量即可实现双向绑定。 <code>checkbox</code> 的 <code>label</code> 属性是其对应的值，若该标签中无内容，则该属性也充当 <code>checkbox</code> 的描述文本。 <code>label</code> 与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>\n',
        'en-US':
          '<p>Manages multiple <code>checkbox</code> elements into a group through the <code>checkbox-group</code> element. In <code>checkbox-group</code> , use <code>v-model</code> to bind variables of the Array type to implement bidirectional binding. The <code>label</code> attribute of the <code>checkbox</code> is its corresponding value. If there is no content in the tag, the attribute also serves as the introduction after the checkbox. <code>label</code> corresponds to the element value in the array. If the specified value exists, the value is selected. Otherwise, the value is not selected. </p>\n'
      },
      'codeFiles': ['checkbox-group.vue']
    },
    {
      'demoId': 'checkbox-button',
      'name': { 'zh-CN': '复选框按钮', 'en-US': 'Checkbox button' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>checkbox-button</code> 以按钮的形式展示复选框,用法与 <code>checkbox</code> 相似。复选框按钮组可以通过 <code>fill</code> 自定义选中时背景颜色。</p>\n',
        'en-US':
          '<p> <code>checkbox button</code> Display checkboxes in the form of buttons, similar in usage to <code>checkbox</code> .The checkbox button group can customize the background color when selected through <code>fill</code> .</p>\n'
      },
      'codeFiles': ['checkbox-button.vue']
    },
    {
      'demoId': 'checkbox-events',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN': '<p>勾选值改变后将触发 <code>change</code> 事件。</p>\n',
        'en-US': '<p>The <code>change</code> event is triggered when the value of the check box is changed. </p>\n'
      },
      'codeFiles': ['checkbox-events.vue']
    },
    {
      'demoId': 'group-options',
      'name': { 'zh-CN': '配置式复选框组', 'en-US': 'Profile Checkbox Group' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>options</code> 配置显示多选框组。使用该属性后，可以不用再在标签中以插槽的形式插入 <code>checkbox</code> 或 <code>checkbox-button</code> 元素。 <code>options</code> 的类型为<a href="#ICheckboxGroupOptions">ICheckboxGroupOptions[]</a>。 <code>type</code> 属性配合 <code>options</code> 属性一起使用，将 <code>type</code> 配置为 <code>button</code> ，复选框组将以按钮的形式展示。</p>\n',
        'en-US':
          '<p>Configure the display of multiple selection box groups through <code>options</code> . After using this attribute, you no longer need to insert <code>checkbox</code> or <code>checkbox button</code> elements in the label as slots. The type of <code>options</code> is<a="# ICheckboxGroupOptions">ICheckboxGroupOptions[]</a>< The code>type</code> attribute is used in conjunction with the <code>options</code> attribute to configure the <code>type</code> as <code>button</code> , and the checkbox group will be displayed in the form of a button.</p>\n'
      },
      'codeFiles': ['group-options.vue']
    },
    {
      'demoId': 'description',
      'name': { 'zh-CN': '描述文本', 'en-US': 'Description text' },
      'desc': {
        'zh-CN':
          '<p>复选框和复现框按钮的描述文本，有三种方式可以提供，优先级依次为 <code>默认插槽</code> 、 <code>text</code> 、 <code>label</code> 。</p>',
        'en-US':
          '<p>There are three ways to provide the description text for the checkbox or checkbox button, with priority being <code>default slot</code> , <code>text</code> , and <code>label</code> .<p>'
      },
      'codeFiles': ['description.vue']
    },
    {
      'demoId': 'indeterminate',
      'name': { 'zh-CN': '全选与半选', 'en-US': 'All and Half' },
      'desc': {
        'zh-CN':
          '<p>在 <code>checkbox</code> 元素中配置 <code>indeterminate</code> 属性为 true 后，勾选框将展示为半选的样式。</p>\n',
        'en-US':
          '<p>After the <code>indeterminate</code> attribute is set to true in the <code>checkbox</code> element, the check box is displayed as half-selected. </p>\n'
      },
      'codeFiles': ['indeterminate.vue']
    },
    {
      'demoId': 'min-max',
      'name': { 'zh-CN': '可选数量限制', 'en-US': 'Quantity Limit' },
      'desc': {
        'zh-CN':
          '<p>在 <code>checkbox-group</code> 上可通过 <code>min</code> 、 <code>max</code> 属性指定可勾选项目的最小、最大值。</p>\n',
        'en-US':
          '<p>On the <code>checkbox-group</code> , the <code>min</code> and <code>max</code> attributes can be used to specify the minimum and maximum values of the options that can be selected. </p>\n'
      },
      'codeFiles': ['min-max.vue']
    },
    {
      'demoId': 'checked',
      'name': { 'zh-CN': '是否默认勾选', 'en-US': 'Default selected' },
      'desc': {
        'zh-CN':
          '<p> <code>check-group</code> 上绑定的v-model可以配置默认选中， <code>checked</code> 同样可以配置默认选中。</p>\n',
        'en-US':
          '<p>The v-model bound on <code>check group</code> can be configured with default selection, and <code>checked</code> can also be configured with default selection.</p>\n'
      },
      'codeFiles': ['checked.vue']
    },
    {
      'demoId': 'vertical-checkbox',
      'name': { 'zh-CN': '垂直布局', 'en-US': 'vertical layout' },
      'desc': {
        'zh-CN':
          '<p>在 <code>checkbox-group</code> 元素上设置 <code>vertical</code> 为 true，则其管理的 <code>checkbox-button</code> 或 <code>checkbox</code> 将展示为垂直布局。</p>\n',
        'en-US':
          '<p>Set <code>vertical</code> to true on the <code>checkbox-group</code> element, The <code>checkbox-button</code> or <code>checkbox</code> managed by it is displayed as a vertical layout. </p>\n'
      },
      'codeFiles': ['vertical-checkbox.vue']
    },
    {
      'demoId': 'border',
      'name': { 'zh-CN': '带边框复选框', 'en-US': 'Checkbox border' },
      'desc': {
        'zh-CN':
          '<p> <code>checkbox</code> 上配置 <code>border</code> ，可显示边框。若复选框后的描述文本超出时，可以通过 Tooltip 组件增加提示信息，鼠标悬停时可提示所有内容。</p>\n',
        'en-US':
          '<p>Configure <code>border</code> on <code>checkbox</code> to display borders. If the description text after the check box exceeds, a prompt message can be added through the Tooltip component, and all content can be prompted when the mouse hovers.</p>\n'
      },
      'codeFiles': ['border.vue']
    },
    {
      'demoId': 'text',
      'name': { 'zh-CN': '状态对应的值', 'en-US': 'Text' },
      'desc': {
        'zh-CN': '<p>通过 <code>true-label</code> 设置选中的值， <code>false-label</code> 设置未选中的值。</p>\n',
        'en-US':
          '<p>Use <code>true-label</code> to set the selected value, and <code>false-label</code> to set the unselected value. </p>\n'
      },
      'codeFiles': ['text.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Dimension' },
      'desc': {
        'zh-CN':
          '<p>当复选框为按钮形式时， <code>size</code> 属性可以设置尺寸，可选项有 <code>medium、small、mini</code> 不设置则为默认样式。</p>',
        'en-US':
          '<p>When the check box is a button, you can set the size of the button through the <code>size</code> attribute. The options are medium, small, and mini. \n\n Setting the <code>disabled</code> property on <code>checkbox-button</code> will disable a check button. If the <code>disabled</code> attribute is configured on the <code>checkbox-group</code> tab, all check buttons are disabled. </p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'checkbox-slot',
      'name': { 'zh-CN': '默认插槽', 'en-US': 'Slot' },
      'desc': {
        'zh-CN': '<p>通过 <code>default slot</code> 自定义文本内容。</p>\n',
        'en-US': '<p>Customize text content through <code>default slot</code> .</p>\n'
      },
      'codeFiles': ['checkbox-slot.vue']
    },
    {
      'demoId': 'checkbox-button-multiple',
      'name': { 'zh-CN': '多行按钮', 'en-US': 'Checkbox Button Multiple' },
      'desc': {
        'zh-CN': '<p>多行按钮组，超出最大宽度后，换行显示。</p>\n',
        'en-US': '<p>Multi line button group, displayed as a new line after exceeding the maximum width.</p>\n'
      },
      'codeFiles': ['checkbox-button-multiple.vue']
    },
    {
      'demoId': 'dynamic-create-checkbox',
      'name': { 'zh-CN': '动态生成复选框组', 'en-US': 'Dynamic generate check box groups' },
      'desc': {
        'zh-CN': '<p>复选框组所需数据可通过请求服务从后台取得，然后动态生成。</p>\n',
        'en-US':
          '<p>The data required by the check box group can be obtained from the background through the request service and then dynamically generated. </p>\n'
      },
      'codeFiles': ['dynamic-create-checkbox.vue']
    }
  ],
  apis: [
    {
      'name': 'checkbox',
      'type': 'component',
      'props': [
        {
          'name': 'border',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示边框',
            'en-US': 'Display border'
          },
          'demoId': 'border'
        },
        {
          'name': 'checked',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否默认勾选',
            'en-US': 'Currently selected'
          },
          'demoId': 'checked'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否禁用',
            'en-US': 'Disable'
          },
          'demoId': 'indeterminate'
        },
        {
          'name': 'false-label',
          'type': 'string | number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '没有选中时的值',
            'en-US': 'Value when no option is selected'
          },
          'demoId': 'text'
        },
        {
          'name': 'indeterminate',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置 indeterminate 状态，只负责样式控制',
            'en-US': 'Sets the indeterminate state and controls only the style.'
          },
          'demoId': 'indeterminate'
        },
        {
          'name': 'label',
          'type': 'string | number | boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）',
            'en-US':
              'Selected value (This parameter is valid only when checkbox-group or the bound object type is array)'
          },
          'demoId': 'checkbox-group'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'string | number | boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '绑定值',
            'en-US': 'Bound Value'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'name',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '原生 name 属性',
            'en-US': 'Native name attribute'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'size',
          'type': 'medium | small | mini',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'checkbox 的尺寸，仅在 border 为真时有效',
            'en-US': 'Checkbox size. This parameter is valid only when border is set to true'
          },
          'demoId': 'size'
        },
        {
          'name': 'text',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '复选框显示的文本',
            'en-US': 'Text displayed in the check box'
          },
          'demoId': 'description'
        },
        {
          'name': 'true-label',
          'type': 'string | number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '选中时的值',
            'en-US': 'Value when selected'
          },
          'demoId': 'text'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '(value: string | number | boolean) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当绑定值变化时触发的事件',
            'en-US': 'This event is triggered when the binding value changes'
          },
          'demoId': 'checkbox-events'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'checkbox的内容',
            'en-US': 'Checkbox content'
          },
          'demoId': 'checkbox-slot'
        }
      ]
    },
    {
      'name': 'checkbox-group',
      'type': 'component',
      'props': [
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否禁用',
            'en-US': 'Disable'
          },
          'demoId': 'indeterminate'
        },
        {
          'name': 'fill',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '按钮形式的 checkbox 激活时的填充色和边框色',
            'en-US': 'Fill color and border color when the checkbox in button mode is activated'
          },
          'demoId': 'checkbox-button'
        },
        {
          'name': 'max',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '可被勾选的 checkbox 的最大数量',
            'en-US': 'Maximum number of checkboxes that can be selected'
          },
          'demoId': 'min-max'
        },
        {
          'name': 'min',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '可被勾选的 checkbox 的最小数量',
            'en-US': 'Minimum number of checkboxes that can be selected'
          },
          'demoId': 'min-max'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'string[] | number[]',
          'defaultValue': '',
          'desc': {
            'zh-CN': '绑定值',
            'en-US': 'Bound Value'
          },
          'demoId': 'checkbox-group'
        },
        {
          'name': 'options',
          'type': 'ICheckboxGroupOptions[]',
          'typeAnchorName': 'ICheckboxGroupOptions',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'checkbox组件列表',
            'en-US': 'Checkbox component list'
          },
          'demoId': 'group-options'
        },
        {
          'name': 'size',
          'type': 'medium | small | mini',
          'defaultValue': '',
          'desc': {
            'zh-CN': '多选框组尺寸，仅对按钮形式的 checkbox 或带有边框的 checkbox 有效',
            'en-US':
              'Size of the check box group. This parameter is valid only for the check box with buttons or borders'
          },
          'demoId': 'size'
        },
        {
          'name': 'text-color',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '按钮形式的 checkbox 激活时的文本颜色',
            'en-US': 'Text color when the checkbox in button mode is activated'
          },
          'demoId': 'vertical-checkbox'
        },
        {
          'name': 'type',
          'type': 'button | checkbox',
          'defaultValue': 'checkbox',
          'desc': {
            'zh-CN': ' checkbox组件类型，需配和options使用（button/checkbox）',
            'en-US': 'Checkbox component type (button/checkbox)'
          },
          'demoId': 'group-options'
        },
        {
          'name': 'vertical',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置组件排列方式;设置复选框是否垂直排列;该属性的可选值为 true / false',
            'en-US':
              'Set the component arrangement mode. Sets whether the check boxes are arranged vertically. The value of this attribute can be true or false'
          },
          'demoId': 'vertical-checkbox'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'checkbox选项组',
            'en-US': 'Checkbox Option Group'
          },
          'demoId': 'checkbox-group'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '(value: string[] | number[]) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当绑定值变化时触发的事件',
            'en-US': 'This event is triggered when the binding value changes.'
          },
          'demoId': 'checkbox-events'
        }
      ]
    },
    {
      'name': 'checkbox-button',
      'type': 'component',
      'props': [
        {
          'name': 'checked',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '当前是否勾选',
            'en-US': 'Currently selected'
          },
          'demoId': 'checked'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否禁用',
            'en-US': 'Is disabled'
          },
          'demoId': 'indeterminate'
        },
        {
          'name': 'events',
          'type': 'ICheckboxGroupOptions.events',
          'typeAnchorName': 'ICheckboxGroupOptions',
          'defaultValue': '',
          'desc': {
            'zh-CN': '原生事件',
            'en-US': 'Native event'
          },
          'demoId': 'group-options'
        },
        {
          'name': 'false-label',
          'type': 'string | number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '没有选中时的值',
            'en-US': 'Value when no option is selected'
          },
          'demoId': 'text'
        },
        {
          'name': 'label',
          'type': 'string | number | boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）;该属性的可选值为 medium-',
            'en-US':
              'Value in the selected state (This parameter is valid only when checkbox-group or the bound object type is array.) The optional value of this attribute is medium-'
          },
          'demoId': 'checkbox-group'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'string | number | boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '绑定值',
            'en-US': 'Bound Value'
          },
          'demoId': 'checkbox'
        },
        {
          'name': 'name',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '原生 name 属性',
            'en-US': 'Native name attribute'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'text',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '复选框文本',
            'en-US': 'Text'
          },
          'demoId': 'description'
        },
        {
          'name': 'true-label',
          'type': 'string | number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '选中时的值',
            'en-US': 'Value when selected'
          },
          'demoId': 'text'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'checkbox-button的内容',
            'en-US': 'Checkbox-button content'
          },
          'demoId': 'description'
        }
      ]
    }
  ],
  types: [
    {
      name: 'ICheckboxGroupOptions',
      type: 'interface',
      code: `
interface ICheckboxGroupOptions {
  label: string // 选中时对应的值
  text?: number // 描述文本
  disabled?: boolean // 是否禁用
  checked?: boolean // 是否默认选中
  events?: {
    click?: (e: Event) => void // 点击事件
    change?: (e: Event) => void // change事件
  }
}`
    }
  ]
}
