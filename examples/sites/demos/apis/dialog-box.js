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
            'en-US': 'Indicates whether to enable the pop-up slide-out function. The default value is false'
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
            'en-US': 'When set to true, the head and bottom content of the pop-up box will automatically center'
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
            'en-US': 'Close the pop-up window by clicking on the mask layer'
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
            'en-US':
              'Indicates whether the mask layer is applied to the body. If the value is false, the mask layer is applied to the parent element of DialogBox'
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
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'destroy-on-close'
        },
        {
          name: 'drag-outside-window',
          type: 'boolean',
          defaultValue: 'false',
          desc: { 'zh-CN': '可将弹窗拖出窗口', 'en-US': 'Pop ups can be dragged out of the window' },
          mode: ['pc'],
          pcDemo: 'draggable'
        },
        {
          name: 'dialog-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义配置弹窗类名',
            'en-US': 'Customized configuration pop-up window class name'
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
            'en-US': 'Whether to enable the drag and drop function of pop ups, with a default value of false'
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
            'en-US': 'Is the pop-up full screen'
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
            'en-US': 'Close the pop-up window and reset the form data by default'
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
            'en-US': 'Indicates whether to display the pop-up header. The default value is true'
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
            'en-US': 'Achieve the maximum height of the window'
          },
          mode: ['pc'],
          pcDemo: 'form-in-dialog'
        },
        {
          name: 'modal',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否启用遮罩层',
            'en-US': 'Is the mask layer enabled'
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
              'Indicates whether the DialogBox itself is inserted into the body. This attribute must be specified and set to true for nested Dialogs'
          },
          mode: ['pc'],
          pcDemo: 'right-dialog'
        },
        {
          name: 'resize',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '实现窗口最大化',
            'en-US': 'Maximize windows'
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
            'en-US': 'Whether to disable the scroll bar when a log is displayed'
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
            'en-US': 'Is the close button displayed'
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
            'en-US': 'Pop-up dialog box title'
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
            'en-US':
              'Height between the pop-up box and the top of the window. The default value is 15% of the screen height'
          },
          mode: ['pc'],
          pcDemo: 'custom-dialog-title'
        },
        {
          name: 'top',
          type: 'string',
          defaultValue: '15vh',
          desc: {
            'zh-CN': '设置弹出框距离窗口顶部的高度',
            'en-US': 'Display and close pop-up boxes'
          },
          mode: ['pc'],
          pcDemo: 'dialog-top-height'
        },
        {
          name: 'visible',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '控制弹出框显示与关闭',
            'en-US': 'Control pop-up display and closing'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'width',
          type: 'string',
          defaultValue: '500px',
          desc: {
            'zh-CN': '弹出框的宽度',
            'en-US': 'Wideness of the dialog box that is displayed'
          },
          mode: ['pc'],
          pcDemo: 'dialog-width'
        }
      ],
      events: [
        {
          name: 'before-close',
          type: '(arg:() => void) => void',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 关闭弹窗前，执行的事件',
            'en-US': 'Event executed before a dialog window is closed.'
          },
          mode: ['pc'],
          pcDemo: 'draggable'
        },
        {
          name: 'close',
          type: '() => {}',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 关闭的回调',
            'en-US': 'Dialog disabled callback; Dialog closing callback; No arguments'
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
            'en-US': 'Dialog closes the callback when the animation ends. No arguments'
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
            'en-US': 'Dialog drag end event; arg:event (including the location of the pop-up window)'
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
            'en-US': 'Dialog dragging and moving event; arg:event (including the location of the pop-up window)'
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
            'en-US': 'Dialog drag start event; arg:event (including the location of the pop-up window)'
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
            'en-US': 'Dialog open callback; Dialog open callback; No arguments'
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
            'en-US': 'Dialog: callback when the animation ends; No arguments'
          },
          mode: ['pc'],
          pcDemo: 'open-close-events'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 的内容',
            'en-US': 'Dialog content'
          },
          mode: ['pc'],
          pcDemo: 'custom-dialog-content'
        },
        {
          name: 'footer',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 按钮操作区的内容',
            'en-US': 'Dialog button operation area content'
          },
          mode: ['pc'],
          pcDemo: 'custom-dialog-footer'
        },
        {
          name: 'title',
          defaultValue: '',
          desc: {
            'zh-CN': 'Dialog 标题区的内容',
            'en-US': 'Dialog content in the title area'
          },
          mode: ['pc'],
          pcDemo: 'custom-dialog-title'
        }
      ]
    }
  ]
}
