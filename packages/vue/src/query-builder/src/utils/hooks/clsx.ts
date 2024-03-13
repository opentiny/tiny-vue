/**
 * 替换掉 clsx 插件功能，class 样式合并处理方法
 * @param {*} 需要合并成 class 的数据
 * 示例：
 * clsx(['aaad', ['ad', ['ggg'], 'bbc']])  => 'aaad ad ggg bbc'
 * clsx(['aaad', { bbb: true, ccc: false, ddd: true }, '', 'eee'], { fff: true }, { ggg: false })  => 'aaad bbb ddd eee fff'
 * @returns 合并后的 class 样式
 */

const classLoophandler = (data) => {
  if (Array.isArray(data)) {
    return data
      .filter(Boolean)
      .map((item) => classLoophandler(item))
      .filter(Boolean)
      .join(' ')
  } else if (typeof data === 'object') {
    const arr = Object.keys(data).map((key) => data[key] && key)

    return classLoophandler(arr)
  } else {
    return data
  }
}

export const clsx = (...args) => {
  const className = classLoophandler(args)

  return className
}

export default clsx
