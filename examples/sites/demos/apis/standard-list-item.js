export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'StandardListItem',
      type: 'component',
      props: [
        {
          name: 'custom-class',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '用户自定义class，可覆盖组件默认class',
            'en-US': 'User-defined class, which can overwrite the default class of the component'
          },
          mode: ['mobile-first'],
          mfDemo: 'custom-class'
        },
        {
          name: 'data',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '列表数据源',
            'en-US': 'List Data Sources'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'icon',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': 'icon配置项',
            'en-US': 'icon configuration item'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'icon-more',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '更多按钮图标，可传入一个svg图标对象进行替换',
            'en-US': 'More button icons can be replaced by a svg icon object.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'options',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '操作按钮配置项',
            'en-US': 'Operation button configuration item'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'selected',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否选中列表项，为true表示选中列表项。',
            'en-US': 'Indicates whether to select a list item. The value true indicates that a list item is selected.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-image',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '显示图片',
            'en-US': 'Show Pictures'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'tag',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '标签配置项',
            'en-US': 'Label configuration items'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'title-option',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '标题配置项',
            'en-US': 'Title configuration item'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'type',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '类型，支持 card 和 list 两种模式',
            'en-US': 'Indicates the type. The options are card and list.'
          },
          mode: ['mobile-first'],
          mfDemo: 'type'
        },
        {
          name: 'user-head',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '用户头像配置项',
            'en-US': 'User avatar configuration items'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'icon-click',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '操作栏按钮点击事件',
            'en-US': 'Operation bar button click event'
          },
          mode: ['mobile-first'],
          mfDemo: 'icon-click-event'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '组件默认插槽',
            'en-US': 'Component Default Slot'
          },
          mode: ['mobile-first'],
          mfDemo: 'content-slot'
        },
        {
          name: 'image',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '图片插槽',
            'en-US': 'Picture Slot'
          },
          mode: ['mobile-first'],
          mfDemo: 'image-operate-slot'
        },
        {
          name: 'operate',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '操作栏插槽',
            'en-US': 'Action Bar Slots'
          },
          mode: ['mobile-first'],
          mfDemo: 'image-operate-slot'
        },
        {
          name: 'tag',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '标签插槽',
            'en-US': 'Label Slot'
          },
          mode: ['mobile-first'],
          mfDemo: 'content-slot'
        },
        {
          name: 'title',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '标题插槽',
            'en-US': 'Header Slot'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ]
    }
  ]
}
