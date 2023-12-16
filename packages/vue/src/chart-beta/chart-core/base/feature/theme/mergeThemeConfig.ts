import { THEMES } from './constants'
import { ictLightBasicToken } from './ict/light'
import { ictDarkBasicToken } from './ict/dark'
import { getIctMapToken } from './ict/getMapToken'
import { getIctModelToken } from './ict/getModelToken'
import { cloudLightBasicToken } from './cloud/light'
import { cloudDarkBasicToken } from './cloud/dark'
import { getCloudMapToken } from './cloud/getMapToken'
import { getCloudModelToken } from './cloud/getModelToken'
import { bpitLightBasicToken } from './bpit/light'
import { bpitDarkBasicToken } from './bpit/dark'
import { getBpitMapToken } from './bpit/getMapToken'
import { getBpitModelToken } from './bpit/getModelToken'
import { getFont, getRadius, getSpace, getChartsToken } from './basic'
import merge from '../../util/merge'
import cloneDeep from '../../util/cloneDeep'

const SPECIALTOKEN = [
  'BarChart',
  'BubbleChart',
  'FunnelChart',
  'GraphTreeChart',
  'HillChart',
  'JadeJueChart',
  'TreeChart',
  'SunburstChart',
  'SankeyChart',
  'RadarChart',
  'ProcessChart',
  'PolarBarChart',
  'PieChart',
  'AreaChart',
  'LineChart'
]

const themeBaisToken = {
  [THEMES.LIGHT]: ictLightBasicToken,
  [THEMES.DARK]: ictDarkBasicToken,
  [THEMES.BPIT_LIGHT]: bpitLightBasicToken,
  [THEMES.BPIT_DARK]: bpitDarkBasicToken,
  [THEMES.CLOUD_LIGHT]: cloudLightBasicToken,
  [THEMES.CLOUD_DARK]: cloudDarkBasicToken
}

const themeMapToken = {
  [THEMES.LIGHT]: getIctMapToken,
  [THEMES.DARK]: (config) => getIctMapToken(config, false),
  [THEMES.BPIT_LIGHT]: getBpitMapToken,
  [THEMES.BPIT_DARK]: (config) => getBpitMapToken(config, false),
  [THEMES.CLOUD_LIGHT]: getCloudMapToken,
  [THEMES.CLOUD_DARK]: (config) => getCloudMapToken(config, false)
}

const themeModelToken = {
  [THEMES.LIGHT]: getIctModelToken,
  [THEMES.DARK]: getIctModelToken,
  [THEMES.BPIT_LIGHT]: getBpitModelToken,
  [THEMES.BPIT_DARK]: getBpitModelToken,
  [THEMES.CLOUD_LIGHT]: getCloudModelToken,
  [THEMES.CLOUD_DARK]: getCloudModelToken
}

// 获取basic中需要根据基础派生的相关token变量
function getDerivationBasicToken(config) {
  let newConfig = {}
  const { radiusBase, fontSize, space } = config
  if (radiusBase) newConfig = { ...newConfig, ...getRadius(radiusBase) }
  if (fontSize) newConfig = { ...newConfig, ...getFont(fontSize) }
  if (space) newConfig = { ...newConfig, ...getSpace(space) }
  return newConfig
}

function getBasicToken(name, config) {
  return {
    ...themeBaisToken[name],
    ...getDerivationBasicToken(config),
    ...config
  }
}

function getMapToken(name, config) {
  return {
    ...themeMapToken[name](config),
    ...config
  }
}

function getModelToken(name, config) {
  return {
    ...themeModelToken[name](config),
    ...config
  }
}

function mergeSpecialToken(name, chartsConfig, config) {
  SPECIALTOKEN.forEach((item) => {
    if (config[item]) merge(chartsConfig, config[item])
  })
  // 针对colorState特殊处理
  const { colorState } = config
  if (colorState) {
    const newColorState = merge(cloneDeep(themeBaisToken[name].colorState), colorState)
    return { ...chartsConfig, colorState: newColorState }
  }
  return { ...chartsConfig }
}

/**
 *
 * @param {string} name  传入的主题名称
 * @param {object} config   传入的主题配置
 */

export default function mergeThemeConfig(name, config) {
  const basicConfig = getBasicToken(name, config)
  const mapConfig = { ...getMapToken(name, basicConfig), ...config }
  const modelConfig = { ...getModelToken(name, mapConfig), ...config }
  const chartsConfig = getChartsToken(basicConfig, mapConfig, modelConfig)
  const specialConfig = mergeSpecialToken(name, chartsConfig, config)
  return {
    colorGroup: basicConfig.colorGroup,
    ...modelConfig,
    ...specialConfig
  }
}
