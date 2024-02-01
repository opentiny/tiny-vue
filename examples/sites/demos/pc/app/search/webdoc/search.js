export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '通过 <code>v-model</code> 设置双向绑定搜索值， <code>placeholder</code> 设置默认占位符文本。',
        'en-US':
          'Set bidirectional binding search values through <code>v-model</code> , and set default placeholder text through <code>placeholder</code> .'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'clearable',
      'name': { 'zh-CN': '可清除', 'en-US': 'Can be cleared' },
      'desc': {
        'zh-CN': '通过 <code>clearable</code> 设置显示清空图标按钮。',
        'en-US': 'Set the display clear icon button through <code>clear</code> .'
      },
      'codeFiles': ['clearable.vue']
    },
    {
      'demoId': 'mini-mode',
      'name': { 'zh-CN': '迷你模式', 'en-US': 'Mini mode' },
      'desc': {
        'zh-CN': '通过 <code>mini</code> 设置为 mini 模式。',
        'en-US': 'Set to mini mode through <code>mini</code> .'
      },
      'codeFiles': ['mini-mode.vue']
    },
    {
      'demoId': 'search-types',
      'name': { 'zh-CN': '搜索类型', 'en-US': 'Search Type' },
      'desc': {
        'zh-CN': '通过 <code>search-types</code> 设置可选的搜索类型， <code>type-value</code> 设置搜索类型的默认值。',
        'en-US':
          'Set optional search types by <code>search-types</code> , and set default values for search types by <code>type-value</code> .'
      },
      'codeFiles': ['search-types.vue']
    },
    {
      'demoId': 'transparent-mode',
      'name': { 'zh-CN': '透明模式', 'en-US': 'Transparent mode' },
      'desc': {
        'zh-CN': '通过 <code>transparent</code> 设置为透明模式（注： <code>mini</code> 模式下有效）。',
        'en-US': 'Set to transparent mode through <code>transparent</code> (note: valid in <code>mini</code> mode).'
      },
      'codeFiles': ['transparent-mode.vue']
    },
    {
      'demoId': 'custom-search-types',
      'name': {
        'zh-CN': '定义搜索类型下拉项',
        'en-US': 'Custom Search Type Dropdown'
      },
      'desc': {
        'zh-CN': '通过 <code>poplist</code> 插槽自定义搜索类型弹出的内容。',
        'en-US': 'Customize the search type pop-up content through the <code>popup</code> slot.'
      },
      'codeFiles': ['custom-search-types.vue']
    },
    {
      'demoId': 'show-selected-types',
      'name': { 'zh-CN': '定义默认搜索类型', 'en-US': 'Customize default search type' },
      'desc': {
        'zh-CN': '通过 <code>text</code> 插槽自定义默认搜索类型的内容。',
        'en-US': 'Customize the content of the default search type through the <code>text</code> slot.'
      },
      'codeFiles': ['show-selected-types.vue']
    },
    {
      'demoId': 'slot-prefix',
      'name': { 'zh-CN': '左侧插槽', 'en-US': 'Left slot' },
      'desc': {
        'zh-CN': '通过 <code>prefix</code> 插槽自定义左侧内容。',
        'en-US': 'Customize the left content through the <code>prefix</code> slot.'
      },
      'codeFiles': ['slot-prefix.vue']
    },
    {
      'demoId': 'events',
      'name': { 'zh-CN': '事件', 'en-US': 'Search event' },
      'desc': {
        'zh-CN': `<div class="tip custom-block">通过 <code>is-enter-search</code> 设置回车触发搜索事件， <code>search</code> 监听搜索事件；<br />
              通过 <code>change</code> 监听输入框失焦时搜索值改变事件, <code>input</code> 监听搜索值实时改变事件；<br />
              通过 <code>select</code> 监听搜索类型选中事件。</div>`,
        'en-US': `<div class="tip custom-block">Set a carriage return to trigger a search event by <code>is enter search</code> , and listen for search events by <code>search</code> <br />
              By <code>change</code> listening for search value change events when the input box is out of focus, and <code>input</code> listening for real-time search value change events<br />
              Listen for search type selection events through <code>select</code> .</div>`
      },
      'codeFiles': ['events.vue']
    }
  ],
  apis: [
    {
      'name': 'search',
      'type': 'component',
      'props': [
        {
          'name': 'clearable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示清空图标按钮',
            'en-US': 'Is the clear icon button displayed'
          },
          'demoId': 'clearable'
        },
        {
          'name': 'is-enter-search',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否在按下键盘 Enter 键时触发 search 事件',
            'en-US': 'Whether to trigger the search event when pressing the Enter key on the keyboard'
          },
          'demoId': 'events'
        },
        {
          'name': 'mini',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否为迷你模式，配置为 true 时，默认显示为一个带图标的圆形按钮，点击后展开',
            'en-US':
              'Is it mini mode? When configured to true, it will default to a circular button with an icon, which will expand after clicking'
          },
          'demoId': 'mini-mode'
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '搜索输入框内的提示占位文本',
            'en-US': 'Search for prompt placeholder text in the input box'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'search-types',
          'type': 'ITypeValue[]',
          'typeAnchorName': 'ITypeValue',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '搜索类型的选项列表',
            'en-US': 'List of options for search types'
          },
          'demoId': 'search-types'
        },
        {
          'name': 'transparent',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否为透明模式，此模式一般用在带有背景的场景',
            'en-US': 'Is it transparent mode? This mode is generally used in scenes with a background'
          },
          'demoId': 'transparent-mode'
        },
        {
          'name': 'type-value',
          'type': 'ITypeValue',
          'typeAnchorName': 'ITypeValue',
          'defaultValue': '',
          'desc': {
            'zh-CN': '搜索类型的默认值。默认为搜索类型的第一项【3.11.0新增】',
            'en-US':
              'The default value for the search type. Default to the first item of the search type [added on 3.11.0]'
          },
          'demoId': 'search-types'
        },
        {
          'name': 'v-model',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '绑定搜索值', 'en-US': 'Bind search values' },
          'demoId': 'basic-usage'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '(value: ITypeValue, input: string) => void',
          'typeAnchorName': 'ITypeValue',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入完成时触发的回调函数； value 为搜索类型，input 为当前输入值',
            'en-US':
              'The callback function triggered upon input completion; value is the search type, input is the current input value'
          },
          'demoId': 'events'
        },
        {
          'name': 'clear',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '清空值触发的回调函数',
            'en-US': 'Callback function triggered by clearing values'
          },
          'demoId': 'events'
        },
        {
          'name': 'input',
          'type': '(input: string, value: ITypeValue) => void',
          'typeAnchorName': 'ITypeValue',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入实时触发的回调函数； input 为当前输入值，value 为搜索类型【3.9.1新增】',
            'en-US':
              'Input a real-time triggered callback function; input is the current input value, value is the search type [3.9.1 added]'
          },
          'demoId': 'events'
        },
        {
          'name': 'search',
          'type': '(value: ITypeValue, input: string) => void',
          'typeAnchorName': 'ITypeValue',
          'defaultValue': '',
          'desc': {
            'zh-CN': '展开模式下，点击搜索按钮时触发的回调函数； value 为搜索类型，input 为当前输入值',
            'en-US':
              'The callback function triggered when clicking the search button in expansion mode; value is the search type, input is the current input value'
          },
          'demoId': 'events'
        },
        {
          'name': 'select',
          'type': '(value: ITypeValue) => void',
          'typeAnchorName': 'ITypeValue',
          'defaultValue': '',
          'desc': {
            'zh-CN': '切换类型时触发的回调函数； value 为搜索类型',
            'en-US': 'The callback function triggered when switching types; value is a search type'
          },
          'demoId': 'events'
        }
      ],
      'slots': [
        {
          'name': 'poplist',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '搜索的弹出列表插槽', 'en-US': 'Slot in the search pop-up list' },
          'demoId': 'custom-search-types'
        },
        {
          'name': 'prefix',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '左侧插槽', 'en-US': 'Left slot' },
          'demoId': 'slot-prefix'
        },
        {
          'name': 'text',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认搜索类型插槽', 'en-US': 'Default search type slot' },
          'demoId': 'show-selected-types'
        }
      ]
    }
  ],
  types: [
    {
      name: 'ITypeValue',
      type: 'interface',
      code: `
interface ITypeValue {
  text: string
  value: number
}`
    }
  ]
}
