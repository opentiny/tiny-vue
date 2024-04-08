import Theme from '../../../feature/token'

export function getMarkLineDefault() {
  return {
    symbol: 'none',
    silent: true,
    label: {
      show: false
    },
    lineStyle: {
      width: Theme.config.markLineWidth
    },
    emphasis: {
      label: {
        show: false
      },
      lineStyle: {
        width: Theme.config.markLineEmphasisWidth
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
