export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'carousel',
      type: 'component',
      props: [
        {
          name: 'arrow',
          type: 'string',
          defaultValue: "'hover'",
          desc: {
            'zh-CN': '切换箭头的显示效果，该属性的可选值为 always / hover / never',
            'en-US': 'Switch the display effect of arrows,The optional values for this attribute are always/hover/never'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'up-down-carousel',
          mfDemo: ''
        },
        {
          name: 'aspect-ratio',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '宽高比，默认为16:2。',
            'en-US': 'Aspect ratio. The default value is 16:2.'
          },
          mode: ['mobile-first'],
          mfDemo: 'aspect-ratio'
        },
        {
          name: 'autoplay',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否自动切换',
            'en-US': 'Whether to automatically switch'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'autoplay',
          mfDemo: ''
        },
        {
          name: 'height',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '走马灯的高度',
            'en-US': 'The height of the lantern'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'indicator-trigger',
          mfDemo: ''
        },
        {
          name: 'indicator-position',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '指示器的位置，该属性的可选值为 outside / none',
            'en-US': 'The position of the indicator. The optional values for this attribute are outside/none'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'indicator-trigger',
          mfDemo: ''
        },
        {
          name: 'indicator-style',
          type: 'String',
          defaultValue: "'light'",
          desc: {
            'zh-CN': '指示器的样式，该属性的可选值为 light/dark',
            'en-US': 'The style of the indicator, The optional values for this attribute are light/mark.'
          },
          mode: ['mobile-first'],
          mfDemo: 'indicator-style'
        },
        {
          name: 'initial-index',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '初始状态激活的幻灯片的索引，从 0 开始',
            'en-US': 'Index of slides activated in initial state, starting from 0'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'manual-play',
          mfDemo: ''
        },
        {
          name: 'interval',
          type: 'number',
          defaultValue: '3000',
          desc: {
            'zh-CN': '自动切换的时间间隔，单位为毫秒',
            'en-US': 'The time interval for automatic switching, in milliseconds'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'play-interval',
          mfDemo: ''
        },
        {
          name: 'loop',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否循环显示',
            'en-US': 'Whether to display in a loop'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'close-loop',
          mfDemo: ''
        },
        {
          name: 'show-title',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示标题',
            'en-US': 'Is the title displayed'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'show-title',
          mfDemo: ''
        },
        {
          name: 'trigger',
          type: 'string',
          defaultValue: "'hover'",
          desc: {
            'zh-CN': '指示器的触发方式，该属性的可选值为 hover / click',
            'en-US': 'The triggering method of the indicator. The optional value for this attribute is click'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'indicator-trigger',
          mfDemo: ''
        },
        {
          name: 'type',
          type: 'string',
          defaultValue: "'horizontal'",
          desc: {
            'zh-CN': '走马灯的类型，该属性的可选值为 horizontal / vertical / card',
            'en-US': 'The type of horse lantern,The optional values for this attribute are horizontal/vertical/card'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'card-mode',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'change',
          type: '(curIndex: number, preIndex: number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '幻灯片切换时触发，第一个参数为当前幻灯片索引，第二个参数为上一张幻灯片索引',
            'en-US':
              'Trigger during slide transition, The first parameter is the current slide index, and the second parameter is the index of the previous slide'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'carousel-events',
          mfDemo: ''
        }
      ],
      methods: [
        {
          name: 'next',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '切换至下一张幻灯片',
            'en-US': 'Switch to the next slide'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'manual-play',
          mfDemo: ''
        },
        {
          name: 'prev',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '切换至上一张幻灯片',
            'en-US': 'Switch to the previous slide'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'manual-play',
          mfDemo: ''
        },
        {
          name: 'setActiveItem',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '手动切换幻灯片，参数为需要切换的幻灯片的索引，从 0 开始',
            'en-US':
              'Manually switch slides,the parameter is the index of the slides that need to be switched, starting from 0'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'manual-play',
          mfDemo: ''
        }
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'manual-play',
          mfDemo: ''
        }
      ]
    },
    {
      name: 'carousel-item',
      type: 'component',
      props: [
        {
          name: 'name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '幻灯片名称',
            'en-US': 'Slide Name'
          },
          mode: ['pc'],
          pcDemo: 'manual-play'
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '幻灯片标题',
            'en-US': 'Slide Title'
          },
          mode: ['pc'],
          pcDemo: 'show-title'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          mode: ['pc'],
          pcDemo: 'card-show'
        }
      ]
    }
  ]
}
