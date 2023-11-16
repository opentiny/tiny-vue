export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'type',
      'name': { 'zh-CN': '消息类型', 'en-US': 'Message Type' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>type</code> 设置不同的类型。可选值：success、warning、info、error，默认值：info 。</p>\n',
        'en-US':
          '<p>You can set different types by <code>type</code>. The options are success, warning, info, and error. The default value is info. </p>\n'
      },
      'codeFiles': ['type.vue']
    },
    {
      'demoId': 'duration',
      'name': { 'zh-CN': '自动关闭延时', 'en-US': 'Automatic shutdown delay' },
      'desc': {
        'zh-CN': '<p>可通过 <code>duration</code>  属性设置自动关闭的延迟时间，默认值：4500ms 。</p>\n',
        'en-US':
          '<p>You can set the delay for automatic shutdown through the <code>duration</code> attribute. The default value is 4500 ms. </p>\n'
      },
      'codeFiles': ['duration.vue']
    },
    {
      'demoId': 'position',
      'name': { 'zh-CN': '显示位置', 'en-US': 'Display position' },
      'desc': {
        'zh-CN': '<p>可通过 <code>position</code>  属性设置通知框显示位置，默认值：bottom-right 。</p>\n',
        'en-US':
          '<p>You can set the position of the notification box through the <code>position</code> attribute. The default value is bottom-right. </p>\n'
      },
      'codeFiles': ['position.vue']
    },
    {
      'demoId': 'title',
      'name': { 'zh-CN': '标题', 'en-US': 'Title' },
      'desc': {
        'zh-CN': '<p>可通过 <code>title</code>  属性设置通知框标题。</p>\n',
        'en-US': '<p>You can set the title of the notification box through the <code>title</code> attribute. </p>\n'
      },
      'codeFiles': ['title.vue']
    },
    {
      'demoId': 'message',
      'name': { 'zh-CN': '内容自定义', 'en-US': 'Custom Content' },
      'desc': {
        'zh-CN': '<p>可通过 <code>message</code>  属性设置通知框的内容。</p>\n',
        'en-US': '<p>You can set the content of the notification box through the <code>message</code> attribute. </p>\n'
      },
      'codeFiles': ['message.vue']
    },
    {
      'demoId': 'showClose',
      'name': { 'zh-CN': '不显示关闭按钮', 'en-US': 'The close button is not displayed.' },
      'desc': {
        'zh-CN': '<p>showClose <code>message</code>  属性设置通知框是否显示关闭按钮，默认值：true 。</p>\n',
        'en-US':
          '<p>showClose <code>message</code>: indicates whether the notification box displays the close button. The default value is true. </p>\n'
      },
      'codeFiles': ['showClose.vue']
    },
    {
      'demoId': 'showIcon',
      'name': { 'zh-CN': '不显示类型图标', 'en-US': 'The type icon is not displayed.' },
      'desc': {
        'zh-CN': '<p>可通过 <code>showIcon</code>  属性设置通知框是否显示类型图标，默认值：true 。</p>\n',
        'en-US':
          '<p>You can use the <code>showIcon</code> attribute to set whether to display the type icon in the notification box. The default value is true. </p>\n'
      },
      'codeFiles': ['showIcon.vue']
    },
    {
      'demoId': 'closeIcon',
      'name': { 'zh-CN': '自定义关闭图标', 'en-US': 'Custom Close Icon' },
      'desc': {
        'zh-CN': '<p>可通过 <code>closeIcon</code>  属性设置通知框关闭图标，默认值：IconClose 。</p>\n',
        'en-US':
          '<p>You can set the icon for closing the notification box through the <code>closeIcon</code> attribute. The default value is IconClose. </p>\n'
      },
      'codeFiles': ['closeIcon.vue']
    },
    {
      'demoId': 'statusIcon',
      'name': { 'zh-CN': '自定义类型图标', 'en-US': 'Custom type icon' },
      'desc': {
        'zh-CN': '<p>可通过 <code>statusIcon</code>  属性设置通知框类型图标，默认值：IconInfoSolid 。</p>\n',
        'en-US':
          '<p>You can set the notification box type icon through the <code>statusIcon</code> attribute. The default value is IconInfoSolid. </p>\n'
      },
      'codeFiles': ['statusIcon.vue']
    },
    {
      'demoId': 'beforeClose',
      'name': { 'zh-CN': '关闭前的事件', 'en-US': 'Event before closing' },
      'desc': {
        'zh-CN': '<p>可通过 <code>beforeClose</code>  属性设置通知框关闭前的事件。</p>\n',
        'en-US':
          '<p>You can set the event before the notification box is closed through the <code>beforeClose</code> attribute. </p>\n'
      },
      'codeFiles': ['beforeClose.vue']
    },
    {
      'demoId': 'close',
      'name': {
        'zh-CN': '关闭事件',
        'en-US': 'Event of closing'
      },
      'desc': {
        'zh-CN': '<p>可通过 <code>onClose</code>  属性设置通知点击关闭按钮时触发事件。</p>\n',
        'en-US':
          '<p>You can set the <code>onClose</code> attribute to trigger an event when the close button is clicked. </p>\n'
      },
      'codeFiles': ['onClose.vue']
    },
    {
      'demoId': 'debounceDelay',
      'name': { 'zh-CN': '防抖', 'en-US': 'Anti-shake' },
      'desc': {
        'zh-CN': '<p>可通过 <code>debounceDelay</code> 设置防抖时间\n',
        'en-US': '<p>You can use <code>debounceDelay</code> to set the image stabilization time.\n'
      },
      'codeFiles': ['debounceDelay.vue']
    },
    {
      'demoId': 'verticalOffset',
      'name': { 'zh-CN': '垂直偏移量', 'en-US': 'Vertical Offset' },
      'desc': { 'zh-CN': '<p>可通过 <code>verticalOffset</code> 设置垂直方向偏离距离\n', 'en-US': '' },
      'codeFiles': ['verticalOffset.vue']
    }
  ],
  apis: [
    {
      'name': 'notify',
      'type': 'component',
      'properties': [
        {
          'name': 'type',
          'type': '"info" | "success" | "warning" | "error"',
          'defaultValue': 'info',
          'desc': {
            'zh-CN': '通知消息类型',
            'en-US': 'Notification message type'
          },
          'demoId': 'type'
        },
        {
          'name': 'title',
          'typeAnchorName': 'INotifyTitle',
          'type': 'INotifyTitle',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通知消息标题，可用 jsx 定制',
            'en-US': 'Notification message title, which can be customized by JSX.'
          },
          'demoId': 'title'
        },
        {
          'name': 'message',
          'typeAnchorName': 'INotyfyMessage',
          'type': 'INotyfyMessage',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通知消息文本，可用 jsx 定制',
            'en-US': 'Notification message text, which can be customized using JSX.'
          },
          'demoId': 'message'
        },
        {
          'name': 'position',
          'type': '"top-right" | "bottom-right"',
          'defaultValue': 'bottom-right',
          'desc': {
            'zh-CN': '通知显示位置',
            'en-US': 'Notification display position.'
          },
          'demoId': 'position'
        },
        {
          'name': 'duration',
          'type': 'number',
          'defaultValue': '4500',
          'desc': { 'zh-CN': '自动关闭延时毫秒数', 'en-US': 'Automatic shutdown delay in milliseconds' },
          'demoId': 'duration'
        },
        {
          'name': 'customClass',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义样式类', 'en-US': 'Custom style class' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'showClose',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '是否显示关闭按钮', 'en-US': 'Whether to display the close button' },
          'demoId': 'showClose'
        },
        {
          'name': 'showIcon',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '是否显示类型图标', 'en-US': 'Display Type Icon' },
          'demoId': 'showIcon'
        },
        {
          'name': 'closeIcon',
          'type': 'Component',
          'defaultValue': 'IconClose',
          'desc': { 'zh-CN': '关闭图标组件对象', 'en-US': 'Close icon component object' },
          'demoId': 'closeIcon'
        },
        {
          'name': 'statusIcon',
          'type': 'Component',
          'defaultValue': 'IconInfoSolid',
          'desc': { 'zh-CN': '类型图标组件对象', 'en-US': 'Type icon component object' },
          'demoId': 'statusIcon'
        },
        {
          'name': 'debounceDelay',
          'type': 'number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '启用防抖', 'en-US': 'Enable image stabilization' },
          'demoId': 'debounceDelay'
        },
        {
          'name': 'verticalOffset',
          'type': 'number | string',
          'defaultValue': '16',
          'desc': { 'zh-CN': '设置垂直方向偏离距离,单位px', 'en-US': '' },
          'demoId': 'verticalOffset'
        }
      ],
      'events': [
        {
          'name': 'beforeClose',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '关闭前回调方法，返回 false 可阻止关闭',
            'en-US': 'Callback method before closing. If false is returned, closing is prevented.'
          },
          'demoId': 'beforeClose'
        },
        {
          'name': 'onClose',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '关闭 notify 时触发的事件',
            'en-US': 'Event triggered when the notify function is disabled'
          },
          'demoId': 'close'
        }
      ],
      'slots': []
    }
  ],
  types: [
    {
      name: 'INotifyTitle',
      type: 'type',
      code: `type INotifyTitle = string | (h: Vue.h, params: { titleClass: string, vm }) => JSX.Element`
    },
    {
      name: 'INotyfyMessage',
      type: 'type',
      code: `type INotyfyMessage = string | (h: Vue.h, params: { messageClass: string, vm }) => JSX.Element`
    }
  ]
}
