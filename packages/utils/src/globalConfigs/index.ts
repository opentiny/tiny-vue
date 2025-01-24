export const isWeb = () =>
  typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document

/** 获取globalThis.  在web上， window===globalThis  在node.js中， global=== globalThis。
 * 所以该函数没必要存在，待移除
 */
export const getWindow = () => (isWeb() ? window : global)

export default {
  getWindow,
  isWeb
}
