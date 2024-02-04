export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'numeric',
      type: 'component',
      props: [
        {
          name: 'allow-empty',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '内容可清空',
            'en-US': 'The counter can be cleared'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'allow-empty',
          mfDemo: ''
        },
        {
          name: 'blank',
          type: 'string',
          defaultValue: 'true',
          desc: {
            'zh-CN': '过滤器背景设置为透明，默认值为true',
            'en-US': 'The filter background is set to transparent. The default value is true.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'filter-mode',
          mfDemo: ''
        },
        {
          name: 'circulate',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '向上到达最大值后，是否从最小值开始，或反过来',
            'en-US': 'When the maximum value is reached, start from the minimum value, or vice versa'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'max-min',
          mobileDemo: 'circulate',
          mfDemo: ''
        },
        {
          name: 'controls',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否使用加减按钮',
            'en-US': 'Whether to use the control button'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'controls',
          mobileDemo: 'controls',
          mfDemo: ''
        },
        {
          name: 'controls-position',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '加减按钮位置，可选值为 <code>right</code>，表示加减按钮均位于最右侧',
            'en-US': 'Control button position; The optional value of this attribute is right'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'controls',
          mobileDemo: 'controls-position',
          mfDemo: ''
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '禁用',
            'en-US': 'Whether to disable the counter'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'dynamic-disabled',
          mobileDemo: '',
          mfDemo: ''
        },
        {
          name: 'display-only',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置只读态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'format',
          typeAnchorName: 'INumericFormat',
          type: 'INumericFormat',
          defaultValue: '',
          desc: {
            'zh-CN': '数字格式化置项',
            'en-US':
              "For the specific configuration of the digital formatting entry, refer to the <a href='#INumericFormat'>property description</a>"
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'precision',
          mfDemo: ''
        },
        {
          name: 'hide-unit',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '隐藏单位',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'hold-zero',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '精度细化，默认值为 true ',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '组件<code>arial-label</code>属性取值',
            'en-US': 'The value of <code>arial-label</code> attribute'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: '',
          mobileDemo: '',
          mfDemo: ''
        },
        {
          name: 'max',
          type: 'number',
          defaultValue: 'Infinity',
          desc: {
            'zh-CN': '规定组件可输入的最大数值，指定合法值的范围，支持整数和小数',
            'en-US':
              'Maximum value that can be entered in a component to create a valid value range. Integers and decimals are supported'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'max-min',
          mobileDemo: 'max',
          mfDemo: ''
        },
        {
          name: 'min',
          type: 'number',
          defaultValue: '-Infinity',
          desc: {
            'zh-CN': '规定组件可输入的最小数值，指定合法值的范围，支持整数和小数',
            'en-US':
              'Specify the minimum value that can be entered for a component to create a valid value range. Integers and decimals are supported'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'max-min',
          mobileDemo: 'max',
          mfDemo: ''
        },
        {
          name: 'model-truncation',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '在配置了精度情况下，是否对v-model绑字值进行精度截取，配为false时，精度仅用来作展示',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'mouse-wheel',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '鼠标滚动滑轮是否改变数值',
            'en-US': 'Whether to change the value of the scroll wheel'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'mouse-wheel',
          mfDemo: ''
        },
        {
          name: 'name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '原生属性',
            'en-US': 'Native attribute'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '输入框内的提示占位文本',
            'en-US': 'Set the placeholder text in the text box'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'basic-usage',
          mobileDemo: 'placeholder',
          mfDemo: ''
        },
        {
          name: 'plugin',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '高精度的数据在IE下需要Bignumberjs兼容',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'precision',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '数值精度',
            'en-US': 'Numeric precision'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'precision',
          mobileDemo: 'precision',
          mfDemo: ''
        },
        {
          name: 'shape',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': "设置输入的shape='filter,切换至过滤器模式'",
            'en-US': "Set Input Shape = 'Filter'"
          },
          mode: ['pc'],
          pcDemo: 'filter-mode'
        },
        {
          name: 'show-left',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '设置左对齐',
            'en-US': 'Set Left Alignment'
          },
          mode: ['pc'],
          pcDemo: 'controls'
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '计数器尺寸，该属性的可选值为 medium | small | mini',
            'en-US': 'Counter size.The optional values of this attribute are medium | small | mini'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'numeric-size',
          mfDemo: ''
        },
        {
          name: 'step',
          type: 'number',
          defaultValue: '1',
          desc: {
            'zh-CN': '步长',
            'en-US': 'Increment or decrement value each time'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'about-step',
          mobileDemo: 'step',
          mfDemo: ''
        },
        {
          name: 'step-strictly',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否只能输入 <code>step</code> 的倍数',
            'en-US': 'Whether to enter only multiples of step'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: '',
          mobileDemo: 'step',
          mfDemo: ''
        },
        {
          name: 'strict-input',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '严格控制输入，包含合法性输入与小数点长度验证，不允许输入超过精度设置',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'string-mode',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '使用字符串模式，精度超过JS限制时使用',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'tabindex',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': 'Numeric组件的 tabindex ',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'unit',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '数值的单位。在设置单位时，加减按钮将不可用',
            'en-US': 'Unit of measurement. When setting the unit, the increase and decrease buttons will be disabled'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'unit',
          mfDemo: ''
        },
        {
          name: 'unit-center',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '配置unit属性后，设置输入框内的数字是否居中显示，默认值为 false',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '设置输入组件的默认值，默认为 0',
            'en-US': 'Set the default value of the input component. The default value is 0'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'validate-event',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '验证事件，默认值为true',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'value',
          type: 'Number',
          defaultValue: '0',
          desc: {
            'zh-CN': '<p>设置输入组件的默认值，该属性默认为 0。</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: ''
        }
      ],
      events: [
        {
          name: 'blur',
          type: '(event: FocusEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '组件失去焦点时触发的回调函数',
            'en-US': 'The callback function triggered when a component loses focus'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'blur-event',
          mobileDemo: 'event',
          mfDemo: ''
        },
        {
          name: 'change',
          type: '(newVal: number | undefined, oldVal: number | undefined) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '组件的值变化时触发的回调函数',
            'en-US': 'The callback function triggered when the value of a component changes'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'change-event',
          mobileDemo: 'event',
          mfDemo: ''
        },
        {
          name: 'filter-change',
          type: '(label) => void',
          desc: {
            'zh-CN': '选择过滤器面板值的回调函数',
            'en-US': 'Callback function for selecting filter panel values'
          },
          mode: ['pc'],
          pcDemo: 'filter-mode-change'
        },
        {
          name: 'focus',
          type: '(event: FocusEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '组件获得焦点时触发的回调函数',
            'en-US': 'The callback function triggered when a component obtains the focus'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'focus-event',
          mobileDemo: 'event',
          mfDemo: ''
        },
        {
          name: 'input',
          type: 'Function(value)',
          defaultValue: '',
          desc: {
            'zh-CN': '输入值时触发事件',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      methods: [],
      slots: []
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
  fractionGroupSeparator: '', // 小数分组分隔符
  suffix: '@' // 后置标识
}
      `
    }
  ]
}
