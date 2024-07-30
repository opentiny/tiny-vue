export default {
  mode: ['pc'],
  apis: [
    {
      name: 'split',
      type: 'component',
      props: [
        {
          name: 'collapse-left-top',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '简易模式启用左/上展开收起按钮',
            'en-US': 'Easy Mode Enables Left/Top Expand Collapse Button'
          },
          mode: ['pc'],
          pcDemo: 'split-threshold'
        },
        {
          name: 'collapse-right-bottom',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '简易模式启用右/下展开收起按钮',
            'en-US': 'Easy Mode Enables Right/Down Expand Collapse Button'
          },
          mode: ['pc'],
          pcDemo: 'split-threshold'
        },
        {
          mode: []
        },
        {
          name: 'left-top-min',
          type: 'number | string',
          defaultValue: '40px',
          desc: {
            'zh-CN': '左面板 / 上面板最小阈值',
            'en-US': 'Minimum threshold on the left or upper panel.'
          },
          mode: ['pc'],
          pcDemo: 'split-threshold'
        },
        {
          name: 'mode',
          type: "'horizontal' | 'vertical'",
          defaultValue: 'horizontal',
          desc: {
            'zh-CN': '分割类型，可选值为 horizontal 或 vertical；默认值horizontal',
            'en-US':
              'Separation type. The value can be horizontal or vertical. The default value is horizontal. ;The optional values of this attribute are horizontal / vertical'
          },
          mode: ['pc'],
          pcDemo: 'split-mode'
        },
        {
          name: 'modelValue',
          type: 'number | string',
          defaultValue: '0.5',
          desc: {
            'zh-CN': '分割面板的位置',
            'en-US': 'Position of the split panel.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'right-bottom-min',
          type: 'number | string',
          defaultValue: '40px',
          desc: {
            'zh-CN': '右面板 / 下面板最小阈值',
            'en-US': 'Minimum threshold on the right or lower panel.'
          },
          mode: ['pc'],
          pcDemo: 'split-threshold'
        },
        {
          name: 'three-areas',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '配置3个区块',
            'en-US': 'Three blocks are configured.'
          },
          mode: ['pc'],
          pcDemo: 'split-threshold'
        },
        {
          name: 'border',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示边框',
            'en-US': 'Indicates whether to display the border.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'right-bottom-value',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN':
              '默认情况下，v-model的值为左/上面板的位置。 当设置right-bottom-value 为true时，指明 v-model的值为 右/下面板的位置。 ',
            'en-US':
              'By default, the value of v-model is the position of the left/top panel. When right-bottom-value is set to true, the value of v-model is the position of the right/lower panel.'
          },
          mode: ['pc'],
          pcDemo: ''
        }
      ],
      events: [
        {
          name: 'left-top-click',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '左箭头收起时触发',
            'en-US': 'Triggered when the left arrow is folded'
          },
          mode: ['pc'],
          pcDemo: 'moving-event'
        },
        {
          name: 'moveend',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '拖拽结束的事件',
            'en-US': 'Drag end event. ;Drag end event. ;No arguments'
          },
          mode: ['pc'],
          pcDemo: 'moveend-event'
        },
        {
          name: 'movestart',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '拖拽开始的事件',
            'en-US': 'Drag start event. ;Drag start event. ;No arguments'
          },
          mode: ['pc'],
          pcDemo: 'movestart-event'
        },
        {
          name: 'moving',
          type: '(event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '拖拽中的事件',
            'en-US': 'Draging events. ;Drag the event in. ; arg1:event (type object)'
          },
          mode: ['pc'],
          pcDemo: 'moving-event'
        },
        {
          name: 'right-bottom-click',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '右箭头收起时触发',
            'en-US': 'Triggered when the right arrow is folded'
          },
          mode: ['pc'],
          pcDemo: 'moving-event'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'bottom',
          defaultValue: '',
          desc: {
            'zh-CN': '下面板插槽',
            'en-US': 'Slot on the lower panel'
          },
          mode: ['pc'],
          pcDemo: 'top-bottom-slot'
        },
        {
          name: 'left',
          defaultValue: '',
          desc: {
            'zh-CN': '左面板插槽',
            'en-US': 'Slot on the left panel'
          },
          mode: ['pc'],
          pcDemo: 'left-right-slot'
        },
        {
          name: 'right',
          defaultValue: '',
          desc: {
            'zh-CN': '右面板插槽',
            'en-US': 'Right panel slot'
          },
          mode: ['pc'],
          pcDemo: 'left-right-slot'
        },
        {
          name: 'top',
          defaultValue: '',
          desc: {
            'zh-CN': '上面板插槽',
            'en-US': 'Slot on the upper panel'
          },
          mode: ['pc'],
          pcDemo: 'top-bottom-slot'
        },
        {
          name: 'trigger',
          defaultValue: '',
          desc: {
            'zh-CN': '拖拽插槽',
            'en-US': 'Drag Slot'
          },
          mode: ['pc'],
          pcDemo: 'trigger-slot'
        }
      ]
    }
  ]
}
