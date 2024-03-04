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
      demoId: 'custom-service',
      name: {
        'zh-CN': '自定义服务',
        'en-US': 'Custom Service'
      },
      desc: {
        'zh-CN': '<p>设置自定义服务</p>\n',
        'en-US': '<p>Setting a Custom Service</p>\n'
      },
      codeFiles: ['custom-service.vue']
    },
    {
      demoId: 'custom-operation',
      name: {
        'zh-CN': '自定义功能',
        'en-US': 'Custom Function'
      },
      desc: {
        'zh-CN': '<p>通过默认插槽自定义功能</p>\n',
        'en-US': '<p>Customize functions by default slot</p>\n'
      },
      codeFiles: ['custom-operation.vue']
    }
  ]
}
