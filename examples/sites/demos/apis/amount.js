export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'amount',
      type: 'component',
      props: [
        {
          name: 'currency',
          type: 'string',
          defaultValue: '该属性的默认值为 CNY',
          desc: {
            'zh-CN': '',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-currency',
          mfDemo: 'custom-currency'
        },
        {
          name: 'date',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置弹出框内显示日期框。值可设置为 string 或者 Date() 类型。',
            'en-US':
              'Set the date box to be displayed in the pop-up box. The value can be of the string or Date() type.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'set-date',
          mfDemo: 'set-date'
        },
        {
          name: 'digits',
          type: 'number',
          defaultValue: '该属性的默认值为 2',
          desc: {
            'zh-CN': '设置小数点位数，默认为 2 位。',
            'en-US': 'Set the number of decimal places. The default value is two.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'digits-maxlen',
          mfDemo: 'digits-maxlen'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: '该属性的默认值为 false',
          desc: {
            'zh-CN': '设置是否禁用，默认为 false。',
            'en-US': 'Whether to disable the function. The default value is false.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'amount-disable',
          mfDemo: 'amount-disable'
        },
        {
          name: 'fetchCurrency',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义金额组件的请求服务接口，fetchCurrency返回一个Promise对象 ',
            'en-US':
              'Request service interface of the customized amount component. fetchCurrency returns a Promise object.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-service',
          mfDemo: 'custom-service'
        },
        {
          name: 'fields',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义金额组件数据映射，在没有使用框架服务时必填',
            'en-US':
              'Customized amount component data mapping. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-service',
          mfDemo: 'custom-service'
        },
        {
          name: 'format',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN':
              "数字格式化置项，可配置如下字段：;{\n fraction: 4, // 保留小数位数\n rounding: 0, // 舍入点，0-9之间的数字，如配置为7时则为6舍7入，默认为5（四舍五入）;配置为0或>9将会进行截取\n prefix: '$', // 前置标识\n groupSize: 3, // 整数部分分组间隔，即第一个分组位数\n secondaryGroupSize: 2, // 整数部分第二级分组间隔，不设置或为0时 自动取groupSize\n groupSeparator: ',', // 整数部分分组分隔符\n decimalSeparator: '.', // 小数点符号\n fractionGroupSize: 0, // 小数部分分组间隔\n fractionGroupSeparator: ' ', // 小数分组分隔符\n suffix: '@' // 后置标识\n }",
            'en-US':
              "Number formatting configuration item. The following fields can be configured:; {\n fraction: 4, //Retain the number of decimal places. \n rounding: 0, //Round the number between 0 and 9. For example, if the value is set to 7, the value is rounded off to 6. The default value is 5 (rounded off). If this parameter is set to 0 or greater than 9, truncation is performed. \n prefix: '$', //Front identifier. \n groupSize: 3, //Integer part grouping interval, that is, the number of bits of the first grouping. \n secondaryGroupSize: 2, //Integer part second-level grouping interval. If this parameter is not set or is set to 0, the value of groupSize is automatically used. \n groupSeparator: ',', //Integer part grouping separator. \n decimalSeparator:' ', / / Decimal point symbol \n fractionGroupSize: 0, // Decimal part grouping interval \n fractionGroupSeparator: '', / / Decimal grouping separator \n suffix: '@' / / Post identifier \n}"
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'max-len',
          type: 'number',
          defaultValue: '该属性的默认值为 15',
          desc: {
            'zh-CN': '整数位最大长度，默认为 15 位。',
            'en-US': 'Maximum integer length. The default value is 15 characters.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'digits-maxlen',
          mfDemo: 'digits-maxlen'
        },
        {
          name: 'negative',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否可为负数，默认为 true ，可设为负数。',
            'en-US':
              'Indicates whether the value can be a negative number. The default value is true. The value can be a negative number.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'num-allow-empty',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置数值允许为空',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '当数据为空时的占位符',
            'en-US': 'Placeholder when data is empty'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-service',
          mfDemo: 'custom-service'
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: '该属性的默认值为 true',
          desc: {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert the pop-up box to the body element. When a fault occurs in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '为 popper 添加类名(可参考 popover 组件)',
            'en-US': 'Add a class name for the popper. For details, see the popover component.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'rounding',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '控制输入金额四舍五入。',
            'en-US': 'Controls the rounding of the input amount.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'digits-maxlen',
          mfDemo: 'digits-maxlen'
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置组件大小',
            'en-US': 'Set the component size'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'size',
          mfDemo: 'size'
        },
        {
          name: 'value',
          type: 'string , number',
          defaultValue: '',
          desc: {
            'zh-CN': '设置金额组件的值。',
            'en-US': 'Set the value of the amount component.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'digits-maxlen',
          mfDemo: 'digits-maxlen'
        }
      ],
      events: [
        {
          name: 'change',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '当组件的值发生变化时会触发该事件。',
            'en-US': 'This event is triggered when the value of a component changes.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'set-date',
          mfDemo: 'set-date'
        }
      ],
      methods: [],
      slots: []
    }
  ]
}
