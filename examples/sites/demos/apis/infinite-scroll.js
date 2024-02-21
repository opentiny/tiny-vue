export default {
  mode: ['pc'],
  apis: [
    {
      name: 'infinite-scroll',
      type: 'component',
      props: [
        {
          name: 'infinite-scroll-delay',
          type: 'number',
          defaultValue: '200',
          desc: {
            'zh-CN': '加载延时，单位为 ms',
            'en-US': 'Loading delay, the unit is millisecond.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'infinite-scroll-disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用滚动',
            'en-US': 'Whether to disable scrolling. '
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        },
        {
          name: 'infinite-scroll-distance',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '加载触发距离阈值，单位为 px',
            'en-US': 'Threshold of the load triggering distance,the unit is px. '
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'infinite-scroll-immediate',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否立即加载，以防初始状态下内容无法撑满容器',
            'en-US':
              'Indicates whether to load the container immediately to prevent the container from being full in the initial state.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'v-infinite-scroll',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '无限滚动加载指令，指定加载方法',
            'en-US': 'Infinite roll load instruction, specifying the load method.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
