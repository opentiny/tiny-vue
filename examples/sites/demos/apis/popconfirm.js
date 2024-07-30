export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'popconfirm',
      type: 'component',
      props: [
        {
          name: 'cancel-button',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否展示取消按钮',
            'en-US': 'Is show the cancel button'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'cancel-button',
          mfDemo: ''
        },
        {
          name: 'custom-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '为气泡提示框自定义类名',
            'en-US': 'Set the pop confirm popper class name'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-class',
          mfDemo: ''
        },
        {
          name: 'message',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '气泡提示框的内容',
            'en-US': 'Set the pop confirm content'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'placement',
          linkTo: 'popover#IPopperPlacement',
          type: 'IPopperPlacement',
          defaultValue: "'top'",
          desc: {
            'zh-CN': '气泡提示框显示位置',
            'en-US': 'Set the pop confirm placement'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'placement',
          mfDemo: ''
        },
        {
          name: 'reference',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '触发弹出层显示的 HTML 元素',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置气泡提示框的标题',
            'en-US': 'Set the pop confirm title'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'trigger',
          type: "'click' | 'hover'",
          defaultValue: "'hover'",
          desc: {
            'zh-CN': '气泡提示框显示触发方式',
            'en-US': 'How to show the pop confirm'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'trigger',
          mfDemo: ''
        },
        {
          name: 'type',
          typeAnchorName: 'IPopconfirmtype',
          type: 'IPopconfirmtype',
          defaultValue: '',
          desc: {
            'zh-CN': '提示图标类型，可以传入自定义图标',
            'en-US': 'Prompt icon type, custom icons can be passed in'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'type',
          mfDemo: ''
        },
        {
          name: 'width',
          type: 'string | number',
          defaultValue: '350',
          desc: {
            'zh-CN': '气泡提示框宽度',
            'en-US': 'Set the pop confirm box with'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'width',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'confirm',
          typeAnchorName: 'IPopconfirmState',
          type: '(state: IPopconfirmState) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击确认按钮时触发',
            'en-US': 'Triggered when confirm button is clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'event',
          mfDemo: ''
        },
        {
          name: 'hide',
          typeAnchorName: 'IPopconfirmState',
          type: '(state: IPopconfirmState) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '气泡确认框关闭时触发',
            'en-US': 'Triggered when pop confirm hide'
          },
          mode: ['pc'],
          pcDemo: 'event'
        },
        {
          name: 'show',
          typeAnchorName: 'IPopconfirmState',
          type: '(state: IPopconfirmState) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '气泡确认框显示时触发',
            'en-US': 'Triggered when pop confirm show'
          },
          mode: ['pc'],
          pcDemo: 'event'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'footer',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '底部插槽',
            'en-US': 'default slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot-footer',
          mfDemo: ''
        },
        {
          name: 'reference',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '触发气泡提示框显示的 HTML 元素',
            'en-US': 'reference slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'IPplacement',
      type: 'type',
      code: `type IPplacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'`
    },
    {
      name: 'IPopconfirmtype',
      type: 'type',
      code: `type IPopconfirmtype = 'info' | 'success' | 'warning' | 'error' | Component`
    },
    {
      name: 'IPopconfirmState',
      type: 'interface',
      code: `interface IPopconfirmState {
        showPopover: boolean
      }`
    }
  ]
}
