import cloneDeep from '../../../util/cloneDeep'

const baseGridOption = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  containLabel: true
}

function base() {
  const option = cloneDeep(baseGridOption)
  return option
}

export default base
