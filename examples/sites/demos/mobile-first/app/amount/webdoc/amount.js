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
      demoId: 'date-allow-empty',
      name: {
        'zh-CN': '允许日期为空',
        'en-US': 'Set Date'
      },
      desc: {
        'zh-CN':
          '为了避免 <code>date</code> 属性初始值为空值时，日期框不显示的问题，可通过 <code>date-allow-empty</code> 属性允许<code>date</code> 为空值时，日期框也能显示。',
        'en-US':
          '<p>After the date is set through the <code>date</code> attribute, the date box is displayed in the amount component. The value can be of the string or Date() type. \n Obtain the changed value through <code>change</code>. </p>\n'
      },
      codeFiles: ['date-allow-empty.vue']
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
      demoId: 'format',
      name: {
        'zh-CN': '格式化',
        'en-US': 'Amount Setting'
      },
      desc: {
        'zh-CN': '通过 <code>format</code> 属性可设置金额的展示与精度等。',
        'en-US':
          '<p>Set the <code>digits</code> attribute to specify the number of decimal places of the amount. The default value is 2. Set the <code>max-len</code> attribute to specify the maximum length of an integer. The default value is 15. </p>\n'
      },
      codeFiles: ['format.vue']
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
    },
    {
      demoId: 'hide-currency',
      name: {
        'zh-CN': '隐藏币种',
        'en-US': 'Disable'
      },
      desc: {
        'zh-CN': '通过 `hide-currency` 属性可设置隐藏币种。该属性默认为 `false`。',
        'en-US': '<p>You can disable the Amount component by using <code>disabled</code>. </p>\n'
      },
      codeFiles: ['hide-currency.vue']
    },
    {
      demoId: 'hide-icon',
      name: {
        'zh-CN': '隐藏金额图标',
        'en-US': 'Disable'
      },
      desc: {
        'zh-CN': '通过 `hide-icon` 属性可设置隐藏金额图标。该属性默认为 `false`。',
        'en-US': '<p>You can disable the Amount component by using <code>disabled</code>. </p>\n'
      },
      codeFiles: ['hide-icon.vue']
    },
    {
      demoId: 'negative',
      name: {
        'zh-CN': '支持负值',
        'en-US': 'Disable'
      },
      desc: {
        'zh-CN': '设置 `negative` 属性可指定金额是否支持负值。类型为 `Boolean` 。默认为 `true`，表示支持负值。',
        'en-US': '<p>You can disable the Amount component by using <code>disabled</code>. </p>\n'
      },
      codeFiles: ['negative.vue']
    },
    {
      demoId: 'num-allow-empty',
      name: {
        'zh-CN': '可清空输入',
        'en-US': 'Disable'
      },
      desc: {
        'zh-CN':
          '可通过 `num-allow-empty` 属性设置金额组件内容的可清空特性。默认为 `false`，表示不可清空。 不可清空时，当输入值为空或清空内容区时，传入值为 0',
        'en-US': '<p>You can disable the Amount component by using <code>disabled</code>. </p>\n'
      },
      codeFiles: ['num-allow-empty.vue']
    },
    {
      demoId: 'hold-zero',
      name: {
        'zh-CN': '精度细化',
        'en-US': 'Disable'
      },
      desc: {
        'zh-CN':
          '通过设置`hold-zero`属性实现精度细化，默认为 true，当为 false 时， 输入框获得焦点时的显示与 v-model 绑定的值会去掉格式化后多于的 0 字附，如 0.100 显示 为 0.1',
        'en-US': '<p>You can disable the Amount component by using <code>disabled</code>. </p>\n'
      },
      codeFiles: ['hold-zero.vue']
    },
    {
      demoId: 'display-only',
      name: {
        'zh-CN': '只读',
        'en-US': 'Disable'
      },
      desc: {
        'zh-CN': '通过设置`display-only`属性实现只读状态',
        'en-US': '<p>You can disable the Amount component by using <code>disabled</code>. </p>\n'
      },
      codeFiles: ['display-only.vue']
    },
    {
      demoId: 'pop-up',
      name: {
        'zh-CN': '隐藏币种转换弹窗',
        'en-US': 'Disable'
      },
      desc: {
        'zh-CN': '通过设置`pop-up`属性实现币种转换弹窗隐藏，默认值为`true`',
        'en-US': '<p>You can disable the Amount component by using <code>disabled</code>. </p>\n'
      },
      codeFiles: ['pop-up.vue']
    },
    {
      demoId: 'string-mode',
      name: {
        'zh-CN': '高精度',
        'en-US': 'Disable'
      },
      desc: {
        'zh-CN':
          '当 JS 默认的 Number 不满足数字的长度与精度需求时，可以打开 string-mode 开关，同时绑定的数据传入字符串格式\n        :::tip 提示\n        由于 IE 不支持 BigInt 类型数据，在配置 string-mode 为 true 时，高精度的数据在 IE 下点击加减按钮不能正常响应，需要将 [bignumber.js](https://github.com/MikeMcl/bignumber.js/) 以插件方式传给 plugin 参数\n        :::',
        'en-US': '<p>You can disable the Amount component by using <code>disabled</code>. </p>\n'
      },
      codeFiles: ['string-mode.vue']
    },
    {
      demoId: 'filter',
      name: {
        'zh-CN': '过滤器模式',
        'en-US': 'Disable'
      },
      desc: {
        'zh-CN':
          '通过 `shape="filter"` 切换至过滤器模式。 过滤器模式下可传入 `label` 显示标题，`tip` 显示提示信息，`clearable` 是否显示清除按钮，默认值为`true`。',
        'en-US': '<p>You can disable the Amount component by using <code>disabled</code>. </p>\n'
      },
      codeFiles: ['filter.vue']
    },
    {
      demoId: 'filter-box',
      name: {
        'zh-CN': '过滤器模式筛选框',
        'en-US': 'Disable'
      },
      desc: {
        'zh-CN': '通过`filter`属性展示筛选框。',
        'en-US': '<p>You can disable the Amount component by using <code>disabled</code>. </p>\n'
      },
      codeFiles: ['filter-box.vue']
    },
    {
      demoId: 'filter-event',
      name: {
        'zh-CN': '过滤器模式事件',
        'en-US': 'Disable'
      },
      desc: {
        'zh-CN': '过滤器模式下点击关闭图标，触发`clear`事件，通过点击筛选框触发`filter-change`事件',
        'en-US': '<p>You can disable the Amount component by using <code>disabled</code>. </p>\n'
      },
      codeFiles: ['filter-event.vue']
    }
  ]
}
