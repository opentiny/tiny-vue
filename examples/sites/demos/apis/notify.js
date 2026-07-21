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
            'en-US': 'Custom close icon component'
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
            'en-US': 'Custom CSS class name'
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
            'en-US': 'Enable debounce delay'
          },
          mode: ['pc'],
          pcDemo: 'debounceDelay'
        },
        {
          name: 'duration',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN':
              '通知自动关闭时间，单位毫秒数。 默认情况， <code>success  info </code> 延时5秒 <code> warning  error </code> 延时10秒自动关闭 ',
            'en-US':
              'Auto close delay in milliseconds. By default, <code>success info</code> closes after 5 seconds, <code>warning error</code> closes after 10 seconds'
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
            'en-US': 'Notification message content. Supports JSX customization'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'position',
          type: "'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'",
          defaultValue: "'bottom-right'",
          desc: {
            'zh-CN': '通知显示位置',
            'en-US': 'Position where notification appears'
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
            'en-US': 'Whether to show close button'
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
            'en-US': 'Whether to show type icon'
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
            'en-US': 'Custom status icon component'
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
            'en-US': 'Notification title Supports JSX customization'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'type',
          type: "'info' | 'success' | 'warning' | 'error'",
          defaultValue: "'info'",
          desc: {
            'zh-CN': '通知消息类型',
            'en-US': 'Type of notification message'
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
            'en-US': 'Before close callback Returning false prevents closing'
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
            'en-US': 'Triggered when notification is closed'
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
