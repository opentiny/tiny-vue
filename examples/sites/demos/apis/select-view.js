export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'select-view',
      type: 'component',
      props: [
        {
          name: 'custom-class',
          type: 'String / Object / Array',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义 class 样式',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'infinite-scroll',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '无限滚动配置，默认值为 { load: null, delay: 200, disabled: true, distance: 0, immediate: true }',
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
          name: 'mask',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否显示遮罩层，默认值为 true',
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
          name: 'placeholder',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置输入框提示语',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'required-selected-list',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '必选项列表',
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
          name: 'top-config',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': "选项置顶配置，默认值为 { label: '', options: [] }",
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
          name: 'clean',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '清空除所有选中项，requiredSelectedList 必选项不会被清空',
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
            'zh-CN': '关闭面板',
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
        }
      ]
    }
  ]
}
