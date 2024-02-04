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
        'zh-CN': '',
        'en-US': ''
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'vertical-mode',
      name: {
        'zh-CN': '竖向模式',
        'en-US': 'vertical mode'
      },
      desc: {
        'zh-CN':
          '<p>通过设置<code>vertical</code> 属性来展示滑块竖向模式（不设置，默认为横向模式）\n竖向模式可以通过 <code>height</code> 设置组件高度。</p>\n',
        'en-US':
          '<p>The vertical mode of the slider is displayed by setting the <code>vertical</code> attribute. landscape mode by default)\nIn vertical mode, you can set the height of the component by calling <code>height</code>\n'
      },
      codeFiles: ['vertical-mode.vue']
    },
    {
      demoId: 'max-min',
      name: {
        'zh-CN': '最大最小值',
        'en-US': 'Maximum/Minimum'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>min</code> <code>max</code> 来设置滑块取值范围。</p>',
        'en-US': '<p>Set <code>min</code> <code>max</code> to set the value range of the slider.</p>'
      },
      codeFiles: ['max-min.vue']
    },
    {
      demoId: 'format-tooltip',
      name: {
        'zh-CN': '提示当前值',
        'en-US': 'Prompt current value'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>format-tooltip</code> 来格式化提示值。</p>',
        'en-US': '<p>Set <code>format-tooltip</code> to set the format the prompt value</p>\n'
      },
      codeFiles: ['format-tooltip.vue']
    },
    {
      demoId: 'range-select',
      name: {
        'zh-CN': '范围选择',
        'en-US': 'Range Selection'
      },
      desc: {
        'zh-CN': '<p>通过<code>v-model</code> 为数组 设定初始范围选择。</p>',
        'en-US': '<p>Set the initial range selection for the array through <code>v-model</code></p>'
      },
      codeFiles: ['range-select.vue']
    },
    {
      demoId: 'show-input',
      name: {
        'zh-CN': '输入框模式',
        'en-US': 'Text box mode'
      },
      desc: {
        'zh-CN':
          '<p>通过配置<code>show-input</code>，开启滑块输入框模式。可以通过配置<code>unit</code>来决定输入框后面显示的单位。</p>',
        'en-US':
          '<p>Enable the slider text box mode by configuring <code>show-input</code>。You can determine the units displayed after the input box by configuring<code>unit</code>.</p>'
      },
      codeFiles: ['show-input.vue']
    },
    {
      demoId: 'shortcut-operation',
      name: {
        'zh-CN': '快捷键操作',
        'en-US': 'Shortcut Key Operations'
      },
      desc: {
        'zh-CN':
          '<p>通过设置<code>num-pages</code>总步数，即按快捷键 PageDown/PageUp 时，每次移动的距离是 "⌈(max-min)/num-pages⌉"。</p>',
        'en-US':
          '<p>Set <code>num-pages</code>the total number of steps. That is, when you press the shortcut key PageDown or PageUp, the moving distance is "⌈(max-min)/num-pages⌉"。</p>'
      },
      codeFiles: ['shortcut-operation.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '<p>通过设置属性<code>disabled</code> ,设置滑动滑块禁止滑动。</p>',
        'en-US': '<p>Set the attribute <code>disabled</code> to disable the sliding slider。</p>'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'show-tip',
      name: {
        'zh-CN': '提示',
        'en-US': 'Prompt'
      },
      desc: {
        'zh-CN': '<p>通过设定<code>:show-tip=&quot;false&quot;</code>，关闭滑块提示。(默认开启)。</p>',
        'en-US':
          '<p>Disable the slider prompt by setting <code>:show-tip=&quot;false&quot;</code> . (enabled by default)。</p>'
      },
      codeFiles: ['show-tip.vue']
    },
    {
      demoId: 'about-step',
      name: {
        'zh-CN': '步长',
        'en-US': 'Step'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>step</code>来配置滑块滑动的步长。</p>',
        'en-US': '<p>Set <code>step</code> to configure the slider sliding step。</p>'
      },
      codeFiles: ['about-step.vue']
    },
    {
      demoId: 'slider-slot',
      name: {
        'zh-CN': '自定义插槽',
        'en-US': 'Custom Slot'
      },
      desc: {
        'zh-CN': '显示滑块值的插槽。',
        'en-US': 'A slot for displaying details。'
      },
      codeFiles: ['slider-slot.vue']
    },
    {
      demoId: 'slider-event',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN': '<p>change、start、stop 事件。</p>',
        'en-US': '<p>change, start, stop events.</p>'
      },
      codeFiles: ['slider-event.vue']
    }
  ]
}
