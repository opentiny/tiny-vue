/**
 * 国际化工具函数
 * 如果使用组件库的项目有i18n则使用父级项目，如果没有则默认使用中文
 */

import zhCN from './zh_CN.ts'
import enUS from './en_US.ts'

// 默认语言包
const defaultLocale = 'zh-CN'
const locales = {
  'zh-CN': zhCN,
  'en-US': enUS
}

// 全局应用实例
let globalApp: any = null

/**
 * 设置全局应用实例
 * @param {any} app - Vue应用实例
 */
export const setGlobalApp = (app: any) => {
  globalApp = app
}

/**
 * 获取当前语言
 * @returns {string} 当前语言代码
 */
export const getCurrentLocale = () => {
  if (globalApp?.config?.globalProperties?.$i18n?.locale) {
    return globalApp.config.globalProperties.$i18n.locale
  }
  
  // 尝试从Vue实例获取
  if (globalApp?.$i18n?.locale) {
    return globalApp.$i18n.locale
  }
  
  // 尝试从浏览器语言获取
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language || navigator.languages?.[0]
    if (browserLang) {
      return browserLang.startsWith('zh') ? 'zh-CN' : 'en-US'
    }
  }
  
  return defaultLocale
}

/**
 * 获取语言包
 * @param {string} locale - 语言代码
 * @returns {Object} 语言包对象
 */
export const getLocaleMessages = (locale) => {
  return locales[locale] || locales[defaultLocale]
}

/**
 * 翻译函数
 * @param {string} key - 翻译键，格式为 'namespace.key.subkey'
 * @param {Object} params - 参数对象
 * @returns {string} 翻译后的文本
 */
export const t = (key, params = {}) => {
  if (!key) return ''
  
  // 尝试使用父级项目的i18n
  if (globalApp?.config?.globalProperties?.$t) {
    try {
      const result = globalApp.config.globalProperties.$t(key, params)
      if (result && result !== key) {
        return result
      }
    } catch (error) {
      console.warn('[TinySearchBox] i18n translation failed:', error)
    }
  }
  
  // 尝试使用Vue实例的$t方法
  if (globalApp?.$t) {
    try {
      const result = globalApp.$t(key, params)
      if (result && result !== key) {
        return result
      }
    } catch (error) {
      console.warn('[TinySearchBox] i18n translation failed:', error)
    }
  }
  
  // 使用默认语言包
  const locale = getCurrentLocale()
  const messages = getLocaleMessages(locale)
  
  // 解析key路径
  const keys = key.split('.')
  let result = messages
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k]
    } else {
      // 如果找不到，尝试使用默认语言
      if (locale !== defaultLocale) {
        const defaultMessages = getLocaleMessages(defaultLocale)
        result = defaultMessages
        for (const k2 of keys) {
          if (result && typeof result === 'object' && k2 in result) {
            result = result[k2]
          } else {
            result = key // 最终fallback
            break
          }
        }
      } else {
        result = key // fallback到key本身
      }
      break
    }
  }
  
  // 处理参数替换
  if (typeof result === 'string' && Object.keys(params).length > 0) {
    return result.replace(/\{(\w+)\}/g, (match, paramKey) => {
      return params[paramKey] !== undefined ? params[paramKey] : match
    })
  }
  
  return typeof result === 'string' ? result : key
}

/**
 * 批量翻译函数
 * @param {Array} keys - 翻译键数组
 * @param {Object} params - 参数对象
 * @returns {Array} 翻译后的文本数组
 */
export const tArray = (keys, params = {}) => {
  return keys.map(key => t(key, params))
}

/**
 * 检查是否支持某个语言
 * @param {string} locale - 语言代码
 * @returns {boolean} 是否支持
 */
export const isLocaleSupported = (locale) => {
  return locale in locales
}

/**
 * 获取支持的语言列表
 * @returns {Array} 支持的语言代码数组
 */
export const getSupportedLocales = () => {
  return Object.keys(locales)
}

/**
 * 添加自定义语言包
 * @param {string} locale - 语言代码
 * @param {Object} messages - 语言包对象
 */
export const addLocale = (locale, messages) => {
  locales[locale] = messages
}

/**
 * 移除语言包
 * @param {string} locale - 语言代码
 */
export const removeLocale = (locale) => {
  if (locale !== defaultLocale) {
    delete locales[locale]
  }
}

// 默认导出
export default {
  t,
  zhCN,
  enUS,
  tArray,
  setGlobalApp,
  getCurrentLocale,
  getLocaleMessages,
  isLocaleSupported,
  getSupportedLocales,
  addLocale,
  removeLocale
}
