export default {
  column: '2',
  owner: '',
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
          mobileDemo: 'dynamic-disable'
        },
        {
          name: 'format-tooltip',
          type: '(currentValue: number) => string',
          defaultValue: '',
          desc: {
            'zh-CN': '格式化 tooltip 提示',
            'en-US': 'Format tooltip message'
          },
          mobileDemo: 'format-tooltip'
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
          mobileDemo: 'max-min'
        },
        {
          name: 'min',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '设置最小值',
            'en-US': 'Set the minimum value'
          },
          mobileDemo: 'max-min'
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
          mobileDemo: 'shortcut-operation'
        },
        {
          name: 'range',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否为范围选择</p>',
            'en-US': 'display different button'
          },
          mobileDemo: ''
        },
        {
          name: 'show-input',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示输入框',
            'en-US': 'Indicates whether to display the text box.'
          },
          mobileDemo: 'show-input'
        },
        {
          name: 'show-tip',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示 tooltip',
            'en-US': 'Whether to display tooltip'
          },
          mobileDemo: 'show-tip'
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
          mobileDemo: 'about-step'
        },
        {
          name: 'value',
          type: 'Number | Array',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置单滑块的当前值，必需是整数或数组。</p>',
            'en-US': 'display different button'
          },
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
          mobileDemo: 'vertical-mode'
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
          mobileDemo: 'slider-event-change'
        },
        {
          name: 'start',
          type: '(event: Event, value: number | [number, number]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '设置滑块滑动开始时，触发该事件',
            'en-US': 'This event is triggered when the slider starts to slide.'
          },
          mobileDemo: 'slider-event-start'
        },
        {
          name: 'stop',
          type: '(value: number | [number, number]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '设置滑块滑动结束时，触发该事件',
            'en-US': 'This event is triggered when the slider sliding ends. '
          },
          mobileDemo: 'slider-event-stop'
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
          mobileDemo: ''
        }
      ]
    }
  ],
  demos: [
    {
      demoId: 'about-step',
      name: {
        'zh-CN': '步长',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>step</code>来配置滑块滑动的步长</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['about-step.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>通过设置属性<code>disabled</code>,设置滑动滑块禁止滑动</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'max-min',
      name: {
        'zh-CN': '最大最小值',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>min max</code>来设置滑块取值范围</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['max-min.vue']
    },
    {
      demoId: 'range-select',
      name: {
        'zh-CN': '范围选择',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过<code>v-model</code>为数组 设定初始范围选择</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['range-select.vue']
    },
    {
      demoId: 'shortcut-operation',
      name: {
        'zh-CN': '总步数',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过<code>num-pages</code>属性设置总步数，即按快捷键 PageDown/PageUp 时，每次移动的距离是(最大值-最小值)/分页数。</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['shortcut-operation.vue']
    },
    {
      demoId: 'format-tooltip',
      name: {
        'zh-CN': '总步数',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过<code>format-tooltip</code>属性设置 value。</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['format-tooltip.vue']
    },
    {
      demoId: 'show-input',
      name: {
        'zh-CN': '输入框模式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过配置<code>show-input<code>开启滑块输入框模式</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-input.vue']
    },
    {
      demoId: 'show-tip',
      name: {
        'zh-CN': '提示',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过设定<code>show-tip="false"</code>，关闭滑块提示。(默认开启)</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-tip.vue']
    },
    {
      demoId: 'slider-event-change',
      name: {
        'zh-CN': '事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><code>change</code>事件</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slider-event-change.vue']
    },
    {
      demoId: 'slider-event-start',
      name: {
        'zh-CN': '事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><code>start</code>滑块开始滑动事件</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slider-event-start.vue']
    },
    {
      demoId: 'slider-event-stop',
      name: {
        'zh-CN': '事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><code>stop</code>滑块停止滑动事件</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slider-event-stop.vue']
    },
    {
      demoId: 'slider-slot',
      name: {
        'zh-CN': '自定义插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>自定义插槽</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slider-slot.vue']
    },
    {
      demoId: 'vertical-mode',
      name: {
        'zh-CN': '竖向模式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过设置<code>vertical</code>属性来展示滑块竖向模式（不设置，默认为横向模式）<br>竖向模式可以通过<code>height</code>设置组件高度</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['vertical-mode.vue']
    }
  ]
}
