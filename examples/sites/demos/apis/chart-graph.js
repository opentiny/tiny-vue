export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart-graph',
      type: 'component',
      props: [
        {
          name: 'Options',
          type: '',
          defaultValue: '',
          typeAnchorName: 'Options',
          desc: {
            'zh-CN':
              '关系图目前仅支持 eCharts 原生属性配置，使用方式和 eCharts 一致。详细配置请参考：https://echarts.apache.org/examples/zh/index.html#chart-type-graph',
            'en-US':
              '关系图目前仅支持 eCharts 原生属性配置，使用方式和 eCharts 一致。详细配置请参考：https://echarts.apache.org/examples/zh/index.html#chart-type-graph'
          },
          mode: ['pc'],
          pcDemo: ''
        }
      ],

      events: [
        {
          name: 'ready',
          type: '()=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '图表渲染完成后触发，每次渲染都会触发一次',
            'en-US': 'Triggered after the completion of chart rendering, it will be triggered once every rendering'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: '',
          mobileDemo: '',
          mfDemo: ''
        },
        {
          name: 'ready-once',
          type: '()=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '图表渲染完成后触发，只会在首次渲染完成后触发',
            'en-US':
              'Triggered after the completion of chart rendering, it will only be triggered after the first rendering is completed'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: '',
          mobileDemo: '',
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
            'zh-CN': '组件默认插槽',
            'en-US': 'Component Default Slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'Options',
      type: 'interface',
      code: `
                // 使用方法目前仅支持 eCharts 原生属性配置, 使用方法和 echarts 一致。 详细配置请参考https://echarts.apache.org/examples/zh/index.html#chart-type-graph
            `
    }
  ]
}
