const pxToNumber = (pxText) => {
  return pxText.split('px')[0] - 0
}

// 日期格式化
const formatDate = (date, fmt) => {
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  fmt = fmt.replace(/(y+)/, (match, year) => {
    return (date.getFullYear() + '').substr(4 - year.length)
  })
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return fmt
}

export { pxToNumber, formatDate }
