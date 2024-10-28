export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart-autonavi-map',
      type: 'component',
      options: [
        {
          name: 'key',
          type: 'string',
          defaultValue: '无',
          typeAnchorName: 'Key',
          desc: {
            'zh-CN': '高德地图秘钥',
            'en-US': 'Gaode Map Key'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'url',
          type: 'string',
          defaultValue: '见详情',
          typeAnchorName: 'Url',
          desc: {
            'zh-CN': '高德地图前缀地址',
            'en-US': 'Gaode map prefix address'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'v',
          type: 'string',
          defaultValue: '1.4.3',
          typeAnchorName: 'V',
          desc: {
            'zh-CN': '高德地图版本',
            'en-US': 'Gaode Map Version'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'amap',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'AMap',
          desc: {
            'zh-CN': '高德地图配置项',
            'en-US': 'Gaode Map Configuration Item'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'series',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'Series',
          desc: {
            'zh-CN': '高德地图插件配置项',
            'en-US': 'Gaode Map Plugin Configuration Item'
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
      name: 'AMap',
      type: 'interface',
      code: `
            格式示例：

amap: {
    viewMode: '3D',
    resizeEnable: true,
    center: [118.79322240845, 31.936064370321],
    zoom: 10
  },

说明：通过配置\`amap\`属性，修改高德地图的初始配置属性。<br/>
\`viewMode\`：高德地图的3D模式，无论你使用的是1.x版本还是2.x版本，都建议开启此项以获得更好的渲染体验。<br/>
\`resizeEnable\`：是否开启高德地图resize。<br/>
\`center\`：高德地图中心经纬度。<br/>
\`zoom\`：高德地图缩放级别。<br/>
其他更多属性配置可见Echarts高德地图扩展的git网址：<a href='https://github.com/plainheart/echarts-extension-amap/blob/master/README.zh-CN.md' target="_blank">https://github.com/plainheart/echarts-extension-amap/blob/master/README.zh-CN.md</a>。`
    },
    {
      name: 'Key',
      type: 'interface',
      code: `
            说明：通过配置\`key\`属性，修改高德地图api的密钥。<br/>`
    },
    {
      name: 'Series',
      type: 'interface',
      code: `
            格式示例：

  series: [
    {
      type: 'scatter',
      coordinateSystem: 'amap',
      data: [[118.79, 31.936, 8], [119, 32, 20]],
      encode: {
        value: 2
      }
    }
  ]

说明：通过配置\`series\`属性，修改高德地图的初始配置属性。<br/>
其他更多属性配置可见Echarts高德地图扩展的git网址：<a href='https://github.com/plainheart/echarts-extension-amap/blob/master/README.zh-CN.md' target="_blank">https://github.com/plainheart/echarts-extension-amap/blob/master/README.zh-CN.md</a>。`
    },
    {
      name: 'Url',
      type: 'interface',
      code: `
            说明：通过配置\`url\`属性，修改高德地图api的前缀地址。<br/>
`
    },
    {
      name: 'V',
      type: 'interface',
      code: `
            说明：通过配置v属性，修改高德地图api的版本号，默认1.4.3。<br/>
`
    }
  ]
}
