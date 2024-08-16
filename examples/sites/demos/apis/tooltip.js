export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'tooltip',
      type: 'component',
      props: [
        {
          name: 'append-to-body',
          type: 'boolean',
          defaultValue: ' true',
          desc: {
            'zh-CN': '是否将弹出层的元素添加到body上',
            'en-US': 'Whether to append to body'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'close-delay',
          type: 'number',
          defaultValue: '300',
          desc: {
            'zh-CN': '延迟关闭的时长，单位毫秒',
            'en-US': 'Close Delay time, in milliseconds.'
          },
          mode: ['pc'],
          pcDemo: 'delay'
        },
        {
          name: 'content',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '显示的内容',
            'en-US': 'Displayed content.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'content',
          mfDemo: ''
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': 'Tooltip 是否禁用',
            'en-US': 'Whether Tooltip is disable'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'control',
          mfDemo: ''
        },
        {
          name: 'effect',
          type: "'dark' | 'light'",
          defaultValue: "'dark'",
          desc: {
            'zh-CN': '提示的主题',
            'en-US': 'Default theme'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'theme',
          mfDemo: ''
        },
        {
          name: 'enterable',
          type: 'boolean',
          defaultValue: ' true',
          desc: {
            'zh-CN': '鼠标是否可进入到 tooltip 的弹出层中',
            'en-US': 'Whether the mouse can enter the pop-up layer of the tooltip'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-popper',
          mfDemo: ''
        },
        {
          name: 'hide-after',
          type: 'number',
          defaultValue: ' 0',
          desc: {
            'zh-CN': '出现后自动隐藏的时长，单位毫秒，为 0 则不会自动隐藏',
            'en-US':
              'Duration of automatic hiding after appearing, in milliseconds. If 0, it will not be automatically hidden'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'delay',
          mfDemo: ''
        },
        {
          name: 'manual',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效',
            'en-US':
              'Manual control mode. If this parameter is set to true, the mouseenter and mouseleave events do not take effect.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'control',
          mfDemo: ''
        },
        {
          name: 'modelValue / v-model',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '配置 manual = true时，控制弹出状态',
            'en-US': 'If manual is set to true, the pop-up status is controlled'
          },
          mode: ['pc'],
          pcDemo: 'control'
        },
        {
          name: 'offset',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '弹出层出现位置的偏移量',
            'en-US': 'Offset of the occurrence position'
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
            'zh-CN': '延迟出现的时长，单位毫秒',
            'en-US': 'Open delay time, in milliseconds.'
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
            'zh-CN': 'Tooltip 的出现位置',
            'en-US': 'Location where the tooltip appears'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '为 Tooltip 的弹出层添加类名',
            'en-US': 'Add a class name to the pop-up layer of Tooltip'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-popper',
          mfDemo: ''
        },
        {
          name: 'popper-options',
          typeAnchorName: 'IPopperOption',
          type: 'IPopperOption',
          defaultValue: ' { }',
          desc: {
            'zh-CN': '弹出层参数',
            'en-US': 'Advanced parameters; Refer to the description of IPopperOption'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'popper-options',
          mfDemo: ''
        },
        {
          name: 'pre',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': 'content 文本是否预格式化',
            'en-US': 'Indicates whether the content text is preformatted.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'content',
          mfDemo: ''
        },
        {
          name: 'renderContent',
          type: '(h: Vue.h, content:string)=> VNode',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义渲染函数,返回需要渲染的节点内容',
            'en-US': 'A custom rendering function that returns the contents of the node to be rendered'
          },
          mode: ['pc'],
          pcDemo: 'content'
        },
        {
          name: 'tabindex',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '设置组件的触发源的 tabindex',
            'en-US': 'Sets the tabindex of the trigger source of the component.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'transition',
          type: 'string',
          defaultValue: "'tiny-fade-in-linear'",
          desc: {
            'zh-CN': '定义渐变动画的类名',
            'en-US': 'Define the class name of the gradient animation'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'transition',
          mfDemo: ''
        },
        {
          name: 'type',
          type: "'normal' | 'warning' | 'error' | 'info' | 'success'",
          defaultValue: '',
          desc: {
            'zh-CN': '提示的类型， type 的优先级大于 effect ',
            'en-US': 'The default type is provided. The priority of type is higher than that of effect.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'theme',
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '状态是否可见',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'visible',
          type: " 'always' | 'auto'",
          defaultValue: "'always'",
          desc: {
            'zh-CN': '提示的智能出现的模式',
            'en-US': 'The pattern of intelligent emergence of hints'
          },
          mode: ['pc'],
          pcDemo: 'control'
        },
        {
          name: 'visible-arrow',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示箭头',
            'en-US': 'Indicates whether to display the tooltip arrow.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-popper',
          mfDemo: ''
        },
        {
          name: 'z-index',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置 z-index 属性为 relative 时，弹出层样式属性 zIndex 值参考 Reference 及其父级 Dom',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'content',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '内容插槽',
            'en-US': 'Content Slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'content',
          mfDemo: ''
        },
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
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
