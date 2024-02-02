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
        'en-US': 'For details, see the following example '
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'set-date',
      name: {
        'zh-CN': '设置日期',
        'en-US': 'Set Date'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>date</code> 属性设置日期后，将会在金额组件中显示日期框。值可设置为 string 或者 Date() 类型。\n通过 <code>change</code> 获取改变后的值。</p>\n',
        'en-US':
          '<p>After the date is set through the <code>date</code> attribute, the date box is displayed in the amount component. The value can be of the string or Date() type. \n Obtain the changed value through <code>change</code>. </p>\n'
      },
      codeFiles: ['set-date.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '编辑框大小',
        'en-US': 'editing box size'
      },
      desc: {
        'zh-CN': '<p>可选择的类型：<code>medium</code>，<code>small</code>，<code>mini</code></p>\n',
        'en-US': '<p>The options are as follows:<code>medium</code>,<code>small</code>, <code>mini</code></p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'custom-currency',
      name: {
        'zh-CN': '指定币种',
        'en-US': 'Specified Currency'
      },
      desc: {
        'zh-CN':
          '<p>默认显示币种为 CNY，可通过 <code>currency</code> 指定需要的币种，若指定的币种在返回的服务数据中不存在，则币种下拉框将不显示该币种。</p>\n',
        'en-US':
          '<p>The default currency is CNY. You can use <code>currency</code> to specify the currency. If the specified currency does not exist in the returned service data, the currency is not displayed in the Currency drop-down list box. </p>\n'
      },
      codeFiles: ['custom-currency.vue']
    },
    {
      demoId: 'digits-maxlen',
      name: {
        'zh-CN': '金额设置',
        'en-US': 'Amount Setting'
      },
      desc: {
        'zh-CN':
          '<p>设置 <code>digits</code> 属性可指定金额小数位数，默认为 2 位。设置 <code>max-len</code> 属性指定整数位最大可输入长度，默认为 15 位。</p>\n',
        'en-US':
          '<p>Set the <code>digits</code> attribute to specify the number of decimal places of the amount. The default value is 2. Set the <code>max-len</code> attribute to specify the maximum length of an integer. The default value is 15. </p>\n'
      },
      codeFiles: ['digits-maxlen.vue']
    },
    {
      demoId: 'custom-service',
      name: {
        'zh-CN': '自定义服务',
        'en-US': 'Custom Service '
      },
      desc: {
        'zh-CN':
          '<p><code>fetchCurrency</code> 指定自定义服务，<code>fields</code> 可指定显示字段和值设置在服务数据中的字段映射。</p>\n',
        'en-US':
          '<p><code>fetchCurrency</code> specifies the custom service. <code>fields</code> can specify the field mapping of the display field and value settings in the service data. </p>\n'
      },
      codeFiles: ['custom-service.vue']
    },
    {
      demoId: 'amount-disable',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disable'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 配置 Amount 组件禁用。</p>\n',
        'en-US': '<p>You can disable the Amount component by using <code>disabled</code>. </p>\n'
      },
      codeFiles: ['amount-disable.vue']
    }
  ]
}
