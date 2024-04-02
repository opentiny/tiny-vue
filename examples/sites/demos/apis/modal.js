export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'modal',
      type: 'component',
      props: [
        {
          name: 'before-close',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '可以配置一个拦截弹窗关闭的方法。如果方法返回 false 值，则拦截弹窗关闭；否则不拦截',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'cancel-btn-props',
          typeAnchorName: 'button#API',
          type: 'Button.props',
          defaultValue: '{}',
          desc: {
            'zh-CN': '自定义取消按钮的 props ，可选值与 Button 组件一致',
            'en-US':
              'Customize the props of the cancel button. The optional values ​​are consistent with the Button component'
          },
          mode: ['pc'],
          pcDemo: 'footer-btn-props'
        },
        {
          name: 'cancel-content',
          type: 'string',
          defaultValue: "'取消'",
          desc: {
            'zh-CN': '自定义取消按钮内容',
            'en-US': 'Customize cancel button content'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'footer-btn-content',
          mfDemo: ''
        },
        {
          name: 'confirm-btn-props',
          typeAnchorName: 'button#API',
          type: 'Button.props',
          defaultValue: '{}',
          desc: {
            'zh-CN': '自定义确认按钮 props，可选值与 Button 组件一致',
            'en-US':
              'Customize the confirmation button props, the optional values are consistent with the Button component'
          },
          mode: ['pc'],
          pcDemo: 'footer-btn-props'
        },
        {
          name: 'confirm-content',
          type: 'string',
          defaultValue: "'确认'",
          desc: {
            'zh-CN': '自定义确认按钮内容',
            'en-US': 'Customize confirmation button content'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'footer-btn-content',
          mfDemo: ''
        },
        {
          name: 'custom-class',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '组件自定义 class 样式',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'description',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '组件详情信息',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'duration',
          type: 'number | string',
          defaultValue: '3000',
          desc: {
            'zh-CN': "自动关闭的延时，单位毫秒，仅当 type 为 'message' 有效，设为 0 则不会自动关闭",
            'en-US':
              "Delay for automatic shutdown, millisecond, only valid when type is 'message', If set to 0, it will not turn off automatically"
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'duration',
          mobileDemo: 'duration',
          mfDemo: ''
        },
        {
          name: 'esc-closable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否允许按 Esc 键关闭窗口',
            'en-US': 'Whether to allow pressing the Esc key to close a window'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'esc-closable',
          mobileDemo: 'mask-closable',
          mfDemo: ''
        },
        {
          name: 'footer-dragable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '控制底部可拖拽',
            'en-US': 'Control bottom dragable'
          },
          mode: ['pc'],
          pcDemo: 'footer-slot'
        },
        {
          name: 'fullscreen',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否最大化显示',
            'en-US': 'Whether to maximize the display'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'fullscreen',
          mobileDemo: 'fullscreen',
          mfDemo: ''
        },
        {
          name: 'height',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的高度',
            'en-US': 'window height'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'resize',
          mobileDemo: '',
          mfDemo: ''
        },
        {
          name: 'id',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': "如果不想窗口重复点击，可以设置唯一的 id 防止重复提示，仅当 type 为 'message' 有效",
            'en-US':
              "If you don't want the window to be clicked repeatedly, you can set a unique id to prevent repeated prompts. This is only valid when type is 'message'"
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'id',
          mobileDemo: 'id',
          mfDemo: ''
        },
        {
          name: 'is-form-reset',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '关闭弹窗时，是否重置表单数据',
            'en-US': 'Whether to reset the form data when closing the pop-up window'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'is-form-reset',
          mobileDemo: 'is-form-reset',
          mfDemo: ''
        },
        {
          name: 'lock-scroll',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否锁住滚动条，不允许页面滚动',
            'en-US': 'Whether to lock the scroll bar and not allow the page to scroll'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'lock-scroll',
          mobileDemo: 'lock-scroll',
          mfDemo: ''
        },
        {
          name: 'lock-view',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否锁住页面，不允许窗口之外的任何操作',
            'en-US': 'Whether to lock the page and not allow any operations outside the window'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'lock-view',
          mobileDemo: 'lock-view',
          mfDemo: ''
        },
        {
          name: 'mask',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示遮罩层',
            'en-US': 'Whether to display the mask layer'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'lock-view1',
          mobileDemo: 'mask-closable',
          mfDemo: ''
        },
        {
          name: 'mask-closable',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否允许点击遮罩层关闭窗口',
            'en-US': 'Whether to allow clicking on the mask layer to close the window'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'mask-closable',
          mobileDemo: 'mask-closable',
          mfDemo: ''
        },
        {
          name: 'message',
          type: 'string | VNode | () => string | VNode',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的内容',
            'en-US': 'Window contents'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'message',
          mobileDemo: 'message',
          mfDemo: ''
        },
        {
          name: 'message-closable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': "'message' 类型弹窗是否显示关闭按钮",
            'en-US': "Whether the 'message' type pop-up window displays a close button"
          },
          mode: ['pc'],
          pcDemo: 'message-closable'
        },
        {
          name: 'min-height',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的最小高度',
            'en-US': 'Minimum height of window'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'min-height',
          mobileDemo: 'min-height',
          mfDemo: ''
        },
        {
          name: 'min-width',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的最小宽度',
            'en-US': 'The minimum width of the window'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'min-width',
          mobileDemo: 'min-width',
          mfDemo: ''
        },
        {
          name: 'modelValue / v-model',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示',
            'en-US': 'Whether to display'
          },
          mode: ['pc', 'mobile'],
          pcDemo: 'value',
          mobileDemo: 'cancel-event'
        },
        {
          name: 'options',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': "多选选项，格式为 [{ value: 'value1', name: '选项1' }, ...]",
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'position',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': "弹出框位置，默认居中显示，设置值为 'bottom-right' 时弹出框显示在右下角",
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'resize',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否允许拖动调整窗口大小',
            'en-US': 'Whether to allow dragging to resize the window'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'resize',
          mobileDemo: 'resize',
          mfDemo: ''
        },
        {
          name: 'show-close',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否显示关闭按钮，默认值为 true',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-footer',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示底部',
            'en-US': 'Display bottom'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'showFooter',
          mfDemo: ''
        },
        {
          name: 'show-header',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示头部',
            'en-US': 'Display Header'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'showHeader',
          mobileDemo: 'showHeader',
          mfDemo: ''
        },
        {
          name: 'showFooter',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>是否显示底部</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'showFooter'
        },
        {
          name: 'status',
          typeAnchorName: 'IStatus',
          type: 'IStatus',
          defaultValue: "'info'",
          desc: {
            'zh-CN': "消息状态，当 type 为 'alert'、'message'、'confirm' 时有效",
            'en-US': "Message status, valid when type is 'alert', 'message', 'confirm'"
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'status',
          mobileDemo: 'status',
          mfDemo: ''
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的标题',
            'en-US': 'Window title'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'title',
          mobileDemo: 'title',
          mfDemo: ''
        },
        {
          name: 'top',
          type: 'number | string',
          defaultValue: '15',
          desc: {
            'zh-CN': "消息距离顶部的位置，仅当 type 为 'message' 时有效",
            'en-US': "The position of the message from the top, only valid when type is 'message'"
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'top',
          mobileDemo: 'top',
          mfDemo: ''
        },
        {
          name: 'type',
          type: "'alert' | 'confirm' | 'message'",
          defaultValue: "'alert'",
          desc: {
            'zh-CN': '窗口类型',
            'en-US': 'Window type'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'type',
          mobileDemo: 'type',
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'width',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的宽度',
            'en-US': 'window width'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'resize',
          mobileDemo: 'grid',
          mfDemo: ''
        },
        {
          name: 'z-index',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义堆叠顺序（对于某些特殊场景，比如被遮挡时可能会用到）',
            'en-US': 'Customize the stacking order (may be used in some special scenarios, such as when it is blocked)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'z-index',
          mfDemo: ''
        },
        {
          name: 'zIndex',
          type: 'Number',
          defaultValue: '3000',
          desc: {
            'zh-CN': '<p>自定义堆叠顺序（对于某些特殊场景，比如被遮挡时可能会用到）</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile', 'mobile-first'],
          mobileDemo: 'zIndex',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'cancel',
          typeAnchorName: 'IModalEventParam',
          type: '(params: IModalEventParam, event: Event) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击取消按钮时会触发该事件',
            'en-US': 'This event is triggered when the Cancel button is clicked'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'event',
          mobileDemo: 'cancel-event',
          mfDemo: ''
        },
        {
          name: 'close',
          typeAnchorName: 'IModalEventParam',
          type: '(params: IModalEventParam, event: Event) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击关闭按钮时会触发该事件',
            'en-US': 'This event is triggered when the close button is clicked'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'event',
          mobileDemo: 'close-event',
          mfDemo: ''
        },
        {
          name: 'confirm',
          typeAnchorName: 'IModalEventParam',
          type: '(params: IModalEventParam, event: Event) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击确定按钮时会触发该事件',
            'en-US': 'This event is triggered when the OK button is clicked'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'event',
          mobileDemo: 'confirm-event',
          mfDemo: ''
        },
        {
          name: 'hide',
          typeAnchorName: 'IModalEventParam',
          type: '(params: IModalEventParam) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '在窗口关闭时会触发该事件',
            'en-US': 'This event is triggered when the window is closed'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'hide-event',
          mobileDemo: 'hide-event',
          mfDemo: ''
        },
        {
          name: 'show',
          typeAnchorName: 'IModalEventParam',
          type: '(params: IModalEventParam) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '在窗口显示时会触发该事件',
            'en-US': 'This event is triggered when the window is displayed'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'event',
          mobileDemo: 'show-event',
          mfDemo: ''
        },
        {
          name: 'zoom',
          typeAnchorName: 'IModalEventParam',
          type: '(params: IModalEventParam, event: Event) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口缩放时会触发该事件',
            'en-US': 'This event is triggered when a window is zoomed in or out'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'event',
          mobileDemo: 'zoom-event',
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
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'default-grid',
          mobileDemo: 'cancel-event',
          mfDemo: ''
        },
        {
          name: 'footer',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口底部的模板',
            'en-US': 'Template at the bottom of the window'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'footer-slot',
          mobileDemo: 'footer-slot',
          mfDemo: ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'IModalEventParam',
      type: 'interface',
      code: `
interface IModalEventParam {
  type: 'alert' | 'message' | 'confirm' // 弹窗类型
  $modal: ComponentPublicInstance // Modal组件实例
}
`
    },
    {
      name: 'IStatus',
      type: 'type',
      code: `
          type IStatus = 'info' | 'success' | 'warning' | 'error' | 'loading'
      `
    }
  ]
}
