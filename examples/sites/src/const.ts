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
export const DEFAULT_THEME = 'tiny-default-theme'
export const AURORA_THEME = 'tiny-aurora-theme'
export const SMB_THEME = 'tiny-smb-theme'
export const INFINITY_THEME = 'tiny-infinity-theme'

// 主题对应路由参数映射表
export const THEME_ROUTE_MAP = {
  [DEFAULT_THEME]: 'os-theme',
  [AURORA_THEME]: 'aurora-theme',
  [SMB_THEME]: 'smb-theme',
  [INFINITY_THEME]: 'infinity-theme'
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
