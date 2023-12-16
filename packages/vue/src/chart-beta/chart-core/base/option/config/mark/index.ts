import Theme from '../../../feature/theme'

export function getMarkLineDefault() {
  return {
    symbol: 'none',
    silent: true,
    label: {
      show: false
    },
    lineStyle: {
      width: Theme.config.seriesMarkLineWidth
    },
    emphasis: {
      label: {
        show: false
      },
      lineStyle: {
        width: Theme.config.seriesMarkLineEmphasisWidth
      }
    },
    data: []
  }
}

export function getMarkPointDefault() {
  return {
    symbol: 'path://M50 0 L0 50 L100 50 Z',
    symbolSize: [10, 6],
    label: {
      color: Theme.config.markPointLabelColor
    },
    data: []
  }
}
