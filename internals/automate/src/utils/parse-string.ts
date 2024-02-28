/**
 * @param str {String} 字符串
 * @param scope {Object} 作用域对象
 */
export const parseString = (str: string, scope = {}) => {
  // eslint-disable-next-line no-new-func
  const fn = new Function('scope', `with(scope){ return ${str} }`)
  return fn(scope)
}
