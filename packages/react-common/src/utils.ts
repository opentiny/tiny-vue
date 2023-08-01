/**
 * filterAttrs 属性过滤函数
 * @param {object} attrs 由父组件传入，且没有被子组件声明为 props 的一些属性
 * @param {Array} filters 过滤数组，元素可以为字符串，也可以为正则表达式
 * @param {boolean} include 是否返回为被过滤的属性集合，如果为 false，filters 是过滤不要的属性
 * @returns {object} 过滤后的属性对象
 */
export const filterAttrs = (attrs, filters, include) => {
  const props = {}

  for (let name in attrs) {
    const find = filters.some((r) => new RegExp(r).test(name))

    if ((include && find) || (!include && !find)) {
      props[name] = attrs[name]
    }
  }

  return props
}
