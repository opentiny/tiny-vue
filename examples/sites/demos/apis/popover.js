export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'popover',
      type: 'component',
      props: [
        {
          name: 'append-to-body',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否添加到body上',
            'en-US': 'Whether to add it to the body'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'arrow-offset',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '弹出层的箭头偏移位置',
            'en-US': "the layer's arrow offset "
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'offset',
          mfDemo: ''
        },
        {
          name: 'close-delay',
          type: 'number',
          defaultValue: '200',
          desc: {
            'zh-CN': '触发方式为 hover 时的隐藏延迟，单位为毫秒',
            'en-US': 'The close delay when the trigger mode is hover, in milliseconds'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'delay',
          mfDemo: ''
        },
        {
          name: 'content',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '弹出层的内容',
            'en-US': 'Layer Content.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Whether the status is visible'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'disabled',
          mfDemo: ''
        },
        {
          name: 'height',
          type: "'auto' | number",
          defaultValue: "'auto'",
          desc: {
            'zh-CN': '弹出层高度',
            'en-US': 'Layer height'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'offset',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '弹出层的偏移量',
            'en-US': 'Layer offset'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'offset',
          mfDemo: ''
        },
        {
          name: 'open-delay',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '触发方式为 hover 时的显示延迟，单位为毫秒',
            'en-US': 'The display delay when the trigger mode is hover, in milliseconds'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'delay',
          mfDemo: ''
        },
        {
          name: 'placement',
          typeAnchorName: 'IPopperPlacement',
          type: 'IPopperPlacement',
          defaultValue: "'bottom'",
          desc: {
            'zh-CN': '弹出层出现的位置',
            'en-US': 'Layer Placement'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-popper',
          mfDemo: ''
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '为弹出层添加类名',
            'en-US': 'Add a class name for the pop-up layer.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-popper',
          mfDemo: ''
        },
        {
          name: 'popper-options',
          type: 'IPopperOption',
          typeAnchorName: 'IPopperOption',
          defaultValue: '{}',
          desc: {
            'zh-CN': '弹出层参数',
            'en-US': 'layer parameters; Refer to the description of IPopperOption'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'popper-options',
          mfDemo: ''
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '弹出层的标题',
            'en-US': 'Layer Title'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'transform-origin',
          type: 'Boolean | String',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>组件的旋转中心点</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'transition',
          type: 'string',
          defaultValue: "'fade-in-linear'",
          desc: {
            'zh-CN': '定义渐变动画',
            'en-US': 'Define gradient animation'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'transition',
          mfDemo: ''
        },
        {
          name: 'trigger',
          type: "'click' | 'focus' | 'hover' | 'manual'",
          defaultValue: "'click'",
          desc: {
            'zh-CN': '触发方式',
            'en-US': 'Trigger mode'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'trigger',
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '状态是否可见',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'v-model / modelValue',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '状态是否可见，仅在 <code> trigger="manual" </code> 时有效',
            'en-US': 'Status is visible only when <code>trigger="manual"</code>'
          },
          mode: ['pc'],
          pcDemo: 'trigger'
        },
        {
          name: 'visible-arrow',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示弹出层的箭头',
            'en-US': "whether to show layer's arrow"
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-popper',
          mfDemo: ''
        },
        {
          name: 'width',
          type: "'auto' | number",
          defaultValue: "'auto'",
          desc: {
            'zh-CN': '弹出层宽度',
            'en-US': 'Layer width'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'after-enter',
          type: '() =>void',
          defaultValue: '',
          desc: {
            'zh-CN': '进入的动画播放完毕后触发',
            'en-US': 'This event is triggered after the animation is played.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: ''
        },
        {
          name: 'after-leave',
          type: '() =>void',
          defaultValue: '',
          desc: {
            'zh-CN': '离开的动画播放完毕后触发',
            'en-US': 'Triggered after the hidden animation is played.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: ''
        },
        {
          name: 'hide',
          type: '() =>void',
          defaultValue: '',
          desc: {
            'zh-CN': '隐藏时触发',
            'en-US': 'Triggered when hidden'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: ''
        },
        {
          name: 'show',
          type: '() =>void',
          defaultValue: '',
          desc: {
            'zh-CN': '显示时触发',
            'en-US': 'Triggered when display'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '弹出层元素插槽',
            'en-US': 'The layer element slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'content',
          mfDemo: ''
        },
        {
          name: 'reference',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '触发源元素插槽，该插槽是必传插槽。',
            'en-US': "The layer's reference element slot"
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'content',
          mfDemo: ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'IPopperOption',
      type: 'interface',
      code: `
interface IPopperOption {
  bubbling: boolean // 是否监听元素所有上级有滚动元素的scroll事件，监听到则更新popper的位置。用于解决某些弹出层位置在页面滚动时，位置不正确的场景，默认false
  followReferenceHide: boolean // 当触发源隐藏时，自动隐藏弹出层，默认true
  removeOnDestroy: boolean // 弹出层消失后，是否移除弹出层的DOM元素，布尔false
  updateHiddenPopperOnScroll: boolean  // 滚动过程中是否更新隐藏的弹出层位置
  boundariesElement: 'viewport' | 'body' | HTMLElement // 滚动过程中,弹出层的碰撞边界。 默认值为： 'viewport'
  ignoreBoundaries: boolean  // 忽略边界判断，弹出的位置始终是设置的 placement 值
  scrollParent:  HTMLElement  // 指定滚动的父节点，优化级最高。 默认为null
}
      `
    },
    {
      name: 'IPopperPlacement',
      type: 'type',
      code: `
type IPopperPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
      `
    }
  ]
}
