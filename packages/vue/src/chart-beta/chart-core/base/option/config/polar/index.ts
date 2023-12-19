import base from './base'

function polar(iChartOption, chartName) {
  const { position } = iChartOption
  let polarOption = base(position, chartName)
  switch (chartName) {
    case 'PolarBarChart':
      break
    case 'JadeJueChart':
      polarOption.radius = ['20%', '60%']
      break
    case 'CircleProcessChart':
      polarOption.radius = ['44%', '50%']
      break
    default:
      polarOption = undefined
      break
  }
  return polarOption
}

export default polar
