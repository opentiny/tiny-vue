export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'allow-empty',
      'name': { 'zh-CN': '可清空特性', 'en-US': 'Clearable Feature' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>allow-empty</code> 属性设置计数器内容的可清空特性。默认为 <code>false</code>，表示不可清空。</p>\n',
        'en-US':
          '<p>You can use the <code>allow-empty</code> property to set the clearability of counter contents. The default value is <code>false</code>, indicating that the data cannot be cleared. </p>\n'
      },
      'codeFiles': ['allow-empty.vue']
    },
    {
      'demoId': 'about-step',
      'name': { 'zh-CN': '步长', 'en-US': 'Step' },
      'desc': {
        'zh-CN': '<p>可通过 <code>step</code> 属性设置计数器的步长。</p>\n',
        'en-US': '<p>You can set the step of the counter through the <code>step</code> attribute. </p>\n'
      },
      'codeFiles': ['about-step.vue']
    },
    {
      'demoId': 'max-min',
      'name': { 'zh-CN': '最值与数值循环', 'en-US': 'Numeric loop' },
      'desc': {
        'zh-CN':
          '<p>可通过设置 <code>max</code> 属性设置计数器允许的最大值，通过设置 <code>min</code> 属性设置计数器允许的最小值,通过设置 <code>circulate</code> 属性设置向上到达最大值后从最小值开始，或反过来。</p>\n',
        'en-US':
          '<p>You can set the maximum value allowed by the counter by setting the <code>max</code> attribute, and set the minimum value allowed by the counter by setting the <code>min</code> attribute. Set the <code>circulate</code> property to start from the minimum value after reaching the maximum value up, or vice versa. </p>\n'
      },
      'codeFiles': ['max-min.vue']
    },
    {
      'demoId': 'numeric-size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Dimension' },
      'desc': {
        'zh-CN': '<p>可通过 <code>size</code> 属性设置计数器尺寸。可取值 <code>medium / small / mini</code>。</p>\n',
        'en-US':
          '<p>You can set the counter size through the <code>size</code> attribute. The value can be <code>medium / small / mini</code>. </p>\n'
      },
      'codeFiles': ['numeric-size.vue']
    },
    {
      'demoId': 'controls',
      'name': { 'zh-CN': '控制按钮', 'en-US': 'Control Button' },
      'desc': {
        'zh-CN': '<p>可通过 <code>controls</code> 属性设置计数器是否有控制按钮。</p>\n',
        'en-US':
          '<p>You can set whether the counter has a control button through the <code>controls</code> attribute. </p>\n'
      },
      'codeFiles': ['controls.vue']
    },
    {
      'demoId': 'controls-position',
      'name': { 'zh-CN': '控制按钮显示位置', 'en-US': 'Control button display position' },
      'desc': {
        'zh-CN': '<p>可通过 <code>controls-position</code> 属性设置控制按钮显示的位置。</p>\n',
        'en-US':
          '<p>You can set the position of the control button through the <code>controls-position</code> attribute. </p>\n'
      },
      'codeFiles': ['controls-position.vue']
    },
    {
      'demoId': 'controls1',
      'name': { 'zh-CN': '关联文字', 'en-US': 'Associated Text' },
      'desc': {
        'zh-CN': '<p>可通过 <code>label</code> 属性设置输入框关联的 label 文字。</p>\n',
        'en-US':
          '<p>You can set the label text associated with the text box through the <code>label</code> attribute. </p>\n'
      },
      'codeFiles': ['controls.vue']
    },
    {
      'demoId': 'dynamic-disabled',
      'name': { 'zh-CN': 'disabled', 'en-US': 'disabled' },
      'desc': { 'zh-CN': '通过设置 disabled 控制是否禁用计数器', 'en-US': 'Disable the counter by setting disabled.' },
      'codeFiles': ['dynamic-disabled.vue']
    },
    {
      'demoId': 'controls2',
      'name': { 'zh-CN': 'name', 'en-US': 'name' },
      'desc': {
        'zh-CN': '<p>可通过 <code>name</code> 属性设置原生属性。</p>\n',
        'en-US': '<p>You can use the <code>name</code> attribute to set the native attribute. </p>\n'
      },
      'codeFiles': ['controls.vue']
    },
    {
      'demoId': 'precision',
      'name': { 'zh-CN': '数值精度', 'en-US': 'Numeric precision' },
      'desc': {
        'zh-CN': '<p>可通过 precision 属性设置计数器的精度值。</p>\n',
        'en-US': '<p>You can set the precision value of the counter through the precision attribute. </p>\n'
      },
      'codeFiles': ['precision.vue']
    },
    {
      'demoId': 'mouse-wheel',
      'name': { 'zh-CN': '鼠标滚轮滚动改变值', 'en-US': 'Mouse wheel scrolling change value' },
      'desc': {
        'zh-CN': '<p>可通过 <code>mouseWheel</code> 属性控制鼠标滚动滑轮是否能改变数值。</p>\n',
        'en-US':
          '<p>You can use the <code>mouseWheel</code> attribute to control whether the scroll wheel can change the value. </p>\n'
      },
      'codeFiles': ['mouse-wheel.vue']
    },
    {
      'demoId': 'focus-event',
      'name': { 'zh-CN': '聚焦事件', 'en-US': 'Focus Event' },
      'desc': {
        'zh-CN': '<p>输入框获得焦点时触发 <code>focus</code> 事件。</p>\n',
        'en-US': 'The <code>focus</code> event is triggered when the text box is focused. </p>\n'
      },
      'codeFiles': ['focus-event.vue']
    },
    {
      'demoId': 'blur-event',
      'name': { 'zh-CN': '失焦事件', 'en-US': 'Out of Focus Event' },
      'desc': {
        'zh-CN': '<p>输入框失去焦点时触发 <code>blur</code> 事件。</p>\n',
        'en-US': '<p>The <code>blur</code> event is triggered when the text box loses focus. </p>\n'
      },
      'codeFiles': ['blur-event.vue']
    },
    {
      'demoId': 'change-event',
      'name': { 'zh-CN': '值改变事件', 'en-US': 'Value change event' },
      'desc': {
        'zh-CN': '<p>输入框值被改变时触发 <code>change</code> 事件。</p>\n',
        'en-US': 'The <code>change</code> event is triggered when the value of the text box is changed. </p>\n'
      },
      'codeFiles': ['change-event.vue']
    },
    {
      'demoId': 'unit',
      'name': { 'zh-CN': '单位', 'en-US': 'The price is automatically calculated based on the product quantity.' },
      'desc': {
        'zh-CN': '<p>可通过 <code>unit</code> 属性设置计数器的单位，在设置单位时，控制按钮将不可用。</p>\n',
        'en-US': '<p>The price is automatically calculated based on the product quantity. </p>\n'
      },
      'codeFiles': ['unit.vue']
    },
    {
      'demoId': 'calculate-according-to-num-of-goods',
      'name': { 'zh-CN': '根据商品数量自动计算价格', 'en-US': '' },
      'desc': { 'zh-CN': '<p>根据商品数量自动计算价格。</p>\n', 'en-US': '' },
      'codeFiles': ['calculate-according-to-num-of-goods.vue']
    }
  ],
  apis: [
    {
      'name': 'numeric',
      'type': 'component',
      'properties': [
        {
          'name': 'circulate',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '向上到达最大值后从最小值开始，或反过来',
            'en-US': 'When the maximum value is reached, start from the minimum value or vice versa.'
          },
          'demoId': 'max-min'
        },
        {
          'name': 'mouse-wheel',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '设置鼠标滚动滑轮是否改变数值',
            'en-US': 'Sets whether to change the value of the scroll wheel.'
          },
          'demoId': 'mouse-wheel'
        },
        {
          'name': 'v-model',
          'type': 'number',
          'defaultValue': '该属性的默认值为 0',
          'desc': {
            'zh-CN': '设置输入组件的默认值，默认为 0。',
            'en-US': 'Set the default value of the input component. The default value is 0.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'min',
          'type': 'number',
          'defaultValue': '该属性的默认值为 -Infinity',
          'desc': {
            'zh-CN': '规定组件可输入的最小数值，来创建合法值的范围，支持整数和小数。;设置计数器允许的最小值',
            'en-US':
              'Specify the minimum value that can be entered for a component to create a valid value range. Integers and decimals are supported. ;Set the minimum allowed value of the counter'
          },
          'demoId': 'max-min'
        },
        {
          'name': 'max',
          'type': 'number',
          'defaultValue': '该属性的默认值为 Infinity',
          'desc': {
            'zh-CN': '规定组件可输入的最大数值，来创建合法值的范围，支持整数和小数。;设置计数器允许的最大值',
            'en-US':
              'Maximum value that can be entered in a component to create a valid value range. Integers and decimals are supported. ;Set the maximum allowed value of the counter'
          },
          'demoId': 'max-min'
        },
        {
          'name': 'step',
          'type': 'number',
          'defaultValue': '该属性的默认值为 1',
          'desc': {
            'zh-CN': '设置按上下方向键或点击上下按钮增减的数值，默认步长为 1。',
            'en-US':
              'Set the value to be increased or decreased by pressing the up and down arrow keys or clicking the up and down buttons. The default step is 1.'
          },
          'demoId': 'about-step'
        },
        {
          'name': 'step-strictly',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否只能输入 step 的倍数', 'en-US': 'Whether to enter only multiples of step' },
          'demoId': 'about-step'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '计数器尺寸;该属性的可选值为 medium / small / mini',
            'en-US': 'Counter size; The optional values of this attribute are medium / small / mini'
          },
          'demoId': 'numeric-size'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否禁用计数器', 'en-US': 'Whether to disable the counter' },
          'demoId': 'dynamic-disabled'
        },
        {
          'name': 'controls',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否使用控制按钮', 'en-US': 'Whether to use the control button' },
          'demoId': 'controls'
        },
        {
          'name': 'controls-position',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '控制按钮位置;该属性的可选值为 right',
            'en-US': 'Control button position; The optional value of this attribute is right'
          },
          'demoId': 'controls'
        },
        {
          'name': 'name',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '原生属性', 'en-US': 'Native attribute' },
          'demoId': 'controls2'
        },
        {
          'name': 'label',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框关联的label文字', 'en-US': 'Label text associated with the text box' },
          'demoId': 'controls'
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置输入框内的提示占位文本 。', 'en-US': 'Set the placeholder text in the text box.' },
          'demoId': 'calculate-according-to-num-of-goods'
        },
        {
          'name': 'precision',
          'type': 'number',
          'defaultValue': '',
          'desc': { 'zh-CN': '数值精度', 'en-US': 'Numeric precision' },
          'demoId': 'precision'
        },
        {
          'name': 'format',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "数字格式化置项，可配置如下字段：;{\n fraction: 4, // 保留小数位数\n rounding: 0, // 舍入点，0-9之间的数字，如配置为7时则为6舍7入，默认为5（四舍五入）;配置为0或>9将会进行截取\n prefix: '$', // 前置标识\n groupSize: 3, // 整数部分分组间隔，即第一个分组位数\n secondaryGroupSize: 2, // 整数部分第二级分组间隔，不设置或为0时 自动取groupSize\n groupSeparator: ',', // 整数部分分组分隔符\n decimalSeparator: '.', // 小数点符号\n fractionGroupSize: 0, // 小数部分分组间隔\n fractionGroupSeparator: ' ', // 小数分组分隔符\n suffix: '@' // 后置标识\n }",
            'en-US':
              "Number formatting configuration item. The following fields can be configured:; {\n fraction: 4, //Retain the number of decimal places. \n rounding: 0, //Round the number between 0 and 9. For example, if this parameter is set to 7, the value is rounded off to 6. The default value is 5 (rounded off). If this parameter is set to 0 or greater than 9, truncation is performed. \n prefix: '$', //Prefix identifier. \n groupSize: 3, //Integer part grouping interval, that is, the number of bits of the first grouping. \n secondaryGroupSize: 2, //Integer part second-level grouping interval. If this parameter is not set or is set to 0, the value of groupSize is automatically used. \n groupSeparator: ',', //Integer part grouping separator. \n decimalSeparator:' ', / / Decimal point symbol \n fractionGroupSize: 0, // Decimal part grouping interval \n fractionGroupSeparator: '', / / Decimal grouping separator \n suffix: '@' / / Post identifier \n}"
          },
          'demoId': ''
        },
        {
          'name': 'allow-empty',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false，表示不可清空',
          'desc': { 'zh-CN': '计数器内容的可清空', 'en-US': 'The counter can be cleared.' },
          'demoId': 'allow-empty'
        },
        {
          'name': 'unit',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置计数器的单位。在设置单位时，控制按钮将不可用。', 'en-US': '' },
          'demoId': 'unit'
        }
      ],
      'events': [
        {
          'name': 'focus',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '设置组件获得焦点时触发的回调函数。;onFocus(arg1){\n// arg1 =  event // do something you want... }',
            'en-US':
              'Sets the callback function triggered when a component obtains the focus.; onFocus(arg1){\n// arg1 = event // do something you want...}'
          },
          'demoId': 'focus-event'
        },
        {
          'name': 'blur',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '设置组件失去焦点时触发的回调函数。;onBlur(arg1){\n// arg1 = event  arg1为event对象\n// do something you want...}',
            'en-US':
              'Sets the callback function triggered when a component loses focus. ; onBlur(arg1){\n// arg1 = event arg1 is an event object.\n// do something you want...}'
          },
          'demoId': 'blur-event'
        },
        {
          'name': 'change',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '设置组件的值变化时触发的回调函数。;onChange(arg1, arg2){\n// arg1 =  newVal/\n/arg2 =  oldVal\n// do something you want...}',
            'en-US':
              'Sets the callback function triggered when the value of a component changes.; onChange(arg1, arg2){\n// arg1 = newVal/\n/arg2 = oldVal\n// do something you want...}'
          },
          'demoId': 'change-event'
        }
      ],
      'slots': []
    }
  ]
}
