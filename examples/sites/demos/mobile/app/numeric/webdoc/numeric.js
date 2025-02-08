export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'numeric',
      type: 'component',
      props: [
        {
          name: 'circulate',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '向上到达最大值后，是否从最小值开始，或反过来',
            'en-US': 'When the maximum value is reached, start from the minimum value, or vice versa'
          },
          demoId: 'circulate'
        },
        {
          name: 'controls',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否使用加减按钮',
            'en-US': 'Whether to use the control button'
          },
          demoId: 'controls'
        },
        {
          name: 'controls-position',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '加减按钮位置，可选值为 right，表示加减按钮均位于最右侧',
            'en-US': 'Control button position; The optional value of this attribute is right'
          },
          demoId: 'controls-position'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '禁用',
            'en-US': 'Whether to disable the counter'
          },
          demoId: ''
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '组件 arial-label 属性取值',
            'en-US': 'The value of arial-label attribute'
          },
          demoId: ''
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
          demoId: 'max'
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
          demoId: 'max'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '输入框内的提示占位文本',
            'en-US': 'Set the placeholder text in the text box'
          },
          demoId: 'placeholder'
        },
        {
          name: 'precision',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '数值精度',
            'en-US': 'Numeric precision'
          },
          demoId: 'precision'
        },
        {
          name: 'step',
          type: 'number | string | IStepStrategy',
          typeAnchorName: 'IStepStrategy',
          defaultValue: '1',
          meta: {
            stable: '3.20.0'
          },
          desc: {
            'zh-CN': '步长',
            'en-US': 'Increment or decrement value each time'
          },
          demoId: 'step'
        },
        {
          name: 'step-strictly',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否只能输入 step 的倍数',
            'en-US': 'Whether to enter only multiples of step'
          },
          demoId: 'step'
        },
        {
          name: 'change-compat',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置除加减按钮及直接输入数值之外，值改变后是否触发change事件',
            'en-US':
              'Set whether to trigger the change event after the value is changed, except for the plus and minus buttons and direct input of values.'
          }
        },
        {
          name: 'string-mode',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '使用字符串模式，精度超过JS限制时使用',
            'en-US': ''
          }
        },
        {
          name: 'value',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '<p>设置输入组件的默认值，该属性默认为 0。</p>',
            'en-US': 'display different button'
          },
          demoId: ''
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
          demoId: 'event'
        },
        {
          name: 'change',
          type: '(newVal: number | undefined, oldVal: number | undefined) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '组件的值变化时触发的回调函数',
            'en-US': 'The callback function triggered when the value of a component changes'
          },
          demoId: 'event'
        },
        {
          name: 'focus',
          type: '(event: FocusEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '组件获得焦点时触发的回调函数',
            'en-US': 'The callback function triggered when a component obtains the focus'
          },
          demoId: 'event'
        }
      ],
      methods: [],
      slots: []
    }
  ],
  demos: [
    {
      demoId: 'automatic-price',
      name: {
        'zh-CN': '根据商品数量自动计算价格',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>根据商品数量自动计算价格</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['automatic-price.vue']
    },
    {
      demoId: 'circulate',
      name: {
        'zh-CN': '是否循环',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>是否循环</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['circulate.vue']
    },
    {
      demoId: 'controls-position',
      name: {
        'zh-CN': '控制按钮显示位置',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>控制按钮显示位置</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['controls-position.vue']
    },
    {
      demoId: 'controls',
      name: {
        'zh-CN': '控制按钮',
        'en-US': 'controls'
      },
      desc: {
        'zh-CN': '<p>控制按钮</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['controls.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件',
        'en-US': 'event'
      },
      desc: {
        'zh-CN': '<p>事件</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['event.vue']
    },
    {
      demoId: 'max',
      name: {
        'zh-CN': '最大值最小值',
        'en-US': 'max'
      },
      desc: {
        'zh-CN': '<p>最大值最小值</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['max.vue']
    },
    {
      demoId: 'placeholder',
      name: {
        'zh-CN': '占位文本',
        'en-US': 'placeholder'
      },
      desc: {
        'zh-CN': '<p>通过<code>placeholder</code>属性设置输入框占位文本。</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['placeholder.vue']
    },
    {
      demoId: 'precision',
      name: {
        'zh-CN': '数值精度',
        'en-US': 'precision'
      },
      desc: {
        'zh-CN': '<p>数值精度</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['precision.vue']
    },
    {
      demoId: 'step',
      name: {
        'zh-CN': '步长',
        'en-US': 'step'
      },
      desc: {
        'zh-CN': '<p>步长</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['step.vue']
    }
  ],
  types: [
    {
      name: 'IStepStrategy',
      type: 'interface',
      code: `
interface IStepStrategy {
  value: number | string, // 5 或者 '5'
  mode: 'strictly' | 'restore'
}
      `
    }
  ]
}
