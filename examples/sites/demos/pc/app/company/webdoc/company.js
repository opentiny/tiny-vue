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
      demoId: 'custom-show-num',
      name: {
        'zh-CN': '自定义数据显示数量',
        'en-US': 'User-defined number of data to be displayed'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>max</code> 属性设置下拉框最大显示的数据条数。<code>clearable</code> 是否显示清除按钮，默认为 true 。</p>\n',
        'en-US':
          '<p>You can set the maximum number of records displayed in the drop-down list box through the <code>max</code> attribute. <code>clearable</code>Indicates whether to display the Clear button. The default value is true. </p>\n'
      },
      codeFiles: ['custom-show-num.vue']
    },
    {
      demoId: 'custom-service',
      name: {
        'zh-CN': '自定义服务',
        'en-US': 'Custom Service'
      },
      desc: {
        'zh-CN': '<p>通过 <code>fetch-company</code> 属性可以指定一个方法，在方法中可实现请求自定义的服务。</p>\n',
        'en-US':
          '<p>You can use the <code>fetch-company</code> attribute to specify a method in which the service customized by the request can be implemented. </p>\n'
      },
      codeFiles: ['custom-service.vue']
    }
  ]
}
