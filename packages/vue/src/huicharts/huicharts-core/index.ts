import Core from './src/chart-core'
import { getFormatted, cloneDeep, getStackMap, get, set, merge, getMapJSON, htmlHandler } from './common/util'
import { isNull, isObject } from './common/type'
import { deepCopy } from './utils/deep-clone'
import { getRows, getYAxis, getTooltip } from './utils/options'
import { itemPoint, itemLabel, itemContent, HEAT_MAP_COLOR } from './common/constants'
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
  isObject,
  deepCopy,
  itemPoint,
  itemLabel,
  itemContent,
  isDefined,
  htmlHandler,
  HEAT_MAP_COLOR
}
