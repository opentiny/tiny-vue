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
          demoId: 'dynamic-disable'
        },
        {
          name: 'format-tooltip',
          type: '(currentValue: number) => string',
          defaultValue: '',
          desc: {
            'zh-CN': '格式化 tooltip 提示',
            'en-US': 'Format tooltip message'
          },
          demoId: 'format-tooltip'
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
          demoId: 'max-min'
        },
        {
          name: 'min',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '设置最小值',
            'en-US': 'Set the minimum value'
          },
          demoId: 'max-min'
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
          demoId: 'shortcut-operation'
        },
        {
          name: 'range',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否为范围选择</p>',
            'en-US': 'display different button'
          },
          demoId: ''
        },
        {
          name: 'show-input',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示输入框',
            'en-US': 'Indicates whether to display the text box.'
          },
          demoId: 'show-input'
        },
        {
          name: 'show-tip',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示 tooltip',
            'en-US': 'Whether to display tooltip'
          },
          demoId: 'show-tip'
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
          demoId: 'about-step'
        },
        {
          name: 'value',
          type: 'Number | Array',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置单滑块的当前值，必需是整数或数组。</p>',
            'en-US': 'display different button'
          },
          demoId: ''
        },
        {
          name: 'vertical',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否竖向模式',
            'en-US': 'Whether the vertical mode is used'
          },
          demoId: 'vertical-mode'
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
          demoId: 'slider-event-change'
        },
        {
          name: 'start',
          type: '(event: Event, value: number | [number, number]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '设置滑块滑动开始时，触发该事件',
            'en-US': 'This event is triggered when the slider starts to slide.'
          },
          demoId: 'slider-event-start'
        },
        {
          name: 'stop',
          type: '(value: number | [number, number]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '设置滑块滑动结束时，触发该事件',
            'en-US': 'This event is triggered when the slider sliding ends. '
          },
          demoId: 'slider-event-stop'
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
          demoId: ''
        }
      ]
    }
  ],
  demos: [
    {
      demoId: 'about-step',
      name: {
        'zh-CN': '步长',
        'en-US': 'step length'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>step</code>来配置滑块滑动的步长。</p>',
        'en-US': '<p>Configure the step size of slider sliding by setting<code>step</code>.</p>'
      },
      codeFiles: ['about-step.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用',
        'en-US': 'disable'
      },
      desc: {
        'zh-CN': '<p>通过设置属性<code>disabled</code>,设置滑动滑块禁止滑动。</p>',
        'en-US': '<p>By setting the attribute<code>disabled</code>, set the slider to prevent sliding.</p>'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'max-min',
      name: {
        'zh-CN': '最大最小值',
        'en-US': 'max/min'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>min</code> <code>max</code>来设置滑块取值范围。</p>',
        'en-US': '<p>Set the slider value range by setting <code>min</code> <code>max</code></p>'
      },
      codeFiles: ['max-min.vue']
    },
    {
      demoId: 'range-select',
      name: {
        'zh-CN': '范围选择',
        'en-US': 'range selection'
      },
      desc: {
        'zh-CN': '<p>通过<code>v-model</code>为数组 设定初始范围选择。</p>',
        'en-US': '<p>Set the initial range selection for the array using <code>v-model</code></p>'
      },
      codeFiles: ['range-select.vue']
    },
    {
      demoId: 'shortcut-operation',
      name: {
        'zh-CN': '总步数',
        'en-US': 'Total steps'
      },
      desc: {
        'zh-CN':
          '<p>通过<code>num-pages</code>属性设置总步数，即按快捷键 PageDown/PageUp 时，每次移动的距离是(最大值-最小值)/分页数。</p>',
        'en-US':
          'Set the total number of steps through the<code>num pages</code>property, which means that when pressing the shortcut keys PageDown/PageUp, the distance moved each time is (maximum - minimum) divided by the number of pages.'
      },
      codeFiles: ['shortcut-operation.vue']
    },
    {
      demoId: 'format-tooltip',
      name: {
        'zh-CN': '格式化',
        'en-US': 'format'
      },
      desc: {
        'zh-CN': '<p>通过<code>format-tooltip</code>属性设置<code>value</code>。</p>',
        'en-US': '<p>Set the value through the<code>format tooltip</code>attribute.</p>'
      },
      codeFiles: ['format-tooltip.vue']
    },
    {
      demoId: 'show-input',
      name: {
        'zh-CN': '输入框模式',
        'en-US': 'Input box mode'
      },
      desc: {
        'zh-CN': '<p>通过配置<code>show-input<code>开启滑块输入框模式。</p>',
        'en-US': '<p>Enable slider input box mode by configuring<code>show input<code>.</p>'
      },
      codeFiles: ['show-input.vue']
    },
    {
      demoId: 'show-tip',
      name: {
        'zh-CN': '提示语',
        'en-US': 'prompt'
      },
      desc: {
        'zh-CN': '<p>通过设定<code>show-tip="false"</code>，关闭滑块提示。(默认开启)</p>',
        'en-US': '<p>Turn off slider prompts by setting<code>show-tip="false"</code>. (default enabled)</p>'
      },
      codeFiles: ['show-tip.vue']
    },
    {
      demoId: 'slider-event-change',
      name: {
        'zh-CN': 'change事件',
        'en-US': 'change events'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>change</code>事件滑块值改变。</p>',
        'en-US': '<p>By setting the<code>change</code>event slider value to change.</p>'
      },
      codeFiles: ['slider-event-change.vue']
    },
    {
      demoId: 'slider-event-start',
      name: {
        'zh-CN': 'start事件',
        'en-US': 'start events'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>start</code>事件滑块开始滑动。</p>',
        'en-US': '<p>Start sliding events by setting the<code>start</code> slider</p>'
      },
      codeFiles: ['slider-event-start.vue']
    },
    {
      demoId: 'slider-event-stop',
      name: {
        'zh-CN': 'stop 事件',
        'en-US': 'stop events'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>stop</code>滑块停止滑动。</p>',
        'en-US': '<p>Stop the sliding event by setting the<code>stop</code> slider.</p>'
      },
      codeFiles: ['slider-event-stop.vue']
    },
    {
      demoId: 'slider-slot',
      name: {
        'zh-CN': '自定义插槽',
        'en-US': 'Custom Slot'
      },
      desc: {
        'zh-CN': '<p>自定义插槽</p>',
        'en-US': '<p>Custom Slot</p>'
      },
      codeFiles: ['slider-slot.vue']
    },
    {
      demoId: 'vertical-mode',
      name: {
        'zh-CN': '竖向模式',
        'en-US': 'Vertical mode'
      },
      desc: {
        'zh-CN':
          '<p>通过设置<code>vertical</code>属性来展示滑块竖向模式（不设置，默认为横向模式）<br>竖向模式可以通过<code>height</code>设置组件高度</p>',
        'en-US':
          '<p>Display the slider vertical mode by setting the<code>vertical</code>attribute (no setting, default is horizontal mode)<br>Vertical mode can be set by<code>height</code>to set the component height.</p>'
      },
      codeFiles: ['vertical-mode.vue']
    }
  ]
}
