export default {
  mode: ['pc'],
  apis: [
    {
      name: 'number-animation',
      type: 'component',
      props: [
        {
          name: 'active',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否开始动画',
            'en-US': 'Whether or not start animation'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'duration',
          type: 'number',
          defaultValue: '3000',
          desc: {
            'zh-CN': '动画持续时间',
            'en-US': 'Animation duration'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'from',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '数值动画起始值',
            'en-US': 'Starting value of numerical animation'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'to',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '目标值',
            'en-US': 'Target value'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'precision',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '精度，保留小数点后几位',
            'en-US': 'Precision, rounded to a few decimal places.'
          },
          mode: ['pc'],
          pcDemo: 'precision'
        },
        {
          name: 'separator',
          type: 'string',
          defaultValue: ',',
          desc: {
            'zh-CN': '千分位分隔符',
            'en-US': 'Thousandth separator'
          },
          mode: ['pc'],
          pcDemo: 'separator'
        }
      ],
      events: [
        {
          name: 'finish',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '动画结束后的回调',
            'en-US': 'The callback after the animation ends.'
          },
          mode: ['pc'],
          pcDemo: 'finish-events'
        }
      ],
      methods: [
        {
          name: 'play',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '播放动画',
            'en-US': 'Play Animation'
          },
          mode: ['pc'],
          pcDemo: 'finish-events'
        }
      ],
      slots: []
    }
  ]
}
