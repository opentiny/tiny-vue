export default {
    mode: ['pc'],
    apis: [
        {
            name: 'chart',
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
                    pcDemo: 'chart/question#question-base'
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
                    pcDemo: 'chart/question#question-base'
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
                    pcDemo: 'chart'
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
                    pcDemo: 'chart-events'
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
                    pcDemo: 'chart'
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
                    pcDemo: 'chart/attributes-demo#props-demo10'
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
                    pcDemo: 'chart/attributes-demo#props-demo10'
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
                    pcDemo: 'chart-events'
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
                    pcDemo: 'chart/attributes-demo#props-demo10'
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
                    pcDemo: 'chart/attributes-demo#props-demo10'
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
                    pcDemo: 'chart/question#question-base'
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
                    pcDemo: 'chart#base'
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
                    pcDemo: 'chart#base'
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
                    pcDemo: 'chart/attributes-demo#props-demo10'
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
                    pcDemo: 'chart/attributes-demo#props-demo10'
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
                    pcDemo: 'chart/question#question-base'
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
                }
            ],

            events: [],
            methods: [],
            slots: []
        }
    ],
    types: [
        {
            name: 'IChartProps',
            type: 'interface',
            code: `
  interface IChartProps {
    afterConfig: () => void 
    afterSetOption: () => void 
    afterSetOptionOnce: () => void 
    animation: object
    axisPointer: object | array
    backgroundColor: object | string
    beforeConfig: () => void 
    brush: object | array
    cancelResizeCheck: boolean
    changeDelay: number // 默认值 0 
    colorMode: string
    colors: array 
    data: object | array
    dataEmpty: boolean
    dataZoom: object | array
    events: object 
    extend: object
    geo: object | array
    graphic: object | array
    grid: object | array
    height: string // 默认值 '400px' 
    initOptions: object
    judgeWidth: boolean // 默认值 false 
    legend: object | array
    legendPosition: string 
    legendVisible: boolean // 默认值 true 
    loading: boolean
    markArea: object 
    markLine: object 
    markPoint: object 
    notSetUnchange: array
    radar: object
    resizeDelay: number // 默认值 200 
    resizeable: boolean // 默认值 true 
    series: object | array
    setOptionOpts: boolean | object // 默认值 true 
    settings: object
    textStyle: object | array
    theme: object
    themeName: object | string
    timeline: object | array
    title: object | array
    toolbox: object | array
    tooltip: object
    tooltipFormatter: () => void 
    tooltipVisible: boolean // 默认值 true 
    visualMap: object | array 
    width: string // 默认值 'auto' 
    widthChangeDelay: number // 默认值 300 
    xAxis: object | array
    yAxis: object | array
  }`
        },
        {
            name: 'IChartSettings',
            type: 'interface',
            code: `
  interface IChartSettings {
    type: string // 图表类型，可选值' bar '，' histogram '，' line ',' pie '，' ring '，' funnel '，' radar '，' waterfall '
  }`
        },
        {
            name: 'Options',
            type: 'interface',
            code: `
            interface Options {
                theme: string // 主题, 默认值: light
                legend: object // 图例配置, 默认显示
                xAxis: string | object // 配置x轴, 默认值: 图表数据data数据中data[0]对象的第一个key值
                yAxis: array | object // 配置y轴, 默认值: [50,20,50,20]
                padding: array // 图表内边距值, 默认值: [50,20,50,20]
                color: array | string // 颜色
                tipHtml: function // 悬浮提示框内容配置, 默认值: { padding: [14,16] }
                tipHtmlStyle: object // 悬浮提示框样式配置, 默认值: { padding: [14,16] }
                dataZoom: object // 区域缩放轴配置, 默认不显示
                linearGradient: object // 线性渐变
                event: object // 图表事件, 默认不触发
                data: array // 图表数据(必填)
                type: string // 配置柱状图类型, 默认值: bar
                stepGradient: array // 柱体分段渐变
                axisPointer: object // 坐标指示器(数据背景区域样式),(支持 rgb 颜色、英文单词颜色、十六进制颜色), 默认值: rgba(25,25,25,0.08)
                topTipHtml: function // 顶部位置悬浮提示框, 默认不显示
                itemStyle: object // 图表数据点文本样式, 默认值: {barWidth: 8, barGap: '60%'}
                direction: string // 柱体方向, 默认值: vertical
                label: object | array // 柱体文本, 默认不显示
                lineDataName: array // 柱状图更改为折线图的数据名
                markline: object // 阈值线配置, 默认不显示

            }`
        }
    ]
}
