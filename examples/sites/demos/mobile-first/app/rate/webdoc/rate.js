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
      demoId: 'custom-3-threshold-colors',
      name: {
        'zh-CN': '自定义 3 分段颜色',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `colors` 定义 3 分段颜色。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-3-threshold-colors.vue']
    },
    {
      demoId: 'disabled-not-selected-color',
      name: {
        'zh-CN': '禁用时未选中图标颜色',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `disabled-void-color` 自定义禁用时未选中图标颜色。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['disabled-not-selected-color.vue']
    },
    {
      demoId: 'disabled-not-selected-class',
      name: {
        'zh-CN': '禁用时未选中图标类名',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `disabled-void-icon-class` 自定义禁用时未选中图标类名。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['disabled-not-selected-class.vue']
    },
    {
      demoId: 'custom-3-threshold-icon.vue',
      name: {
        'zh-CN': '自定义 3 分段图标样式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `icon-classes` 自定义 3 分段图标样式。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-3-threshold-icon.vue']
    },
    {
      demoId: 'texts-and-text-color',
      name: {
        'zh-CN': '辅助文字及颜色',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可通过 `texts show-text text-color` 三个属性分别设置辅助文字内容、是否显示辅助文字及辅助文字颜色。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['texts-and-text-color.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `type` 设置尺寸 `large small(默认)` 。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'not-selected-color',
      name: {
        'zh-CN': '未选中图标颜色',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `void-color` 定义未选中图标颜色。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['not-selected-color.vue']
    },
    {
      demoId: 'not-selected-class',
      name: {
        'zh-CN': '未选中图标类名',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `void-icon-class` 定义未选中图标类名。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['not-selected-class.vue']
    },
    {
      demoId: 'text-on-bottom',
      name: {
        'zh-CN': '图标下文字提示',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `text-on-bottom` 定义是否在图标下显示文字提示。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['text-on-bottom.vue']
    },
    {
      demoId: 'allow-half',
      name: {
        'zh-CN': '半选',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `allow-half` 定义是否支持半选。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['allow-half.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `disabled` 定义是否禁用。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'show-score',
      name: {
        'zh-CN': '分数显示',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `show-score score-template` 分别定义是否显示分数和显示的模板。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-score.vue']
    },
    {
      demoId: 'radio-rate',
      name: {
        'zh-CN': '单选模式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `radio` 设置单选模式。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['radio-rate.vue']
    },
    {
      demoId: 'max-score',
      name: {
        'zh-CN': '最大分值',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `max` 设置最大分值。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['max-score.vue']
    },
    {
      demoId: 'threshold-value',
      name: {
        'zh-CN': '界限值',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `low-threshold high-threshold` 分别设置下限值和上限值，通过`colors`配置显示星的颜色<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['threshold-value.vue']
    },
    {
      demoId: 'rate-events',
      name: {
        'zh-CN': '事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>监听 `change` 事件触发处理方法。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['rate-events.vue']
    }
  ],
  apis: []
}
