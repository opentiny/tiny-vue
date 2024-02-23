export default {
  mode: ['pc'],
  apis: [
    {
      name: 'filter-panel',
      type: 'component',
      props: [
        {
          name: 'blank',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '将过滤器背景设置为透明',
            'en-US': 'Set Filter Background to Transparent'
          },
          mode: ['pc'],
          pcDemo: 'tip'
        },
        {
          mode: []
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Whether to disable'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '标题',
            'en-US': 'The title'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'placement',
          typeAnchorName: 'popover#IPopperPlacement',
          type: 'IPopperPlacement',
          defaultValue: "'bottom-start'",
          desc: {
            'zh-CN': '下拉面板位置，可选值请参考popover组件的同属性',
            'en-US':
              'Drop down panel position, optional values please refer to the same properties of the popover component'
          },
          mode: ['pc'],
          pcDemo: 'popper-class'
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '下拉面板是否添加到body元素中',
            'en-US': 'Indicates whether to add the drop-down panel to the body element'
          },
          mode: ['pc'],
          pcDemo: 'popper-class'
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉面板的class',
            'en-US': 'Class in the drop-down panel'
          },
          mode: ['pc'],
          pcDemo: 'popper-class'
        },
        {
          name: 'tip',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '标题右侧的提示信息',
            'en-US': 'Message on the right of the title'
          },
          mode: ['pc'],
          pcDemo: 'tip'
        },
        {
          name: 'value',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '显示的值',
            'en-US': 'Displayed Values'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ],
      events: [
        {
          name: 'handle-clear',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '清除按钮点击事件',
            'en-US': 'Clear button click event'
          },
          mode: ['pc'],
          pcDemo: 'event'
        },
        {
          name: 'visible-change',
          type: '(visible: boolean) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉面板显示隐藏事件',
            'en-US': 'The drop-down panel displays hidden events'
          },
          mode: ['pc'],
          pcDemo: 'event'
        }
      ],
      methods: [
        {
          name: 'hide',
          type: '() => void',
          desc: {
            'zh-CN': '隐藏下拉面板的方法',
            'en-US': 'How to hide the drop-down panel'
          },
          mode: ['pc'],
          pcDemo: 'manual-hide'
        }
      ],
      slots: [
        {
          name: 'default',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default Slot'
          },
          mode: ['pc'],
          pcDemo: 'code'
        }
      ]
    }
  ]
}
