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
      demoId: 'category-type',
      name: {
        'zh-CN': '权签类别',
        'en-US': 'Approval Type'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>category</code> 设置权签类别，默认值是 <code>0303</code>，发送权签人请求的category参数。</p>\n',
        'en-US':
          '<p>You can set the approval type through <code>category</code>. The default value is <code>0303</code>, which is the category parameter of the request sent by the approver. </p>\n'
      },
      codeFiles: ['category-type.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>value</code> 设置权签人的值。 通过 <code>disabled</code> 设置组件是否禁用，默认值为 false。</p>\n',
        'en-US':
          '<p>Use <code>value</code> to set the value of the approver. Use <code>disabled</code> to set whether to disable the component. The default value is false. </p>\n'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'custom-service',
      name: {
        'zh-CN': '自定义服务',
        'en-US': 'Custom Service'
      },
      desc: {
        'zh-CN': '<p>通过 fetch-hrapprover 属性可以指定一个方法，在方法中可实现请求自定义的服务。</p>\n',
        'en-US':
          '<p>You can use the fetch-hrapprover attribute to specify a method in which the service customized by the request can be implemented. </p>\n'
      },
      codeFiles: ['custom-service.vue']
    }
  ]
}
