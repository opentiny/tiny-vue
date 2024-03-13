import Theme from '../../../feature/token'

function axisPointer(tooltip, chartName) {
  switch (chartName) {
    case 'ProcessBarChart':
    case 'BarChart':
      tooltip.axisPointer = {
        type: 'shadow',
        shadowStyle: {
          color: Theme.config.tooltipAxisPointerShadowColor
        }
      }
      break
    default:
      break
  }
}

export default axisPointer
