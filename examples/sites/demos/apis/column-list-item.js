export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'ColumnListItem',
      type: 'component',
      props: [
        {
          name: 'auto-width',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '卡片的宽度是否自动撑开，设置后将不再给卡片设置固定宽度',
            'en-US':
              'Indicates whether the card width is automatically expanded. After the setting, the card width is not fixed.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'custom-class',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '用户自定义class，可覆盖组件默认class',
            'en-US': 'User-defined class, which can overwrite the default class of the component.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '卡片禁用勾选',
            'en-US': 'Card Disable Check'
          },
          mode: ['mobile-first'],
          mfDemo: 'icon-disabled'
        },
        {
          name: 'flex-basis',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '设置内容插槽的宽度，最多能传入 4 个值，支持百分比，固定宽度及固有的尺寸关键词，默认为 auto。',
            'en-US':
              'Set the width of the content slot. A maximum of four values can be transferred. The percentage, fixed width, and inherent size keywords are supported. The default value is auto.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'flex-grow',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '设置每一项在 flex 容器中分配剩余空间的相对比例，默认为 [1, 1, 1, 1]。',
            'en-US':
              'Indicates the relative proportion of the remaining space allocated to each item in the flex container. The default value is [1, 1, 1, 1].'
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
          name: 'image',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '图片地址',
            'en-US': 'Picture Address'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'label',
          type: 'String / Number',
          defaultValue: '',
          desc: {
            'zh-CN': 'checkbox或radio的label',
            'en-US': 'Checkbox or radio label'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'options',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '操作按钮配置',
            'en-US': 'Operation Button Configuration'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'round',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '通过 round 设置是否展示圆形',
            'en-US': 'Use round to set whether to display a circle.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-checkbox',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '显示checkbox按钮',
            'en-US': 'Show the checkbox button'
          },
          mode: ['mobile-first'],
          mfDemo: 'show-checkbox'
        },
        {
          name: 'show-radio',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '显示radio按钮',
            'en-US': 'Show radio button'
          },
          mode: ['mobile-first'],
          mfDemo: 'show-radio'
        },
        {
          name: 'size',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '尺寸，支持medium、small 2个尺寸，默认值为medium',
            'en-US': 'Indicates the size. The options are medium and small. The default value is medium.'
          },
          mode: ['mobile-first'],
          mfDemo: 'size'
        },
        {
          name: 'type',
          type: 'String',
          defaultValue: 'card',
          desc: {
            'zh-CN': '组件类型，可选值有list | card，默认为 card',
            'en-US': 'Component type. The options are list and card. The default value is card.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '双向数据绑定',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'change',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '组件选中/取消选中事件',
            'en-US': 'Component check/uncheck event'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
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
          name: 'column1',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '内容插槽1',
            'en-US': 'Content Slot 1'
          },
          mode: ['mobile-first'],
          mfDemo: 'content-slot'
        },
        {
          name: 'column2',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '内容插槽2',
            'en-US': 'Content Slot 2'
          },
          mode: ['mobile-first'],
          mfDemo: 'content-slot'
        },
        {
          name: 'column3',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '内容插槽3',
            'en-US': 'Content Slot 3'
          },
          mode: ['mobile-first'],
          mfDemo: 'content-slot'
        },
        {
          name: 'column4',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '内容插槽4',
            'en-US': 'Content Slot 4'
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
        }
      ]
    }
  ]
}
