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
      'demoId': 'split-threshold',
      'name': { 'zh-CN': '面板阈值', 'en-US': 'Panel Threshold' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['split-threshold.vue']
    },
    {
      'demoId': 'split-mode',
      'name': { 'zh-CN': '分割方式', 'en-US': 'Split Mode' },
      'desc': {
        'zh-CN':
          '<p>同个mode设置分割类型，可选值为 <code>horizontal</code>（横向） 或 <code>vertical</code>（纵向）；默认值<code>horizontal</code>。</p>\n',
        'en-US':
          '<p>Split type of the same mode. The options are <code>horizontal</code> (horizontal) and <code>vertical</code> (vertical). The default value is <code>horizontal</code>. </p>\n'
      },
      'codeFiles': ['split-mode.vue']
    },
    {
      'demoId': 'basic-usage1',
      'name': { 'zh-CN': '不可拖拽', 'en-US': 'Drag not allowed' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage1.vue']
    },
    {
      'demoId': 'movestart-event',
      'name': { 'zh-CN': 'movestart 事件', 'en-US': 'movestart event' },
      'desc': { 'zh-CN': '<p>开始移动事件</p>\n', 'en-US': '<p>Start moving event</p>\n' },
      'codeFiles': ['movestart-event.vue']
    },
    {
      'demoId': 'moving-event',
      'name': { 'zh-CN': 'moving 事件', 'en-US': 'Moving Event' },
      'desc': { 'zh-CN': '<p>移动中事件</p>\n', 'en-US': '<p>Moving Event</p>\n' },
      'codeFiles': ['moving-event.vue']
    },
    {
      'demoId': 'moveend-event',
      'name': { 'zh-CN': 'moveend 事件', 'en-US': 'moveend event' },
      'desc': { 'zh-CN': '<p>移动完成事件</p>\n', 'en-US': '<p>Move completion event</p>\n' },
      'codeFiles': ['moveend-event.vue']
    },
    {
      'demoId': 'event-click',
      'name': { 'zh-CN': '点击事件', 'en-US': 'click event' },
      'desc': {
        'zh-CN':
          '<p><code>left-top-click</code>事件点击左箭头收起时触发， <code>right-bottom-click</code>事件点击右箭头收起时触发</p>\n',
        'en-US':
          '<p> <code>left-top-click</code>事件点击左箭头收起时触发，<code>right-bottom-click</code>事件点击右箭头收起时触发</p>\n'
      },
      'codeFiles': ['event-click.vue']
    },
    {
      'demoId': 'left-right-slot',
      'name': { 'zh-CN': '左右面板插槽', 'en-US': 'Slots on the left and right panels' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['left-right-slot.vue']
    },
    {
      'demoId': 'top-bottom-slot',
      'name': { 'zh-CN': '上下面板插槽', 'en-US': 'Slots on the upper and lower panels' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['top-bottom-slot.vue']
    },
    {
      'demoId': 'trigger-slot',
      'name': { 'zh-CN': '拖拽插槽', 'en-US': 'Drag Slot' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['trigger-slot.vue']
    },
    {
      'demoId': 'nested-use',
      'name': { 'zh-CN': '嵌套使用', 'en-US': 'Nested' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['nested-use.vue']
    },
    {
      'demoId': 'disabled-drag',
      'name': { 'zh-CN': '禁用拖拽', 'en-US': 'disabled drag' },
      'desc': {
        'zh-CN': '通过 <code> disabled </code> 来禁用拖拽',
        'en-US': 'Use <code>disabled</code> to disable drag and drop.'
      },
      'codeFiles': ['disabled-drag.vue']
    },
    {
      'demoId': 'trigger-simple',
      'name': { 'zh-CN': '简易模式', 'en-US': 'Simple mode' },
      'desc': {
        'zh-CN': '通过 <code> trigger-simple </code> 来启用简易模式',
        'en-US': 'Use <code>trigger-simple </code> to enable the simple mode.'
      },
      'codeFiles': ['trigger-simple.vue']
    },
    {
      'demoId': 'horizontal-collapse',
      'name': { 'zh-CN': '简易模式中，双向展开', 'en-US': 'In simple mode, two-way deployment' },
      'desc': {
        'zh-CN': '通过 <code> collapse-left-top、collapse-right-bottom  </code> 来启用简易模式的双向展开按钮',
        'en-US':
          'Use <code>collapse-left-top, collapse-right-bottom </code> to enable the bidirectional expansion button in simple mode.'
      },
      'codeFiles': ['horizontal-collapse.vue']
    },
    {
      'demoId': 'horizontal-collapse-left-top',
      'name': { 'zh-CN': '简易模式中，单向展开', 'en-US': 'In simple mode, one-way deployment' },
      'desc': {
        'zh-CN': '通过 <code> collapse-left-top 或 collapse-right-bottom  </code> 来启用简易模式的单向展开按钮',
        'en-US':
          'Use <code>collapse-left-top or collapse-right-bottom </code> to enable one-way expansion buttons in simple mode'
      },
      'codeFiles': ['horizontal-collapse-left-top.vue']
    },
    {
      'demoId': 'three-areas',
      'name': { 'zh-CN': '支持配置3个区块', 'en-US': 'Three blocks can be configured' },
      'desc': {
        'zh-CN': '通过 <code> three-areas </code> 来启用三个区块模式',
        'en-US': 'Use <code>three-areas </code> to enable the three-area mode.'
      },
      'codeFiles': ['three-areas.vue']
    }
  ],
  apis: [
    {
      'name': 'split',
      'type': 'component',
      'properties': [
        {
          'name': 'mode',
          'type': 'string',
          'defaultValue': 'horizontal',
          'desc': {
            'zh-CN':
              '分割类型，可选值为 horizontal 或 vertical；默认值horizontal。;该属性的可选值为 horizontal / vertical',
            'en-US':
              'Separation type. The value can be horizontal or vertical. The default value is horizontal. ;The optional values of this attribute are horizontal / vertical'
          },
          'demoId': 'split-mode'
        },
        {
          'name': 'collapse-left-top',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '简易模式启用左/上展开收起按钮。',
            'en-US': 'Easy Mode Enables Left/Top Expand Collapse Button'
          },
          'demoId': 'split-threshold'
        },
        {
          'name': 'collapse-right-bottom',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '简易模式启用右/下展开收起按钮',
            'en-US': 'Easy Mode Enables Right/Down Expand Collapse Button'
          },
          'demoId': 'split-threshold'
        },
        {
          'name': ' disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '分割线是否禁用拖拽',
            'en-US': 'Indicates whether to disable dragging of the split line.'
          },
          'demoId': 'split-threshold'
        },
        {
          'name': 'left-top-min',
          'type': 'number , string',
          'defaultValue': '40px',
          'desc': { 'zh-CN': '左面板 / 上面板最小阈值。', 'en-US': 'Minimum threshold on the left or upper panel.' },
          'demoId': 'split-threshold'
        },
        {
          'name': 'right-bottom-min',
          'type': 'number , string',
          'defaultValue': '40px',
          'desc': { 'zh-CN': '右面板 / 下面板最小阈值。', 'en-US': 'Minimum threshold on the right or lower panel.' },
          'demoId': 'split-threshold'
        },
        {
          'name': 'modelValue',
          'type': 'number , string',
          'defaultValue': '0.5',
          'desc': { 'zh-CN': '分割面板的位置。', 'en-US': 'Position of the split panel.' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'three-areas',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '配置3个区块', 'en-US': 'Three blocks are configured.' },
          'demoId': 'split-threshold'
        },
        {
          'name': 'trigger-simple ',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '分割线是否为简易模式', 'en-US': 'Indicates whether the split line is in simple mode.' },
          'demoId': 'split-threshold'
        }
      ],
      'events': [
        {
          'name': 'moveend',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '拖拽结束的事件。;拖拽结束的事件。;无arguments',
            'en-US': 'Drag end event. ;Drag end event. ;No arguments'
          },
          'demoId': 'moveend-event'
        },
        {
          'name': 'movestart',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '拖拽开始的事件。;拖拽开始的事件。;无arguments',
            'en-US': 'Drag start event. ;Drag start event. ;No arguments'
          },
          'demoId': 'movestart-event'
        },
        {
          'name': 'moving',
          'type': 'Function(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '拖拽中的事件。;拖拽中的事件。;arg1:event (类型object)',
            'en-US': 'Draging events. ;Drag the event in. ; arg1:event (type object)'
          },
          'demoId': 'moving-event'
        },
        {
          'name': 'left-top-click',
          'type': 'Function(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '左箭头收起时触发',
            'en-US': 'Triggered when the left arrow is folded'
          },
          'demoId': 'moving-event'
        },
        {
          'name': 'right-bottom-click',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '右箭头收起时触发',
            'en-US': 'Triggered when the right arrow is folded'
          },
          'demoId': 'moving-event'
        }
      ],
      'slots': [
        {
          'name': 'left',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '左面板插槽', 'en-US': 'Slot on the left panel' },
          'demoId': 'left-right-slot'
        },
        {
          'name': 'right',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '右面板插槽', 'en-US': 'Right panel slot' },
          'demoId': 'left-right-slot'
        },
        {
          'name': 'top',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '上面板插槽', 'en-US': 'Slot on the upper panel' },
          'demoId': 'top-bottom-slot'
        },
        {
          'name': 'bottom',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '下面板插槽', 'en-US': 'Slot on the lower panel' },
          'demoId': 'top-bottom-slot'
        },
        {
          'name': 'trigger',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '拖拽插槽', 'en-US': 'Drag Slot' },
          'demoId': 'trigger-slot'
        }
      ]
    }
  ]
}
