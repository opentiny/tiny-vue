export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'search',
      type: 'component',
      props: [
        {
          name: 'big',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '大尺寸，配置为true时，搜索框高度将变高。',
            'en-US': 'Large size. If this parameter is set to true, the height of the search box increases.'
          },
          mode: ['mobile-first'],
          mfDemo: 'big-mode'
        },
        {
          name: 'button-text',
          type: 'String',
          defaultValue: '搜索',
          desc: {
            'zh-CN': '<p>自定义搜索框按钮的文本内容，默认是‘搜索’</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'button-text'
        },
        {
          name: 'change-bg-color',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '可通过 change-bg-color 属性切换背景色(只针对移动端有效)。',
            'en-US':
              'You can use the change-bg-color attribute to switch the background color (only for mobile devices)'
          },
          mode: ['mobile-first'],
          mfDemo: 'change-bg'
        },
        {
          name: 'clearable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示清空图标按钮',
            'en-US': 'Is the clear icon button displayed'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'clearable',
          mfDemo: ''
        },
        {
          name: 'default-value',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置搜索输入框内的默认搜索值',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'is-enter-search',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否在按下键盘 Enter 键时触发 search 事件',
            'en-US': 'Whether to trigger the search event when pressing the Enter key on the keyboard'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: ''
        },
        {
          name: 'mini',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否为迷你模式，配置为 true 时，默认显示为一个带图标的圆形按钮，点击后展开',
            'en-US':
              'Is it mini mode? When configured to true, it will default to a circular button with an icon, which will expand after clicking'
          },
          mode: ['pc'],
          pcDemo: 'mini-mode'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '搜索输入框内的提示占位文本',
            'en-US': 'Search for prompt placeholder text in the input box'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'basic-usage',
          mobileDemo: 'button-text',
          mfDemo: ''
        },
        {
          name: 'search-size',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '通过 size 属性定义输入框尺寸，可选项有 medium、small、mini，默认为 small',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'search-types',
          typeAnchorName: 'ITypeValue',
          type: 'ITypeValue[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '搜索类型的选项列表',
            'en-US': 'List of options for search types'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'search-types',
          mobileDemo: 'default-value',
          mfDemo: ''
        },
        {
          name: 'show-button',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '可通过 show-button 属性对移动端设置按钮搜索。',
            'en-US': 'You can use the show-button attribute to set button search for mobile devices.'
          },
          mode: ['mobile-first'],
          mfDemo: 'search-types'
        },
        {
          name: 'size',
          type: "'medium' | 'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': '输入框尺寸',
            'en-US': 'input size'
          },
          mode: ['mobile-first'],
          mfDemo: 'size-medium'
        },
        {
          name: 'themeType',
          type: 'String',
          defaultValue: 'primary',
          desc: {
            'zh-CN': '<p>配置主题色，primary:蓝 gray:灰</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'base'
        },
        {
          name: 'transparent',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否为透明模式，此模式一般用在带有背景的场景',
            'en-US': 'Is it transparent mode? This mode is generally used in scenes with a background'
          },
          mode: ['pc'],
          pcDemo: 'transparent-mode'
        },
        {
          name: 'type-value',
          typeAnchorName: 'ITypeValue',
          type: 'ITypeValue',
          defaultValue: '',
          desc: {
            'zh-CN': '搜索类型的默认值。默认为搜索类型的第一项【3.11.0新增】',
            'en-US':
              'The default value for the search type. Default to the first item of the search type [added on 3.11.0]'
          },
          mode: ['pc'],
          pcDemo: 'search-types'
        },
        {
          name: 'v-model',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定搜索值',
            'en-US': 'Bind search values'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'v-model/value',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置搜索输入框内的默认搜索值</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'default-value'
        }
      ],
      events: [
        {
          name: 'change',
          typeAnchorName: 'ITypeValue',
          type: '(value: ITypeValue, input: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '输入完成时触发的回调函数； value 为搜索类型，input 为当前输入值',
            'en-US':
              'The callback function triggered upon input completion; value is the search type, input is the current input value'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'events',
          mobileDemo: 'events',
          mfDemo: ''
        },
        {
          name: 'clear',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '清空值触发的回调函数',
            'en-US': 'Callback function triggered by clearing values'
          },
          mode: ['pc', 'mobile'],
          pcDemo: 'events',
          mobileDemo: 'clear'
        },
        {
          name: 'input',
          typeAnchorName: 'ITypeValue',
          type: '(input: string, value: ITypeValue) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '输入实时触发的回调函数； input 为当前输入值，value 为搜索类型【3.9.1新增】',
            'en-US':
              'Input a real-time triggered callback function; input is the current input value, value is the search type [3.9.1 added]'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'search',
          typeAnchorName: 'ITypeValue',
          type: '(value: ITypeValue, input: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '展开模式下，点击搜索按钮时触发的回调函数； value 为搜索类型，input 为当前输入值',
            'en-US':
              'The callback function triggered when clicking the search button in expansion mode; value is the search type, input is the current input value'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'events',
          mobileDemo: 'events',
          mfDemo: ''
        },
        {
          name: 'select',
          typeAnchorName: 'ITypeValue',
          type: '(value: ITypeValue) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '切换类型时触发的回调函数； value 为搜索类型',
            'en-US': 'The callback function triggered when switching types; value is a search type'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'events',
          mobileDemo: 'clear',
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义搜索框右侧内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'poplist',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '搜索的弹出列表插槽',
            'en-US': 'Slot in the search pop-up list'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-search-types',
          mfDemo: ''
        },
        {
          name: 'prefix',
          defaultValue: '',
          desc: {
            'zh-CN': '左侧插槽',
            'en-US': 'Left slot'
          },
          mode: ['pc'],
          pcDemo: 'slot-prefix'
        },
        {
          name: 'text',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认搜索类型插槽',
            'en-US': 'Default search type slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'show-selected-types',
          mfDemo: ''
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
