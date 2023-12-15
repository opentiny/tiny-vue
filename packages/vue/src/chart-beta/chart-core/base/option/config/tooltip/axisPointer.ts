import Theme from '../../../feature/theme'

function axisPointer(tooltip, chartName) {
  switch (chartName) {
    case 'ProcessBarChart':
    case 'BarChart':
      tooltip.axisPointer = {
        type: 'shadow',
        shadowStyle: {
          color: Theme.config.tooltipAxisPointerShadow
        }
      }
      break
    default:
      break
  }
}

export default axisPointer
