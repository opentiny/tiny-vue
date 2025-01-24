export const isWeb = () =>
  typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document

/** 获取globalThis.  在web上， window===globalThis  在node.js中， global=== globalThis。
 * 所以该函数没必要存在，待移除
 */
export const getWindow = () => (isWeb() ? window : global)

// 需要微前端的用户传入该变量
export const globalConfig = {
  viewportWindow: null // 获取真实视口的window，解决在微前端中某些bug
}

export const getViewportWindow = () => globalConfig.viewportWindow || window
