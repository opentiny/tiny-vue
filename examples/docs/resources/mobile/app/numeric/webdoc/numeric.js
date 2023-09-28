export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'automatic-price',
      name: {
        'zh-CN': '根据商品数量自动计算价格',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>根据商品数量自动计算价格</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['automatic-price.vue']
    },
    {
      demoId: 'circulate',
      name: {
        'zh-CN': '是否循环',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>是否循环</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['circulate.vue']
    },
    {
      demoId: 'controls-position',
      name: {
        'zh-CN': '控制按钮显示位置',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>控制按钮显示位置</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['controls-position.vue']
    },
    {
      demoId: 'controls',
      name: {
        'zh-CN': '控制按钮',
        'en-US': 'controls'
      },
      desc: {
        'zh-CN': '<p>控制按钮</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['controls.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件',
        'en-US': 'event'
      },
      desc: {
        'zh-CN': '<p>事件</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['event.vue']
    },
    {
      demoId: 'max',
      name: {
        'zh-CN': '最大值最小值',
        'en-US': 'max'
      },
      desc: {
        'zh-CN': '<p>最大值最小值</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['max.vue']
    },
    {
      demoId: 'placeholder',
      name: {
        'zh-CN': '占位文本',
        'en-US': 'placeholder'
      },
      desc: {
        'zh-CN': '<p>通过<code>placeholder</code>属性设置输入框占位文本。</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['placeholder.vue']
    },
    {
      demoId: 'precision',
      name: {
        'zh-CN': '数值精度',
        'en-US': 'precision'
      },
      desc: {
        'zh-CN': '<p>数值精度</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['precision.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'size'
      },
      desc: {
        'zh-CN': '<p>尺寸</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'step',
      name: {
        'zh-CN': '步长',
        'en-US': 'step'
      },
      desc: {
        'zh-CN': '<p>步长</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['step.vue']
    }
  ],
  apis: [
    {
      name: 'Numeric', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'circulate',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>向上到达最大值后从最小值开始，或反过来，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'circulate'
        },
        {
          name: 'controls',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>是否使用控制按钮，该属性默认为true</p>',
            'en-US': 'display different button'
          },
          demoId: 'controls'
        },
        {
          name: 'controls-position',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>控制按钮位置</p>',
            'en-US': 'display different button'
          },
          demoId: 'controls-position'
        },
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否禁用计数器。该属性默认为false。</p>',
            'en-US': 'display different button'
          },
          demoId: ''
        },
        {
          name: 'label',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>输入框关联的label文字</p>',
            'en-US': 'display different button'
          },
          demoId: ''
        },
        {
          name: 'max',
          type: 'Number',
          defaultValue: 'Infinity',
          desc: {
            'zh-CN': '<p>设置计数器允许的最大值，该属性默为 Infinity。</p>',
            'en-US': 'display different button'
          },
          demoId: 'max'
        },
        {
          name: 'min',
          type: 'Number',
          defaultValue: '-Infinity',
          desc: {
            'zh-CN': '<p>设置计数器允许的最小值，该属性默为 -Infinity</p>',
            'en-US': 'display different button'
          },
          demoId: 'max'
        },
        {
          name: 'placeholder',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>输入框占位文本</p>',
            'en-US': 'display different button'
          },
          demoId: 'placeholder'
        },
        {
          name: 'precision',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>数值精度</p>',
            'en-US': 'display different button'
          },
          demoId: 'precision'
        },
        {
          name: 'size',
          type: 'Number | String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>计数器尺寸，可选值：larger</p>',
            'en-US': 'display different button'
          },
          demoId: 'precision'
        },
        {
          name: 'step',
          type: 'Number',
          defaultValue: '1',
          desc: {
            'zh-CN': '<p>设置按上下方向键或点击上下按钮增减的数值，该属性默认步长为 1。</p>',
            'en-US': 'display different button'
          },
          demoId: 'step'
        },
        {
          name: 'step-strictly',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否只能输入 step 的倍数,该属性默认为false。</p>',
            'en-US': 'display different button'
          },
          demoId: 'step'
        },
        {
          name: 'theme',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置圆角风格按钮</p>',
            'en-US': 'display different button'
          },
          demoId: ''
        },

        {
          name: 'value',
          type: 'Number',
          defaultValue: '0',
          desc: {
            'zh-CN': '<p>设置输入组件的默认值，该属性默认为 0。</p>',
            'en-US': 'display different button'
          },
          demoId: ''
        }
      ],
      events: [
        {
          name: 'change',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置组件的值变化时触发的回调函数。</p>',
            'en-US': 'Click'
          },
          demoId: 'event'
        },
        {
          name: 'blur',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置组件失去焦点时触发的回调函数。</p>',
            'en-US': 'Click'
          },
          demoId: 'event'
        },
        {
          name: 'focus',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置组件获得焦点时触发的回调函数。</p>',
            'en-US': 'Click'
          },
          demoId: 'event'
        }
      ]
    }
  ]
}
