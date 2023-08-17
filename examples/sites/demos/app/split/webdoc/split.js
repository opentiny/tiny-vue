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
    }
  ],
  apis: [
    {
      'name': 'split',
      'type': 'component',
      'properties': [
        {
          'name': 'left-top-min',
          'type': 'Number , String',
          'defaultValue': '该属性的默认值为 40px',
          'desc': { 'zh-CN': '左面板 / 上面板最小阈值。', 'en-US': 'Minimum threshold on the left or upper panel.' },
          'demoId': 'split-threshold'
        },
        {
          'name': 'mode',
          'type': 'String',
          'defaultValue': '该属性的默认值为 horizontal',
          'desc': {
            'zh-CN':
              '分割类型，可选值为 horizontal 或 vertical；默认值horizontal。;该属性的可选值为 horizontal / vertical',
            'en-US':
              'Separation type. The value can be horizontal or vertical. The default value is horizontal. ;The optional values of this attribute are horizontal / vertical'
          },
          'demoId': 'split-mode'
        },
        {
          'name': 'right-bottom-min',
          'type': 'Number , String',
          'defaultValue': '该属性的默认值为 40px',
          'desc': { 'zh-CN': '右面板 / 下面板最小阈值。', 'en-US': 'Minimum threshold on the right or lower panel.' },
          'demoId': 'split-threshold'
        },
        {
          'name': 'modelValue',
          'type': 'Number , String',
          'defaultValue': '该属性的默认值为 0.5',
          'desc': { 'zh-CN': '分割面板的位置。', 'en-US': 'Position of the split panel.' },
          'demoId': 'basic-usage'
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
            'zh-CN': '拖拽中的事件。;拖拽中的事件。;arg1:event (类型Object)',
            'en-US': 'Draging events. ;Drag the event in. ; arg1:event (type Object)'
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
