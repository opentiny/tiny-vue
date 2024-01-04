import merge from '../../util/merge'
import ictDark from './ictDark'
import ictLight from './ictLight'
import bpitLight from './bpitLight'
import bpitDark from './bpitDark'
import cloudDark from './cloudDark'
import cloudLight from './cloudLight'
import HashMap from '../../util/hashMap'
import cloneDeep from '../../util/cloneDeep'
import tips from '../../util/tips'
import ictLight2 from './ict/light'
import ictDark2 from './ict/dark'
import cloudLight2 from './cloud/light'
import cloudDark2 from './cloud/dark'
import bpitDark2 from './bpit/dark'
import bpitLight2 from './bpit/light'
import { THEMES, CURRENT_THEME, DEFAULT_THEME_NAME, THEME_ERROR_TIP_MESSAGE } from './constants'
import mergeThemeConfig from './mergeThemeConfig'

const theme = new HashMap({
  [THEMES.DARK]: ictDark,
  [THEMES.LIGHT]: ictLight,
  [THEMES.BPIT_LIGHT]: bpitLight,
  [THEMES.BPIT_DARK]: bpitDark,
  [THEMES.CLOUD_DARK]: cloudDark,
  [THEMES.CLOUD_LIGHT]: cloudLight,
  [CURRENT_THEME]: ictLight
})

const themeToken = new HashMap({
  [THEMES.LIGHT]: cloneDeep(ictLight2),
  [THEMES.DARK]: cloneDeep(ictDark2),
  [THEMES.BPIT_LIGHT]: cloneDeep(bpitLight2),
  [THEMES.BPIT_DARK]: cloneDeep(bpitDark2),
  [THEMES.CLOUD_LIGHT]: cloneDeep(cloudLight2),
  [THEMES.CLOUD_DARK]: cloneDeep(cloudDark2),
  [CURRENT_THEME]: cloneDeep(ictLight2)
})

class Theme {
  // 当前主题名称
  static themeName = undefined
  // 当前主题颜色
  static color

  static config = cloneDeep(ictLight2)

  static set(name, config) {
    const defaultConfig = cloneDeep(this.get(DEFAULT_THEME_NAME))
    merge(defaultConfig, config)
    theme.set(name, defaultConfig)
  }

  //  以下待确认
  static setConfig(name, config) {
    // 以下为新的逻辑
    const themeKeys = this.getThemeKeys()
    const validate = themeKeys.includes(name)
    // 修改已有主题的配置
    if (validate) {
      const newConfig = mergeThemeConfig(name, config)
      const oldConfig = this.getConfig(name)
      merge(oldConfig, newConfig)
    } else {
      const newConfig = mergeThemeConfig(DEFAULT_THEME_NAME, config)
      themeToken.set(name, newConfig)
    }
  }

  //  以下待确认
  static getThemeKeys() {
    return themeToken.keys()
  }

  //  以下待确认
  static resetThemeCongfig() {
    themeToken.set(THEMES.LIGHT, cloneDeep(ictLight2))
    themeToken.set(THEMES.DARK, cloneDeep(ictDark2))
    themeToken.set(THEMES.BPIT_LIGHT, cloneDeep(bpitLight2))
    themeToken.set(THEMES.BPIT_DARK, cloneDeep(bpitDark2))
    themeToken.set(THEMES.CLOUD_LIGHT, cloneDeep(cloudLight2))
    themeToken.set(THEMES.CLOUD_DARK, cloneDeep(cloudDark2))
    themeToken.set(CURRENT_THEME, cloneDeep(ictLight2))
  }

  static get(name) {
    return theme.get(name)
  }

  static getConfig(name) {
    return themeToken.get(name)
  }

  static setDefaultTheme(name) {
    const tempTheme = this.validate(name)
    if (this.themeName !== tempTheme) {
      this.themeName = tempTheme
      theme.set(CURRENT_THEME, theme.get(tempTheme))
      this.color = this.get(CURRENT_THEME).color
      // 以下config功能待完善
      themeToken.set(CURRENT_THEME, themeToken.get(tempTheme))
      this.config = this.getConfig(CURRENT_THEME)
      console.log(this.config)
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

    const themeKeys = theme.keys()

    const validate = themeKeys.includes(tempTheme)

    if (!validate) {
      tips.error(THEME_ERROR_TIP_MESSAGE)
      tempTheme = THEMES.LIGHT
    }

    return tempTheme
  }
}

export { THEMES }

export default Theme
