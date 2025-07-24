export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'ActionSheet',
      type: 'component',
      props: [
        {
          name: 'before-close',
          type: "(type: 'confirm' | 'close' | 'hide') => void",
          defaultValue: '',
          desc: {
            'zh-CN': '关闭前执行的事件',
            'en-US': 'Event executed before a action sheet is closed'
          },
          mode: ['mobile-first'],
          mfDemo: 'before-close'
        },
        {
          name: 'custom-class',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义 class 样式',
            'en-US': 'Customize the class style'
          },
          mode: ['mobile-first']
        },
        {
          name: 'flex',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '弹性布局',
            'en-US': 'Sets the elastic layout'
          },
          mode: ['mobile-first']
        },
        {
          name: 'fullscreen',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否全屏',
            'en-US': 'Full screen display'
          },
          mode: ['mobile-first'],
          mfDemo: 'fullscreen'
        },
        {
          name: 'lock-scroll',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '弹出时是否禁用滚动条',
            'en-US': 'Full screen display'
          },
          mode: ['mobile-first']
        },
        {
          name: 'mask',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示遮罩层',
            'en-US': 'Indicates whether to display the mask layer'
          },
          mode: ['mobile-first'],
          mfDemo: 'mask'
        },
        {
          name: 'mask-closable',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '单击遮罩层是否关闭弹窗',
            'en-US': 'Indicates whether to close the pop-up window when you click the mask layer'
          },
          mode: ['mobile-first'],
          mfDemo: 'mask-event'
        },
        {
          name: 'menus',
          type: 'Array',
          defaultValue: '[]',
          desc: {
            'zh-CN': '操作列表，设置 type 为 action 启用操作列表模式时有效。',
            'en-US': 'Operation list. This parameter is valid only when type is set to action.'
          },
          mode: ['mobile-first'],
          mfDemo: 'action'
        },
        {
          name: 'show-close',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示关闭按钮',
            'en-US': 'Indicates whether to display the close icon'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-footer',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示底部',
            'en-US': 'Indicates whether to display the bottom'
          },
          mode: ['mobile-first'],
          mfDemo: 'show'
        },
        {
          name: 'show-header',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示头部',
            'en-US': 'Indicates whether to display the header'
          },
          mode: ['mobile-first'],
          mfDemo: 'show'
        },
        {
          name: 'title',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '面板标题',
            'en-US': 'Panel Title'
          },
          mode: ['mobile-first'],
          mfDemo: 'action'
        },
        {
          name: 'type',
          type: 'Array[string]',
          defaultValue: '',
          desc: {
            'zh-CN': '设置 type 为 action 启用操作列表模式',
            'en-US': 'Set type to action to enable the operation list mode.'
          },
          mode: ['mobile-first'],
          mfDemo: 'action'
        },
        {
          name: 'v-model',
          type: 'Number | String | Array',
          defaultValue: '',
          desc: {
            'zh-CN': '双向数据绑定',
            'en-US': 'bidirectional data binding'
          },
          mode: ['mobile-first']
        },
        {
          name: 'visible',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否弹出面板',
            'en-US': 'Indicates whether to display the panel.'
          },
          mode: ['mobile-first']
        }
      ],
      events: [
        {
          name: 'click',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '点击列表选项时触发，设置 type 为 action 启用操作列表模式时有效。',
            'en-US':
              'This event is triggered when a list option is clicked. This event is valid only when type is set to action and the operation list mode is enabled.'
          },
          mode: ['mobile-first'],
          mfDemo: 'action'
        },
        {
          name: 'close',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭面板时触发的事件。',
            'en-US': 'Event triggered when a panel is closed.'
          },
          mode: ['mobile-first'],
          mfDemo: 'action'
        },
        {
          name: 'confirm',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '点击底部按钮时触发，设置 show-footer 为 true 时有效。',
            'en-US':
              'This event is triggered when the bottom button is clicked. It is valid only when show-footer is set to true.'
          },
          mode: ['mobile-first']
        },
        {
          name: 'update:modelValue',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '数据更新时触发的事件',
            'en-US': 'The event triggered when data is updated'
          },
          mode: ['mobile-first'],
          mfDemo: 'slot'
        },
        {
          name: 'update:visible',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '面板显示或隐藏时触发',
            'en-US': 'Triggered when the panel is displayed or hidden'
          },
          mode: ['mobile-first'],
          mfDemo: 'slot'
        }
      ],
      methods: [
        {
          name: 'actionSelectOption',
          type: '(item, index) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '选择列表项，设置 type 为 action 启用操作列表模式时有效',
            'en-US':
              'Select a list item and set type to action. This parameter is valid only when the operation list mode is enabled.'
          },
          mode: ['mobile-first']
        },
        {
          name: 'actionSelectOption(item, index)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '选择列表项，设置 type 为 action 启用操作列表模式时有效',
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
            'en-US': 'Close the panel.'
          },
          mode: ['mobile-first'],
          mfDemo: 'action'
        }
      ],
      slots: [
        {
          name: 'body-bottom',
          desc: {
            'zh-CN': '内容底部插槽',
            'en-US': 'slot at the bottom of content'
          },
          mode: ['mobile-first'],
          mfDemo: 'slot'
        },
        {
          name: 'body-top',
          desc: {
            'zh-CN': '内容顶部插槽',
            'en-US': 'slot at the top of content'
          },
          mode: ['mobile-first'],
          mfDemo: 'slot'
        },
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '组件默认插槽，设置 type 为 action 启用操作列表模式会提供参数 data 列表项和 index 列表索引。',
            'en-US':
              'Component default slot. Set type to action to enable the operation list mode. The parameter data list item and index list index are provided.'
          },
          mode: ['mobile-first'],
          mfDemo: 'slot'
        },
        {
          name: 'footer',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '底部插槽，设置 show-footer 为 true 时有效',
            'en-US': 'Bottom slot. This parameter is valid only when show-footer is set to true.'
          },
          mode: ['mobile-first'],
          mfDemo: 'slot'
        },
        {
          name: 'header-left',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '头部左侧插槽，设置 show-header 为 true 时有效',
            'en-US': 'Slot on the left of the header. This parameter is valid only when show-header is set to true.'
          },
          mode: ['mobile-first'],
          mfDemo: 'slot'
        },
        {
          name: 'header-right',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '头部右侧插槽，设置 show-header 为 true 时有效',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ]
    }
  ]
}
