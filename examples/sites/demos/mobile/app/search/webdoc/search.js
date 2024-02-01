export default {
  column: '2',
  owner: '',
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
  apis: [
    {
      name: 'Search', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'button-text',
          type: 'String',
          defaultValue: '搜索',
          desc: {
            'zh-CN': '<p>自定义搜索框按钮的文本内容，默认是‘搜索’</p>',
            'en-US': 'display different button'
          },
          demoId: 'button-text'
        },
        {
          name: 'themeType',
          type: 'String',
          defaultValue: 'primary',
          desc: {
            'zh-CN': '<p>配置主题色，primary:蓝 gray:灰</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        },
        {
          name: 'placeholder',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置搜索输入框内的提示占位文本</p>',
            'en-US': 'display different button'
          },
          demoId: 'button-text'
        },
        {
          name: 'v-model/value',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置搜索输入框内的默认搜索值</p>',
            'en-US': 'display different button'
          },
          demoId: 'default-value'
        },
        {
          name: 'search-types',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '<p搜索的类型选项，格式为[{text:"文档",value:1},...]，不配置时类型选择固定显示为All </p>',
            'en-US': 'display different button'
          },
          demoId: 'default-value'
        }
      ],
      events: [
        {
          name: 'change',
          type: 'Function(arg1,arg2)',
          defaultValue: '',
          desc: {
            'zh-CN':
              '<p>在 input 框中输入完成时触发的回调函数;arg1:{Object 搜索类型}，arg2:{String 当前input框中值}</p>',
            'en-US': 'Click'
          },
          demoId: 'events'
        },
        {
          name: 'clear',
          type: 'Function(arg1,arg2)',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>在点击清除按钮时触发的回调函数</p>',
            'en-US': 'Click'
          },
          demoId: 'clear'
        },
        {
          name: 'select',
          type: 'Function(arg1)',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>在search组件切换类型时触发的回调函数;arg1:{Object 搜索类型}</p>',
            'en-US': 'Click'
          },
          demoId: 'clear'
        },
        {
          name: 'search',
          type: 'Function(arg1)',
          defaultValue: '',
          desc: {
            'zh-CN':
              '<p>在展开状态点击搜索按钮时触发的回调函数;arg1:{Object 搜索类型}，arg2:{String 当前input框中值}</p>',
            'en-US': 'Click'
          },
          demoId: 'events'
        }
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义搜索框右侧内容</p>',
            'en-US': 'Click'
          },
          demoId: ''
        }
      ]
    }
  ]
}
