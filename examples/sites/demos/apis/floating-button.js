export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'FloatingButton',
      type: 'component',
      props: [
        {
          name: 'animated',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '悬浮按钮开启动画',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: 'animated'
        },
        {
          name: 'background-color',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '悬浮按钮背景颜色',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: 'button-bgcolor'
        },
        {
          name: 'element-selector',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '悬浮按钮设置可传入的元素类名或者id',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: 'animated'
        },
        {
          name: 'expand-list',
          type: 'IFloatingButtonExpandItem[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '拓展按钮接收数据的数组，接收项分为图标 icon 和标题 title ',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: 'expand'
        },
        {
          name: 'icon',
          type: 'Component',
          defaultValue: 'IconPlus',
          desc: {
            'zh-CN': '自定义悬浮按钮图标',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: 'custom-icon'
        },
        {
          name: 'is-expand',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否展开拓展按钮',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: 'expand'
        },
        {
          name: 'mask',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '悬浮按钮遮罩层',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: 'mask'
        },
        {
          name: 'position',
          type: "'left' | 'center' | 'right'",
          defaultValue: "'right'",
          desc: {
            'zh-CN': '悬浮按钮展示位置',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: 'button-position'
        },
        {
          name: 'reset-time',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '悬浮按钮防重点击重置时间',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: 'reclick'
        },
        {
          name: 'vague',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '悬浮按钮模糊层',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: 'mask'
        }
      ],
      events: [
        {
          name: 'click',
          type: '(event: Event, index: number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '悬浮按钮点击触发事件',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: 'event'
        }
      ],
      methods: [],
      slots: []
    }
  ]
}
