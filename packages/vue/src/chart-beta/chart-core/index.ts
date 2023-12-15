import Core from './src/chart-core'
import { getFormatted, cloneDeep, getStackMap, get, set, merge, getMapJSON } from './common/util'
import { isNull } from './common/type'
import { deepCopy } from './utils/deep-clone'
import { getRows, getYAxis, getTooltip } from './utils/options'
import { itemPoint, itemLabel, itemContent } from './common/constants'
import { isDefined } from './utils/type'

Core.install = function (Vue: any) {
  Vue.component(Core.name, Core)
}

export default Core
export {
  getFormatted,
  cloneDeep,
  getStackMap,
  get,
  set,
  merge,
  getMapJSON,
  getRows,
  getYAxis,
  getTooltip,
  isNull,
  deepCopy,
  itemPoint,
  itemLabel,
  itemContent,
  isDefined
}
