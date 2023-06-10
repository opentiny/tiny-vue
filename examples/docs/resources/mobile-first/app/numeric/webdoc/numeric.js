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
      demoId: 'numeric-size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `size` 属性设置计数器尺寸。可取值 `medium`。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['numeric-size.vue']
    },
    {
      demoId: 'dynamic-disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过设置 disabled 控制是否禁用计数器<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['dynamic-disabled.vue']
    },
    {
      demoId: 'max-min',
      name: {
        'zh-CN': '数值循环',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可通过设置 `max` 属性设置计数器允许的最大值，通过设置 `min` 属性设置计数器允许的最小值通过设置 `circulate` 属性设置是否循环，即数组首尾相连<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['max-min.vue']
    },
    {
      demoId: 'about-step',
      name: {
        'zh-CN': '步长',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `step` 属性设置计数器的步长。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['about-step.vue']
    },
    {
      demoId: 'unit',
      name: {
        'zh-CN': '数值单位',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `unit` 属性设置计数器的单位<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['unit.vue']
    },
    {
      demoId: 'focus-event',
      name: {
        'zh-CN': '聚焦事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>输入框获得焦点时触发 `focus` 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['focus-event.vue']
    },
    {
      demoId: 'blur-event',
      name: {
        'zh-CN': '失焦事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>输入框失去焦点时触发 `blur` 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['blur-event.vue']
    },
    {
      demoId: 'change-event',
      name: {
        'zh-CN': '值改变事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>输入框值被改变时触发 `change` 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['change-event.vue']
    }
  ],
  apis: []
}
