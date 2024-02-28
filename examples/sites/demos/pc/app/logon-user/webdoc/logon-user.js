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
        'zh-CN': '可通过<code>get-user-info</code>属性设置用户信息。',
        'en-US': 'You can use the <code>get-user-info</code> attribute to set user information.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-service',
      name: {
        'zh-CN': '自定义服务',
        'en-US': 'Custom Service'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>service</code> 属性设置自定义服务。</p>\n',
        'en-US': '<p>You can set a custom service through the <code>service</code> attribute. </p>\n'
      },
      codeFiles: ['custom-service.vue']
    }
  ]
}
