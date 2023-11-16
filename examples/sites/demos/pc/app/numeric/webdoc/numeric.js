export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '通过 <code>v-model</code> 属性绑定输入值，',
        'en-US': 'Bind input value through <code>v-model</code> attribute'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'max-min',
      'name': { 'zh-CN': '最值与数值循环', 'en-US': 'Extremum and loop' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>max</code> 属性设置计数器允许的最大值； <code>min</code> 属性设置计数器允许的最小值； <code>circulate</code> 属性设置向上到达最大值后从最小值开始，或反过来。</p>\n',
        'en-US':
          '<p>You can set the maximum value allowed by the counter by setting the <code>max</code> attribute, and set the minimum value allowed by the counter by setting the <code>min</code> attribute. Set the <code>circulate</code> property to start from the minimum value after reaching the maximum value up, or vice versa. </p>\n'
      },
      'codeFiles': ['max-min.vue']
    },
    {
      'demoId': 'about-step',
      'name': { 'zh-CN': '步长', 'en-US': 'Step' },
      'desc': {
        'zh-CN': '<p>通过 <code>step</code> 属性设置计数器的步长。</p>\n',
        'en-US': '<p>You can set the step of the counter through the <code>step</code> attribute. </p>\n'
      },
      'codeFiles': ['about-step.vue']
    },
    {
      'demoId': 'precision',
      'name': { 'zh-CN': '数值精度', 'en-US': 'Numeric precision' },
      'desc': {
        'zh-CN': '<p>通过 <code>precision</code> 属性设置计数器的精度值。</p>\n',
        'en-US': '<p>You can set the precision value of the counter through the precision attribute. </p>\n'
      },
      'codeFiles': ['precision.vue']
    },
    {
      'demoId': 'dynamic-disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 设置是否禁用计数器。</p>',
        'en-US': 'Disable the counter by setting disabled.'
      },
      'codeFiles': ['dynamic-disabled.vue']
    },
    {
      'demoId': 'allow-empty',
      'name': { 'zh-CN': '可清空', 'en-US': 'Clearable' },
      'desc': {
        'zh-CN':
          '通过 <code>allow-empty</code> 属性设置计数器内容的可清空特性，默认为 <code>false</code>，表示不可清空。',
        'en-US':
          '<p>You can use the <code>allow-empty</code> property to set the clearability of counter contents. The default value is <code>false</code>, indicating that the data cannot be cleared. </p>\n'
      },
      'codeFiles': ['allow-empty.vue']
    },
    {
      'demoId': 'numeric-size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Size' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>size</code> 属性设置计数器尺寸，可选值有 <code>medium</code> | <code>small</code> | <code>mini</code>。</p>\n',
        'en-US':
          '<p>You can set the counter size through the <code>size</code> attribute. The value can be <code>medium</code> | <code>small</code> | <code>mini</code>. </p>\n'
      },
      'codeFiles': ['numeric-size.vue']
    },
    {
      'demoId': 'controls',
      'name': { 'zh-CN': '加减按钮', 'en-US': 'Control Button' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>controls</code> 属性设置计数器是否显示加减按钮； <code>controls-position</code> 属性设置加减按钮显示的位置。加减按钮默认分列两侧显示。</p>\n',
        'en-US':
          '<p>You can set whether the counter has a control button through the <code>controls</code> attribute. </p>\n'
      },
      'codeFiles': ['controls.vue']
    },
    {
      'demoId': 'mouse-wheel',
      'name': { 'zh-CN': '鼠标滚轮滚动改变值', 'en-US': 'Mouse wheel scrolling change value' },
      'desc': {
        'zh-CN': '<p>通过 <code>mouse-wheel</code> 属性控制鼠标滚动滑轮时是否改变数值。</p>\n',
        'en-US':
          '<p>You can use the <code>mouseWheel</code> attribute to control whether the scroll wheel can change the value. </p>\n'
      },
      'codeFiles': ['mouse-wheel.vue']
    },
    {
      'demoId': 'unit',
      'name': { 'zh-CN': '单位', 'en-US': 'Unit' },
      'desc': {
        'zh-CN': '<p>通过 <code>unit</code> 属性设置计数器的单位，设置单位后，加减按钮将不可用。</p>\n',
        'en-US':
          '<p>Set the unit of the counter by using the "unit" property. After setting the unit, the increase and decrease buttons will be disabled.</p>\n'
      },
      'codeFiles': ['unit.vue']
    },
    {
      'demoId': 'change-event',
      'name': { 'zh-CN': '值改变事件', 'en-US': 'Value change event' },
      'desc': {
        'zh-CN': '<p> 通过 <code>change</code> 监听数值改变事件。</p>\n',
        'en-US': 'The <code>change</code> event is triggered when the value of the text box is changed. </p>\n'
      },
      'codeFiles': ['change-event.vue']
    },
    {
      'demoId': 'focus-event',
      'name': { 'zh-CN': '聚焦事件', 'en-US': 'Focus Event' },
      'desc': {
        'zh-CN': '<p>通过 <code>focus</code> 监听输入框获得焦点事件。</p>\n',
        'en-US': 'The <code>focus</code> event is triggered when the text box is focused. </p>\n'
      },
      'codeFiles': ['focus-event.vue']
    },
    {
      'demoId': 'blur-event',
      'name': { 'zh-CN': '失焦事件', 'en-US': 'Out of Focus Event' },
      'desc': {
        'zh-CN': '<p>通过 <code>blur</code> 监听输入框失去焦点事件。</p>\n',
        'en-US': '<p>The <code>blur</code> event is triggered when the text box loses focus. </p>\n'
      },
      'codeFiles': ['blur-event.vue']
    }
  ],
  apis: [
    {
      'name': 'numeric',
      'type': 'component',
      'properties': [
        {
          'name': 'allow-empty',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '内容可清空',
            'en-US': 'The counter can be cleared.'
          },
          'demoId': 'allow-empty'
        },
        {
          'name': 'circulate',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '向上到达最大值后，是否从最小值开始，或反过来',
            'en-US': 'When the maximum value is reached, start from the minimum value, or vice versa.'
          },
          'demoId': 'max-min'
        },
        {
          'name': 'controls',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否使用加减按钮',
            'en-US': 'Whether to use the control button'
          },
          'demoId': 'controls'
        },
        {
          'name': 'controls-position',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '加减按钮位置，可选值为 <code>right</code>，表示加减按钮均位于最右侧',
            'en-US': 'Control button position; The optional value of this attribute is right'
          },
          'demoId': 'controls'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '禁用',
            'en-US': 'Whether to disable the counter'
          },
          'demoId': 'dynamic-disabled'
        },
        {
          'name': 'format',
          'type': 'INumericFormat',
          'typeAnchorName': 'INumericFormat',
          'defaultValue': '--',
          'desc': {
            'zh-CN': "数字格式化置项，具体配置参考<a href='#INumericFormat'>属性说明</a>",
            'en-US':
              "For the specific configuration of the digital formatting entry, refer to the <a href='#INumericFormat'>property description</a>"
          },
          'demoId': ''
        },
        {
          'name': 'label',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '组件<code>arial-label</code>属性取值',
            'en-US': 'The value of <code>arial-label</code> attribute'
          },
          'demoId': ''
        },
        {
          'name': 'max',
          'type': 'number',
          'defaultValue': 'Infinity',
          'desc': {
            'zh-CN': '规定组件可输入的最大数值，指定合法值的范围，支持整数和小数',
            'en-US':
              'Maximum value that can be entered in a component to create a valid value range. Integers and decimals are supported'
          },
          'demoId': 'max-min'
        },
        {
          'name': 'min',
          'type': 'number',
          'defaultValue': '-Infinity',
          'desc': {
            'zh-CN': '规定组件可输入的最小数值，指定合法值的范围，支持整数和小数',
            'en-US':
              'Specify the minimum value that can be entered for a component to create a valid value range. Integers and decimals are supported'
          },
          'demoId': 'max-min'
        },
        {
          'name': 'mouse-wheel',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '鼠标滚动滑轮是否改变数值',
            'en-US': 'Whether to change the value of the scroll wheel.'
          },
          'demoId': 'mouse-wheel'
        },
        {
          'name': 'name',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '原生属性',
            'en-US': 'Native attribute'
          },
          'demoId': ''
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': "''",
          'desc': {
            'zh-CN': '输入框内的提示占位文本',
            'en-US': 'Set the placeholder text in the text box'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'precision',
          'type': 'number',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '数值精度',
            'en-US': 'Numeric precision'
          },
          'demoId': 'precision'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '计数器尺寸，该属性的可选值为 medium | small | mini',
            'en-US': 'Counter size.The optional values of this attribute are medium | small | mini'
          },
          'demoId': 'numeric-size'
        },
        {
          'name': 'step',
          'type': 'number',
          'defaultValue': '1',
          'desc': {
            'zh-CN': '步长',
            'en-US': 'Increment or decrement value each time'
          },
          'demoId': 'about-step'
        },
        {
          'name': 'step-strictly',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否只能输入 <code>step</code> 的倍数',
            'en-US': 'Whether to enter only multiples of step'
          },
          'demoId': ''
        },
        {
          'name': 'unit',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '数值的单位。在设置单位时，加减按钮将不可用。',
            'en-US': 'Unit of measurement. When setting the unit, the increase and decrease buttons will be disabled'
          },
          'demoId': 'unit'
        },
        {
          'name': 'v-model',
          'type': 'number',
          'defaultValue': '0',
          'desc': {
            'zh-CN': '设置输入组件的默认值，默认为 0。',
            'en-US': 'Set the default value of the input component. The default value is 0.'
          },
          'demoId': 'basic-usage'
        }
      ],
      'events': [
        {
          'name': 'blur',
          'type': '(event: FocusEvent) => void',
          'desc': {
            'zh-CN': '组件失去焦点时触发的回调函数',
            'en-US': 'The callback function triggered when a component loses focus'
          },
          'demoId': 'blur-event'
        },
        {
          'name': 'change',
          'type': '(newVal: number | undefined, oldVal: number | undefined) => void',
          'desc': {
            'zh-CN': '组件的值变化时触发的回调函数',
            'en-US': 'The callback function triggered when the value of a component changes'
          },
          'demoId': 'change-event'
        },
        {
          'name': 'focus',
          'type': '(event: FocusEvent) => void',
          'desc': {
            'zh-CN': '组件获得焦点时触发的回调函数',
            'en-US': 'The callback function triggered when a component obtains the focus'
          },
          'demoId': 'focus-event'
        }
      ],
      'slots': []
    }
  ],
  types: [
    {
      name: 'INumericFormat',
      type: 'interface',
      code: `
interface INumericFormat {
  fraction: 4, // 保留小数位数
  rounding: 0, // 舍入点，0-9之间的数字，如配置为7时则为6舍7入，默认为5（四舍五入）;配置为0或>9将会进行截取
  prefix: '$', // 前置标识
  groupSize: 3, // 整数部分分组间隔，即第一个分组位数
  secondaryGroupSize: 2, // 整数部分第二级分组间隔，不设置或为0时 自动取groupSize
  groupSeparator: ',', // 整数部分分组分隔符
  decimalSeparator: '.', // 小数点符号
  fractionGroupSize: 0, // 小数部分分组间隔
  fractionGroupSeparator: ' ', // 小数分组分隔符
  suffix: '@' // 后置标识
}
      `
    }
  ]
}
