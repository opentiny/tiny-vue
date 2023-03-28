/**
* Copyright (c) 2022 - present TinyVue Authors.
* Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
*
* Use of this source code is governed by an MIT-style license.
*
* THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
* BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
* A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
*
*/

const sf = () => ({ show: false })
const DEFAULT_THEME = {
  categoryAxis: { axisLine: sf(), axisTick: sf(), splitLine: sf() },
  valueAxis: { axisLine: sf() },
  line: { smooth: true },
  grid: { containLabel: true, left: 10, right: 10 }
}

let DEFAULT_COLORS = ['#19d4ae', '#5ab1ef', '#fa6e86', '#ffb980', '#0067a6', '#c4b4e4']

DEFAULT_COLORS = DEFAULT_COLORS.concat(['#d87a80', '#9cbbff', '#d9d0c7', '#87a997', '#d49ea2', '#5b4947', '#7ba3a8'])

const HEAT_MAP_COLOR = ['#5990FD', '#2DA769', '#EEBA18', '#F43146']

const HEAT_BMAP_COLOR = ['blue', 'blue', 'green', 'yellow', 'red']

const SAAS_DEFAULT_COLORS_10 = ['#6d8ff0', '#00a874', '#bd72f0', '#54bcce', '#fdc000', '#9185f0', '#82dbb1', '#f46087', '#2070f3', '#ee8ddb']

const SAAS_DEFAULT_COLORS_18 = [
  '#2070f3',
  '#50c291',
  '#bd72f0',
  '#54bcce',
  '#fdc000',
  '#6d8ff0',
  '#71c14c',
  '#87d5e5',
  '#9185f0',
  '#82dbb1',
  '#ada6ed',
  '#97da7e',
  '#f46087',
  '#ee8ddb',
  '#f09596',
  '#f36900',
  '#daa61b',
  '#efb9e3'
]

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

const itemPoint = (color) =>
  [
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

const itemLabel = (seriesName, onlyLabel) =>
  ['<span style="', 'display:inline-block;', 'font-size:12px;', 'color:#4E4E4E;', `${onlyLabel ? '' : 'margin-right:25px;'}`, `">${seriesName}</span>`].join('')

const itemContent = (content) => ['<span style="', 'float:right;', 'font-size:14px;', 'color:#191919;', `">${content}</span>`].join('')

const STATIC_PROPS = ['initOptions', 'loading', 'dataEmpty', 'judgeWidth', 'widthChangeDelay']

let ECHARTS_SETTINGS = ['grid', 'dataZoom', 'visualMap', 'toolbox', 'title', 'legend', 'xAxis']

ECHARTS_SETTINGS = ECHARTS_SETTINGS.concat(['yAxis', 'radar', 'tooltip', 'axisPointer', 'brush', 'geo'])
ECHARTS_SETTINGS = ECHARTS_SETTINGS.concat(['timeline', 'graphic', 'series', 'backgroundColor', 'textStyle'])

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
  SAAS_DEFAULT_COLORS_10,
  SAAS_DEFAULT_COLORS_18
}
