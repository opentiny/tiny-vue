export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'drawer',
      type: 'component',
      props: [
        {
          name: 'before-close',
          type: '(type) => boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '弹窗关闭前的回调，返回 false 会阻止弹窗关闭',
            'en-US': 'Hook before close the drawer, and block close when return false'
          },
          mode: ['pc'],
          pcDemo: 'before-close'
        },
        {
          name: 'custom-class',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义 class 样式',
            'en-US': 'Custom class style'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'dragable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启抽屉的宽度拖拽功能',
            'en-US': 'Whether to enable the drawer width drag function'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'dragable',
          mfDemo: ''
        },
        {
          name: 'flex',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '是否开启 flex 盒子布局，开启后内容区域元素自适应撑开高度，默认值为 false',
            'en-US':
              'Whether to enable the flex box layout. The content area element adaptively expands its height when enabled. The default value is false'
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
            'en-US': 'Whether the pop-up panel locks the browser scroll bar. The default value is true'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'mask',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示遮罩层',
            'en-US': 'Whether the mask layer is displayed'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'mask',
          mfDemo: ''
        },
        {
          name: 'mask-closable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '默认情况下，弹窗打开后，可以单击遮罩层关闭弹窗，设置 mask-closable 为 false 后将禁用该功能',
            'en-US':
              'By default, when the popup is open, you can close the popup by clicking the mask layer. Setting mask-closable to false disables this feature'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'mask-closable',
          mfDemo: ''
        },
        {
          name: 'placement',
          type: "'left' | 'right' | 'top' | 'bottom' ",
          defaultValue: "'right'",
          desc: {
            'zh-CN': '设置抽屉的方向',
            'en-US': 'Set the drawer orientation'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'placement',
          mfDemo: ''
        },
        {
          name: 'show-close',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示关闭图标',
            'en-US': 'Whether to display the close icon'
          },
          mode: ['pc'],
          pcDemo: 'show-close'
        },
        {
          name: 'show-footer',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示底部',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'Show bottom or not',
          mfDemo: ''
        },
        {
          name: 'show-header',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示头部',
            'en-US': 'Show headers or not'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'show-header',
          mfDemo: ''
        },
        {
          name: 'title',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '面板标题',
            'en-US': 'Panel title'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'visible',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '控制抽屉的显示与关闭',
            'en-US': 'Control drawer display and close'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'width',
          type: 'string',
          defaultValue: "'500px'",
          desc: {
            'zh-CN': '设置抽屉的宽度',
            'en-US': 'Set the width of the drawer'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'width',
          mfDemo: ''
        },
        {
          name: 'z-index',
          type: 'number',
          defaultValue: '2000',
          desc: {
            'zh-CN': '自定义堆叠顺序（对于某些特殊场景，比如被遮挡时可能会用到）',
            'en-US': 'Custom stacking order (may be used in special scenarios, such as when occluded)'
          },
          mode: ['pc'],
          pcDemo: 'z-index'
        }
      ],
      events: [
        {
          name: 'close',
          type: '()=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭抽屉事件',
            'en-US': 'Close drawer event'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'close-event',
          mfDemo: ''
        },
        {
          name: 'confirm',
          type: '()=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '确认事件，设置 :show-footer="true" 时有效',
            'en-US': 'Confirm event. This event is emit only when show-footer="true" is set'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'confirm-event',
          mfDemo: ''
        },
        {
          name: 'update:visible',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '抽屉显隐时触发',
            'en-US': 'Triggered when the drawer is displayed and hidden'
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
            'zh-CN': '关闭抽屉',
            'en-US': 'Close Drawer'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'confirm',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '确认并关闭抽屉',
            'en-US': 'Confirm and close the drawer'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      slots: [
        {
          name: 'default',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'default-slot',
          mfDemo: ''
        },
        {
          name: 'footer',
          desc: {
            'zh-CN': '底部插槽',
            'en-US': 'Footer slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'footer-slot',
          mfDemo: ''
        },
        {
          name: 'header',
          desc: {
            'zh-CN': '头部插槽',
            'en-US': 'header Slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'header-slot',
          mfDemo: ''
        },
        {
          name: 'header-right',
          desc: {
            'zh-CN': '头部右侧插槽',
            'en-US': 'header-right slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'header-right-slot',
          mfDemo: ''
        }
      ]
    }
  ]
}
