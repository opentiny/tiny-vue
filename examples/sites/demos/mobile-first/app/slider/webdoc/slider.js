export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'max-min',
      name: {
        'zh-CN': '最大最小值',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过设置`min` `max` 来设置滑块取值范围<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['max-min.vue']
    },
    {
      demoId: 'format-tooltip',
      name: {
        'zh-CN': '当前值',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过设置`format-tooltip` 来属性设置 value<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['format-tooltip.vue']
    },
    {
      demoId: 'range-select',
      name: {
        'zh-CN': '范围选择',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过`v-model` 为数组 设定初始范围选择<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['range-select.vue']
    },
    {
      demoId: 'show-input',
      name: {
        'zh-CN': '输入框模式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过配置`show-input`，开启滑块输入框模式。可以通过`unit`属性设置输入框后面显示的单位，默认为 `%`<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-input.vue']
    },
    {
      demoId: 'show-graduate',
      name: {
        'zh-CN': '显示刻度',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过设置`show-steps` 属性来显示刻度，需结合 step 一起使用，显示的刻度个数为 `max / step`，最前与最后的刻度默认不显示<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-graduate.vue']
    },
    {
      demoId: 'show-label',
      name: {
        'zh-CN': '显示 Label',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过设置`show-label` 属性来显示 Label，需结合`show-steps`一起使用可以通过`format-label` 函数自定义想要显示的 label<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-label.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过设置属性`disabled` ,设置滑动滑块禁止滑动<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'show-tip',
      name: {
        'zh-CN': '提示',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过设定`:show-tip="false"`，关闭滑块提示。(默认开启)<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-tip.vue']
    },
    {
      demoId: 'about-step',
      name: {
        'zh-CN': '步长',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过设置`step`来配置滑块滑动的步长<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['about-step.vue']
    },
    {
      demoId: 'slider-event-change',
      name: {
        'zh-CN': 'change 事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slider-event-change.vue']
    },
    {
      demoId: 'slider-event-start',
      name: {
        'zh-CN': 'start 滑块开始滑动事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slider-event-start.vue']
    },
    {
      demoId: 'slider-event-stop',
      name: {
        'zh-CN': 'stop 滑块停止滑动事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slider-event-stop.vue']
    },
    {
      demoId: 'slider-slot',
      name: {
        'zh-CN': '默认插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>默认插槽`default` 在滑块的尾部<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slider-slot.vue']
    },
    {
      demoId: 'left-right-slot',
      name: {
        'zh-CN': '左右插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>左插槽`left`，右插槽`right`，注意这两个插槽只在移动端展示，PC 端默认是隐藏的，如果想要看效果请将页面缩小至移动端大小。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['left-right-slot.vue']
    }
  ]
}
