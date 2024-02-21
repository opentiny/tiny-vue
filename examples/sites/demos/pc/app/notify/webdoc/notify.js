export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '通过函数调用的方式使用组件。',
        'en-US': 'Components are used by means of function calls'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '消息类型',
        'en-US': 'Message Type'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>type</code> 设置不同的类型。可选值：success、warning、info、error，默认值：info 。</p>\n',
        'en-US':
          '<p>You can set different types by <code>type</code>. The options are success, warning, info, and error. The default value is info. </p>\n'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'duration',
      name: {
        'zh-CN': '自动关闭延时',
        'en-US': 'Automatic shutdown delay'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>duration</code>  属性设置自动关闭的延迟时间，默认值：4500ms 。</p>\n',
        'en-US':
          '<p>You can set the delay for automatic shutdown through the <code>duration</code> attribute. The default value is 4500 ms. </p>\n'
      },
      codeFiles: ['duration.vue']
    },
    {
      demoId: 'position',
      name: {
        'zh-CN': '显示位置',
        'en-US': 'Display position'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>position</code>  属性设置通知框显示位置，默认值：bottom-right 。</p>\n',
        'en-US':
          '<p>You can set the position of the notification box through the <code>position</code> attribute. The default value is bottom-right. </p>\n'
      },
      codeFiles: ['position.vue']
    },
    {
      demoId: 'title',
      name: {
        'zh-CN': '标题',
        'en-US': 'Title'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>title</code>  属性设置通知框标题。</p>\n',
        'en-US': '<p>You can set the title of the notification box through the <code>title</code> attribute. </p>\n'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'message',
      name: {
        'zh-CN': '内容自定义',
        'en-US': 'Custom Content'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>message</code>  属性设置通知框的内容。</p>\n',
        'en-US': '<p>You can set the content of the notification box through the <code>message</code> attribute. </p>\n'
      },
      codeFiles: ['message.vue']
    },
    {
      demoId: 'showClose',
      name: {
        'zh-CN': '不显示关闭按钮',
        'en-US': 'The close button is not displayed.'
      },
      desc: {
        'zh-CN': '<p> <code>showClose</code> 属性设置通知框是否显示关闭按钮，默认值：<code>true</code> 。</p>\n',
        'en-US':
          '<p>The showClose property sets whether the notification box displays the close button. The default value is true. </p>\n'
      },
      codeFiles: ['showClose.vue']
    },
    {
      demoId: 'showIcon',
      name: {
        'zh-CN': '不显示类型图标',
        'en-US': 'The type icon is not displayed.'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>showIcon</code>  属性设置通知框是否显示类型图标，默认值：true 。</p>\n',
        'en-US':
          '<p>You can use the <code>showIcon</code> attribute to set whether to display the type icon in the notification box. The default value is true. </p>\n'
      },
      codeFiles: ['showIcon.vue']
    },
    {
      demoId: 'closeIcon',
      name: {
        'zh-CN': '自定义关闭图标',
        'en-US': 'Custom Close Icon'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>closeIcon</code>  属性设置通知框关闭图标，默认值：IconClose 。</p>\n',
        'en-US':
          '<p>You can set the icon for closing the notification box through the <code>closeIcon</code> attribute. The default value is IconClose. </p>\n'
      },
      codeFiles: ['closeIcon.vue']
    },
    {
      demoId: 'statusIcon',
      name: {
        'zh-CN': '自定义类型图标',
        'en-US': 'Custom type icon'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>statusIcon</code>  属性设置通知框类型图标，默认值：IconInfoSolid 。</p>\n',
        'en-US':
          '<p>You can set the notification box type icon through the <code>statusIcon</code> attribute. The default value is IconInfoSolid. </p>\n'
      },
      codeFiles: ['statusIcon.vue']
    },
    {
      demoId: 'debounceDelay',
      name: {
        'zh-CN': '防抖',
        'en-US': 'Anti-shake'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>debounceDelay</code> 设置防抖时间。',
        'en-US': '<p>You can use <code>debounceDelay</code> to set the image stabilization time.'
      },
      codeFiles: ['debounceDelay.vue']
    },
    {
      demoId: 'verticalOffset',
      name: {
        'zh-CN': '垂直偏移量',
        'en-US': 'Vertical Offset'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>verticalOffset</code> 设置垂直方向偏离距离。',
        'en-US': '<p> The vertical deviation distance can be set by using <code>verticalOffset</code>.'
      },
      codeFiles: ['verticalOffset.vue']
    },
    {
      demoId: 'notify-events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN':
          '<p>\n          <div>可通过 <code>beforeClose</code>  属性设置通知框关闭前的事件。</div>\n          <div>可通过 <code>onClose</code> 属性设置通知点击关闭按钮时触发事件。</div>\n        </p>',
        'en-US':
          '<p>\n          <div> The property <code>beforeClose</code> sets the event before the notification box closes. </div>\n          <div> can be set through the <code>onClose</code> property to notify the event that is triggered when the close button is clicked. </div>\n        </p>'
      },
      codeFiles: ['notify-events.vue']
    }
  ]
}
