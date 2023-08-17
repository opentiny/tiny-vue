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
      'demoId': 'checkbox-group',
      'name': { 'zh-CN': '复选框组和垂直复选框组', 'en-US': 'Checkbox Group and Vertical Checkbox Group' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>checkbox-group</code> 元素把多个 <code>checkbox</code> 元素管理为一组，在 <code>checkbox-group</code> 中使用 <code>v-model</code> 绑定 Array 类型的变量即可实现双向绑定。 <code>checkbox</code> 的 <code>label</code> 属性是其对应的值，若该标签中无内容，则该属性也充当 checkbox 后的介绍。<code>label</code> 与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>\n',
        'en-US':
          '<p>Manages multiple <code>checkbox</code> elements into a group through the <code>checkbox-group</code> element. In <code>checkbox-group</code>, use <code>v-model</code> to bind variables of the Array type to implement bidirectional binding. The <code>label</code> attribute of the <code>checkbox</code> is its corresponding value. If there is no content in the tag, the attribute also serves as the introduction after the checkbox. <code>label</code> corresponds to the element value in the array. If the specified value exists, the value is selected. Otherwise, the value is not selected. </p>\n'
      },
      'codeFiles': ['checkbox-group.vue']
    },
    {
      'demoId': 'group-options',
      'name': { 'zh-CN': '配置式复选框组', 'en-US': 'Profile Checkbox Group' },
      'desc': {
        'zh-CN':
          '<p>提供 <code>options</code> 属性，支持通过配置对象数组数据的形式来渲染多选框组。使用该属性后，可以不用再在标签中以插槽的形式插入 <code>checkbox</code> 或 <code>checkbox-button</code> 元素。\n\n<code>options</code> 对象数组中包括三个字段：<code>label</code>、<code>text</code>、<code>events</code>。\n\n另外还提供 <code>type</code> 属性，配合 <code>options</code> 属性一起使用，默认值为 <code>checkbox</code>。还可以配置为 <code>button</code>，配置后复选框组将以按钮的形式展示。</p>\n',
        'en-US':
          '<p>Provides the <code>options</code> attribute. You can render a check box group by configuring object array data. With this attribute, you no longer need to insert the <code>checkbox</code> or <code>checkbox-button</code> element as a slot in the tag. \n\nThe <code>options</code> object array contains three fields: <code>label</code>, <code>text</code>, and <code>events</code>. \n\n The <code>type</code> attribute is also provided, which is used with the <code>options</code> attribute. The default value is <code>checkbox</code>. You can also set this parameter to <code>button</code>. After the configuration, the check box group is displayed as a button. </p>\n'
      },
      'codeFiles': ['group-options.vue']
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
          '<p>在 <code>checkbox-group</code> 上可通过 <code>min</code>、<code>max</code> 属性指定可勾选项目的最小、最大值。</p>\n',
        'en-US':
          '<p>On the <code>checkbox-group</code>, the <code>min</code> and <code>max</code> attributes can be used to specify the minimum and maximum values of the options that can be selected. </p>\n'
      },
      'codeFiles': ['min-max.vue']
    },
    {
      'demoId': 'checked',
      'name': { 'zh-CN': '当前是否勾选', 'en-US': 'Currently selected' },
      'desc': {
        'zh-CN': '<p>在 <code>checked</code> 当前是否勾选，通过 <code>disabled</code> 设置组件是否禁用。</p>\n',
        'en-US':
          '<p>Whether to select <code>checked</code>. You can set <code>disabled</code> to disable the component. </p>\n'
      },
      'codeFiles': ['checked.vue']
    },
    {
      'demoId': 'checkbox-button',
      'name': { 'zh-CN': '按钮形式复选框', 'en-US': 'button form check box' },
      'desc': {
        'zh-CN':
          '<p>在 <code>checkbox-group</code> 元素中嵌入 <code>checkbox-button</code> 即可实现按钮形式的复选框组。\n通过 <code>fill</code> 按钮形式的 Checkbox 激活时的填充色和边框色，默认值为：#409EFF。</p>\n',
        'en-US':
          '<p>Embed <code>checkbox-button</code> into the <code>checkbox-group</code> element to implement a checkbox group in the form of a button. \n Fill color and border color when the checkbox is activated by pressing the <code>fill</code> button. The default value is #409EFF. </p>\n'
      },
      'codeFiles': ['checkbox-button.vue']
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
      'demoId': 'dynamic-create-checkbox',
      'name': { 'zh-CN': '动态生成复选框组', 'en-US': 'Dynamicly generate check box groups' },
      'desc': {
        'zh-CN': '<p>复选框组所需数据可通过请求服务从后台取得，然后动态生成。</p>\n',
        'en-US':
          '<p>The data required by the check box group can be obtained from the background through the request service and then dynamically generated. </p>\n'
      },
      'codeFiles': ['dynamic-create-checkbox.vue']
    },
    {
      'demoId': 'content-overflow',
      'name': { 'zh-CN': '内容超出时的提示信息', 'en-US': 'Prompt message when the content exceeds the upper limit' },
      'desc': {
        'zh-CN':
          '<p>若复选框后的介绍文字超出时，可以通过 Tooltip 组件增加提示信息，鼠标悬停时可提示所有内容。\n\n在 <code>checkbox</code> 元素上配置 <code>border</code> 属性为 true，可显示边框。</p>\n',
        'en-US':
          '<p>If the introduction text next to the check box exceeds the limit, you can use the Tooltip component to add a prompt. When you hover the cursor over the tooltip component, you can prompt all the contents. \n\n Set the <code>border</code> attribute to true on the <code>checkbox</code> element to display the border. </p>\n'
      },
      'codeFiles': ['content-overflow.vue']
    },
    {
      'demoId': 'text',
      'name': { 'zh-CN': '文本', 'en-US': 'Text' },
      'desc': {
        'zh-CN':
          '<p>在 <code>text</code> 属性设置文本内容\n通过 <code>true-label</code> 设置选中的值， <code>false-label</code> 设置未选中的值。</p>\n',
        'en-US':
          '<p>Set the text content in the <code>text</code> attribute.\nUse <code>true-label</code> to set the selected value, and <code>false-label</code> to set the unselected value. </p>\n'
      },
      'codeFiles': ['text.vue']
    },
    {
      'demoId': 'button-chek-box',
      'name': { 'zh-CN': '文本选择', 'en-US': 'Text Selection' },
      'desc': {
        'zh-CN': '<p>通过 <code>true-label</code> 设置选中的值， <code>false-label</code> 设置未选中的值。</p>\n',
        'en-US':
          '<p> uses <code>true-label</code> to set the selected value and <code>false-label</code> to set the unselected value. </p>\n'
      },
      'codeFiles': ['button-chek-box.vue']
    },
    {
      'demoId': 'with-border',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Dimension' },
      'desc': {
        'zh-CN':
          '<p>当复选框为按钮形式时，通过 <code>size</code> 属性可以设置按钮复选框的尺寸，可选项有 medium、small、mini。\n\n在 <code>checkbox-button</code> 上设置 <code>disabled</code> 属性，将禁用某一个复选按钮，若在 <code>checkbox-group</code> 标签上配置 <code>disabled</code> 属性，则禁用所有复选按钮。</p>\n',
        'en-US':
          '<p>When the check box is a button, you can set the size of the button through the <code>size</code> attribute. The options are medium, small, and mini. \n\n Setting the <code>disabled</code> property on <code>checkbox-button</code> will disable a check button. If the <code>disabled</code> attribute is configured on the <code>checkbox-group</code> tab, all check buttons are disabled. </p>\n'
      },
      'codeFiles': ['with-border.vue']
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
      'demoId': 'checkbox-slot',
      'name': { 'zh-CN': '插槽', 'en-US': 'Slot' },
      'desc': {
        'zh-CN': '<p>Checkbox 的内容</p>\n',
        'en-US':
          '<p>Multi-line button group, after exceeding the maximum width, it will be displayed in a new line.</p>\n'
      },
      'codeFiles': ['checkbox-slot.vue']
    },
    {
      'demoId': 'checkbox-button-multiple',
      'name': { 'zh-CN': '多行按钮', 'en-US': 'Checkbox Button Multiple' },
      'desc': {
        'zh-CN': '<p>多行按钮组，超出最大宽度后，换行显示</p>\n',
        'en-US': '<p>Checkbox button multiple</p>\n'
      },
      'codeFiles': ['checkbox-button-multiple.vue']
    }
  ],
  apis: [
    {
      'name': 'checkbox',
      'type': 'component',
      'properties': [
        {
          'name': 'modelValue / v-model',
          'type': 'String , Number , Boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '绑定值', 'en-US': 'Bound Value' },
          'demoId': 'checkbox-group'
        },
        {
          'name': 'label',
          'type': 'String , Number , Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）',
            'en-US':
              'Selected value (This parameter is valid only when checkbox-group or the bound object type is array.)'
          },
          'demoId': 'indeterminate'
        },
        {
          'name': 'true-label',
          'type': 'String , Number',
          'defaultValue': '',
          'desc': { 'zh-CN': '选中时的值', 'en-US': 'Value when selected' },
          'demoId': 'text'
        },
        {
          'name': 'false-label',
          'type': 'String , Number',
          'defaultValue': '',
          'desc': { 'zh-CN': '没有选中时的值', 'en-US': 'Value when no option is selected' },
          'demoId': 'text'
        },
        {
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Disable' },
          'demoId': 'checked'
        },
        {
          'name': 'border',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否显示边框', 'en-US': 'Display border' },
          'demoId': 'content-overflow'
        },
        {
          'name': 'size',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Checkbox 的尺寸，仅在 border 为真时有效;该属性的可选值为 medium / small / mini',
            'en-US':
              'Checkbox size. This parameter is valid only when border is set to true. The optional values of this attribute are medium / small / mini'
          },
          'demoId': 'with-border'
        },
        {
          'name': 'name',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '原生 name 属性', 'en-US': 'Native name attribute' },
          'demoId': 'checkbox-group'
        },
        {
          'name': 'checked',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '当前是否勾选', 'en-US': 'Currently selected' },
          'demoId': 'checked'
        },
        {
          'name': 'indeterminate',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '设置 indeterminate 状态，只负责样式控制',
            'en-US': 'Sets the indeterminate state and controls only the style.'
          },
          'demoId': 'indeterminate'
        },
        {
          'name': 'text',
          'type': 'String',
          'defaultValue': '该属性的默认值为空',
          'desc': { 'zh-CN': '复选框显示的文本', 'en-US': 'Text displayed in the check box' },
          'demoId': 'text'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当绑定值变化时触发的事件',
            'en-US': 'This event is triggered when the binding value changes.'
          },
          'demoId': 'checkbox-events'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': 'Checkbox的内容', 'en-US': 'Checkbox content' },
          'demoId': 'checkbox-slot'
        }
      ],
      'checkbox-button-attrs': [
        {
          'name': 'label',
          'type': 'String , Number , Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）;该属性的可选值为 medium-',
            'en-US':
              'Value in the selected state (This parameter is valid only when checkbox-group or the bound object type is array.) The optional value of this attribute is medium-'
          },
          'demoId': 'checkbox-group'
        },
        {
          'name': 'true-label',
          'type': 'String , Number',
          'defaultValue': '',
          'desc': { 'zh-CN': '选中时的值', 'en-US': 'Value when selected' },
          'demoId': 'text'
        },
        {
          'name': 'false-label',
          'type': 'String , Number',
          'defaultValue': '',
          'desc': { 'zh-CN': '没有选中时的值', 'en-US': 'Value when no option is selected' },
          'demoId': 'text'
        },
        {
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Disable' },
          'demoId': 'with-border'
        },
        {
          'name': 'name',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '原生 name 属性', 'en-US': 'Native name attribute' },
          'demoId': 'checkbox-group'
        },
        {
          'name': 'text',
          'type': 'String',
          'defaultValue': '该属性的默认值为 Function',
          'desc': { 'zh-CN': '文本', 'en-US': 'Text' },
          'demoId': 'text'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'String , Number , Boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '绑定值', 'en-US': 'Bound Value' },
          'demoId': 'checkbox-button'
        },
        {
          'name': 'events',
          'type': 'Object',
          'defaultValue': '',
          'desc': { 'zh-CN': '原生事件', 'en-US': 'Native event' },
          'demoId': 'checkbox-group'
        },
        {
          'name': 'checked',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '当前是否勾选', 'en-US': 'Currently selected' },
          'demoId': 'checkbox-button'
        }
      ],
      'checkbox-button-slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': 'Checkbox-button的内容', 'en-US': 'Checkbox-button content' },
          'demoId': 'with-border'
        }
      ],
      'checkbox-group-attrs': [
        {
          'name': 'modelValue / v-model',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': '绑定值', 'en-US': 'Bound Value' },
          'demoId': 'checkbox-group'
        },
        {
          'name': 'size',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效;该属性的可选值为 medium / small / mini',
            'en-US':
              'Size of the check box group. This parameter is valid only for the check box with buttons or borders. The optional values of this attribute are medium / small / mini'
          },
          'demoId': 'with-border'
        },
        {
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Disable' },
          'demoId': 'with-border'
        },
        {
          'name': 'min',
          'type': 'Number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '可被勾选的 checkbox 的最小数量',
            'en-US': 'Minimum number of checkboxes that can be selected'
          },
          'demoId': 'min-max'
        },
        {
          'name': 'max',
          'type': 'Number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '可被勾选的 checkbox 的最大数量',
            'en-US': 'Maximum number of checkboxes that can be selected'
          },
          'demoId': 'min-max'
        },
        {
          'name': 'text-color',
          'type': 'String',
          'defaultValue': '该属性的默认值为 #ffffff',
          'desc': {
            'zh-CN': '按钮形式的 Checkbox 激活时的文本颜色',
            'en-US': 'Text color when the checkbox in button mode is activated'
          },
          'demoId': 'vertical-checkbox'
        },
        {
          'name': 'fill',
          'type': 'String',
          'defaultValue': '该属性的默认值为 #409EFF',
          'desc': {
            'zh-CN': '按钮形式的 Checkbox 激活时的填充色和边框色',
            'en-US': 'Fill color and border color when the checkbox in button mode is activated'
          },
          'demoId': 'checkbox-button'
        },
        {
          'name': 'options',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': 'checkbox组件列表', 'en-US': 'Checkbox component list' },
          'demoId': 'checkbox-group'
        },
        {
          'name': 'type',
          'type': 'String',
          'defaultValue': '该属性的默认值为 checkbox,配合 options 属性一起使用',
          'desc': {
            'zh-CN': ' checkbox组件类型（button/checkbox）',
            'en-US': 'Checkbox component type (button/checkbox)'
          },
          'demoId': 'checkbox-group'
        },
        {
          'name': 'vertical',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '设置组件排列方式;设置复选框是否垂直排列;该属性的可选值为 true / false',
            'en-US':
              'Set the component arrangement mode. Sets whether the check boxes are arranged vertically. The value of this attribute can be true or false'
          },
          'demoId': 'vertical-checkbox'
        }
      ],
      'checkbox-group-slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': 'checkbox选项组', 'en-US': 'Checkbox Option Group' },
          'demoId': 'checkbox-group'
        }
      ],
      'checkbox-group-events': [
        {
          'name': 'change',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当绑定值变化时触发的事件',
            'en-US': 'This event is triggered when the binding value changes.'
          },
          'demoId': 'dynamic-create-checkbox'
        }
      ]
    }
  ]
}
