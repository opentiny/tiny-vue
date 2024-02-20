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
        'zh-CN':
          '<p>通过 <code>fetch-country</code> 属性可以指定一个方法，在方法中可实现请求自定义的服务。 <code>clearable</code> 设置是否可清空，默认值为 true。</p>\n',
        'en-US':
          '<p>You can use the <code>fetch-country</code> attribute to specify a method in which the service customized by the request can be implemented. <code>clearable</code>: indicates whether data can be cleared. The default value is true. </p>\n'
      },
      codeFiles: ['custom-service.vue']
    },
    {
      demoId: 'fields',
      name: {
        'zh-CN': '自定义数据的字段',
        'en-US': 'Custom Data Fields'
      },
      desc: {
        'zh-CN': '当使用自定义的数据体时，需要使用<code>fields</code>来指定字段',
        'en-US': 'When a user-defined data body is used, <code>fields</code> must be used to specify fields.'
      },
      codeFiles: ['fields.vue']
    }
  ]
}
