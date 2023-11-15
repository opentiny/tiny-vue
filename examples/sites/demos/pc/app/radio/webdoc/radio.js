export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>通过 <code>v-model</code> 绑定变量，变量值对应 <code>label</code> 属性的值。</p>\n',
        'en-US':
          '<p>Bind variables through <code>v-model</code> , and the variable value corresponds to the value of the <code>label</code> attribute.</p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'radio-group',
      'name': { 'zh-CN': '单选框组', 'en-US': 'Radio group' },
      'desc': {
        'zh-CN':
          '<p> <code>radio-group</code> 可以将 <code>radio</code> 或者 <code>radio-button</code> 组合起来，通过 <code>v-modal</code> 绑定选中的值。</p>\n',
        'en-US': '<p>You can set the <code>border</code> attribute to add a border to an option button. </p>\n'
      },
      'codeFiles': ['radio-group.vue']
    },
    {
      'demoId': 'group-options',
      'name': { 'zh-CN': '配置式单选组', 'en-US': 'Profile Radio Group' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>options</code> 配置式渲染单选组。 <code>options</code> 的类型为<a href="#IRadioGroupOptions">IRadioGroupOptions[]</a>。另外还提供 <code>type</code> 属性，配合 <code>options</code> 属性一起使用，默认值为 <code>radio</code> 。可以配置为 <code>button</code> ，配置后单选组将以按钮的形式展示。</p>\n',
        'en-US':
          '<p>Provides the <code>options</code> attribute to render radio groups by configuring object array data. This property eliminates the need to insert a <code>&lt;radio&gt;</code> or <code>&lt;radio-button&gt;</code> tag as a slot in the tag. \n\nThe <code>options</code> object array contains three fields: <code>label</code> , <code>text</code> , and <code>events</code> . \n\n The <code>type</code> attribute is also provided, which is used together with the <code>options</code> attribute. The default value is <code>radio</code> . You can also set this parameter to <code>button</code> . After the configuration, the radio group is displayed as a button. </p>\n'
      },
      'codeFiles': ['group-options.vue']
    },
    {
      'demoId': 'radio-events',
      'name': { 'zh-CN': '单选框事件', 'en-US': 'Option button event' },
      'desc': {
        'zh-CN':
          '<p>可在 <code>radio</code> 、 <code>radio-group</code> 组件上设置 <code>change</code> 事件，当绑定值变化时触发，参数为选中的 <code>label</code> 值。</p>\n',
        'en-US':
          '<p>You can set the <code>change</code> event on the Radio and  <code>radio-group</code> components. The event is triggered when the bound value changes. The callback function is the selected radio label value. </p>\n'
      },
      'codeFiles': ['radio-events.vue']
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
        'zh-CN': '<p>可在 <code>radio-group</code> 组件上设置 <code>vertical</code> 属性，使单选框垂直布局。</p>\n',
        'en-US':
          '<p>You can set the <code>vertical</code> attribute on the  <code>radio-group</code> component to enable the vertical layout of the option buttons. </p>\n'
      },
      'codeFiles': ['vertical.vue']
    },
    {
      'demoId': 'active-color',
      'name': { 'zh-CN': '颜色设置', 'en-US': 'Color Settings' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>text-color</code> 设置单选按钮组激活时的文本颜色，通过 <code>fill</code> 设置填充色和边框色。</p>\n',
        'en-US':
          'Set the text color when the radio button group is activated through <code>text color</code> , and set the fill color and border color through <code>fill</code> .</p>\n'
      },
      'codeFiles': ['active-color.vue']
    },
    {
      'demoId': 'radio-text',
      'name': { 'zh-CN': '文字内容', 'en-US': 'Text Content' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>text</code> 属性或者默认插槽设置文字内容，插槽优先级大于 <code>text</code> 属性。若两者都没有，则使用 <code>label</code> 值作为文字内容。</p>\n',
        'en-US':
          '<pBy setting the text content through the <code>text</code> attribute or default slot, the slot priority is greater than the <code>text</code> attribute. If neither is present, use the <code>label</code> value as the text content. </p>\n'
      },
      'codeFiles': ['radio-text.vue']
    },
    {
      'demoId': 'radio-size',
      'name': { 'zh-CN': '尺寸设置', 'en-US': 'Size Settings' },
      'desc': {
        'zh-CN':
          '<p>可对按钮形式的 <code>radio</code> 或带有边框的 <code>radio</code> 设置 <code>size</code> 属性，以改变其尺寸，包括 <code>medium、small、mini</code> 三个选项。</p>\n',
        'en-US':
          '<p>You can set the <code>size</code> attribute for a radio with a button or a radio with a border to change its size. The options include medium, small, and mini. </p>\n'
      },
      'codeFiles': ['radio-size.vue']
    },
    {
      'demoId': 'default-slot',
      'name': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
      'desc': {
        'zh-CN': '<p>通过 <code>default</code> 默认插槽列表。</p>\n',
        'en-US': '<p>by <code>default</code> default slot list. </p>\n'
      },
      'codeFiles': ['default-slot.vue']
    }
  ],
  apis: [
    {
      'name': 'radio',
      'type': 'component',
      'props': [
        {
          'name': 'border',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示边框',
            'en-US': 'Display Border'
          },
          'demoId': 'with-border'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否禁用',
            'en-US': 'Disable'
          },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'label',
          'type': 'boolean | number | string',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'radio选中时的值',
            'en-US': 'Value when radio is selected'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'boolean | number | string',
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
          'demoId': ''
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
          'name': 'text',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '单选框文本内容',
            'en-US': 'Radio Box Text Content'
          },
          'demoId': 'radio-text'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '(value: boolean | number | string) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '绑定值变化时触发的事件',
            'en-US': 'Event triggered when the binding value changes'
          },
          'demoId': 'radio-events'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Radio的默认插槽',
            'en-US': 'Radio default slot'
          },
          'demoId': 'default-slot'
        }
      ]
    },
    {
      'name': 'radio-group',
      'type': 'component',
      'props': [
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否禁用单选组',
            'en-US': 'Disable radio group'
          },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'fill',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置按钮形式单选选中时的背景颜色',
            'en-US': 'Set the background color for button form when radio selected'
          },
          'demoId': 'active-color'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'string[] | number[]',
          'defaultValue': '',
          'desc': {
            'zh-CN': '单选组绑定值',
            'en-US': 'Radio group binding value'
          },
          'demoId': 'radio-group'
        },
        {
          'name': 'options',
          'type': 'IRadioGroupOptions[]',
          'typeAnchorName': 'IRadioGroupOptions',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置式单选组设置',
            'en-US': 'Configuration based radio group settings'
          },
          'demoId': 'group-options'
        },
        {
          'name': 'size',
          'type': 'medium | small | mini',
          'defaultValue': '',
          'desc': {
            'zh-CN': '单选组尺寸',
            'en-US': 'Radio Group Size'
          },
          'demoId': 'radio-size'
        },
        {
          'name': 'text-color',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置按钮形式单选激活时的文本颜色',
            'en-US': 'Set the text color for button format radio active'
          },
          'demoId': 'active-color'
        },
        {
          'name': 'type',
          'type': 'radio | button',
          'defaultValue': 'radio',
          'desc': {
            'zh-CN': '设置配置式单选组的展示形式',
            'en-US': 'Set the display format of configurable radio groups'
          },
          'demoId': 'group-options'
        },
        {
          'name': 'vertical',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '垂直显示单选组',
            'en-US': 'Vertical display of radio groups'
          },
          'demoId': 'vertical'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '(value: number[] | string[]) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '绑定值变化时触发的事件',
            'en-US': 'Event triggered when the binding value changes'
          },
          'demoId': 'radio-events'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'RadioGroup的默认插槽',
            'en-US': 'Radio group default slot'
          },
          'demoId': 'radio-group'
        }
      ]
    },
    {
      'name': 'radio-button',
      'type': 'component',
      'props': [
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否禁用',
            'en-US': 'Is disabled'
          },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'label',
          'type': 'boolean | number | string',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Radio 的 value',
            'en-US': 'Radio value'
          },
          'demoId': 'radio-group'
        },
        {
          'name': 'name',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '原生name属性',
            'en-US': 'Native name attribute'
          },
          'demoId': ''
        },
        {
          'name': 'text',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '单选框文本内容',
            'en-US': 'Radio Box Text Content'
          },
          'demoId': 'radio-text'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          'demoId': 'default-slot'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IRadioGroupOptions',
      type: 'interface',
      code: `
interface IRadioGroupOptions {
  label: string // 选中时对应的值
  text?: number // 描述文本
  events?: {
    click?: (e: Event) => void // 点击事件
    change?: (e: Event) => void // change事件
  }
}`
    }
  ]
}
