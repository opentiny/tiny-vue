export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example ' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'set-date',
      'name': { 'zh-CN': '设置日期', 'en-US': 'Set Date' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>date</code> 属性设置日期后，将会在金额组件中显示日期框。值可设置为 String 或者 Date() 类型。\n通过 <code>change</code> 获取改变后的值。</p>\n',
        'en-US':
          '<p>After the date is set through the <code>date</code> attribute, the date box is displayed in the amount component. The value can be of the String or Date() type. \n Obtain the changed value through <code>change</code>. </p>\n'
      },
      'codeFiles': ['set-date.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '编辑框大小', 'en-US': 'editing box size' },
      'desc': {
        'zh-CN': '<p>可选择的类型：<code>medium</code>，<code>small</code>，<code>mini</code></p>\n',
        'en-US': '<p>The options are as follows:<code>medium</code>,<code>small</code>, <code>mini</code></p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'custom-currency',
      'name': { 'zh-CN': '指定币种', 'en-US': 'Specified Currency' },
      'desc': {
        'zh-CN':
          '<p>默认显示币种为 CNY，可通过 <code>currency</code> 指定需要的币种，若指定的币种在返回的服务数据中不存在，则币种下拉框将不显示该币种。</p>\n',
        'en-US':
          '<p>The default currency is CNY. You can use <code>currency</code> to specify the currency. If the specified currency does not exist in the returned service data, the currency is not displayed in the Currency drop-down list box. </p>\n'
      },
      'codeFiles': ['custom-currency.vue']
    },
    {
      'demoId': 'digits-maxlen',
      'name': { 'zh-CN': '金额设置', 'en-US': 'Amount Setting' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>digits</code> 属性可指定金额小数位数，默认为 2 位。设置 <code>max-len</code> 属性指定整数位最大可输入长度，默认为 15 位。</p>\n',
        'en-US':
          '<p>Set the <code>digits</code> attribute to specify the number of decimal places of the amount. The default value is 2. Set the <code>max-len</code> attribute to specify the maximum length of an integer. The default value is 15. </p>\n'
      },
      'codeFiles': ['digits-maxlen.vue']
    },
    {
      'demoId': 'custom-service',
      'name': { 'zh-CN': '自定义服务', 'en-US': 'Custom Service ' },
      'desc': {
        'zh-CN':
          '<p><code>fetchCurrency</code> 指定自定义服务，<code>fields</code> 可指定显示字段和值设置在服务数据中的字段映射。</p>\n',
        'en-US':
          '<p><code>fetchCurrency</code> specifies the custom service. <code>fields</code> can specify the field mapping of the display field and value settings in the service data. </p>\n'
      },
      'codeFiles': ['custom-service.vue']
    },
    {
      'demoId': 'amount-disable',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disable' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 配置 Amount 组件禁用。</p>\n',
        'en-US': '<p>You can disable the Amount component by using <code>disabled</code>. </p>\n'
      },
      'codeFiles': ['amount-disable.vue']
    }
  ],
  apis: [
    {
      'name': 'amount',
      'type': 'component',
      'properties': [
        {
          'name': 'placeholder',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '当数据为空时的占位符', 'en-US': 'Placeholder when data is empty' },
          'demoId': 'custom-service'
        },
        {
          'name': 'size',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置组件大小', 'en-US': 'Set the component size' },
          'demoId': 'size'
        },
        {
          'name': 'format',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "数字格式化置项，可配置如下字段：;{\n fraction: 4, // 保留小数位数\n rounding: 0, // 舍入点，0-9之间的数字，如配置为7时则为6舍7入，默认为5（四舍五入）;配置为0或>9将会进行截取\n prefix: '$', // 前置标识\n groupSize: 3, // 整数部分分组间隔，即第一个分组位数\n secondaryGroupSize: 2, // 整数部分第二级分组间隔，不设置或为0时 自动取groupSize\n groupSeparator: ',', // 整数部分分组分隔符\n decimalSeparator: '.', // 小数点符号\n fractionGroupSize: 0, // 小数部分分组间隔\n fractionGroupSeparator: ' ', // 小数分组分隔符\n suffix: '@' // 后置标识\n }",
            'en-US':
              "Number formatting configuration item. The following fields can be configured:; {\n fraction: 4, //Retain the number of decimal places. \n rounding: 0, //Round the number between 0 and 9. For example, if the value is set to 7, the value is rounded off to 6. The default value is 5 (rounded off). If this parameter is set to 0 or greater than 9, truncation is performed. \n prefix: '$', //Front identifier. \n groupSize: 3, //Integer part grouping interval, that is, the number of bits of the first grouping. \n secondaryGroupSize: 2, //Integer part second-level grouping interval. If this parameter is not set or is set to 0, the value of groupSize is automatically used. \n groupSeparator: ',', //Integer part grouping separator. \n decimalSeparator:' ', / / Decimal point symbol \n fractionGroupSize: 0, // Decimal part grouping interval \n fractionGroupSeparator: '', / / Decimal grouping separator \n suffix: '@' / / Post identifier \n}"
          },
          'demoId': ''
        },
        {
          'name': 'currency',
          'type': 'String',
          'defaultValue': '该属性的默认值为 CNY',
          'desc': { 'zh-CN': '', 'en-US': '' },
          'demoId': 'custom-currency'
        },
        {
          'name': 'digits',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 2',
          'desc': {
            'zh-CN': '设置小数点位数，默认为 2 位。',
            'en-US': 'Set the number of decimal places. The default value is two.'
          },
          'demoId': 'digits-maxlen'
        },
        {
          'name': 'date',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置弹出框内显示日期框。值可设置为 String 或者 Date() 类型。',
            'en-US':
              'Set the date box to be displayed in the pop-up box. The value can be of the String or Date() type.'
          },
          'demoId': 'set-date'
        },
        {
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '设置是否禁用，默认为 false。',
            'en-US': 'Whether to disable the function. The default value is false.'
          },
          'demoId': 'amount-disable'
        },
        {
          'name': 'max-len',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 15',
          'desc': {
            'zh-CN': '整数位最大长度，默认为 15 位。',
            'en-US': 'Maximum integer length. The default value is 15 characters.'
          },
          'demoId': 'digits-maxlen'
        },
        {
          'name': 'negative',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否可为负数，默认为 true ，可设为负数。',
            'en-US':
              'Indicates whether the value can be a negative number. The default value is true. The value can be a negative number.'
          },
          'demoId': ''
        },
        {
          'name': 'popper-class',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '为 popper 添加类名(可参考 popover 组件)',
            'en-US': 'Add a class name for the popper. For details, see the popover component.'
          },
          'demoId': ''
        },
        {
          'name': 'popper-append-to-body',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert the pop-up box to the body element. When a fault occurs in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
          },
          'demoId': ''
        },
        {
          'name': 'value',
          'type': 'String , Number',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置金额组件的值。', 'en-US': 'Set the value of the amount component.' },
          'demoId': 'digits-maxlen'
        },
        {
          'name': 'rounding',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '控制输入金额四舍五入。', 'en-US': 'Controls the rounding of the input amount.' },
          'demoId': 'digits-maxlen'
        },
        {
          'name': 'fetchCurrency',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义金额组件的请求服务接口，fetchCurrency返回一个Promise对象 ',
            'en-US':
              'Request service interface of the customized amount component. fetchCurrency returns a Promise object.'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'fields',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义金额组件数据映射，在没有使用框架服务时必填',
            'en-US':
              'Customized amount component data mapping. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'custom-service'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当组件的值发生变化时会触发该事件。',
            'en-US': 'This event is triggered when the value of a component changes.'
          },
          'demoId': 'set-date'
        }
      ],
      'slots': []
    }
  ]
}
