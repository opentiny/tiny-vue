export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'search',
      type: 'component',
      props: [
        {
          name: 'button-text',
          type: 'string',
          defaultValue: '搜索',
          desc: {
            'zh-CN': '<p>自定义搜索框按钮的文本内容，默认是‘搜索’</p>',
            'en-US': 'display different button'
          },
          demoId: 'button-text'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '搜索输入框内的提示占位文本',
            'en-US': 'Search for prompt placeholder text in the input box'
          },
          demoId: 'button-text'
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
          demoId: 'default-value'
        },
        {
          name: 'themeType',
          type: 'string',
          defaultValue: 'primary',
          desc: {
            'zh-CN': '<p>配置主题色，primary:蓝 gray:灰</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        },
        {
          name: 'v-model/value',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置搜索输入框内的默认搜索值</p>',
            'en-US': 'display different button'
          },
          demoId: 'default-value'
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
          demoId: 'events'
        },
        {
          name: 'clear',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '清空值触发的回调函数',
            'en-US': 'Callback function triggered by clearing values'
          },
          demoId: 'clear'
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
          demoId: 'events'
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
          demoId: 'clear'
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
          demoId: ''
        }
      ]
    }
  ],
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>基础用法</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'button-text',
      name: {
        'zh-CN': '自定义搜索按钮文本',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>自定义搜索按钮文本</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['button-text.vue']
    },
    {
      demoId: 'clear',
      name: {
        'zh-CN': '清除事件',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>清除事件</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['clear.vue']
    },
    {
      demoId: 'default-value',
      name: {
        'zh-CN': '默认搜索',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>默认搜索</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['default-value.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>事件</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['events.vue']
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
