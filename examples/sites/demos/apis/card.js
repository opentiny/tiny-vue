export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'Card',
      type: 'component',
      props: [
        {
          name: 'auto-width',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '卡片的宽度是否自动撑开，设置后将不再给卡片设置固定宽度',
            'en-US':
              'Indicates whether the card width is automatically expanded. After the setting, the card width is not fixed.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: 'card-auto-width'
        },
        {
          name: 'check-type',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置卡片单选、多选，单选/radio；多选/checkbox，需同时设置 label。',
            'en-US':
              'Set single-choice, multiple-choice, single-choice, and radio. Multi-choice/checkbox. You need to set the label at the same time.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'check-type-checkbox',
          mfDemo: 'check-type-checkbox'
        },
        {
          name: 'custom-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '卡片的class',
            'en-US': 'Class of the card'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-class',
          mfDemo: 'card-custom-class'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '卡片禁用',
            'en-US': 'Card disabled'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'card-disabled',
          mfDemo: 'card-disabled'
        },
        {
          name: 'height',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '卡片内容区域的高度',
            'en-US': 'Height of the card content area'
          },
          mode: ['pc', 'mobile-first'],
          mfDemo: 'card-height',
          pcDemo: 'custom-class'
        },
        {
          name: 'icon-more',
          type: "'iconxxx' | Component",
          defaultValue: '',
          desc: {
            'zh-CN': '更多按钮图标，可传入一个svg图标对象进行替换',
            'en-US': 'More button icons can be replaced by a svg icon object.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: 'card-icon-more'
        },
        {
          name: 'label',
          type: 'string / number',
          defaultValue: '',
          desc: {
            'zh-CN': 'checkbox或radio的label',
            'en-US': 'Checkbox or radio label.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'check-type-checkbox',
          mfDemo: 'card-label'
        },
        {
          name: 'options',
          typeAnchorName: 'IOptions',
          type: 'IOptions',
          defaultValue: '',
          desc: {
            'zh-CN': '操作按钮配置',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'operate-bar',
          mfDemo: ''
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: 'medium',
          desc: {
            'zh-CN': '尺寸，支持large、medium、small、mini 4个尺寸，默认值为medium',
            'en-US': 'Size. The options are large, medium, small, and mini. The default value is medium.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'card-size',
          mfDemo: 'card-size'
        },
        {
          name: 'src',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '图片或者视频的地址',
            'en-US': 'Address of a picture or video.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'card-type',
          mfDemo: 'card-src'
        },
        {
          name: 'status',
          type: 'string',
          defaultValue: 'default',
          desc: {
            'zh-CN': '卡片状态，支持 success、warning、alerting、danger 4 种状态',
            'en-US': 'Card status. The value can be success, warning, alerting, or dangerous.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'card-status',
          mfDemo: 'card-status'
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '卡片的标题',
            'en-US': 'The title of the card.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'card-status',
          mfDemo: 'card-title'
        },
        {
          name: 'type',
          type: 'string',
          defaultValue: 'text',
          desc: {
            'zh-CN': '设置卡片类型，支持 text、image、video、logo 4 种类型',
            'en-US': 'Set the card type. The options are text, image, video, and logo.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'card-type',
          mfDemo: 'card-type'
        },
        {
          name: 'v-model',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值，默认为空',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'check-type-checkbox',
          mfDemo: ''
        },
        {
          name: 'check-mode',
          type: 'string',
          defaultValue: 'normal',
          desc: {
            'zh-CN': '卡片被选中后的呈现模式，可选值为：normal | simple | badge',
            'en-US': 'Display mode of a selected card. The options are as follows: normal | simple | badge'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'check-mode',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'change',
          type: '() => {}',
          defaultValue: '',
          desc: {
            'zh-CN': '组件选中/取消选中事件',
            'en-US': 'Component check/uncheck event'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'card-events',
          mfDemo: 'card-events'
        },
        {
          name: 'icon-click',
          type: '() => {}',
          defaultValue: '',
          desc: {
            'zh-CN': '操作栏按钮点击事件',
            'en-US': 'Operation bar button click event'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'card-events',
          mfDemo: 'card-events'
        },
        {
          name: 'click',
          type: '() => {}',
          defaultValue: '',
          desc: {
            'zh-CN': '点击卡片事件',
            'en-US': 'Click card event'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
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
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot',
          mfDemo: 'slot'
        },
        {
          name: 'footer',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '组件默认插槽',
            'en-US': 'Component Default Slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot',
          mfDemo: 'slot'
        },
        {
          name: 'title',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '标题插槽',
            'en-US': 'Header Slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot',
          mfDemo: 'slot'
        },
        {
          name: 'title-left',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '标题左侧插槽',
            'en-US': 'Header Left Slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot',
          mfDemo: 'slot'
        },
        {
          name: 'title-right',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '标题右侧插槽',
            'en-US': 'Header right slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot',
          mfDemo: 'slot'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IOptions',
      type: 'interface',
      code: `
interface IOptions [
  {
    text: '删除列表',
    icon: IconDel()
  },
  {
    text: '编辑',
    icon: IconWriting(),
    disabled: true
  },
  {
    text: '排序',
    icon: IconAscending()
  },
  {
    text: '分享',
    icon: IconShare(),
    disabled: true
  }
]
`
    }
  ]
}
