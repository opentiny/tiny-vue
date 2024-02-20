export default {
  mode: ['pc'],
  apis: [
    {
      name: 'notify',
      type: 'component',
      props: [
        {
          name: 'closeIcon',
          type: 'Component',
          defaultValue: 'IconClose',
          desc: {
            'zh-CN': '关闭图标组件对象',
            'en-US': 'Close icon component object'
          },
          mode: ['pc'],
          pcDemo: 'closeIcon'
        },
        {
          name: 'customClass',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义样式类',
            'en-US': 'Custom style class'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'debounceDelay',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '启用防抖',
            'en-US': 'Enable image stabilization'
          },
          mode: ['pc'],
          pcDemo: 'debounceDelay'
        },
        {
          name: 'duration',
          type: 'number',
          defaultValue: '4500',
          desc: {
            'zh-CN': '自动关闭延时毫秒数',
            'en-US': 'Automatic shutdown delay in milliseconds'
          },
          mode: ['pc'],
          pcDemo: 'duration'
        },
        {
          name: 'message',
          typeAnchorName: 'INotifyMessage',
          type: 'INotifyMessage',
          defaultValue: '',
          desc: {
            'zh-CN': '通知消息文本，可用 jsx 定制',
            'en-US': 'Notification message text, which can be customized using JSX.'
          },
          mode: ['pc'],
          pcDemo: 'message'
        },
        {
          name: 'position',
          type: "'top-right' | 'bottom-right'",
          defaultValue: "'bottom-right'",
          desc: {
            'zh-CN': '通知显示位置',
            'en-US': 'Notification display position.'
          },
          mode: ['pc'],
          pcDemo: 'position'
        },
        {
          name: 'showClose',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示关闭按钮',
            'en-US': 'Whether to display the close button'
          },
          mode: ['pc'],
          pcDemo: 'showClose'
        },
        {
          name: 'showIcon',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示类型图标',
            'en-US': 'Display Type Icon'
          },
          mode: ['pc'],
          pcDemo: 'showIcon'
        },
        {
          name: 'statusIcon',
          type: 'Component',
          defaultValue: 'IconInfoSolid',
          desc: {
            'zh-CN': '类型图标组件对象',
            'en-US': 'Type icon component object'
          },
          mode: ['pc'],
          pcDemo: 'statusIcon'
        },
        {
          name: 'title',
          typeAnchorName: 'INotifyTitle',
          type: 'INotifyTitle',
          defaultValue: '',
          desc: {
            'zh-CN': '通知消息标题，可用 jsx 定制',
            'en-US': 'Notification message title, which can be customized by JSX.'
          },
          mode: ['pc'],
          pcDemo: 'title'
        },
        {
          name: 'type',
          type: "'info' | 'success' | 'warning' | 'error'",
          defaultValue: "'info'",
          desc: {
            'zh-CN': '通知消息类型',
            'en-US': 'Notification message type'
          },
          mode: ['pc'],
          pcDemo: 'type'
        },
        {
          name: 'verticalOffset',
          type: 'number | string',
          defaultValue: '16',
          desc: {
            'zh-CN': '设置垂直方向偏离距离,单位 px',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'verticalOffset'
        }
      ],
      events: [
        {
          name: 'beforeClose',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭前回调方法，返回 false 可阻止关闭',
            'en-US': 'Callback method before closing. If false is returned, closing is prevented.'
          },
          mode: ['pc'],
          pcDemo: 'notify-events'
        },
        {
          name: 'onClose',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭 notify 时触发的事件',
            'en-US': 'Event triggered when the notify function is disabled'
          },
          mode: ['pc'],
          pcDemo: 'notify-events'
        }
      ],
      methods: [],
      slots: []
    }
  ],
  types: [
    {
      name: 'INotifyTitle',
      type: 'type',
      code: `type INotifyTitle = string | (h: Vue.h, params: { titleClass: string, vm }) => JSX.Element`
    },
    {
      name: 'INotifyMessage',
      type: 'type',
      code: `type INotifyMessage = string | (h: Vue.h, params: { messageClass: string, vm }) => JSX.Element`
    }
  ]
}
