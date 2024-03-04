export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'cascader-mobile',
      type: 'component',
      props: [
        {
          name: 'children-field',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '子集字段，默认值为 children ',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data',
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
          name: 'node-config',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN':
              "节点配置，默认值为 { lazy: false, load: null, isLeaf: 'leaf', afterLoad: null, checkStrictly: false } ",
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'placeholder',
          type: 'String / Array',
          defaultValue: '',
          desc: {
            'zh-CN':
              '导航占位文本信息，设置为字符串类型表示每个导航节点的占位文本信息，设置为数组类型时，每个数组下标索引对应导航节点的顺序设置占位文本信息',
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
            'zh-CN': '点击选项时触发',
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
          name: 'node-expand',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '展开子节点时触发',
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
