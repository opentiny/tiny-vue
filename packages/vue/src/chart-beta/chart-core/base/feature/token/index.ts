import { ictLight, ictDark } from './theme/ict'
import { bpitLight, bpitDark } from './theme/bpit'
import { cloudLight, cloudDark } from './theme/cloud'
import { hdesignLight, hdesignDark } from './theme/hdesign'
import merge from '../../util/merge'
import HashMap from '../../util/hashMap'
import cloneDeep from '../../util/cloneDeep'
import tips from '../../util/tips'
import { THEMES, CURRENT_THEME, DEFAULT_THEME_NAME, THEME_ERROR_TIP_MESSAGE } from './constants'
import mergeToken from './factory/mergeToken'

const themeToken = new HashMap({
  [THEMES.LIGHT]: cloneDeep(ictLight),
  [THEMES.DARK]: cloneDeep(ictDark),
  [THEMES.BPIT_LIGHT]: cloneDeep(bpitLight),
  [THEMES.BPIT_DARK]: cloneDeep(bpitDark),
  [THEMES.CLOUD_LIGHT]: cloneDeep(cloudLight),
  [THEMES.CLOUD_DARK]: cloneDeep(cloudDark),
  [THEMES.HDESIGN_LIGHT]: cloneDeep(hdesignLight),
  [THEMES.HDESIGN_DARK]: cloneDeep(hdesignDark),
  [CURRENT_THEME]: cloneDeep(ictLight)
})

class Theme {
  // 当前主题名称
  static themeName = undefined

  static config = cloneDeep(bpitLight)

  // todo待修改
  static set(name, config) {
    const defaultConfig = cloneDeep(this.getConfig(DEFAULT_THEME_NAME))
    merge(defaultConfig, config)
    themeToken.set(name, defaultConfig)
  }

  //  以下待确认
  static setConfig(name, config) {
    // 以下为新的逻辑
    const themeKeys = this.getThemeKeys()
    const validate = themeKeys.includes(name)
    // 修改已有主题的配置
    if (validate) {
      const newConfig = mergeToken(name, config)
      const oldConfig = this.getConfig(name)
      merge(oldConfig, newConfig)
    } else {
      const newConfig = mergeToken(DEFAULT_THEME_NAME, config)
      themeToken.set(name, newConfig)
    }
  }

  //  以下待确认
  static getThemeKeys() {
    return themeToken.keys()
  }

  //  以下待确认
  static resetThemeCongfig() {
    themeToken.set(THEMES.LIGHT, cloneDeep(ictLight))
    themeToken.set(THEMES.DARK, cloneDeep(ictDark))
    themeToken.set(THEMES.BPIT_LIGHT, cloneDeep(bpitLight))
    themeToken.set(THEMES.BPIT_DARK, cloneDeep(bpitDark))
    themeToken.set(THEMES.CLOUD_LIGHT, cloneDeep(cloudLight))
    themeToken.set(THEMES.CLOUD_DARK, cloneDeep(cloudDark))
    themeToken.set(THEMES.HDESIGN_LIGHT, cloneDeep(hdesignLight))
    themeToken.set(THEMES.HDESIGN_DARK, cloneDeep(hdesignDark))
    themeToken.set(CURRENT_THEME, cloneDeep(ictLight))
  }

  static getConfig(name) {
    return themeToken.get(name)
  }

  static setDefaultTheme(name) {
    const tempTheme = this.validate(name)
    if (this.themeName !== tempTheme) {
      this.themeName = tempTheme
      // 以下config功能待完善
      themeToken.set(CURRENT_THEME, themeToken.get(tempTheme))
      this.config = this.getConfig(CURRENT_THEME)
    }
  }

  // 校验主题的合法性,将不合法的主题值重置为默认的light主题,并给与告警
  static validate(name) {
    // 如果没传并且没有全局注册过直接就是light主题
    let tempTheme = name || this.themeName || DEFAULT_THEME_NAME

    if (tempTheme.toLowerCase().includes('cloud-light')) {
      tempTheme = THEMES.CLOUD_LIGHT
    }

    if (tempTheme.toLowerCase().includes('cloud-dark')) {
      tempTheme = THEMES.CLOUD_DARK
    }

    const themeKeys = themeToken.keys()

    const validate = themeKeys.includes(tempTheme)

    if (!validate) {
      tips.error(THEME_ERROR_TIP_MESSAGE)
      tempTheme = THEMES.LIGHT
    }

    return tempTheme
  }

  /**
   *
   * @param {string} chartName  图表名称，根据名称从config中获取对应图表的chartToken
   * @returns Object 用于series或者其他模块的Proxy代理token对象
   */

  static getTokenByName(chartName) {
    const token = {
      ...this.config[chartName]
    }

    return new Proxy(
      {},
      {
        get(_, prop) {
          return token[prop]
        }
      }
    )
  }
}

export { THEMES }
export default Theme
