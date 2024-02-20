export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'select-mobile',
      type: 'component',
      props: [
        {
          name: 'ellipsis',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否超出一行隐藏并显示省略号，默认值为 false ',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'lock-scroll',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '弹出面板是否锁定浏览器滚动条，默认值为 true',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'menus',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '列表数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'mode',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '组件模式，值为 form 时开启表单模式显示选中文本',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'multiple',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否开启多选，默认值为 false',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'search-config',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '搜索配置，默认值为 { options: [], searchMethod: null, openSearchSlot: false }',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-footer',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否显示底部，默认值为 false',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-header',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否显示头部，默认值为 true',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'text-field',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': 'text 文本字段，默认值为 label',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'text-field2',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '第二个 text 文本字段，一般用于附属文本',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'text-field3',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '第三个 text 文本字段，一般用于描述文本',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'text-split',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '文本信息分隔符，默认值为 ”; “ ',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'title',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '面板标题',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'Number / String / Array',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'value-field',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': 'value 唯一键字段，默认值为 id ',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'visible',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否弹出面板',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'click',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '选中项时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'close',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭面板时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'confirm',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '确认时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'search-click',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '搜索列表选中项时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'update:text',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值改变时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'update:visible',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '面板显隐时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      methods: [
        {
          name: 'confirm',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '确认修改并关闭面板',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'hide',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭面板',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'selectOption(option)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '选中列表项，option 为选择项',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '选项插槽',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'search-item',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '搜索选项插槽，设置 :search-config="{ openSearchSlot: true, ... }" 时有效',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ]
    }
  ]
}
