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
      'demoId': 'vertical-mode',
      'name': { 'zh-CN': '竖向模式', 'en-US': 'vertical mode' },
      'desc': {
        'zh-CN':
          '<p>通过设置<code>vertical</code> 属性来展示滑块竖向模式（不设置，默认为横向模式）\n竖向模式可以通过 <code>height</code> 设置组件高度</p>\n',
        'en-US':
          '<p>The vertical mode of the slider is displayed by setting the <code>vertical</code> attribute. landscape mode by default)\nIn vertical mode, you can set the height of the component by calling <code>height</code>\n'
      },
      'codeFiles': ['vertical-mode.vue']
    },
    {
      'demoId': 'max-min',
      'name': { 'zh-CN': '最大最小值', 'en-US': 'Maximum/Minimum' },
      'desc': {
        'zh-CN': '<p>通过设置<code>min</code> <code>max</code> 来设置滑块取值范围</p>\n',
        'en-US': '<p>Set <code>min</code> <code>max</code> to set the value range of the slider.</p>\n'
      },
      'codeFiles': ['max-min.vue']
    },
    {
      'demoId': 'format-tooltip',
      'name': { 'zh-CN': '提示当前值', 'en-US': 'Prompt current value' },
      'desc': {
        'zh-CN': '<p>通过设置<code>format-tooltip</code> 来格式化提示值</p>\n',
        'en-US': '<p>Set <code>format-tooltip</code> to set the format the prompt value</p>\n'
      },
      'codeFiles': ['format-tooltip.vue']
    },
    {
      'demoId': 'range-select',
      'name': { 'zh-CN': '范围选择', 'en-US': 'Range Selection' },
      'desc': {
        'zh-CN': '<p>通过<code>v-model</code> 为数组 设定初始范围选择</p>\n',
        'en-US': '<p>Set the initial range selection for the array through <code>v-model</code></p>\n'
      },
      'codeFiles': ['range-select.vue']
    },
    {
      'demoId': 'show-iput',
      'name': { 'zh-CN': '输入框模式', 'en-US': 'Text box mode' },
      'desc': {
        'zh-CN': '<p>通过配置<code>show-input</code>，开启滑块输入框模式</p>\n',
        'en-US': '<p>Enable the slider text box mode by configuring <code>show-input</code></p>\n'
      },
      'codeFiles': ['show-iput.vue']
    },
    {
      'demoId': 'shortcut-operation',
      'name': { 'zh-CN': '快捷键操作', 'en-US': 'Shortcut Key Operations' },
      'desc': {
        'zh-CN': '<p>通过设置<code>num-pages</code>总步数，即按快捷键 PageDown/PageUp 时，每次移动的距离是"⌈(max-min)/num-pages⌉"</p>',
        'en-US':
          '<p>Set <code>num-pages</code>the total number of steps. That is, when you press the shortcut key PageDown or PageUp, the moving distance is "⌈(max-min)/num-pages⌉"</p>\n'
      },
      'codeFiles': ['shortcut-operation.vue']
    },
    {
      'demoId': 'dynamic-disable',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>通过设置属性<code>disabled</code> ,设置滑动滑块禁止滑动</p>\n',
        'en-US': '<p>Set the attribute <code>disabled</code> to disable the sliding slider</p>\n'
      },
      'codeFiles': ['dynamic-disable.vue']
    },
    {
      'demoId': 'show-tip',
      'name': { 'zh-CN': '提示', 'en-US': 'Prompt' },
      'desc': {
        'zh-CN': '<p>通过设定<code>:show-tip=&quot;false&quot;</code>，关闭滑块提示。(默认开启)</p>\n',
        'en-US':
          '<p>Disable the slider prompt by setting <code>:show-tip=&quot;false&quot;</code> . (enabled by default)</p>\n'
      },
      'codeFiles': ['show-tip.vue']
    },
    {
      'demoId': 'about-step',
      'name': { 'zh-CN': '步长', 'en-US': 'Step' },
      'desc': {
        'zh-CN': '<p>通过设置<code>step</code>来配置滑块滑动的步长</p>\n',
        'en-US': '<p>Set <code>step</code> to configure the slider sliding step</p>\n'
      },
      'codeFiles': ['about-step.vue']
    },
    {
      'demoId': 'slider-event-change',
      'name': { 'zh-CN': 'change 事件', 'en-US': 'change event' },
      'desc': { 'zh-CN': '<p>change 事件</p>\n', 'en-US': '<p>change event</p>\n' },
      'codeFiles': ['slider-event-change.vue']
    },
    {
      'demoId': 'slider-event-start',
      'name': { 'zh-CN': 'start 滑块开始滑动事件', 'en-US': 'start Slider sliding start event' },
      'desc': { 'zh-CN': '<p>start 滑块开始滑动事件</p>\n', 'en-US': '<p>start Slider Start Event</p>\n' },
      'codeFiles': ['slider-event-start.vue']
    },
    {
      'demoId': 'slider-event-stop',
      'name': { 'zh-CN': 'stop 滑块停止滑动事件', 'en-US': 'stop slider sliding stop event' },
      'desc': { 'zh-CN': '<p>stop 滑块停止滑动事件</p>\n', 'en-US': '<p>stop slider sliding stop event</p>\n' },
      'codeFiles': ['slider-event-stop.vue']
    },
    {
      'demoId': 'slider-slot',
      'name': { 'zh-CN': '自定义插槽', 'en-US': 'Custom Slot' },
      'desc': { 'zh-CN': '显示滑块值的插槽', 'en-US': 'A slot for displaying details' },
      'codeFiles': ['slider-slot.vue']
    }
  ],
  apis: [
    {
      'name': 'slider',
      'type': 'component',
      'properties': [
        {
          'name': 'v-model',
          'type': 'number | [number, number]',
          'desc': { 'zh-CN': '设置单滑块的当前值，必需是整数或数组', 'en-US': 'Sets the current value of a single slider. The value must be an integer or an array.' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Disable' },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'min',
          'type': 'number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '设置最小值', 'en-US': 'Set the minimum value' },
          'demoId': 'max-min'
        },
        {
          'name': 'max',
          'type': 'number',
          'defaultValue': '100',
          'desc': {
            'zh-CN': '设置最大值，必需是整数，可以负数。必需大于所设置的最小值。',
            'en-US':
              'Set the maximum value. The value must be an integer and can be a negative number. The value must be greater than the minimum value set.'
          },
          'demoId': 'max-min'
        },
        {
          'name': 'step',
          'type': 'number',
          'defaultValue': '1',
          'desc': {
            'zh-CN': '设置滑块移动时，每步位移距离，必需是大于0的正整数',
            'en-US':
              'Displacement distance of each step when the slider moves. The value must be a positive integer greater than 0'
          },
          'demoId': 'about-step'
        },
        {
          'name': 'show-input',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示输入框，仅在非范围选择时有效',
            'en-US': 'Indicates whether to display the text box. This parameter is valid only for non-range selection'
          },
          'demoId': 'show-iput'
        },
        {
          'name': 'format-tooltip',
          'type': '(currentValue: number) => string',
          'desc': { 'zh-CN': '格式化 tooltip 提示', 'en-US': 'Format tooltip message' },
          'demoId': 'show-tip'
        },
        {
          'name': 'vertical',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否竖向模式', 'en-US': 'Whether the vertical mode is used' },
          'demoId': 'vertical-mode'
        },
        {
          'name': 'height',
          'type': 'string',
          'defaultValue': '300px',
          'desc': { 'zh-CN': 'Slider组件的高度，当vertical为true时有效', 'en-US': 'Height of Slider component, effective when vertical is true' },
          'demoId': 'vertical-mode'
        },
        {
          'name': 'num-pages',
          'type': 'number',
          'defaultValue': '1',
          'desc': {
            'zh-CN':
              '设置总步数，即按快捷键 PageDown/PageUp 时，每次移动的距离是"⌈(max-min)/num-pages⌉"',
            'en-US':
              'Set the total number of steps. That is, when you press PageDown or PageUp, the moving distance is "⌈(max-min)/num-pages⌉".'
          },
          'demoId': 'shortcut-operation'
        },
        {
          'name': 'show-tip',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '是否显示 tooltip', 'en-US': 'Whether to display tooltip' },
          'demoId': 'show-tip'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '(value: number | [number, number]) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）',
            'en-US':
              'Triggered when the value changes (When you drag the mouse, it is triggered only after you release the mouse).'
          },
          'demoId': 'slider-event-change'
        },
        {
          'name': 'start',
          'type': '(event: Event, value: number | [number, number]) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '设置滑块滑动开始时，触发该事件',
            'en-US':
              'This event is triggered when the slider starts to slide.'
          },
          'demoId': 'slider-event-start'
        },
        {
          'name': 'Stop',
          'type': '(value: number | [number, number]) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '设置滑块滑动结束时，触发该事件',
            'en-US':
              'This event is triggered when the slider sliding ends. '
          },
          'demoId': 'slider-event-stop'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '显示滑块值的插槽，仅仅v-model是单数值时才有效，插槽参数为：slotArg: { slotScope: number }', 'en-US': 'Slot for displaying slider values, valid only if v-model is a single value. Slot parameters are: slotArg: {slotScope: number}' },
          'demoId': 'slider-slot'
        }
      ]
    }
  ]
}
