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
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'split-threshold',
      name: {
        'zh-CN': '面板阈值',
        'en-US': 'Panel Threshold'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>left-top-min</code> 设置左上方面板拖动的最小高度，通过 <code>right-bottom-min</code> 设置右下方面板拖动的最小高度</p>',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['split-threshold.vue']
    },
    {
      demoId: 'split-mode',
      name: {
        'zh-CN': '分割方式',
        'en-US': 'Split Mode'
      },
      desc: {
        'zh-CN':
          '<p>同个mode设置分割类型，可选值为 <code>horizontal</code>（横向） 或 <code>vertical</code>（纵向）；默认值<code>horizontal</code>。</p>\n',
        'en-US':
          '<p>Split type of the same mode. The options are <code>horizontal</code> (horizontal) and <code>vertical</code> (vertical). The default value is <code>horizontal</code>. </p>\n'
      },
      codeFiles: ['split-mode.vue']
    },
    {
      demoId: 'movestart-event',
      name: {
        'zh-CN': 'movestart 事件',
        'en-US': 'movestart event'
      },
      desc: {
        'zh-CN': '<p>开始移动事件</p>\n',
        'en-US': '<p>Start moving event</p>\n'
      },
      codeFiles: ['movestart-event.vue']
    },
    {
      demoId: 'moving-event',
      name: {
        'zh-CN': 'moving 事件',
        'en-US': 'Moving Event'
      },
      desc: {
        'zh-CN': '<p>移动中事件</p>\n',
        'en-US': '<p>Moving Event</p>\n'
      },
      codeFiles: ['moving-event.vue']
    },
    {
      demoId: 'moveend-event',
      name: {
        'zh-CN': 'moveend 事件',
        'en-US': 'moveend event'
      },
      desc: {
        'zh-CN': '<p>移动完成事件</p>\n',
        'en-US': '<p>Move completion event</p>\n'
      },
      codeFiles: ['moveend-event.vue']
    },
    {
      demoId: 'event-click',
      name: {
        'zh-CN': '点击事件',
        'en-US': 'click event'
      },
      desc: {
        'zh-CN':
          '<p><code>left-top-click</code>事件点击左箭头收起时触发， <code>right-bottom-click</code>事件点击右箭头收起时触发</p>\n',
        'en-US':
          '<p> <code>left-top-click</code>事件点击左箭头收起时触发，<code>right-bottom-click</code>事件点击右箭头收起时触发</p>\n'
      },
      codeFiles: ['event-click.vue']
    },
    {
      demoId: 'left-right-slot',
      name: {
        'zh-CN': '左右面板插槽',
        'en-US': 'Slots on the left and right panels'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['left-right-slot.vue']
    },
    {
      demoId: 'top-bottom-slot',
      name: {
        'zh-CN': '上下面板插槽',
        'en-US': 'Slots on the upper and lower panels'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['top-bottom-slot.vue']
    },
    {
      demoId: 'trigger-slot',
      name: {
        'zh-CN': '拖拽插槽',
        'en-US': 'Drag Slot'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['trigger-slot.vue']
    },
    {
      demoId: 'nested-use',
      name: {
        'zh-CN': '嵌套使用',
        'en-US': 'Nested'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['nested-use.vue']
    },
    {
      demoId: 'disabled-drag',
      name: {
        'zh-CN': '禁用拖拽',
        'en-US': 'disabled drag'
      },
      desc: {
        'zh-CN': '通过 <code> disabled </code> 来禁用拖拽',
        'en-US': 'Use <code>disabled</code> to disable drag and drop.'
      },
      codeFiles: ['disabled-drag.vue']
    },
    {
      demoId: 'trigger-simple',
      name: {
        'zh-CN': '简易模式',
        'en-US': 'Simple mode'
      },
      desc: {
        'zh-CN': '通过 <code> trigger-simple </code> 来启用简易模式',
        'en-US': 'Use <code>trigger-simple </code> to enable the simple mode.'
      },
      codeFiles: ['trigger-simple.vue']
    },
    {
      demoId: 'horizontal-collapse',
      name: {
        'zh-CN': '简易模式中，双向展开',
        'en-US': 'In simple mode, two-way deployment'
      },
      desc: {
        'zh-CN': '通过 <code> collapse-left-top、collapse-right-bottom  </code> 来启用简易模式的双向展开按钮',
        'en-US':
          'Use <code>collapse-left-top, collapse-right-bottom </code> to enable the bidirectional expansion button in simple mode.'
      },
      codeFiles: ['horizontal-collapse.vue']
    },
    {
      demoId: 'horizontal-collapse-left-top',
      name: {
        'zh-CN': '简易模式中，单向展开',
        'en-US': 'In simple mode, one-way deployment'
      },
      desc: {
        'zh-CN': '通过 <code> collapse-left-top 或 collapse-right-bottom  </code> 来启用简易模式的单向展开按钮',
        'en-US':
          'Use <code>collapse-left-top or collapse-right-bottom </code> to enable one-way expansion buttons in simple mode'
      },
      codeFiles: ['horizontal-collapse-left-top.vue']
    },
    {
      demoId: 'three-areas',
      name: {
        'zh-CN': '支持配置3个区块',
        'en-US': 'Three blocks can be configured'
      },
      desc: {
        'zh-CN': '通过 <code> three-areas </code> 来启用三个区块模式',
        'en-US': 'Use <code>three-areas </code> to enable the three-area mode.'
      },
      codeFiles: ['three-areas.vue']
    }
  ]
}
