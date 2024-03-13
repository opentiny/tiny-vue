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
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'change-role-event',
      name: {
        'zh-CN': 'change 事件',
        'en-US': 'change event'
      },
      desc: {
        'zh-CN': '<p>切换下拉角色时触发 change 事件，需要通过 change 事件回调方法去发送请求。</p>\n',
        'en-US':
          '<p>The change event is triggered when the drop-down role is switched. The change event callback method needs to be used to send the request. </p>\n'
      },
      codeFiles: ['change-role-event.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '设置组件大小',
        'en-US': 'Set Component Size'
      },
      desc: {
        'zh-CN': '<p>可设置为：<code>medium</code>，<code>small</code>，<code>mini</code></p>\n',
        'en-US': '<p> can be set to <code>medium</code>, <code>small</code>, <code>mini</code></p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'custom-service',
      name: {
        'zh-CN': '自定义服务',
        'en-US': 'Custom Service'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>fetch-role</code> 和 <code>fetch-current-role</code> 两个方法自定义服务，同时可通过 <code>fields</code> 属性指定显示和绑定值对应的字段。\n可通过 <code>placeholder</code> 展示占位符。</p>\n',
        'en-US':
          '<p>You can use the <code>fetch-role</code> and <code>fetch-current-role</code> methods to customize services. In addition, you can use the <code>fields</code> attribute to specify the fields corresponding to the display and binding values. \n You can use <code>placeholder</code> to display placeholders. </p>\n'
      },
      codeFiles: ['custom-service.vue']
    }
  ]
}
