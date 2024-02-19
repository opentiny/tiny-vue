const BaseOption = {
  visualMap: {
    show: false,
    dimension: 2,
    type: '',
    min: '',
    max: '',
    inRange: {
      colorAlpha: [0, 1]
    }
  }
}

// 图表类型
const CHARTTYPE = ['RectangularHeatMapChart', 'CalendarHeatMapChart', 'HexagonHeatMapChart']

// 基础series
const SERIESUNIT = {
  RectangularHeatMapChart: {
    type: 'scatter',
    symbol: 'rect',
    symbolSize: '',
    cursor: 'pointer',
    data: []
  },
  CalendarHeatMapChart: {
    name: '',
    type: 'heatmap',
    cursor: 'pointer',
    label: {
      show: undefined,
      color: ''
    },
    data: [],
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    },
    itemStyle: {
      borderColor: ''
    },
    progressive: 1000,
    animation: false
  },
  HexagonHeatMapChart: {
    type: 'custom',
    name: '',
    renderItem: undefined,
    data: []
  }
}

// 基础visualMap
const VISUALMAPUNIT = {
  RectangularHeatMapChart: {
    show: false,
    dimension: 2,
    min: '',
    max: '',
    inRange: {
      colorAlpha: [0, 1]
    }
  },
  CalendarHeatMapChart: {
    show: true,
    dimension: 2,
    min: '',
    max: '',
    inRange: {},
    inverse: true,
    itemWidth: 16,
    itemHeight: 400,
    text: [],
    textStyle: {
      color: '',
      fontSize: 14
    }
  },
  HexagonHeatMapChart: {
    show: false,
    type: 'continuous',
    dimension: 2,
    min: '',
    max: '',
    inRange: {
      color: undefined
    }
  }
}

// 热力图的图元颜色
const SYMBOLCOLOR = {
  RectangularHeatMapChart: '#F43146',
  CalendarHeatMapChart: '#1F55B5',
  HexagonHeatMapChart: ['#FFFFFF', '#448DFF', '#4350EA', '#33307C ', '#242648', '#973152', '#F8364D']
}
export default BaseOption

export { SYMBOLCOLOR, CHARTTYPE, SERIESUNIT, VISUALMAPUNIT }
