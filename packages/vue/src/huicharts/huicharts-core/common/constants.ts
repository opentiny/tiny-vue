const SF = () => ({ show: false })
const DEFAULT_THEME = {
  categoryAxis: { axisLine: SF(), axisTick: SF(), splitLine: SF() },
  valueAxis: { axisLine: SF() },
  line: { smooth: true },
  grid: { containLabel: true, left: 10, right: 10 }
}

const DEFAULT_COLORS = [
  '#19d4ae',
  '#5ab1ef',
  '#fa6e86',
  '#ffb980',
  '#0067a6',
  '#c4b4e4',
  '#d87a80',
  '#9cbbff',
  '#d9d0c7',
  '#87a997',
  '#d49ea2',
  '#5b4947',
  '#7ba3a8'
]

const HEAT_MAP_COLOR = ['#5990FD', '#2DA769', '#EEBA18', '#F43146']

const HEAT_BMAP_COLOR = ['blue', 'blue', 'green', 'yellow', 'red']

const _SAAS_DEFAULT_COLORS1 = ['#2070F3', '#00A874', '#745EF7', '#8BC2FF', '#1B3F86', '#FDC000', '#00A2B5']
const _SAAS_DEFAULT_COLORS2 = ['#FC916E', '#1F55B5', '#2D94FF', '#82DBB1', '#F36900', '#2A8290', '#EE8DDB']
const _SAAS_DEFAULT_COLORS3 = ['#278661', '#4FA700', '#5CACFF', '#9185F0', '#B62BF7', '#26616B', '#F46465']
const _SAAS_DEFAULT_COLORS4 = ['#5531EB', '#FCDBAA', '#112857', '#E61866', '#B98C1D', '#D41DBC', '#87D5E5']
const SAAS_DEFAULT_COLORS = _SAAS_DEFAULT_COLORS1
  .concat(_SAAS_DEFAULT_COLORS2)
  .concat(_SAAS_DEFAULT_COLORS3)
  .concat(_SAAS_DEFAULT_COLORS4)

const SAAS_DEFAULT_SAME_COLORS = {
  blue: [
    { color: '#2E94FF', idx: 3 },
    { color: '#8BC3FF', idx: 5 },
    { color: '#1F55B5', idx: 1 },
    { color: '#2070F3', idx: 2 },
    { color: '#5CACFF', idx: 4 },
    { color: '#B9DBFF', idx: 6 },
    { color: '#1B3F86', idx: 0 }
  ],
  green: [
    { color: '#00A874', idx: 3 },
    { color: '#82DBB1', idx: 5 },
    { color: '#236549', idx: 1 },
    { color: '#278661', idx: 2 },
    { color: '#50C291', idx: 4 },
    { color: '#AFEDCE', idx: 6 },
    { color: '#1D4A37', idx: 0 }
  ]
}

const DEFAULT_CONFIG = {
  tooltip: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    padding: [8, 16],
    textStyle: {
      color: '#191919',
      fontSize: '14'
    },
    extraCssText: 'box-shadow:0 8px 20px rgba(0, 0, 0, 0.16);'
  },
  legend: {
    icon: 'circle',
    bottom: 0,
    itemGap: 24,
    itemWidth: 10,
    itemHeight: 10,
    itemStyle: {
      borderColor: 'transparent'
    }
  }
}

const itemPoint = (color) => {
  return [
    '<span style="',
    `background-color:${color};`,
    'display: inline-block;',
    'width: 6px;',
    'height: 6px;',
    'border-radius: 50%;',
    'margin-right:8px;',
    'vertical-align:middle;',
    '"></span>'
  ].join('')
}

const itemLabel = (seriesName, onlyLabel) => {
  return [
    '<span style="',
    `display:inline-block;`,
    `font-size:12px;`,
    `color:#4E4E4E;`,
    `${onlyLabel ? '' : 'margin-right:25px;'}`,
    `">${seriesName}</span>`
  ].join('')
}

const itemContent = (content) => {
  return ['<span style="', `float:right;`, `font-size:14px;`, `color:#191919;`, `">${content}</span>`].join('')
}

const STATIC_PROPS = ['initOptions', 'loading', 'dataEmpty', 'judgeWidth', 'widthChangeDelay']

const ECHARTS_SETTINGS = [
  'grid',
  'dataZoom',
  'visualMap',
  'toolbox',
  'title',
  'legend',
  'xAxis',
  'yAxis',
  'radar',
  'tooltip',
  'axisPointer',
  'brush',
  'geo',
  'timeline',
  'graphic',
  'series',
  'backgroundColor',
  'textStyle'
]

export {
  DEFAULT_THEME,
  DEFAULT_COLORS,
  HEAT_MAP_COLOR,
  HEAT_BMAP_COLOR,
  itemPoint,
  itemLabel,
  itemContent,
  STATIC_PROPS,
  ECHARTS_SETTINGS,
  DEFAULT_CONFIG,
  SAAS_DEFAULT_COLORS,
  SAAS_DEFAULT_SAME_COLORS
}
