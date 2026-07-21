export default {
  column: '2',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': `通过<code>status</code>属性设置组件状态，可选值有<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>、<code>loading</code>五种状态。<code>message</code> 属性设置提示信息。`,
        'en-US': `Set the component status via the <code>status</code> attribute, with optional values including <code>info</code>, <code>success</code>, <code>warning</code>, <code>error</code>, and <code>loading</code>. The <code>message</code> attribute sets the prompt information.`
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'message-duration',
      name: {
        'zh-CN': '自定义时长',
        'en-US': 'Custom Duration'
      },
      desc: {
        'zh-CN': `<code>duration</code> 属性用于设置消息提示的显示时长，单位为毫秒。`,
        'en-US': `The <code>duration</code> attribute is used to set the display duration of the message prompt, in milliseconds.`
      },
      codeFiles: ['message-duration.vue']
    },
    {
      demoId: 'message-close',
      name: {
        'zh-CN': '消息显示关闭按钮',
        'en-US': 'Message Close Button'
      },
      desc: {
        'zh-CN': `<code>message-closable</code> 属性用于设置消息提示是否可关闭。`,
        'en-US': `The <code>message-closable</code> attribute is used to set whether the message prompt can be closed.`
      },
      codeFiles: ['message-close.vue']
    },
    {
      demoId: 'prevent-duplicate',
      name: {
        'zh-CN': '防止重复消息提示',
        'en-US': 'Prevent Duplicate Message Prompts'
      },
      desc: {
        'zh-CN': `<code>id</code> 属性设置防止重复提示。`,
        'en-US': `The <code>id</code> attribute is set to prevent duplicate prompts.`
      },
      codeFiles: ['prevent-duplicate.vue']
    }
  ]
}
