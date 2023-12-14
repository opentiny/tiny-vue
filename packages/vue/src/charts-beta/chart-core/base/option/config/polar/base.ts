import cloneDeep from '../../../util/cloneDeep'

const basePolar = {
  center: ['50%', '50%'],
  radius: ['8%', '70%']
}

function base(position, chartName) {
  const PolarOption = cloneDeep(basePolar)
  PolarOption.center = (position && position.center) || basePolar.center
  PolarOption.radius = (position && position.radius) || basePolar.radius
  return PolarOption
}

export default base
