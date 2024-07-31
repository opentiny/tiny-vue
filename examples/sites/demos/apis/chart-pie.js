export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart-pie',
      type: 'component',
      props: [
        {
          name: 'cancel-resize-check',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用 resize 时的容器检测',
            'en-US': 'Whether to disable container detection during resize'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'change-delay',
          type: 'number',
          defaultValue: "'0'",
          desc: {
            'zh-CN': '属性修改触发图表重绘回调的延迟',
            'en-US': 'Delay for triggering chart redrawing callback after attribute modification'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'data',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '数据由指标和维度组成,“维度” 指的是数据的属性,“指标” 是量化衡量标准',
            'en-US':
              'Data consists of indicators and dimensions. Dimension refers to data attributes, and indicator refers to quantitative measurement standards.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'events',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '事件绑定',
            'en-US': 'Event binding'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'extend',
          typeAnchorName: 'chart#IChartProps',
          type: 'IChartProps',
          defaultValue: '',
          desc: {
            'zh-CN': 'echarts 的配置项',
            'en-US': 'Configuration items of echarts'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'height',
          type: 'string',
          defaultValue: "'400px'",
          desc: {
            'zh-CN': '设置图表容器的高度。',
            'en-US': 'Set the height of the chart container.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'init-options',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': 'init 附加参数',
            'en-US': 'Init Additional Parameters'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'judge-width',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否处理生成图表时的宽度问题',
            'en-US': 'Do you want to process the width issue when generating charts?'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'legend-visible',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示图例',
            'en-US': 'Display legend'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'not-set-unchange',
          type: 'array',
          defaultValue: '',
          desc: {
            'zh-CN': '未发生变化时不参加 setOption 的属性',
            'en-US': 'The setOption attribute does not change.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'resize-delay',
          type: 'number',
          defaultValue: "'200'",
          desc: {
            'zh-CN': '窗口 resize 事件回调的延迟',
            'en-US': 'Delay of the window resize event callback'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'resizeable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否处理窗口 resize 事件',
            'en-US': 'Whether to process the window resize event'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'set-option-opts',
          type: 'boolean | object',
          defaultValue: 'true',
          desc: {
            'zh-CN': 'echarts setOption 的第二个参数',
            'en-US': 'Echarts setOption second parameter'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          mode: []
        },
        {
          name: 'theme',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义主题名称。;自定义主题对象。',
            'en-US': 'User-defined theme name. ;User-defined theme object.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'theme-name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义主题名称,如果设置了 theme-name, 则 theme 无效',
            'en-US': 'User-defined theme name. If theme-name is set, the theme is invalid.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'tooltip-visible',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示提示框',
            'en-US': 'Display dialog box'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'width',
          type: 'string',
          defaultValue: "'auto'",
          desc: {
            'zh-CN': '设置图表容器的宽度。',
            'en-US': 'Set the width of the chart container.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'width-change-delay',
          type: 'number',
          defaultValue: "'300'",
          desc: {
            'zh-CN': '容器宽度变化的延迟',
            'en-US': 'Container width change delay'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'options',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '图表配置项(无法与settings混用)',
            'en-US': 'Chart Configuration item (cannot be used together with settings)'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'settings',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '配置项',
            'en-US': 'Chart Configuration items'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'color-mode',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义颜色模式',
            'en-US': 'Custom color mode'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'mark-line',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '图表标线',
            'en-US': 'Chart markings'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'mark-area',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '图表标志区域',
            'en-US': 'Chart symbol area'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'mark-point',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '图表标点',
            'en-US': 'Chart punctuation'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'loading',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '图表加载状态',
            'en-US': 'Chart loading status'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'data-empty',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '暂无数据状态',
            'en-US': 'No data status available at the moment'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'before-config',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '对数据提前进行额外的处理,在数据转化为配置项开始前触发',
            'en-US':
              'Perform additional processing on the data in advance, triggering before the data is converted into configuration items'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'after-config',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '对生成好的echarts配置进行额外的处理,在数据转化为配置项结束后触发',
            'en-US':
              'Perform additional processing on the generated echarts configuration and trigger it after the data is converted into configuration items'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'after-set-option',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '生成图之后获取 echarts 实例',
            'en-US': 'After generating the graph, obtain the echarts instance'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'after-set-option-once',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '生成图之后获取 echarts 实例(只执行一次)',
            'en-US': 'After generating the graph, obtain the echarts instance (executed only once)'
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
            interface Options {
                theme: string // 主题, 默认值: cloud-light
                color: array | string // 颜色
                title: object // 中心文本配置
                legend: object // 图例配置, 默认显示
                tipHtml: function // 悬浮提示框内容配置, 默认显示
                tipHtmlStyle: object // 悬浮提示框样式配置, 默认值: { padding: [14,16] }
                event: object // 图表事件, 默认不触发
                data: array // 图表数据(必填)
                type: string // 圆盘图类型, 默认值: circle
                position: object // 图标位置及大小, 默认值: { center: ['50%','45%'], radius: ['44%', '50%'] }
                minAngle: number // 最小扇区角度
                silent: boolean // 是否关闭hover动效, 默认值: false
                label: object // 外侧文本配置, 默认显示
                itemStyle: object // 图表数据点文本样式, 默认值: { borderColor: '#ffffff', borderWidth: 3, borderRadius: 0 }
                stillShowZeroSum: boolean // 是否在数据和为0的时候仍显示扇区, 默认值: true
                selectedMode: boolean // 扇区选中模式配置, 默认值: false
                roseType: boolean // 是否展示成南丁格尔图, 默认值: false
            }`
    }
  ]
}
