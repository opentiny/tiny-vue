export default {
  column: '2',
  owner: '',
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
