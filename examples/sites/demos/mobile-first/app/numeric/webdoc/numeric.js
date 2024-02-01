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
        'zh-CN': '<p>基本用法</p>',
        'en-US': '<p>basic usage</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'numeric-size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'size'
      },
      desc: {
        'zh-CN': '<p>可通过 `size` 属性设置计数器尺寸。可取值 `medium`。<p>',
        'en-US': '<p>The counter size can be set via the `size` property. Possible values ​​are `medium`.</p>'
      },
      codeFiles: ['numeric-size.vue']
    },
    {
      demoId: 'dynamic-disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'disabled'
      },
      desc: {
        'zh-CN': '<p>通过设置 `disabled` 控制是否禁用计数器。<p>',
        'en-US': '<p>Control whether the counter is disabled by setting `disabled`.</p>'
      },
      codeFiles: ['dynamic-disabled.vue']
    },
    {
      demoId: 'controls',
      name: {
        'zh-CN': '控制按钮',
        'en-US': 'controls button'
      },
      desc: {
        'zh-CN': '<p>可通过 `controls` 属性设置是否显示控制按钮。没有控制按钮时，内容区展示为左对齐。<p>',
        'en-US':
          '<p>You can set whether to display control buttons through the `controls` attribute. When there are no control buttons, the content area is displayed left-aligned.</p>'
      },
      codeFiles: ['controls.vue']
    },
    {
      demoId: 'max-min',
      name: {
        'zh-CN': '最大最小值',
        'en-US': 'max and min'
      },
      desc: {
        'zh-CN':
          '<p>可通过设置 `max` 属性设置计数器允许的最大值，通过设置 `min` 属性设置计数器允许的最小值通过设置 `circulate` 属性设置是否循环，即数组首尾相连。<p>',
        'en-US':
          '<p>You can set the maximum value allowed by the counter by setting the `max` attribute, and set the minimum value allowed by the counter by setting the `min` attribute. Set whether to loop by setting the `circulate` attribute, that is, the array is connected end to end.</p>'
      },
      codeFiles: ['max-min.vue']
    },
    {
      demoId: 'allow-empty',
      name: {
        'zh-CN': '可清空输入',
        'en-US': 'clearable input'
      },
      desc: {
        'zh-CN': '<p>可通过 `allow-empty` 属性设置计数器内容的可清空特性。默认为 `false`，表示不可清空。<p>',
        'en-US':
          '<p>The clearability of the counter contents can be set via the `allow-empty` attribute. The default is `false`, which means it cannot be cleared.</p>'
      },
      codeFiles: ['allow-empty.vue']
    },
    {
      demoId: 'about-step',
      name: {
        'zh-CN': '步长',
        'en-US': 'step length'
      },
      desc: {
        'zh-CN': '<p>可通过 `step` 属性设置计数器的步长。<p>',
        'en-US': '<p>The step size of the counter can be set via the `step` attribute.</p>'
      },
      codeFiles: ['about-step.vue']
    },
    {
      demoId: 'unit',
      name: {
        'zh-CN': '数值单位',
        'en-US': 'numerical unit'
      },
      desc: {
        'zh-CN': '<p>可通过 `unit` 属性设置计数器的单位。<p>',
        'en-US': '<p>The unit of the counter can be set through the `unit` attribute</p>'
      },
      codeFiles: ['unit.vue']
    },
    {
      demoId: 'focus-event',
      name: {
        'zh-CN': '聚焦事件',
        'en-US': 'focus events'
      },
      desc: {
        'zh-CN': '<p>输入框获得焦点时触发 `focus` 事件。<p>',
        'en-US': '<p>The `focus` event is triggered when the input box gains focus.</p>'
      },
      codeFiles: ['focus-event.vue']
    },
    {
      demoId: 'blur-event',
      name: {
        'zh-CN': 'blur event',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>输入框失去焦点时触发 `blur` 事件。<p>',
        'en-US': '<p>The `blur` event is triggered when the input box loses focus.</p>'
      },
      codeFiles: ['blur-event.vue']
    },
    {
      demoId: 'change-event',
      name: {
        'zh-CN': '值改变事件',
        'en-US': 'change envet'
      },
      desc: {
        'zh-CN': '<p>输入框值被改变时触发 `change` 事件。<p>',
        'en-US': '<p>The `change` event is triggered when the value of the input box is changed.</p>'
      },
      codeFiles: ['change-event.vue']
    }
  ],
  apis: []
}
