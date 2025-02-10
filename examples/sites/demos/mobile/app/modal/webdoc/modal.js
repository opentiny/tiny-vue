export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'modal',
      type: 'component',
      props: [
        {
          name: 'duration',
          type: 'number | string',
          defaultValue: '3000',
          desc: {
            'zh-CN': "自动关闭的延时，仅当 type 为 'message' 有效",
            'en-US': "Delay for automatic shutdown, only valid when type is 'message'"
          },
          demoId: 'duration'
        },
        {
          name: 'esc-closable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否允许按 Esc 键关闭窗口',
            'en-US': 'Whether to allow pressing the Esc key to close a window'
          },
          demoId: 'mask-closable'
        },
        {
          name: 'fullscreen',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否最大化显示',
            'en-US': 'Whether to maximize the display'
          },
          demoId: 'fullscreen'
        },
        {
          name: 'height',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的高度',
            'en-US': 'window height'
          },
          demoId: ''
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
          demoId: 'id'
        },
        {
          name: 'is-form-reset',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '关闭弹窗时，是否重置表单数据',
            'en-US': 'Whether to reset the form data when closing the pop-up window'
          },
          demoId: 'is-form-reset'
        },
        {
          name: 'lock-scroll',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否锁住滚动条，不允许页面滚动',
            'en-US': 'Whether to lock the scroll bar and not allow the page to scroll'
          },
          demoId: 'lock-scroll'
        },
        {
          name: 'lock-view',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否锁住页面，不允许窗口之外的任何操作',
            'en-US': 'Whether to lock the page and not allow any operations outside the window'
          },
          demoId: 'lock-view'
        },
        {
          name: 'mask',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示遮罩层',
            'en-US': 'Whether to display the mask layer'
          },
          demoId: 'mask-closable'
        },
        {
          name: 'mask-closable',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否允许点击遮罩层关闭窗口',
            'en-US': 'Whether to allow clicking on the mask layer to close the window'
          },
          demoId: 'mask-closable'
        },
        {
          name: 'message',
          type: 'string | VNode | () => string | VNode',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的内容',
            'en-US': 'Window contents'
          },
          demoId: 'message'
        },
        {
          name: 'min-height',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的最小高度',
            'en-US': 'Minimum height of window'
          },
          demoId: 'min-height'
        },
        {
          name: 'min-width',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的最小宽度',
            'en-US': 'The minimum width of the window'
          },
          demoId: 'min-width'
        },
        {
          name: 'modelValue / v-model',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示',
            'en-US': 'Whether to display'
          },
          demoId: 'cancel-event'
        },
        {
          name: 'resize',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否允许拖动调整窗口大小',
            'en-US': 'Whether to allow dragging to resize the window'
          },
          demoId: 'resize'
        },
        {
          name: 'show-header',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示头部',
            'en-US': 'Display Header'
          },
          demoId: 'showHeader'
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
          demoId: 'status'
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的标题',
            'en-US': 'Window title'
          },
          demoId: 'title'
        },
        {
          name: 'top',
          type: 'number | string',
          defaultValue: '80',
          desc: {
            'zh-CN': "消息距离顶部的位置，仅当 type 为 'message' 时有效",
            'en-US': "The position of the message from the top, only valid when type is 'message'"
          },
          demoId: 'top'
        },
        {
          name: 'type',
          type: "'alert' | 'confirm' | 'message'",
          defaultValue: "'alert'",
          desc: {
            'zh-CN': '窗口类型',
            'en-US': 'Window type'
          },
          demoId: 'type'
        },
        {
          name: 'width',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的宽度（设置宽度像素或者百分比，浏览器窗口大小改变可居中显示)',
            'en-US':
              'The width of the window(Set the width in pixels or percentages, and the browser window size can be changed to display in the center)'
          },
          demoId: 'grid'
        },
        {
          name: 'z-index',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义堆叠顺序（对于某些特殊场景，比如被遮挡时可能会用到）',
            'en-US': 'Customize the stacking order (may be used in some special scenarios, such as when it is blocked)'
          },
          demoId: 'zIndex'
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
          demoId: 'cancel-event'
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
          demoId: 'close-event'
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
          demoId: 'confirm-event'
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
          demoId: 'hide-event'
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
          demoId: 'show-event'
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
          demoId: 'zoom-event'
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
          demoId: 'cancel-event'
        },
        {
          name: 'footer',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口底部的模板',
            'en-US': 'Template at the bottom of the window'
          },
          demoId: 'footer-slot'
        }
      ]
    }
  ],
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>基础用法</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'cancel-event',
      name: {
        'zh-CN': '取消事件',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>取消事件</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['cancel-event.vue']
    },
    {
      demoId: 'close-event',
      name: {
        'zh-CN': '关闭事件',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>关闭事件</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['close-event.vue']
    },
    {
      demoId: 'confirm-event',
      name: {
        'zh-CN': '确认事件',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>确认事件</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['confirm-event.vue']
    },
    {
      demoId: 'duration',
      name: {
        'zh-CN': '持续时间',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>持续时间</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['duration.vue']
    },
    {
      demoId: 'id',
      name: {
        'zh-CN': '不允许重复点击',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>不允许重复点击</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['id.vue']
    },
    {
      demoId: 'esc-closable',
      name: {
        'zh-CN': 'ESC键关闭',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>ESC键关闭</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['esc-closable.vue']
    },
    {
      demoId: 'footer-slot',
      name: {
        'zh-CN': '尾部插槽',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>尾部插槽</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['footer-slot.vue']
    },
    {
      demoId: 'fullscreen',
      name: {
        'zh-CN': '铺满全屏',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>铺满全屏</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['fullscreen.vue']
    },
    {
      demoId: 'hide-event',
      name: {
        'zh-CN': '隐藏事件',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>隐藏事件</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['hide-event.vue']
    },
    {
      demoId: 'is-form-reset',
      name: {
        'zh-CN': '重置表单数据',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>关闭弹窗，默认重置表单数据</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['is-form-reset.vue']
    },
    {
      demoId: 'lock-scroll',
      name: {
        'zh-CN': '禁止页面滚动',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>是否锁住滚动条，不允许页面滚动</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['lock-scroll.vue']
    },
    {
      demoId: 'lock-view',
      name: {
        'zh-CN': '锁住页面',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>是否锁住页面，不允许窗口之外的任何操作</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['lock-view.vue']
    },
    {
      demoId: 'mask-closable',
      name: {
        'zh-CN': '点击遮罩层关闭',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>点击遮罩层关闭</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['mask-closable.vue']
    },
    {
      demoId: 'message',
      name: {
        'zh-CN': '自定义提示框的内容',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>自定义提示框的内容</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['message.vue']
    },
    {
      demoId: 'min-height',
      name: {
        'zh-CN': '提示框最小高度为300',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>提示框最小高度为300</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['min-height.vue']
    },
    {
      demoId: 'min-width',
      name: {
        'zh-CN': '提示框最小宽度为700',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>提示框最小宽度为700</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['min-width.vue']
    },
    {
      demoId: 'resize',
      name: {
        'zh-CN': '可以拖动调整窗口大小',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>可以拖动调整窗口大小</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['resize.vue']
    },
    {
      demoId: 'show-event',
      name: {
        'zh-CN': '在窗口显示时触发事件',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>在窗口显示时触发事件</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['show-event.vue']
    },
    {
      demoId: 'showFooter',
      name: {
        'zh-CN': '是否显示底部',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>是否显示底部</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['showFooter.vue']
    },
    {
      demoId: 'showHeader',
      name: {
        'zh-CN': '是否显示头部',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>是否显示头部</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['showHeader.vue']
    },
    {
      demoId: 'status',
      name: {
        'zh-CN': '模态框提示图标',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>模态框提示图标</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['status.vue']
    },
    {
      demoId: 'title',
      name: {
        'zh-CN': '自定义标题',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>自定义标题</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'top',
      name: {
        'zh-CN': '距离顶部的位置',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>距离顶部的位置</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['top.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '模态框类型',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>模态框类型</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'value',
      name: {
        'zh-CN': '模态框按钮的值',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>模态框按钮的值</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['value.vue']
    },
    {
      demoId: 'zIndex',
      name: {
        'zh-CN': '模态框层级',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>模态框层级</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['zIndex.vue']
    },
    {
      demoId: 'zoom-event',
      name: {
        'zh-CN': '窗口缩放时触发事件',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>窗口缩放时触发事件</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['zoom-event.vue']
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
