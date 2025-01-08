import { tinyOldTheme, tinyAuroraTheme } from '@opentiny/vue-theme/theme-tool'

// localStorage中保存语言的key
export const LANG_KEY = '_lang'
// localStorage中保存语言的value
export const ZH_CN_LANG = 'zhCN'
export const EN_US_LANG = 'enUS'
// 语言key值对应的路由
export const LANG_PATH_MAP = {
  [ZH_CN_LANG]: 'zh-CN',
  [EN_US_LANG]: 'en-US'
}

export const CURRENT_THEME_KEY = 'tiny-current-theme'

// 主题
export const DEFAULT_THEME = 'os-theme'
export const AURORA_THEME = 'aurora-theme'
export const SMB_THEME = 'smb-theme'
export const OLD_THEME = 'old-theme'

// 主题工具导出主题变量和主题的映射关系
export const themeToolValuesMap = {
  [DEFAULT_THEME]: '',
  [AURORA_THEME]: tinyAuroraTheme,
  [SMB_THEME]: '',
  [OLD_THEME]: tinyOldTheme
}

/**
 * @description 在一对一映射的对象中，通过值反查key
 * @param map 给定的映射
 * @param val 值
 * @returns 对应值的key
 */
export const getKeyByValue = (map, val) =>
  Object.keys(map).find((key) => {
    return map[key] === val
  })
