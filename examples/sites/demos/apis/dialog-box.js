export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'dialog-box',
      type: 'component',
      props: [
        {
          name: 'append-to-body',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': 'DialogBox 本身是否插入到 body 上，嵌套的 Dialog 必须指定该属性并赋值为 true',
            'en-US':
              'Whether the dialog box itself is inserted into the body. This attribute must be specified and set to true for nested dialogs'
          },
          mode: ['pc'],
          pcDemo: 'secondary-dialog'
        },
        {
          name: 'center',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置为 true 时 弹出框的头部与底部内容会自动居中',
            'en-US': 'When set to true, the header and footer content of the dialog box will be automatically centered'
          },
          mode: ['pc'],
          pcDemo: 'center'
        },
        {
          name: 'close-on-click-modal',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否可以通过点击遮罩层关闭弹窗',
            'en-US': 'Whether to close the dialog by clicking on the mask layer'
          },
          mode: ['pc'],
          pcDemo: 'close-on-click-modal'
        },
        {
          name: 'close-on-press-escape',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否可以通过 ESC 键关闭遮罩层',
            'en-US': 'Whether to close the dialog by pressing the ESC key'
          },
          mode: ['pc'],
          pcDemo: 'close-on-press-escape'
        },
        {
          name: 'destroy-on-close',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '关闭时销毁对话框内的元素，而非隐藏',
            'en-US': 'Destroy elements inside the dialog when closing, instead of hiding them'
          },
          mode: ['pc'],
          pcDemo: 'destroy-on-close'
        },
        {
          name: 'drag-outside-window',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '可将弹窗拖出窗口',
            'en-US': 'Whether the dialog can be dragged out of the window'
          },
          mode: ['pc'],
          pcDemo: 'draggable'
        },
        {
          name: 'dialog-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义配置弹窗类名',
            'en-US': 'Custom CSS class name for the dialog'
          },
          mode: ['pc'],
          pcDemo: 'dialog-width'
        },
        {
          name: 'draggable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启弹窗的拖拽功能',
            'en-US': 'Whether to enable the drag function of the dialog box, with a default value of false'
          },
          mode: ['pc'],
          pcDemo: 'draggable'
        },
        {
          name: 'fullscreen',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '弹出框是否全屏',
            'en-US': 'Whether the dialog is displayed in full screen'
          },
          mode: ['pc'],
          pcDemo: 'fullscreen'
        },
        {
          name: 'is-form-reset',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '关闭弹窗，默认重置表单数据',
            'en-US': 'Reset form data by default when closing the dialog'
          },
          mode: ['pc'],
          pcDemo: 'form-in-dialog'
        },
        {
          name: 'lock-scroll',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': 'Dialog 弹出时是否禁用滚动条',
            'en-US': 'Whether to disable scrolling when the dialog is displayed'
          },
          mode: ['pc'],
          pcDemo: 'lock-scroll'
        },
        {
          name: 'max-height',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '实现窗口最大高度',
            'en-US': 'Maximum height of the dialog box'
          },
          mode: ['pc'],
          pcDemo: 'dialog-width'
        },
        {
          name: 'modal',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否启用遮罩层',
            'en-US': 'Whether to enable the mask layer'
          },
          mode: ['pc'],
          pcDemo: 'no-modal'
        },
        {
          name: 'modal-append-to-body',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '遮罩层是否应用到 body 上，为 false 时遮罩层会应用到 DialogBox 的父元素上',
            'en-US':
              'Whether the mask layer is applied to the body. If false, the mask layer is applied to the parent element of the dialog box'
          },
          mode: ['pc'],
          pcDemo: 'right-dialog'
        },
        {
          name: 'resize',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '弹窗是否能切换全屏',
            'en-US': 'Whether the dialog can be resized or switched to full screen'
          },
          mode: ['pc'],
          pcDemo: 'form-in-dialog'
        },
        {
          name: 'right-slide',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启弹出右侧滑出功能',
            'en-US': 'Whether to enable the right-side slide-out function of the dialog'
          },
          mode: ['pc'],
          pcDemo: 'right-dialog'
        },
        {
          name: 'show-close',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示关闭按钮',
            'en-US': 'Whether to show the close button'
          },
          mode: ['pc'],
          pcDemo: 'hidden-close-buttons'
        },
        {
          name: 'show-header',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示弹窗头部 header',
            'en-US': 'Whether to display the dialog header'
          },
          mode: ['pc'],
          pcDemo: 'hidden-header'
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '弹出框标题',
            'en-US': 'Dialog Box Title'
          },
          mode: ['pc'],
          pcDemo: 'custom-dialog-title'
        },
        {
          name: 'top',
          type: 'string',
          defaultValue: "'15vh'",
          desc: {
            'zh-CN': '设置弹出框距离窗口顶部的高度',
            'en-US': 'Set the distance from the top of the window to the dialog box'
          },
          mode: ['pc'],
          pcDemo: 'dialog-top-height'
        },
        {
          name: 'visible',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '控制弹出框显示与关闭',
            'en-US': 'Control dialog box display and closing'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'width',
          type: 'string',
          defaultValue: "'500px'",
          desc: {
            'zh-CN': '弹出框的宽度',
            'en-US': 'Width of the dialog box'
          },
          mode: ['pc'],
          pcDemo: 'dialog-width'
        },
        {
          name: 'custom-style',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义实现双层抽屉',
            'en-US': 'Custom styles for implementing double-layer drawer'
          },
          meta: {
            stable: '3.21.0'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'double-dialog-height',
          mfDemo: 'double-dialog-height'
        },
        {
          name: 'no-animation',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启动画',
            'en-US': 'Indicates whether to enable animation'
          },
          meta: {
            stable: '3.21.0'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'double-dialog-height',
          mfDemo: 'double-dialog-height'
        },
        {
          name: 'dialog-transition',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '启动弹出动效由小变大',
            'en-US': 'Enable dialog transition effect from small to large'
          },
          mode: ['pc'],
          pcDemo: 'transition-effect'
        },
        {
          name: 'before-close',
          type: '(type) => boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置弹窗关闭前的回调函数，如果函数返回 `false`,可以拦截关闭弹窗',
            'en-US':
              'Set the callback function before closing the dialog. If the function returns `false`, the dialog closing can be intercepted'
          },
          mode: ['pc'],
          pcDemo: 'before-close'
        }
      ],
      events: [
        {
          name: 'before-close',
          type: '(event, hideFn) => void',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 关闭弹窗前的事件，通过 event.preventDefault() 可以拦截关闭弹窗',
            'en-US':
              'Event before the dialog closes. The dialog closing can be intercepted by calling event.preventDefault()'
          },
          mode: ['pc'],
          pcDemo: 'before-close'
        },
        {
          name: 'close',
          type: '() => {}',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 关闭的回调',
            'en-US': 'Callback when the dialog closes'
          },
          mode: ['pc'],
          pcDemo: 'open-close-events'
        },
        {
          name: 'closed',
          type: '() => {}',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 关闭动画结束时的回调',
            'en-US': 'Callback when the dialog closing animation ends'
          },
          mode: ['pc'],
          pcDemo: 'open-close-events'
        },
        {
          name: 'drag-end',
          type: '(arg) => {}',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 拖拽结束事件;arg包含弹窗的位置等信息',
            'en-US': 'Dialog drag end event; arg contains dialog position and other information'
          },
          mode: ['pc'],
          pcDemo: 'draggable'
        },
        {
          name: 'drag-move',
          type: '(arg) => {}',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 拖拽移动事件;arg包含弹窗的位置等信息',
            'en-US': 'Dialog drag move event; arg contains dialog position and other information'
          },
          mode: ['pc'],
          pcDemo: 'draggable'
        },
        {
          name: 'drag-start',
          type: '(arg) => {}',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 拖拽开始事件;arg包含弹窗的位置等信息',
            'en-US': 'Dialog drag start event; arg contains dialog position and other information'
          },
          mode: ['pc'],
          pcDemo: 'draggable'
        },
        {
          name: 'open',
          type: '() => {}',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 打开的回调',
            'en-US': 'Callback when the dialog opens'
          },
          mode: ['pc'],
          pcDemo: 'open-close-events'
        },
        {
          name: 'opened',
          type: '() => {}',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 打开动画结束时的回调',
            'en-US': 'Callback when the dialog opening animation ends'
          },
          mode: ['pc'],
          pcDemo: 'open-close-events'
        },
        {
          name: 'resize',
          typeAnchorName: 'IResizeEvent',
          type: '(ev: IResizeEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '弹窗大小变化时的事件，比如切换全屏状态时',
            'en-US': 'Event when the dialog size changes, such as when switching full-screen mode'
          },
          mode: ['pc'],
          pcDemo: 'fullscreen'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 的内容插槽',
            'en-US': 'Dialog content slot'
          },
          mode: ['pc'],
          pcDemo: 'custom-dialog-content'
        },
        {
          name: 'footer',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 按钮操作区的内容插槽',
            'en-US': 'Dialog footer button operation area content slot'
          },
          mode: ['pc'],
          pcDemo: 'custom-dialog-footer'
        },
        {
          name: 'title',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 标题区的内容插槽',
            'en-US': 'Dialog title area content slot'
          },
          mode: ['pc'],
          pcDemo: 'custom-dialog-title'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IResizeEvent',
      type: 'interface',
      code: `
interface IResizeEvent {
  // 当前的全屏状态
  fullscreen: boolean
  // 弹窗的元素
  dialog: HTMLElement
}
      `
    }
  ]
}
