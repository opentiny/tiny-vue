export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'slider',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Disable'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'dynamic-disable',
          mobileDemo: 'dynamic-disable',
          mfDemo: ''
        },
        {
          name: 'format-label',
          type: 'Function(value)',
          defaultValue: '',
          desc: {
            'zh-CN': '格式化刻度值',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'format-tooltip',
          type: '(currentValue: number) => string',
          defaultValue: '',
          desc: {
            'zh-CN': '格式化 tooltip 提示',
            'en-US': 'Format tooltip message'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'show-tip',
          mobileDemo: 'format-tooltip',
          mfDemo: ''
        },
        {
          name: 'height',
          type: 'string',
          defaultValue: "'300px'",
          desc: {
            'zh-CN': 'Slider 组件的高度，当 vertical 为 true 时有效',
            'en-US': 'Height of Slider component, effective when vertical is true'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'vertical-mode',
          mfDemo: ''
        },
        {
          name: 'max',
          type: 'number',
          defaultValue: '100',
          desc: {
            'zh-CN': '设置最大值，必需是整数，可以负数，必需大于所设置的最小值',
            'en-US':
              'Set the maximum value. The value must be an integer and can be a negative number. The value must be greater than the minimum value set'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'max-min',
          mobileDemo: 'max-min',
          mfDemo: ''
        },
        {
          name: 'min',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '设置最小值',
            'en-US': 'Set the minimum value'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'max-min',
          mobileDemo: 'max-min',
          mfDemo: ''
        },
        {
          name: 'num-pages',
          type: 'number',
          defaultValue: '1',
          desc: {
            'zh-CN': '设置总步数，即按快捷键 PageDown/PageUp 时，每次移动的距离是 "⌈(max-min)/num-pages⌉"',
            'en-US':
              'Set the total number of steps. That is, when you press PageDown or PageUp, the moving distance is "⌈(max-min)/num-pages⌉".'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'shortcut-operation',
          mobileDemo: 'shortcut-operation',
          mfDemo: ''
        },
        {
          name: 'range',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否为范围选择</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'show-input',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示输入框，仅在非范围选择时有效',
            'en-US': 'Indicates whether to display the text box. This parameter is valid only for non-range selection'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'show-input',
          mobileDemo: 'show-input',
          mfDemo: ''
        },
        {
          name: 'show-label',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '显示 Label，需结合show-steps一起使用',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-steps',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '显示刻度，需结合 step 一起使用，最前与最后的刻度默认不显示',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-tip',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示 tooltip',
            'en-US': 'Whether to display tooltip'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'show-tip',
          mobileDemo: 'show-tip',
          mfDemo: ''
        },
        {
          name: 'step',
          type: 'number',
          defaultValue: '1',
          desc: {
            'zh-CN': '设置滑块移动时，每步位移距离，必需是大于0的正整数',
            'en-US':
              'Displacement distance of each step when the slider moves. The value must be a positive integer greater than 0'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'about-step',
          mobileDemo: 'about-step',
          mfDemo: ''
        },
        {
          name: 'unit',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '输入框后面显示的单位，仅在输入框模式下有效',
            'en-US': 'The units displayed after the input box, only valid in input box mode'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'show-input',
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'number | [number, number]',
          defaultValue: '',
          desc: {
            'zh-CN': '设置单滑块的当前值，必需是整数或数组',
            'en-US': 'Sets the current value of a single slider. The value must be an integer or an array.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'value',
          type: 'Number | Array',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置单滑块的当前值，必需是整数或数组。</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'vertical',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否竖向模式',
            'en-US': 'Whether the vertical mode is used'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'vertical-mode',
          mobileDemo: 'vertical-mode',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'change',
          type: '(value: number | [number, number]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）',
            'en-US':
              'Triggered when the value changes (When you drag the mouse, it is triggered only after you release the mouse).'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'slider-event',
          mobileDemo: 'slider-event-change',
          mfDemo: ''
        },
        {
          name: 'start',
          type: '(event: Event, value: number | [number, number]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '设置滑块滑动开始时，触发该事件',
            'en-US': 'This event is triggered when the slider starts to slide.'
          },
          mode: ['pc', 'mobile'],
          pcDemo: 'slider-event',
          mobileDemo: 'slider-event-start'
        },
        {
          name: 'Start',
          type: 'Function(arg)',
          defaultValue: '',
          desc: {
            'zh-CN': '设置滑块滑动开始时，触发该事件',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'stop',
          type: '(value: number | [number, number]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '设置滑块滑动结束时，触发该事件',
            'en-US': 'This event is triggered when the slider sliding ends. '
          },
          mode: ['pc', 'mobile'],
          pcDemo: 'slider-event',
          mobileDemo: 'slider-event-stop'
        },
        {
          name: 'Stop',
          type: 'Function(arg)',
          defaultValue: '',
          desc: {
            'zh-CN': '设置滑块滑动结束时，触发该事件',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '显示滑块值的插槽，仅仅 v-model 是单数值时才有效，插槽参数为：slotArg: { slotScope: number }',
            'en-US':
              'Slot for displaying slider values, valid only if v-model is a single value. Slot parameters are: slotArg: {slotScope: number}'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'slider-slot',
          mobileDemo: '',
          mfDemo: ''
        }
      ]
    }
  ]
}
