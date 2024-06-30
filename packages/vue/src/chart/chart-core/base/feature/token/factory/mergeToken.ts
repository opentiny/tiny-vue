import { aliasTokenMap } from './getAliasToken'
import getGlobalToken from './getGlobalToken'
import getModelToken from './getModelToken'
import getChartsToken from './chartsToken'
import { TOKENCHARTNAMES } from '../constants'
import color from '../color'
import merge from '../../../util/merge'
import cloneDeep from '../../../util/cloneDeep'

function getBasicToken(name, config) {
  return {
    ...getGlobalToken(name),
    ...config
  }
}

function getMapToken(name, config) {
  return {
    ...aliasTokenMap[name](config),
    ...config
  }
}

function getConfigModelToken(config) {
  return {
    ...getModelToken(config),
    ...config
  }
}

function mergeSpecialToken(name, chartsConfig, config) {
  TOKENCHARTNAMES.forEach((item) => {
    if (config[item]) merge(chartsConfig, config[item])
  })
  // 针对colorState特殊处理
  const { colorState } = config
  if (colorState) {
    const newColorState = merge(cloneDeep(color[name].colorSet.colorState), colorState)
    return { ...chartsConfig, colorState: newColorState }
  }
  return { ...chartsConfig }
}

/**
 *
 * @param {string} name  传入的主题名称
 * @param {object} config   传入的主题配置
 */

export default function mergeToken(name, config) {
  const basicConfig = getBasicToken(name, config)
  const mapConfig = getMapToken(name, basicConfig)
  const modelConfig = getConfigModelToken(mapConfig)
  const chartsConfig = getChartsToken(mapConfig)
  const specialConfig = mergeSpecialToken(name, chartsConfig, config)
  return {
    colorGroup: basicConfig.colorGroup,
    ...modelConfig,
    ...specialConfig
  }
}
